// scripts/delayed-dev.js
import { exec } from 'child_process';
const DELAY_MS = 2000; // 2 seconds delay

console.log(`Starting dev server with ${DELAY_MS}ms delay...`);

setTimeout(() => {
  const devProcess = exec('next dev');
  devProcess.stdout?.pipe(process.stdout);
  devProcess.stderr?.pipe(process.stderr);
}, DELAY_MS);