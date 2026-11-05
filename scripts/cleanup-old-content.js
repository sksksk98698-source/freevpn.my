import fs from "fs";
import path from "path";

const oldArtworks = [
  "alpine-echo-field.json",
  "aurora-syntax.json",
  "between-echoes.json",
  "digital-bloom.json",
  "eternal-stillness.json",
  "forest-of-breathing-lines.json",
  "fragmented-city.json",
  "golden-anatomy.json",
  "horizon-pulse.json",
  "lighthouse-of-quiet-tides.json",
  "lines-of-silence.json",
  "lunar-fragments.json",
  "memory-of-water.json",
  "reverie-in-red.json",
  "spectrum-of-thought.json",
  "the-blue-interval.json",
  "the-garden-within.json",
  "the-silent-horizon.json",
  "whispering-pines.json",
];

const oldArtists = [
  "emma-thompson.json",
  "isabella-rodriguez.json",
  "james-park.json",
  "luca-moretti.json",
  "marcus-weber.json",
  "sarah-chen.json",
  "sophie-laurent.json",
  "yuki-tanaka.json",
];

oldArtworks.forEach((file) => {
  const p = path.join(process.cwd(), "src/content/artworks", file);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log("Removed old artwork:", file);
  }
});

oldArtists.forEach((file) => {
  const p = path.join(process.cwd(), "src/content/artists", file);
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log("Removed old artist:", file);
  }
});

console.log(
  "Artworks remaining:",
  fs.readdirSync("src/content/artworks").length,
);
console.log("Artists remaining:", fs.readdirSync("src/content/artists").length);
