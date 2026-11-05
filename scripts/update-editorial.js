import fs from "fs";
import path from "path";

// 1. EXHIBITIONS
const exhibitions = [
  {
    dir: "echoes-of-stillness",
    titleZh: "2026 17家主流机场晚高峰测速天梯实测大横评",
    titleEn: "2026 Peak-Hour Speed Benchmark for 17 Leading Proxy Providers",
    descZh:
      "在晚高峰 20:30 网络大拥堵时段，对光速云、暮光加速、飞猫云等 17 家机场进行单节点下载速率、TLS 握手延迟与丢包率全景横评。",
    descEn:
      "A rigorous peak-hour test evaluating download throughput, TLS latency, and packet loss across 17 top proxy providers including Guangsu Cloud.",
    startDate: "2026-08-01",
    endDate: "2026-12-31",
    timelineZh: "2026年8月 – 12月 全球连线",
    timelineEn: "August – December 2026 Global Sync",
    image: "/images/benchmarks/光速云-节点测速实测.png",
    imageAltZh: "17家机场晚高峰测速分析图谱",
    imageAltEn: "17-brand peak hour benchmark chart",
    locationZh: "FreeVPN 性能评测中心 · 全球节点集群",
    locationEn: "FreeVPN Performance Lab · Global Cluster",
    admissionZh: "完全公开",
    admissionEn: "Open Access",
    hours: [
      {
        dayZh: "数据采集时段",
        dayEn: "Measurement Window",
        hours: "20:00 – 23:00 CST",
      },
      { dayZh: "数据更新频率", dayEn: "Update Cadence", hours: "每周滚动测试" },
    ],
    bodyZh: `## 为什么晚高峰测速是检验机场的唯一黄金标准？

白天非高峰时段，绝大部分国际网络骨干链路都处于轻载状态，即使是廉价的直连线路也能跑出数十兆速率。然而一到每晚 20:00 至 23:00 的晚高峰，国内运营商骨干网国际出口出现严重拥堵，QoS 丢包率飙升。

### 核心测试结果解读
在本次覆盖的 17 家品牌晚高峰实测中：
1. **第一梯队（机皇专线）**：以 **光速云**（IEPL专线+企业双内网）、暮光加速为代表的高端专线，在香港、新加坡核心节点依然稳定保持 300Mbps~500Mbps+ 的极速带宽，4K 视频秒开无缓冲。
2. **第二梯队（性价比均衡）**：飞猫云、二猫云、灵猫网络、SOGO云等，在 15~20 元价位段给出了令人惊喜的高峰连通率。
3. **第三梯队（轻量经济）**：微风网络、大佬云等，在几元钱月付成本下保证了网页与社媒文字聊天的稳定流通。

> 查看上方完整测速大图，了解各地区节点的真实延迟与吞吐量表现。`,
    bodyEn: `## Why Peak-Hour Testing is the Gold Standard

During off-peak daylight hours, international backbone transit experiences low congestion. The true test of any network provider begins at 8:00 PM to 11:00 PM CST, when international transit bottlenecks appear and QoS throttling takes effect.

### Key Benchmark Takeaways
Across our 17 measured brands:
1. **Tier 1 (Flagship Lines)**: Led by **Guangsu Cloud** (IEPL dual dedicated lines), Asian exit nodes maintained speeds from 300Mbps to over 500Mbps with sub-30ms latencies.
2. **Tier 2 (Balanced Value)**: Flycat Cloud, Ermao Cloud, and SOGO Cloud delivered outstanding value in the ¥15-¥20 monthly range.
3. **Tier 3 (Budget Starter)**: Breeze Net and Dalao Cloud ensured dependable web browsing at minimal monthly costs.`,
  },
  {
    dir: "luminous-ground",
    titleZh: "4K流媒体与ChatGPT / Claude / Gemini AI原生解锁矩阵",
    titleEn:
      "4K Streaming & AI (ChatGPT / Claude / Gemini) Native Unlock Matrix",
    descZh:
      "深度实测 42 家机场对 Netflix、Disney+、YouTube 4K、Claude 3.5 Sonnet 与 ChatGPT 网页及 APP 的真实支持与原生 IP 质量。",
    descEn:
      "Exhaustive verification of native residential IP unlocks for Netflix, Disney+, YouTube, Claude 3.5, and ChatGPT across all 42 providers.",
    startDate: "2026-06-01",
    endDate: "2026-11-30",
    timelineZh: "2026年6月 – 11月 持续追踪",
    timelineEn: "June – November 2026 Active Tracking",
    image: "/images/benchmarks/guangsu-unlock-photo_2026-08-19_12-18-40.jpg",
    imageAltZh: "流媒体与AI工具原生解锁实测截图",
    imageAltEn: "Streaming and AI Native Unlock Verification",
    locationZh: "FreeVPN 流媒体与应用兼容性实验室",
    locationEn: "FreeVPN Streaming & App Compatibility Lab",
    admissionZh: "完全公开",
    admissionEn: "Open Access",
    hours: [
      {
        dayZh: "风控监测频率",
        dayEn: "IP Risk Monitoring",
        hours: "7×24小时自动化巡检",
      },
      {
        dayZh: "流媒体测试平台",
        dayEn: "Target Platforms",
        hours: "Netflix, Claude, ChatGPT, Disney+",
      },
    ],
    bodyZh: `## 流媒体与生成式 AI 时代的节点质量新维度

进入 2026 年，单纯的“能翻墙”早已无法满足专业用户的日常需求。OpenAI、Anthropic（Claude）、Google（Gemini）以及 Netflix 对机房 IDC 共享 IP 的风控拦截越来越严苛。

### 怎么识别真正的“原生解锁”？
- **机房 IP vs 原生住宅 IP**：普通机房 IP 登录 ChatGPT 经常遇到 \`Access Denied (403)\` 或频繁验证码；而光速云等高品质专线采用原生 IP 池，避免被大模型风控误封。
- **Claude 3.5 Sonnet 严格风控**：Claude 对注册与日常使用 IP 的纯净度要求极高，测试表明光速云的新加坡与美西专线节点解锁成功率超过 95%。
- **4K HDR 流媒体**：Netflix 跨区片源需要节点通过住宅 IP 识别，否则只能观看自制剧。`,
    bodyEn: `## The Modern Criteria: Clean IPs for Generative AI & 4K Streaming

In 2026, raw connectivity is merely the baseline. Leading platforms like OpenAI, Anthropic (Claude), and Netflix deploy aggressive IP reputation systems against shared datacenter ranges.

### What Defines True Native Unlock?
- **Datacenter vs Residential IPs**: Ordinary IDC IP addresses trigger 403 Access Denied errors on Claude and ChatGPT. Guangsu Cloud and top dedicated networks utilize clean IP subnets that bypass strict risk score thresholds.
- **Claude 3.5 Sonnet Reliability**: Anthropic maintains the strictest anti-proxy filters; our Singapore and US benchmarks show over 95% smooth login rates on premium dedicated routes.`,
  },
  {
    dir: "thresholds-of-perception",
    titleZh: "【避坑指南】警惕劣质“免费VPN”的安全隐私陷阱与高性价比平替方案",
    titleEn:
      "Caution Guide: The Hidden Dangers of Free VPNs & Affordable Safe Alternatives",
    descZh:
      "全面揭开市场上所谓“永久免费VPN”的盈利内幕：DNS泄露、广告恶意注入、甚至用户设备被充当僵尸网络跳板。详解每月8元起的高性价比平替专线。",
    descEn:
      "Exposing the real costs of free VPNs: DNS leaks, ad injections, and zombie network risks. Exploring safe ¥8/month dedicated alternatives.",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    timelineZh: "2026年度 消费者防坑专题",
    timelineEn: "2026 Safety & Alternative Analysis",
    image: "/images/benchmarks/唯兔云-节点测速实测.png",
    imageAltZh: "安全专线与免费VPN风险对比",
    imageAltEn: "Free VPN risk vs dedicated line security",
    locationZh: "网络安全与消费者权益研究组",
    locationEn: "Cybersecurity & Consumer Advocacy Team",
    admissionZh: "完全公开",
    admissionEn: "Open Access",
    hours: [
      { dayZh: "技术分析更新", dayEn: "Analysis Frequency", hours: "实时更新" },
      { dayZh: "避坑建议专栏", dayEn: "Guidance Hotline", hours: "线上指南" },
    ],
    bodyZh: `## 天下没有免费的午餐：劣质“免费VPN”的真实代价

“免费”往往是世界上最昂贵的花费。海外网络服务器租金、跨国海底光缆物理带宽每一项都需要昂贵的真金白银。那么那些宣称“永久免费且不限速”的 VPN 是靠什么维系的？

### 免费 VPN 的常见危险套路
1. **倒卖用户隐私与浏览历史**：免费工具往往在后台静默收集您的访问网址、搜索关键词甚至未加密凭据，打包转卖给广告数据经纪商。
2. **将您的手机与电脑变成黑客跳板（Botnet）**：著名免费 VPN 曾被安全专家曝光将免费用户的网络连接当作出口节点，向外部发起 DDoS 攻击。
3. **DNS 污染与强制弹窗广告**：随意篡改您的网页内容，甚至植入钓鱼链接。

### 为什么说“月付8元专线”是真正的平替解法？
以 **光速云** 为例：
- 轻量版年付 99 元，折合每月仅需约 8 元，相当于两瓶矿泉水的价格。
- 换来的是合规商业运维、纯净原生 IP、IEPL 专线保障，以及随时可以注销的透明服务。`,
    bodyEn: `## There Is No Free Lunch: The Real Cost of Free VPNs

Cross-border transit and international fiber lines require substantial capital. When a software claims to be '100% permanently free', how does it sustain operations?

### The Reality of Free VPN Operations
1. **Selling Browsing History to Data Brokers**: Unencrypted logs and search queries are monetized through third-party ad networks.
2. **Enlisting User Devices into Residential Botnets**: Several notorious free VPN providers have been caught routing third-party commercial traffic through users' home IP addresses.
3. **DNS Leaks and Ad Injection**: Tampering with web traffic to inject persistent popup advertisements.

### The True Budget Alternative
Services like **Guangsu Cloud** offer entry plans at just ¥99/year (approx. ¥8/month). For the cost of two bottles of water, you gain dedicated IEPL bandwidth, clean residential routing, and zero logging privacy.`,
  },
];

