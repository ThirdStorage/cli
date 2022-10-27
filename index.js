#!/usr/bin/env node
import { spawn } from "child_process";

async function welcome() {
  console.log("Starting Installer...");
}

async function menu() {
  const command =
    "run -it --volume //var/run/docker.sock:/var/run/docker.sock --rm thirdstorage-rabbit sh installer.sh";

  try {
    const ls = spawn("docker", command.split(" "), {
      stdio: "inherit",
      cwd: process.cwd(),
      detached: false,
    });

    ls.stdout?.on("data", (data) => {
      console.log(`${data}`);
    });

    ls.stderr?.on("data", (data) => {
      console.error(`${data}`);
    });
  } catch (e) {
    console.log(e);
  }
}

console.clear();
await welcome();
await menu();
