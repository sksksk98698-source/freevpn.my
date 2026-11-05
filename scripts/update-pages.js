import fs from "fs";
import path from "path";

// Privacy policy
const privDir = path.join(process.cwd(), "src/content/pages/privacy-policy");
fs.writeFileSync(
  path.join(privDir, "index.json"),
  JSON.stringify(
    {
      title: {
        zh: "隐私政策与透明度说明",
        en: "Privacy Policy & Transparency",
      },
      description: {
        zh: "FreeVPN.my 平台隐私声明、推广链接佣金透明度及数据收集规范。",
        en: "FreeVPN.my privacy commitments, affiliate disclosure, and data usage policy.",
      },
    },
    null,
    2,
  ),
  "utf8",
);

const privBodyZh = `## 隐私保护与数据收集原则

FreeVPN.my 致力于保护访问本站的所有用户的个人隐私安全。本站为一个完全静态化（Static Site Generation）部署的独立测速与科学评测博客，在常规浏览状态下我们**不收集、不记录、不转售**任何用户的私人浏览记录、DNS 查询或敏感通讯数据。

### 1. 推广链接与透明度披露（Affiliate Disclosure）
本站部分文章、品牌测评列表及推荐卡片中包含第三方机场或 VPN 服务的推广注册链接。
- 当您通过本站提供的链接注册并购买相关服务时，服务商可能会向本站支付少许推广佣金。
- **这不会增加您的任何购买成本**，在很多情况下，通过使用本站专属优惠码（例如光速云专属码 \`AMM\`），您还能享受立减折扣或赠送流量。
- 本站的评测结果和测速数据均以客观机器测试结果为准，推广合作不会左右我们对劣质节点的批评或真实数据的如实公布。

### 2. Cookies 与分析工具
为优化站点在不同设备上的加载速度和阅读排版，我们可能使用极简、去隐私化的匿名访问量统计工具。该工具不包含任何追踪用户跨站行为的第三方跟踪代码。

### 3. 第三方网站跳转
本站包含指向各机场官网、测速平台及 GitHub 开源项目的外部链接。一旦您离开本站跳转至第三方服务商，其隐私政策与服务条款将受该第三方约束，请仔细阅读该第三方的用户协议。`;

const privBodyEn = `## Privacy and Transparency Statement

FreeVPN.my is committed to preserving the privacy of our visitors. As a statically generated architectural website, we **do not track, sell, or collect** your personal web traffic, DNS queries, or confidential data.

### 1. Affiliate Disclosure
Some links on FreeVPN.my are affiliate links. If you click through and purchase a subscription, we may earn an affiliate commission at no extra cost to you.
Using our exclusive coupons (such as code \`AMM\` for Guangsu Cloud) often provides additional discounts. Our testing methodology remains strictly objective, grounded in real peak-hour metrics.

### 2. Third-Party Websites
Our reviews link to external proxy services, client download repositories, and speedtest servers. Once you navigate away from our site, the privacy policies of those respective third parties apply.`;

const privBodyDir = path.join(privDir, "body");
if (!fs.existsSync(privBodyDir)) fs.mkdirSync(privBodyDir, { recursive: true });
fs.writeFileSync(path.join(privBodyDir, "zh.md"), privBodyZh, "utf8");
fs.writeFileSync(path.join(privBodyDir, "en.md"), privBodyEn, "utf8");

// Terms of service
const termsDir = path.join(process.cwd(), "src/content/pages/terms");
fs.writeFileSync(
  path.join(termsDir, "index.json"),
  JSON.stringify(
    {
      title: {
        zh: "服务条款与免责声明",
        en: "Terms of Service & Disclaimer",
      },
      description: {
        zh: "FreeVPN.my 网站使用条款、评测时效性及法律责任声明。",
        en: "FreeVPN.my website usage terms, testing timeliness, and legal disclaimer.",
      },
    },
    null,
    2,
  ),
  "utf8",
);

const termsBodyZh = `## 使用条款与法律免责声明

欢迎访问 FreeVPN.my（以下简称“本站”）。访问与使用本站即代表您无保留接受并遵守以下各项使用条款：

### 1. 评测数据时效性与局限性说明
- 本站发布的测速图谱、带宽数据、节点延迟及流媒体/AI 解锁情况，均基于特定测试时间点（如 2026 年晚高峰）的网络快照记录。
- 跨国骨干网络路由、国际海底光缆健康状况以及目标平台（如 Netflix、ChatGPT）的风控机制具有动态波动性。本站无法担保各品牌节点在未来任何时刻均维持与测速时完全相同的速度与可用性。
- 用户在购买任何第三方服务前，应优先选择月付或小额体验方案，自行验证本地网络连通性。

### 2. 合规与合法使用承诺
本站提供的内容仅供计算机网络技术研究、跨国学术资料查阅、外贸商务办公及跨境电子商务等合法合规用途。用户在使用代理工具与网络服务时，必须严格遵守所在地国家与地区的法律法规。任何用户因违规使用网络工具所产生的法律责任由使用者自行承担，本站概不负责。

### 3. 版权与知识产权
本站原创的测速图表、评测文字大纲及分析文章受版权法保护。未经授权不得用于商业抄袭或未经许可的爬虫抓取。`;

const termsBodyEn = `## Terms of Service & Disclaimer

By accessing FreeVPN.my, you agree to comply with and be bound by the following terms and disclaimers:

### 1. Benchmark Timeliness & Disclaimers
All speedtest data, latency measurements, and unlock status reports published on this website represent network snapshots captured at specific testing times. International routes and upstream carrier conditions change dynamically; past performance does not guarantee future results. Users are advised to test with small monthly plans first.

### 2. Compliance and Legal Usage
Information on this site is provided solely for networking research, international business, cross-border e-commerce, and academic studies. Users are strictly responsible for complying with the laws of their local jurisdiction.

### 3. Copyright
Original review methodologies, editorial benchmarks, and comparative frameworks published on FreeVPN.my are protected by copyright.`;

const termsBodyDir = path.join(termsDir, "body");
if (!fs.existsSync(termsBodyDir))
  fs.mkdirSync(termsBodyDir, { recursive: true });
fs.writeFileSync(path.join(termsBodyDir, "zh.md"), termsBodyZh, "utf8");
fs.writeFileSync(path.join(termsBodyDir, "en.md"), termsBodyEn, "utf8");

console.log("Pages (privacy-policy and terms) updated successfully.");