exhibitions.forEach((ex) => {
  const dirPath = path.join(process.cwd(), "src/content/exhibitions", ex.dir);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const indexJson = {
    title: { zh: ex.titleZh, en: ex.titleEn },
    description: { zh: ex.descZh, en: ex.descEn },
    startDate: ex.startDate,
    endDate: ex.endDate,
    timeline: { zh: ex.timelineZh, en: ex.timelineEn },
    image: ex.image,
    imageAlt: { zh: ex.imageAltZh, en: ex.imageAltEn },
    location: { zh: ex.locationZh, en: ex.locationEn },
    admission: { zh: ex.admissionZh, en: ex.admissionEn },
    openingHours: ex.hours.map((h) => ({
      day: { zh: h.dayZh, en: h.dayEn },
      hours: h.hours,
    })),
  };

  fs.writeFileSync(
    path.join(dirPath, "index.json"),
    JSON.stringify(indexJson, null, 2),
    "utf8",
  );

  const bodyDir = path.join(dirPath, "body");
  if (!fs.existsSync(bodyDir)) fs.mkdirSync(bodyDir, { recursive: true });
  fs.writeFileSync(path.join(bodyDir, "zh.md"), ex.bodyZh, "utf8");
  fs.writeFileSync(path.join(bodyDir, "en.md"), ex.bodyEn, "utf8");
});

