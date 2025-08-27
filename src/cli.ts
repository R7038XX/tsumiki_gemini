#!/usr/bin/env node

import { Command } from "commander";
import { gitignoreCommand } from "./commands/gitignore.js";
import { installCommand } from "./commands/install.js";
import { uninstallCommand } from "./commands/uninstall.js";

const program = new Command();

program
  .name("tsumiki")
  .description("CLI tool for installing Gemini CLI command templates")
  .version("1.0.0");

program
  .command("install")
  .description("Install Gemini CLI command templates to .gemini/commands/")
  .action(installCommand);

program
  .command("uninstall")
  .description("Uninstall Gemini CLI command templates from .gemini/commands/")
  .action(uninstallCommand);

program
  .command("gitignore")
  .description("Add commands/*.{md,sh} to .gitignore file")
  .action(gitignoreCommand);

program.parse();
