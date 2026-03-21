import { spawn } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

const serverDir: string = path.join(__dirname, 'app', 'api');
const projectDir: string = path.join(__dirname, 'app', 'web');

// 1. Read and connect the .env file from the server directory
const envPath: string = path.join(serverDir, '.env');
const envConfig: Record<string, string> = {};

if (fs.existsSync(envPath)) {
  console.log(`[ROOT] Loading environment variables from ${envPath}`);
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach((line: string) => {
    // Basic .env parser
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      value = value.replace(/^['"]|['"]$/g, ''); // Remove surrounding quotes
      envConfig[key] = value;
    }
  });
}

// Merge server env with current process env
const serverEnv: NodeJS.ProcessEnv = Object.assign({}, process.env, envConfig);

// 2. Run the frontend (web)
const isWin: boolean = /^win/.test(process.platform);
const npmCmd: string = isWin ? 'npm.cmd' : 'npm';

const frontendProcess = spawn(npmCmd, ['run', 'dev'], {
  cwd: projectDir,
  stdio: 'inherit',
});

const backendProcess = spawn(npmCmd, ['run', 'api'], {
  cwd: serverDir,
  env: serverEnv,
  stdio: 'inherit',
});

// Clean up processes on exit
const cleanup = () => {
  if (frontendProcess) frontendProcess.kill('SIGINT');
  if (backendProcess) backendProcess.kill('SIGINT');
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
