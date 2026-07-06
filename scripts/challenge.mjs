#!/usr/bin/env node
/**
 * Tracking de tiempo del challenge vía commits de git.
 *
 *   node scripts/challenge.mjs start [--if-missing]  → registra el INICIO (commit "⏱️ START")
 *   node scripts/challenge.mjs submit                → registra la ENTREGA (commit "✅ SUBMIT")
 *   node scripts/challenge.mjs time                  → imprime el tiempo START → SUBMIT
 *
 * El primer commit marca la hora de inicio y el último la de fin.
 */
import { execSync } from 'node:child_process'

const PREFIX = 'chore(challenge):'
const START_MSG = `${PREFIX} ⏱️ START`
const SUBMIT_MSG = `${PREFIX} ✅ SUBMIT`

function sh(cmd) {
  return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim()
}

function isGitRepo() {
  try {
    sh('git rev-parse --is-inside-work-tree')
    return true
  } catch {
    return false
  }
}

function gitUserConfigured() {
  try {
    return Boolean(sh('git config user.name')) && Boolean(sh('git config user.email'))
  } catch {
    return false
  }
}

/** Subjects de todos los commits (vacío si aún no hay ninguno). */
function commitSubjects() {
  try {
    return sh('git log --format=%s').split('\n').filter(Boolean)
  } catch {
    return []
  }
}

function hasCommit(keyword) {
  return commitSubjects().some((s) => s.includes(PREFIX) && s.includes(keyword))
}

function start({ ifMissing }) {
  // En modo --if-missing (hook predev) nunca frenamos el arranque de la app:
  // si algo falla, avisamos y salimos con 0.
  if (!isGitRepo()) {
    const msg = 'ℹ️  No es un repo git — inicializá con `git init` para trackear el tiempo.'
    if (ifMissing) return console.warn(msg)
    console.error(msg)
    process.exit(1)
  }
  if (!gitUserConfigured()) {
    const msg =
      'ℹ️  Configurá git antes de empezar:\n' +
      '     git config user.name  "Tu Nombre"\n' +
      '     git config user.email "tu@email.com"'
    if (ifMissing) return console.warn(msg)
    console.error(msg)
    process.exit(1)
  }
  if (ifMissing && hasCommit('START')) return // ya arrancó, no duplicar

  sh(`git commit --allow-empty -m "${START_MSG}"`)
  console.log('⏱️  Inicio registrado. ¡Arranca el reloj! (commit "⏱️ START")')
}

function submit() {
  if (!isGitRepo() || !gitUserConfigured()) {
    console.error('ℹ️  Necesitás un repo git configurado para registrar la entrega.')
    process.exit(1)
  }
  sh('git add -A')
  try {
    sh(`git commit -m "${SUBMIT_MSG}"`)
  } catch {
    sh(`git commit --allow-empty -m "${SUBMIT_MSG}"`)
  }
  console.log('✅ Entrega registrada (commit "✅ SUBMIT"). Corré `npm run challenge:time` para ver el total.')
}

function time() {
  if (!isGitRepo()) {
    console.error('ℹ️  No es un repo git.')
    process.exit(1)
  }
  let rows
  try {
    // Orden cronológico (más viejo primero): fecha ISO + subject.
    rows = sh('git log --reverse --format=%aI%x09%s')
      .split('\n')
      .filter(Boolean)
      .map((l) => {
        const [date, ...rest] = l.split('\t')
        return { date, subject: rest.join('\t') }
      })
  } catch {
    console.error('ℹ️  Todavía no hay commits.')
    process.exit(1)
  }

  const startRow = rows.find((r) => r.subject.includes(PREFIX) && r.subject.includes('START'))
  const submitRow = [...rows].reverse().find((r) => r.subject.includes(PREFIX) && r.subject.includes('SUBMIT'))

  if (!startRow) {
    console.error('⚠️  No encontré el commit "⏱️ START". Corré `npm run challenge:start` (o `npm run dev`).')
    process.exit(1)
  }

  const end = submitRow ?? rows[rows.length - 1]
  const endLabel = submitRow ? '✅ SUBMIT' : `último commit ("${end.subject}")`

  const ms = new Date(end.date).getTime() - new Date(startRow.date).getTime()
  const totalMin = Math.max(0, Math.round(ms / 60000))
  const h = Math.floor(totalMin / 60)
  const m = totalMin % 60

  console.log('──────────────────────────────────────────')
  console.log(`  Inicio (⏱️ START) : ${startRow.date}`)
  console.log(`  Fin (${endLabel}) : ${end.date}`)
  console.log(`  Tiempo total      : ${h}h ${m}m  (${totalMin} min)`)
  console.log('──────────────────────────────────────────')
  if (!submitRow) {
    console.log('  Nota: aún no hay commit "✅ SUBMIT"; usé el último commit como fin.')
    console.log('        Al terminar, corré `npm run challenge:submit`.')
  }
}

const [cmd, ...flags] = process.argv.slice(2)
const ifMissing = flags.includes('--if-missing')

switch (cmd) {
  case 'start':
    start({ ifMissing })
    break
  case 'submit':
    submit()
    break
  case 'time':
    time()
    break
  default:
    console.log('Uso: node scripts/challenge.mjs <start|submit|time> [--if-missing]')
    process.exit(1)
}
