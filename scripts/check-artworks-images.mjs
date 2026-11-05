import fs from "fs";
import path from "path";

const dir = "src/content/artworks";
const benchmarkDir = "src/assets/images/benchmarks";
const availableBenchmarks = fs.existsSync(benchmarkDir) ? fs.readdirSync(benchmarkDir) : [];

console.log("Available benchmarks in src/assets/images/benchmarks:", availableBenchmarks.length);

const brandBenchmarkMap = {
  "guangsu-cloud.json": "光速云-节点测速实测.png",
  "muguang-speed.json": "幕光加速-节点测速实测.png",
  "feimao-cloud.json": "飞猫云-节点测速实测.png",
  "weifeng-net.json": "微风-节点测速实测.png",
  "xingdaomeng.json": "星岛梦-节点测速实测.png",
  "ermao-cloud.json": "二猫云-节点测速实测.png",
  "weitu-cloud.json": "唯兔云-节点测速实测.png",
  "sogo-cloud.json": "SOGO云-节点测速实测.png",
  "u1s1-cloud.json": "U1S1-节点测速实测.png",
  "yifan-cloud.json": "一翻云-节点测速实测.png",
  "guangnian-ladder.json": "光年梯-节点测速实测.png",
  "quanqiu-cloud.json": "全球云-节点测速实测.png",
  "kexin-cloud.json": "可信云-节点测速实测.png",
  "yuzhou-cloud.json": "宇宙云-节点测速实测.png",
  "jilian-cloud.json": "极连云-节点测速实测.png",
  "lingmao-net.json": "灵猫网络-节点测速实测.png",
  "sujie-speed.json": "速界-节点测速实测.png",
  "wuyou-link.json": "test-unlock-photo_2026-09-07_12-51-58.jpg"
};

let updated = 0;
for (const [file, imgName] of Object.entries(brandBenchmarkMap)) {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(raw);
    const benchmarkPath = `/images/benchmarks/${imgName}`;
    let changed = false;
    if (data.image !== benchmarkPath) {
      data.image = benchmarkPath;
      changed = true;
    }
    if (data.speedtestImage !== benchmarkPath) {
      data.speedtestImage = benchmarkPath;
      changed = true;
    }
    if (changed) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
      updated++;
      console.log(`Updated ${file} -> ${benchmarkPath}`);
    } else {
      console.log(`Already configured ${file} -> ${benchmarkPath}`);
    }
  }
}
console.log(`Finished. Updated ${updated} files.`);
