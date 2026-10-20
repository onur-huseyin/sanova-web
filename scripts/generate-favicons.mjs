import sharp from "sharp";
import { mkdir, writeFile, copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "src", "app");

const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <rect width="64" height="64" rx="14" fill="#070F0A"/>
  <path d="M14 34 C22 34 24 20 32 20 C40 20 42 34 50 34" stroke="#22C55E" stroke-width="3.5" stroke-linecap="round" fill="none"/>
  <path d="M16 42 C24 42 26 28 34 28 C42 28 44 42 52 42" stroke="#BBF7D0" stroke-width="3.5" stroke-linecap="round" fill="none"/>
</svg>`;

async function png(size, outPath) {
  await sharp(Buffer.from(iconSvg))
    .resize(size, size)
    .png()
    .toFile(outPath);
}

async function main() {
  await mkdir(publicDir, { recursive: true });
  await mkdir(path.join(publicDir, "icons"), { recursive: true });
  await mkdir(appDir, { recursive: true });

  await writeFile(path.join(publicDir, "icon.svg"), iconSvg);
  await writeFile(path.join(appDir, "icon.svg"), iconSvg);

  await png(16, path.join(publicDir, "icons", "favicon-16x16.png"));
  await png(32, path.join(publicDir, "icons", "favicon-32x32.png"));
  await png(48, path.join(publicDir, "icons", "favicon-48x48.png"));
  await png(180, path.join(publicDir, "apple-touch-icon.png"));
  await png(180, path.join(appDir, "apple-icon.png"));
  await png(192, path.join(publicDir, "icons", "icon-192.png"));
  await png(512, path.join(publicDir, "icons", "icon-512.png"));
  await png(32, path.join(publicDir, "favicon-32.png"));

  // Multi-size ICO: sharp writes PNG; browsers accept PNG bytes named .ico well enough,
  // but we embed 48px PNG as favicon.ico for broad support.
  await png(48, path.join(publicDir, "favicon.ico"));
  await copyFile(
    path.join(publicDir, "favicon.ico"),
    path.join(appDir, "favicon.ico"),
  );

  console.log("Favicons generated in public/ and src/app/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
