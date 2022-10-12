#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import minimist from "minimist";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  console.clear();
  figlet(`THIRD STORAGE`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");

    console.log(
      chalk.green(
        `Storage paradigms to build web3 dapps - CLI version 0.0.1 beta \n`
      )
    );
  });

  await sleep();
}

async function menu() {
  const answers = await inquirer.prompt({
    name: "menu",
    type: "list",
    message: "Select an option ",
    choices: [
      "Install a Third Storage Localhost paradigm",
      "View list of available storage paradigms",
      "View documentation",
      "Remove Third Storage Localhost",
    ],
  });

  if (answers.menu === "Install a Third Storage Localhost paradigm") {
    await install();
  }
  if (answers.menu === "View list of available storage paradigms") {
    await list();
  }
  if (answers.menu === "View documentation") {
    await docs();
  }
  if (answers.menu === "Remove Third Storage Localhost") {
    await remove();
  }
}

async function install() {
  const answers = await inquirer.prompt({
    name: "install",
    type: "list",
    message: "Select a storage paradigm to install :\n",
    choices: ["Demo paradigm (v0.0.1)", "Demo paradigm (v0.0.2)"],
  });

  if (answers.install === "Demo paradigm (More paradigms coming soon)") {
    await demoparadigm();
  }
  if (answers.install === "Demo paradigm (More paradigms coming soon)") {
    await demoparadigm();
  }
}

// Paradigm installation shell scripts
async function demoparadigm() {
  console.log("Demo paradigm instalattion pls");
}

// Paradigm list
async function list() {
  console.log("Demo paradigm instalattion pls");
}

// Documentation link
async function docs() {
  console.log("Please find the documentation at https://docs.thirdstorage.com");
}

// Documentation link
async function remove() {
  console.log("Remove Third Storage pls");
}

// Run it with top-level await
console.clear();
await welcome();
await menu();