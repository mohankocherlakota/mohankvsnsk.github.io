import { copyFileSync, cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";

const rootFiles = [
  "index.html",
  "pic.jpg",
  "image.png",
  "altimetrik.png",
  "vester.png",
  "traxidy.png",
  "capgemini.png",
  "Mohan_Resume.pdf",
  "contact.html",
];

mkdirSync("assets", { recursive: true });
cpSync("dist/assets", "assets", { recursive: true });

for (const file of rootFiles) {
  if (existsSync(`dist/${file}`)) {
    copyFileSync(`dist/${file}`, file);
  }
}

writeFileSync(".nojekyll", "");
