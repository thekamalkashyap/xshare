#!/usr/bin/env node
import fetch, { FormData, fileFromSync } from "node-fetch";
import { program } from "commander";
import fs from "fs";
import pc from "picocolors";
const { red, green, blue, bold } = pc;

const packageJson = JSON.parse(fs.readFileSync("./package.json"));
program.name(packageJson.name);
program.description(packageJson.description);
program.version(packageJson.version, "-v, --version");
program.arguments("<file-path/url>");
program.option("-t, --token <token>", "token to use for upload");
program.option("-d, --delete", "delete the file immediately");
program.option("-s, --secret", "generate a URL which is not easily guessable");
program.option(
  "-e, --expires <hours/epoch milliseconds>",
  "set an expiration date for the file"
);
program.parse(process.argv);

const options = program.opts();
const args = program.args;
const filePath = args[0];
const isUrl = filePath.startsWith("http://") || filePath.startsWith("https://");
const form = new FormData();
const regex = /^http(?:s)?:\/\/0x0\.st\/(?!$).*$/; // regex to check if it is valid 0x0.st URL
const is0x0Url = regex.test(filePath);
let fetchUrl = "https://0x0.st/";

if (is0x0Url) {
  fetchUrl = filePath;
} else {
  if (isUrl) {
    form.append("url", filePath);
  } else {
    form.append("file", fileFromSync(filePath));
  }

  if (options.secret) {
    form.append("secret", "");
  }
}

if (options.token) {
  form.append("token", options.token);
}

if (options.delete) {
  form.append("delete", "");
  if (!options.token) {
    console.log(red("You need to provide a token to delete the file"));
    process.exit(1);
  }
}

if (options.expires) {
  form.append("expires", options.expires);
}

(async () => {
  try {
    const options = {
      method: "POST",
      body: form,
    };
    const response = await fetch(fetchUrl, options);
    const token = response.headers.get("x-token");
    const resultUrl = await response.text();
    if (regex.test(resultUrl.trim())) {
      console.log(green("File uploaded successfully!"));
      if (token) {
        console.log(bold("Token:"), blue(token));
      }
      console.log(bold("URL:"), blue(resultUrl));
    } else {
      console.log(red(resultUrl));
    }
  } catch (e) {
    console.log(red("Something went wrong!"));
  }
})();
