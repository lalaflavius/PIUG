import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const viteCli = join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');
const children = [
  spawn(process.execPath, [join(projectRoot, 'server', 'index.mjs')], {
    cwd: projectRoot,
    stdio: 'inherit',
  }),
  spawn(process.execPath, [viteCli], {
    cwd: projectRoot,
    stdio: 'inherit',
  }),
];

let stopping = false;

function stop(exitCode = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of children) {
    if (!child.killed) child.kill();
  }
  process.exit(exitCode);
}

for (const child of children) {
  child.on('error', (error) => {
    console.error(`Failed to start development process: ${error.message}`);
    stop(1);
  });
  child.on('exit', (code, signal) => {
    if (!stopping) {
      console.error(`Development process stopped${signal ? ` (${signal})` : ` with code ${code ?? 1}`}.`);
      stop(code ?? 1);
    }
  });
}

process.on('SIGINT', () => stop(130));
process.on('SIGTERM', () => stop(143));