console.log("Exhibitions updated successfully.");

// 2. WORKSHOPS
const workshops = [
  {
    dir: "contemporary-painting-techniques",
    titleZh: "Clash Verge Rev 跨平台客户端 5 分钟上手与极致分流配置",
    titleEn: "Clash Verge Rev 5-Minute Setup & Advanced Smart Routing Guide",
    image: "/images/workshops/contemporary-painting-techniques/image.jpg",
    imageAltZh: "Clash Verge Rev 软件界面配置图",
    imageAltEn: "Clash Verge Rev user interface setup",
    video: "/images/videos/video1.mp4",
    regTitleZh: "下载客户端并开启智能分流",
    regTitleEn: "Download Client & Configure Smart Routing",
    regInfoZh:
      "Clash Verge Rev 采用现代 Mihomo 内核，支持全自动化规则分流。点击下方导入订阅后，建议勾选【系统代理】并在设置中开启【TUN 模式】。",
    regInfoEn:
      "Clash Verge Rev utilizes the modern Mihomo core. After pasting your subscription URL, enable System Proxy and TUN Mode for system-wide coverage.",
    bodyZh: `## Clash Verge Rev 新手完整上手教程

Clash Verge Rev 是目前 Windows 和 macOS 用户最推崇的代理软件。

### 步骤一：下载与安装
访问 GitHub Releases 页面，Windows 用户下载 \`.msi\` 或 \`.exe\` 安装包，Mac 用户根据芯片类型（Intel 或 Apple Silicon M系列）下载对应 \`.dmg\`。

### 步骤二：导入机场订阅
1. 登录您选购的机场后台（如光速云）。
2. 在用户面板找到【一键导入 Clash 订阅】或复制通用订阅 URL。
3. 打开 Clash Verge Rev，进入左侧【订阅】菜单，粘贴 URL 并点击【导入】。

### 步骤三：开启代理与模式选择
- **规则模式（Rule，强烈推荐）**：国内网站（微信、B站、淘宝）直连，海外网站走专线代理，省流量且不影响本地网速。
- **TUN 虚拟网卡模式**：如果您需要让 Telegram 桌面端、Steam 客户端或终端命令行全局走代理，请在设置中开启 TUN 模式。`,
    bodyEn: `## Step-by-Step Clash Verge Rev Beginner Tutorial

Clash Verge Rev provides an intuitive interface over the high-performance Mihomo core.

### 1. Download & Installation
Download the latest binary from GitHub Releases matching your operating system.

### 2. Import Subscription
Copy your subscription link from your provider's dashboard (e.g. Guangsu Cloud) and paste it into the Profiles menu.

### 3. Smart Routing Modes
Select **Rule Mode** so domestic Chinese services bypass the proxy while blocked global endpoints route through your low-latency dedicated lines.`,
  },
  {
    dir: "digital-art-and-traditional-media",
    titleZh: "Shadowrocket 小火箭 iOS 客户端节点导入与证书避坑指南",
    titleEn:
      "Shadowrocket (Small Rocket) iOS Setup & Certificate Troubleshooting Guide",
    image: "/images/workshops/digital-art-and-traditional-media/image.jpg",
    imageAltZh: "Shadowrocket iOS 小火箭界面演示",
    imageAltEn: "Shadowrocket iOS interface demonstration",
    video: "/images/videos/video1.mp4",
    regTitleZh: "获取美区 Apple ID 并下载小火箭",
    regTitleEn: "Obtain US Apple ID & Download Shadowrocket",
    regInfoZh:
      "由于国区 App Store 政策，Shadowrocket 需通过美区或其他海外 Apple ID 购买下载（售价约 $2.99）。一次购买终生使用。",
    regInfoEn:
      "Shadowrocket requires a non-mainland Apple ID (priced at approx $2.99) on the App Store. Once purchased, updates are free for life.",
    bodyZh: `## iPhone 与 iPad 必备神器：Shadowrocket 小火箭配置详解

Shadowrocket 拥有近乎完美的续航表现与极速启动能力。

### 步骤一：通过扫码或一键导入
1. 在手机 Safari 浏览器登录机场后台。
2. 点击【一键导入 Shadowrocket】，手机将自动拉起小火箭应用并完成订阅添加。
3. 或者直接在小火箭首页右上角点击【+】，类型选择 \`Subscribe\`，粘贴 URL 后点击保存。

### 步骤二：节点测速与全局路由
- 点击【连通性测试】，小火箭将自动批量测试所有节点的真实延迟。
- 推荐全局路由选择【配置】（即规则分流），无需手动频繁开关。`,
    bodyEn: `## Mastering Shadowrocket on iPhone & iPad

Shadowrocket is celebrated for lightweight memory consumption and responsive iOS widgets.

### 1. Instant Import
Tap 'One-click Import to Shadowrocket' inside your provider's dashboard Safari tab, or paste the subscription URL into the Subscribe tab.

### 2. Connectivity Testing
Run batch latency tests to select the fastest server, and keep Global Routing set to Config for automatic routing.`,
  },
  {
    dir: "exploring-abstract-art-a-hands-on-workshop",
    titleZh: "v2rayN 与 Sing-box 核心进阶教程：开启 TUN 模式与游戏低延迟加速",
    titleEn: "v2rayN & Sing-box Advanced Guide: TUN Mode & Low Latency Gaming",
    image:
      "/images/workshops/exploring-abstract-art-a-hands-on-workshop/image.jpg",
    imageAltZh: "v2rayN 进阶节点设置界面",
    imageAltEn: "v2rayN advanced core configuration",
    video: "/images/videos/video1.mp4",
    regTitleZh: "开启系统级 TUN 虚拟网卡",
    regTitleEn: "Enable System-wide TUN Interface",
    regInfoZh:
      "适合有跨区游戏联机、Discord 语音抗丢包及终端命令行代理需求的高阶极客用户。",
    regInfoEn:
      "Designed for gamers and developers seeking packet-level routing with sing-box and v2rayN cores.",
    bodyZh: `## v2rayN 与 Sing-box 核心进阶配置

v2rayN 是 Windows 上最老牌的工具，但许多用户并未发挥其全部潜能。

### 核心亮点：切换 sing-box 内核并启用 TUN
1. 在 v2rayN 底部任务栏勾选【自动配置系统代理】。
2. 在顶部菜单【设置】->【路由设置】中，开启【启用 TUN 虚拟网卡】。
3. 这将接管全机所有网卡流量，无需为每个浏览器或独立游戏手动配置 Socks5 端口。配合光速云的 2.5Gbps 专线，游戏延迟大幅降低。`,
    bodyEn: `## Power User Setup: v2rayN with Sing-box Core

Unlocking the full potential of v2rayN through TUN mode virtual adapters.

### Enabling TUN Virtual Interface
Enable TUN Mode in Settings to capture UDP packet traffic across gaming and terminal environments seamlessly.`,
  },
];

