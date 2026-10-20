import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svg = await readFile(path.join(root, "public", "icon.svg"));

await sharp(svg)
  .resize(180, 180)
  .png()
  .toFile(path.join(root, "public", "apple-touch-icon.png"));

await sharp(svg)
  .resize(32, 32)
  .png()
  .toFile(path.join(root, "public", "favicon-32.png"));

// ICO-compatible PNG fallback as favicon.ico (browsers accept PNG in .ico name often;
 // also write a real multi isn't needed — use 32px png copied as favicon.ico via png)
await sharp(svg)
  .resize(48, 48)
  .png()
  .toFile(path.join(root, "public", "favicon.ico"));

console.log("Icons generated");
