#!/usr/bin/env node
import { spawn } from "child_process";

async function welcome() {
  console.log("Starting Installer...");
}

async function menu() {
  const command =
    "run -it --volume //var/run/docker.sock:/var/run/docker.sock --rm thirdstorage/demo-paradigm sh installer.sh";

  try {
    const ls = spawn("docker", command.split(" "), {
      stdio: ["inherit", "pipe", "pipe"],
      cwd: process.cwd(),
      detached: false,
    });

    ls.stdout?.on("data", (data) => {
      if (
        data
          .toString()
          .startsWith(
            "docker: error during connect: This error may indicate that the docker daemon is not running"
          )
      ) {
        return console.log("Please start Docker to continue.");
      }

      console.log(`${data}`);
    });

    ls.on("error", (data) => {
      if (data.toString().startsWith("Error: spawn docker ENOENT")) {
        return console.log(
          "Docker not found! Please install docker to proceed."
        );
      }

      console.log(`${data}`);
    });

    ls.stderr?.on("data", (data) => {
      if (
        data
          .toString()
          .startsWith(
            "docker: error during connect: This error may indicate that the docker daemon is not running"
          )
      ) {
        return console.error(
          "Docker is not running. Please start docker to proceed!"
        );
      }

      console.error(`Error occurred: ${data}`);
    });
  } catch (e) {
    console.log(`${e}`);
  }
}

console.clear();
await welcome();
await menu();