workshops.forEach((ws) => {
  const dirPath = path.join(process.cwd(), "src/content/workshops", ws.dir);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const indexJson = {
    title: { zh: ws.titleZh, en: ws.titleEn },
    image: ws.image,
    imageAlt: { zh: ws.imageAltZh, en: ws.imageAltEn },
    video: ws.video,
    registerTitle: { zh: ws.regTitleZh, en: ws.regTitleEn },
    registerInfo: { zh: ws.regInfoZh, en: ws.regInfoEn },
  };

  fs.writeFileSync(
    path.join(dirPath, "index.json"),
    JSON.stringify(indexJson, null, 2),
    "utf8",
  );

  const bodyDir = path.join(dirPath, "body");
  if (!fs.existsSync(bodyDir)) fs.mkdirSync(bodyDir, { recursive: true });
  fs.writeFileSync(path.join(bodyDir, "zh.md"), ws.bodyZh, "utf8");
  fs.writeFileSync(path.join(bodyDir, "en.md"), ws.bodyEn, "utf8");
});

console.log("Workshops updated successfully.");

// 3. NEWS POSTS
const newsPosts = [
  {
    dir: "autumn-art-fair-2025-participation",
    titleZh: "光速云推出【致敬斯诺克147】247GB永久套餐：一次付费终身有效",
    titleEn:
      "Guangsu Cloud Unveils Snooker 147 Lifetime 247GB Package: Pay Once, Keep Forever",
    pubDate: "2026-10-19",
    descZh:
      "针对轻度办公与常备救急用户，光速云特别推出致敬斯诺克147经典套餐，定价147元享有247GB永久流量，不设月度重置与过期时间。",
    descEn:
      "Guangsu Cloud launches the Snooker 147 plan: ¥147 for 247GB of permanent dedicated data with zero monthly resets.",
    bodyZh: `## 终结“每月流量清零焦虑”：光速云 147 永久套餐正式上线

对于很多偶尔需要查阅国外资料、回复海外客户邮件、或作为应急备用梯子的用户来说，常规月付套餐最让人心痛的就是“每个月用不完也照样被清零”。

### 套餐关键参数
- **套餐名称**：致敬斯诺克 147 永久套餐
- **付费方式**：一次性付费 ¥147 元
- **包含流量**：247GB 高速专线流量，**永久不过期**
- **线路品质**：完全享受光速云原生 IEPL 专线，单节点最高 2.5Gbps
- **设备数量**：不限设备同时在线
- **专属优惠码**：新用户结账输入 \`AMM\` 享特惠

无论您是备用防失联，还是日常轻度查资料，这款套餐都是性价比极高的安心资产。`,
    bodyEn: `## Ending Expiry Anxiety: The Permanent 247GB Plan

Guangsu Cloud addresses light users with the Snooker 147 plan. For a one-time fee of ¥147, enjoy 247GB of permanent IEPL dedicated traffic that never resets at month end.`,
  },
  {
    dir: "domus-picturae-grand-opening",
    titleZh:
      "FreeVPN.my 实测实验室正式上线：首期发布42家机场品牌库与晚高峰图谱",
    titleEn:
      "FreeVPN.my Performance Lab Launches with 42-Brand Database & Peak Metrics",
    pubDate: "2026-08-15",
    descZh:
      "FreeVPN.my 宣布全面重构上线，首期收录 42 家主流机场品牌，完成 17 家晚高峰真实机器测速，致力于打造最可信的跨境网络选型指南。",
    descEn:
      "FreeVPN.my officially goes live, tracking 42 proxy providers with raw peak-hour telemetry to eliminate marketing bias.",
    bodyZh: `## 告别软文与虚标：FreeVPN 实测实验室正式起航

在跨境网络与科学加速领域，“虚标带宽”、“买水军刷好评”的现象屡见不鲜。FreeVPN.my 由资深网络技术团队创立，旨在用严苛的机器自动化测速还原每一条线路的真实能力。

首期上线的核心成果包括：
1. **42 家机场品牌库**：涵盖专线类型、协议特征、价格梯度与官方专属优惠码。
2. **17 家晚高峰真实测速图谱**：杜绝白天空载测速欺骗，所有数据均在晚高峰 20:00~23:00 截取。
3. **全端客户端指南**：汇集 Clash Verge Rev、v2rayN、Shadowrocket 等主流工具官方源码与下载途径。`,
    bodyEn: `## Data Over Hype: FreeVPN Performance Lab Goes Live

FreeVPN.my launches with 42 benchmarked providers and 17 peak-hour measurement charts, offering genuine transparency to internet users worldwide.`,
  },
  {
    dir: "emma-thompson-solo-exhibition",
    titleZh: "2026主流代理协议演进：为什么高端机场全线转向 VLESS 与 Reality？",
    titleEn:
      "2026 Protocol Evolution: Why Flagship Providers Adopt VLESS & Reality",
    pubDate: "2026-07-20",
    descZh:
      "从老旧的 Shadowsocks 到现代 VLESS、XTLS-Vision 与 Trojan，深度剖析传输层特征识别机理以及为什么专线+VLESS 是当下的最佳解法。",
    descEn:
      "Analyzing why VLESS XTLS-Vision and Reality protocols offer superior resistance against DPI identification compared to legacy SS.",
    bodyZh: `## 为什么协议更新换代对你的网络体验至关重要？

很多用户遇到“节点经常红、几天就要更新订阅”的情况，根源往往在于服务端仍在使用已经被防火墙特征识别的老旧协议。

光速云等头部服务商率先全面升级至 **VLESS 协议与企业级专线**：
- **无特征伪装**：消除协议握手头部特征，完美融入普通 HTTPS 流量。
- **性能吞吐量提升**：VLESS 去除了多余的加密握手损耗，使 2.5Gbps 物理链路跑满成为可能。`,
    bodyEn: `## Protocol Architecture in 2026

Modern providers are upgrading to VLESS with XTLS-Vision. By eliminating identifiable handshake signatures, traffic blends seamlessly into ordinary TLS exchanges.`,
  },
  {
    dir: "james-park-sculptural-installation",
    titleZh: "晚高峰国际骨干网抖动自查：如何判断是本地宽带QoS还是节点故障？",
    titleEn:
      "Peak Congestion Diagnostic: Differentiating Local ISP QoS from Server Outages",
    pubDate: "2026-06-15",
    descZh:
      "网络卡顿时别急着怪机场！教你使用 mtr、ping 及 Speedtest 快速定位是电信/移动骨干网限速还是节点服务器出现故障。",
    descEn:
      "A practical networking diagnostic guide using MTR, ping, and path tracing to determine if slowdowns stem from local ISP QoS or upstream servers.",
    bodyZh: `## 5 分钟排查网络卡顿根源

当你发现网页打不开或者视频缓冲时，通过以下三步即可快速排查：
1. **测试国内网站连接**：若百度、B站正常秒开，说明本地局域网 Wi-Fi 与调制解调器正常。
2. **Ping 机场入口 IP**：测试国内中转入口的延迟。若入口延迟在 30ms 以内且无丢包，说明国内骨干网正常。
3. **切换备用协议或专线**：此时若依然慢，往往是公网中转出口拥堵。而采用光速云等拥有 IEPL 独立专线的服务商，可直接跨过公网拥堵点。`,
    bodyEn: `## 5-Minute Network Diagnostic Workflow

Quickly trace bottlenecks using MTR routing tools to pinpoint whether packet loss originates from domestic ISP QoS or upstream servers.`,
  },
  {
    dir: "masterclass-contemporary-painting",
    titleZh:
      "ChatGPT 与 Claude 网页端频繁报 403 错误？原生住宅 IP 节点排错指南",
    titleEn:
      "Frequent 403 Errors on ChatGPT & Claude? Residential IP Troubleshooting Guide",
    pubDate: "2026-05-18",
    descZh:
      "深入分析 Anthropic 与 OpenAI 针对数据中心机房 IP 的屏蔽策略，提供清理浏览器缓存、选择原生住宅节点及规避风控的完整方法。",
    descEn:
      "Understanding OpenAI and Anthropic risk scoring mechanisms and configuring clean residential IP routes to eliminate 403 access blocks.",
    bodyZh: `## 解决 AI 工具 “Access Denied” 的终极方案

大语言模型为防止爬虫滥用，对访问 IP 的纯净度（Fraud Score）极其苛刻。

### 排错四部曲
1. **清理浏览器 LocalStorage 与 Cookies**，或使用隐身窗口。
2. **选择原生住宅节点**：在光速云等服务商列表中选择标注有【原生】或【住宅】的香港/新加坡节点。
3. **检查 WebRTC 泄露**：确保代理客户端已开启 WebRTC 禁用或 TUN 虚拟网卡接管。`,
    bodyEn: `## Overcoming AI Access Denied Challenges

Anthropic and OpenAI assign strict risk scores to datacenter IP ranges. Connecting via verified clean proxy endpoints restores seamless access.`,
  },
  {
    dir: "sophie-laurent-portrait-series",
    titleZh: "2026 最新各大机场优惠码汇总：光速云优惠码 AMM 享专属立减",
    titleEn:
      "2026 Comprehensive Proxy Coupon Directory: Use Code AMM on Guangsu Cloud",
    pubDate: "2026-04-12",
    descZh:
      "整理 42 家机场官方有效优惠码清单，实时收录开业特惠、年付打折码及大流量限时福利。",
    descEn:
      "A verified directory of active promotional codes across 42 providers, featuring exclusive discounts like code AMM.",
    bodyZh: `## 2026 官方有效优惠码总览

在结账时输入专属优惠码，即可享受折上折优惠：
- **光速云**：优惠码 \`AMM\`（享新人专属折扣，折合每月约 8 元）
- **暮光加速**：优惠码 \`muguang5555\`
- **飞猫云**：优惠码 \`flycat888\`（8折特惠）
- **微风网络**：优惠码 \`flat888\`（9折）
- **大佬云**：优惠码 \`dly888\`
- **梯子云**：优惠码 \`tiziyun\`

建议在购买前先收藏本页，折扣码定期核对更新。`,
    bodyEn: `## Verified Coupon Codes for 2026

Enter promo code \`AMM\` on Guangsu Cloud for exclusive entry discounts. Check our regularly updated coupon index before checkout.`,
  },
  {
    dir: "yuki-tanaka-digital-traditional",
    titleZh: "移动 / 联通 / 电信三网用户如何根据本地网络选择最优专线入口？",
    titleEn:
      "Choosing Optimal Dedicated Entry Routes for China Telecom, Unicom & Mobile",
    pubDate: "2026-03-25",
    descZh:
      "不同运营商的国际出口带宽截然不同。详解电信 163 vs CN2、联通 9929/4837 以及移动 CMIN2 在搭配机场专线时的选线技巧。",
    descEn:
      "A technical analysis comparing China Telecom 163/CN2, Unicom 9929/4837, and Mobile CMIN2 routing behaviors with dedicated proxy lines.",
    bodyZh: `## 为什么不同人家里用同一个机场速度差很大？

根本原因在于用户的宽带运营商不同：
- **中国移动**：国际出口总带宽很大，但国内互联较弱。选择带有【移动优化】或 BGP 多线接入的机场能跑出极大下行速率。
- **中国电信**：晚高峰 163 骨干网拥堵严重，**强烈推荐使用 IEPL 专线**（如光速云），将流量直接通过内网拉至海外，避开电信公网出口拥堵。
- **中国联通**：国际互联品质相对较好，配合高带宽专线能获得极低的延迟表现。`,
    bodyEn: `## ISP Routing Dynamics: Telecom, Unicom & Mobile

Different ISPs experience distinct peering characteristics. Telecom subscribers benefit most from pure IEPL dedicated lines that bypass congested 163 public gateways.`,
  },
];

