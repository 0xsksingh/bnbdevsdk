#!/usr/bin/env node
import { cliVersion } from "../constants/urls";
import { logger } from "../core/helpers/logger";
import { twCreate } from "../create/command";
import { Command } from "commander";

const main = async () => {
  const program = new Command();

  console.info(`

  /$$$$$$$  /$$   /$$ /$$$$$$$  /$$$$$$$  /$$$$$$$$ /$$    /$$  /$$$$$$  /$$$$$$$  /$$   /$$
  | $$__  $$| $$$ | $$| $$__  $$| $$__  $$| $$_____/| $$   | $$ /$$__  $$| $$__  $$| $$  /$$/
  | $$  \ $$| $$$$| $$| $$  \ $$| $$  \ $$| $$      | $$   | $$| $$  \__/| $$  \ $$| $$ /$$/ 
  | $$$$$$$ | $$ $$ $$| $$$$$$$ | $$  | $$| $$$$$   |  $$ / $$/|  $$$$$$ | $$  | $$| $$$$$/  
  | $$__  $$| $$  $$$$| $$__  $$| $$  | $$| $$__/    \  $$ $$/  \____  $$| $$  | $$| $$  $$  
  | $$  \ $$| $$\  $$$| $$  \ $$| $$  | $$| $$        \  $$$/   /$$  \ $$| $$  | $$| $$\  $$ 
  | $$$$$$$/| $$ \  $$| $$$$$$$/| $$$$$$$/| $$$$$$$$   \  $/   |  $$$$$$/| $$$$$$$/| $$ \  $$
  |_______/ |__/  \__/|_______/ |_______/ |________/    \_/     \______/ |_______/ |__/  \__/
                                                                                               
`);
  console.info(`\n 💎 bnbdevsdk v${cliVersion} 💎\n`);

  program
    .name("bnbdevsdk")
    .description("BNB Dev SDK command line interface")
    .version(cliVersion, "-v, --version");

  program
    .command("create [projectPath]")
    .description("Spin up a new project with BNB-Dev-SDK")
    .option(
      "--use-npm",
      "Explicitly tell the CLI to bootstrap the app using npm"
    )
    .option(
      "--use-pnpm",
      "Explicitly tell the CLI to bootstrap the app using pnpm"
    )
    .action(async (path, options) => {
      await twCreate(path, options);
    });

  await program.parseAsync();
};

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    logger.error(err);
    process.exit(1);
  });
