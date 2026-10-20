import sharp from "sharp";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "logos");

function logoSvg(fill) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="360" viewBox="0 0 1400 360" fill="none">
  <g stroke="${fill}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M60 200 C110 200 120 110 180 110 C240 110 250 200 310 200" />
    <path d="M80 235 C130 235 140 145 200 145 C260 145 270 235 330 235" />
    <path d="M100 270 C150 270 160 180 220 180 C280 180 290 270 350 270" />
  </g>
  <text
    x="400"
    y="235"
    fill="${fill}"
    font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="148"
    font-weight="900"
    letter-spacing="22"
  >SANOVA</text>
</svg>`;
}

async function main() {
  await mkdir(outDir, { recursive: true });

  await sharp(Buffer.from(logoSvg("#000000")))
    .ensureAlpha()
    .png()
    .toFile(path.join(outDir, "sanova-black.png"));

  await sharp(Buffer.from(logoSvg("#FFFFFF")))
    .ensureAlpha()
    .png()
    .toFile(path.join(outDir, "sanova-white.png"));

  await writeFile(path.join(outDir, "sanova-black.svg"), logoSvg("#000000"));
  await writeFile(path.join(outDir, "sanova-white.svg"), logoSvg("#FFFFFF"));

  console.log("Logos written to public/logos/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