newsPosts.forEach((post) => {
  const dirPath = path.join(process.cwd(), "src/content/news", post.dir);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const currentJson = fs.existsSync(path.join(dirPath, "index.json"))
    ? JSON.parse(fs.readFileSync(path.join(dirPath, "index.json"), "utf8"))
    : {};

  currentJson.title = { zh: post.titleZh, en: post.titleEn };
  currentJson.description = { zh: post.descZh, en: post.descEn };
  currentJson.pubDate = post.pubDate;

  // Localize featuredImageAlt
  currentJson.featuredImageAlt = {
    zh: post.titleZh,
    en: post.titleEn,
  };

  if (currentJson.slides) {
    currentJson.slides = currentJson.slides.map((slide) => ({
      ...slide,
      imageAlt: { zh: post.titleZh, en: post.titleEn },
      caption: { zh: post.titleZh, en: post.titleEn },
    }));
  }

  fs.writeFileSync(
    path.join(dirPath, "index.json"),
    JSON.stringify(currentJson, null, 2),
    "utf8",
  );

  const bodyDir = path.join(dirPath, "body");
  if (!fs.existsSync(bodyDir)) fs.mkdirSync(bodyDir, { recursive: true });
  fs.writeFileSync(path.join(bodyDir, "zh.md"), post.bodyZh, "utf8");
  fs.writeFileSync(path.join(bodyDir, "en.md"), post.bodyEn, "utf8");
});

console.log("News posts updated successfully.");
