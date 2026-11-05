import fs from "fs";
import path from "path";

const homepageFile = path.join(
  process.cwd(),
  "src/content/homepage/index.json",
);
const current = JSON.parse(fs.readFileSync(homepageFile, "utf8"));

current.intro = {
  subheading: {
    zh: "告别劣质免费VPN <br /> 畅享极速专线网络",
    en: "Beyond Unsafe Free VPNs <br /> Pure High-Speed Dedicated Lines",
  },
  content: {
    zh: "<span>FreeVPN.my</span> 是专注于跨境网络优化与节点实测的第三方评测实验室。我们拒绝虚标与信息黑盒，针对 42 家主流机场展开晚高峰吞吐量、丢包率与 AI/4K 流媒体解锁实测，为你精选真正稳定可靠的高性价比加速方案。",
    en: "<span>FreeVPN.my</span> is an independent performance benchmarking lab dedicated to cross-border network acceleration. We test 42 leading proxy providers during peak congestion hours to deliver transparent, data-driven recommendations.",
  },
};

current.events = {
  subheading: {
    zh: "晚高峰测速横评 <br /> 与客户端实操教程",
    en: "Peak-Hour Benchmarks <br /> & Configuration Tutorials",
  },
  content: {
    zh: "<span>实测检验真理</span>。我们定期发布 17 家晚高峰测速天梯图谱、流媒体原生解锁矩阵以及 Clash Verge Rev、v2rayN、Shadowrocket 等主流客户端的零基础配置指南。",
    en: "<span>Data speaks truth</span>. We regularly publish peak-hour speed charts, 4K streaming & AI unlock matrices, and beginner-friendly tutorials for Clash Verge Rev, v2rayN, and Shadowrocket.",
  },
  description: {
    zh: "探索深入的测速专题与保姆级实操教程。",
    en: "Explore comprehensive benchmark reports and setup guides.",
  },
  buttonText: {
    zh: "查看测速专题",
    en: "View Benchmarks",
  },
};

current.about.content = {
  zh: "了解我们的评测准则与实验室测试环境。无商业公关操控，仅凭晚高峰真实数据说话。",
  en: "Learn about our rigorous testing methodology and independent evaluation standards. Data over marketing.",
};

current.about.buttonText = {
  zh: "了解实验室",
  en: "About Our Lab",
};

// Localize gallery items alt
current.about.galleryItems = current.about.galleryItems.map((item, i) => ({
  ...item,
  imageAlt: {
    zh: `网络实测图谱 ${i + 1}`,
    en: `Network Benchmark Chart ${i + 1}`,
  },
}));

// Set top 4 featured artworks
current.collection = [
  {
    artwork: "guangsu-cloud",
    caption: {
      zh: "年度机皇 · 光速云 (IEPL双专线 / 147永久套餐 / 优惠码 AMM)",
      en: "Top Pick · Guangsu Cloud (IEPL Dual Dedicated Line / Promo AMM)",
    },
  },
  {
    artwork: "muguang-speed",
    caption: {
      zh: "暮光加速 (BGP智能调度与超低延迟出口)",
      en: "Twilight Speed (Smart BGP & Low Latency)",
    },
  },
  {
    artwork: "feimao-cloud",
    caption: {
      zh: "飞猫云 (7元档高性价比尝鲜首选)",
      en: "Flycat Cloud (Budget-Friendly Dedicated Line)",
    },
  },
  {
    artwork: "weifeng-net",
    caption: {
      zh: "微风网络 (轻量办公与高品质跨境网络)",
      en: "Breeze Net (Lightweight Office Acceleration)",
    },
  },
];

fs.writeFileSync(homepageFile, JSON.stringify(current, null, 2), "utf8");
console.log("Homepage index.json updated successfully.");
