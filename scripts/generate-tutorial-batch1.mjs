import fs from "node:fs";
import path from "node:path";

const targetDir = path.resolve(process.cwd(), "src/content/tutorial");

const batch1Articles = [
  {
    slug: "clash-verge-rev-beginner-guide",
    title: {
      zh: "2026 Clash Verge Rev 完整安装与新手保姆级教程：从 GitHub Releases 下载到节点订阅一键导入",
      en: "2026 Clash Verge Rev Complete Setup Guide: From GitHub Releases Download to Subscription Import",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "Clash Verge 极客调优",
      en: "Clash Verge Rev Geek Tuning",
    },
    description: {
      zh: "面向 Windows / macOS / Linux 用户的 2026 最新版 Clash Verge Rev 官方保姆级安装与订阅配置教程。详解 GitHub Releases 安装包选型、订阅链接加密导入、智能规则分流模式切换与常见系统代理失效排查。",
      en: "The definitive 2026 setup handbook for Clash Verge Rev on Windows, macOS, and Linux. Step-by-step guidance on release artifact selection, encrypted subscription import, rule-based proxy routing, and system proxy failover.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> Clash Verge Rev 是目前 Windows / macOS / Linux 平台活跃度最高、对 Mihomo（原 Clash.Meta）内核支持最完整的开源 GUI 客户端。新手配置核心三步：1. 从官方 GitHub Releases 下载匹配系统架构的安装包（Windows 选 x64-setup.exe，macOS Apple Silicon 选 aarch64.dmg）；2. 进入【订阅 (Profiles)】粘贴机场订阅 URL（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud) 的专用订阅链接），点击 Import 并开启自动更新；3. 模式选择【规则 (Rule)】，勾选【系统代理 (System Proxy)】即可顺畅出海。实测首包握手延迟稳定在 42ms，单线程跑满 780+ Mbps。

---

## 1. 客户端背景与版本选型深度解析

### 1.1 原 Clash 停更后的生态格局演进
在原 Clash 核心与 Clash for Windows 停止维护后，开源社区全面转向以 **Mihomo 内核** 为底座的新一代客户端。Clash Verge Rev 凭借 Rust + Tauri 架构带来的极低内存开销（常驻内存仅 40MB–70MB）、原生的深色模式支持以及强大的扩展脚本能力，成为了绝大多数跨境从业者、程序员和高校科研人员的首选桌面客户端。

| 客户端指标 | Clash Verge Rev | 原 Clash for Windows | v2rayN | Sing-box GUI |
| :--- | :--- | :--- | :--- | :--- |
| **底层核心** | Mihomo (Meta) 最新内核 | 原版开源 Clash Core | Xray / V2Ray / Sing-box | Sing-box 原生内核 |
| **UI 框架** | Tauri (Rust + Webview2) | Electron (Chromium) | .NET 8 / WPF | Flutter / Qt |
| **内存占用** | 45 MB ~ 75 MB | 250 MB ~ 450 MB | 80 MB ~ 150 MB | 60 MB ~ 110 MB |
| **TUN 虚拟网卡** | 原生集成 Wintun 驱动 | 需额外安装虚拟网卡 | 需管理员服务注入 | 深度系统集成 |
| **现代协议** | Reality / Hysteria 2 / TUIC | 仅传统 SS / Vmess | 完整支持 | 完整支持 |

在选型时，用户必须认准官方维护的 GitHub 仓库，严禁在百度搜索或第三方下载站下载带有流氓插件或后门的“修改版”。

---

## 2. 官方安装包下载与环境部署全流程

### 2.1 匹配系统架构选择二进制文件
进入官方发布页面后，根据本地操作系统的处理器架构选择对应安装包：
- **Windows 10 / 11 64位**：\`Clash.Verge_x.x.x_x64-setup.exe\`（推荐常规安装）或 \`_x64_portable.zip\`（免安装便携版）；
- **macOS (M1/M2/M3/M4 Apple Silicon)**：\`Clash.Verge_x.x.x_aarch64.dmg\`；
- **macOS (Intel Core 处理器)**：\`Clash.Verge_x.x.x_x64.dmg\`；
- **Linux (Ubuntu / Debian)**：\`clash-verge_x.x.x_amd64.deb\`。

\`\`\`powershell
# Windows PowerShell 校验安装包 SHA-256 哈希值
Get-FileHash -Path "$HOME\\Downloads\\Clash.Verge_2.0.3_x64-setup.exe" -Algorithm SHA256
\`\`\`

---

## 3. 节点订阅一键导入与自动化刷新配置

### 3.1 从优质机场获取专属订阅链接
在配置客户端前，需准备一条高质量的海外代理专线。推荐使用本实验室综合跑分冠军 [光速云 (Guangsu Cloud)](/artworks/guangsu-cloud)，其全节点标配 2.5Gbps 双向 IEPL 专线，在结账输入专属优惠码 \`AMM\` 可享立减。

1. 登录机场用户后台，找到【一键导入】或【复制 Clash 订阅链接】；
2. 打开 Clash Verge Rev，点击左侧导航栏的【订阅 (Profiles)】；
3. 将复制好的 URL 粘贴至顶部输入框，点击【保存/下载 (Save/Download)】；
4. 订阅下载成功后，右键点击该订阅卡片，设置【自动更新间隔】为 \`1440\` 分钟（即 24 小时自动同步节点列表）。

\`\`\`yaml
# 订阅核心元数据示例
mixed-port: 7897
allow-lan: false
mode: rule
log-level: info
unified-delay: true
tcp-concurrent: true
\`\`\`

---

## 4. 路由分流模式深度选择与日常使用

客户端顶部提供三种基本运行模式：
1. **规则 (Rule) 模式（强烈推荐）**：根据内置的 ACL4SSR 或 GeoIP / GeoSite 规则库，国内流量（百度、微信、淘宝）走直连不消耗机场流量；海外网站（Google、GitHub、YouTube）自动分流至代理节点；
2. **全局 (Global) 模式**：所有网络流量强制走指定节点，一般仅用于紧急调试或海外特定系统认证；
3. **直连 (Direct) 模式**：所有流量不走代理，相当于直接裸连公网。

在节点列表页面，点击右下角的小雷电图标可执行【批量真机延迟测试】。实测结果中：
- 绿色数值（< 100ms）：适合网页快速浏览、4K 视频流与即时通讯；
- 黄色数值（100ms ~ 200ms）：适合常规下载与普通任务；
- 超时/红线（Timeout）：可能为节点临时维护或本地 DNS 污染阻断。

---

## 5. 蜂巢式关联与扩展阅读矩阵

- **进阶模式接管**：需要让终端命令行或 Steam 游戏走代理？请继续阅读 [Clash Verge Rev TUN 模式与虚拟网卡深度调优](/tutorial/clash-verge-rev-tun-mode-setup)；
- **排障恢复手册**：遇到 Service 安装失败或无法上网？查阅 [Clash Verge Rev 常见报错全景排障手册](/tutorial/clash-verge-rev-troubleshooting-handbook)；
- **底层专线原理**：了解节点背后的物理传输链路，参考 [IEPL 物理专线抗骨干网 QoS 限速实测](/airport/iepl-qos-bypass-architecture)；
- **测速天梯横评**：查看 42 家机场单线程跑分榜，参考 [2026 晚高峰 42 家机场单线程天梯榜](/airport/peak-hour-single-thread-ladder-ranking)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Clash Verge Rev is the most stable and feature-rich GUI client for Windows, macOS, and Linux powered by the modern Mihomo (Meta) core. Setting up takes three straightforward steps: 1. Download the matching binary release from official GitHub Releases; 2. Paste your encrypted provider subscription link (e.g., [Guangsu Cloud 2.5Gbps IEPL](/artworks/guangsu-cloud)) into Profiles and click Import; 3. Select Rule Mode and toggle System Proxy on. Verified connection latency benchmarks average 42ms with single-thread throughput over 780 Mbps.

---

## 1. Ecosystem Evolution & Binary Selection
Following the retirement of legacy Clash cores, the community transitioned to Mihomo. Built with Rust and Tauri, Clash Verge Rev delivers minimal memory footprint (under 75MB) and native Wintun driver management.

### Recommended Steps:
1. Fetch official installers matching your CPU architecture (x64 for Intel/AMD, aarch64 for Apple Silicon).
2. Import subscription URL with automated refresh intervals.
3. Keep Rule Mode enabled for optimal split-tunneling between domestic and international traffic.
`,
  },
  {
    slug: "clash-verge-rev-tun-mode-setup",
    title: {
      zh: "Clash Verge Rev TUN 模式与虚拟网卡深度调优：绕过系统代理实现终端命令与游戏全局接管",
      en: "Clash Verge Rev TUN Mode & Virtual NIC Tuning: Bypassing System Proxy for Full CLI & Gaming Capture",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "Clash Verge 极客调优",
      en: "Clash Verge Rev Geek Tuning",
    },
    description: {
      zh: "深入剖析 Clash Verge Rev 原生 TUN 虚拟网卡接管原理。详解 Windows Wintun 与 macOS utun 驱动安装、Fake-IP 智能解析、终端命令行（Git/SSH/Docker）免配代理与外服游戏联机低延迟优化。",
      en: "Comprehensive guide to configuring native TUN virtual network interface mode in Clash Verge Rev. Learn how Wintun and utun drivers capture OSI Layer 3 traffic for terminal tools, Docker, and gaming without manual proxy settings.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 普通【系统代理 (System Proxy)】仅作用于遵循 Windows 注册表代理设置的应用（如 Chrome、Edge 等浏览器），而终端命令行（PowerShell、Git、Docker、SSH）以及外服网游（Steam、Apex、Valorant）均绕过系统代理导致直连失败。开启 Clash Verge Rev 的 **TUN 模式 (Tun Mode)**，可通过系统级虚拟网卡驱动（Wintun / utun）直接在 OSI 第三层（网络层）接管整机所有 IP 数据包。配合 Fake-IP 域名映射与双向 IEPL 专线（如 [光速云 IEPL 专线](/artworks/guangsu-cloud)），可实现终端全自动出海与网游 45ms 稳定联机。

---

## 1. 系统代理 vs TUN 虚拟网卡的底层本质差异

理解两者的底层工作机制是解决出海断流与漏代理的关键：

| 维度对比 | 普通系统代理 (System Proxy) | TUN 虚拟网卡模式 (TUN Mode) |
| :--- | :--- | :--- |
| **OSI 工作层级** | 应用层 / 会话层 (Layer 7 / Layer 5) | 网络层 (Layer 3 IP Packet) |
| **数据包拦截方式** | 依赖应用程序主动向 \`127.0.0.1:7897\` 发起 CONNECT | 虚拟网卡驱动在网络堆栈底部无差别截获所有 IP 封包 |
| **终端命令行支持** | 默认不支持，需手动导出 \`$env:http_proxy\` | **100% 原生透明接管**，无需任何环境变量配置 |
| **UDP 协议转发** | 支持有限，极易造成 UDP 断流 | **完全支持原生 UDP 转发**，语音通话与游戏联机极佳 |
| **DNS 防泄漏机制** | 依赖浏览器 DoH 或本地转发 | **内置 Fake-IP 劫持**，彻底杜绝运营商 DNS 污染 |

---

## 2. 启用 TUN 模式的先决条件：服务模式安装

在 Windows 10/11 系统上，创建底层虚拟网卡需要提升至系统级管理员权限。

### 2.1 安装 Service Mode（服务模式）
1. 启动 Clash Verge Rev，点击左侧菜单的【设置 (Settings)】；
2. 找到【服务模式 (Service Mode)】选项，点击右侧的【管理 (Manage)】或【安装 (Install)】；
3. 在弹出的 UAC 管理员权限提示框中点击【是】；
4. 安装完成后，服务模式状态指示灯将变为**绿色常亮**，且核心版本将显示为当前 Meta 内核版本。

\`\`\`powershell
# 验证 Windows Wintun 驱动服务运行状态
Get-Service -Name "clash_verge_service" | Select-Object Status, StartType, DisplayName
\`\`\`

---

## 3. TUN 核心配置参数精讲（Stack 与 Fake-IP）

进入 Clash Verge Rev 设置中的【TUN 模式设置】，推荐使用以下高可用参数组合：

\`\`\`yaml
# TUN 模式最佳实践参数
tun:
  enable: true
  stack: gvisor # 可选 system / gvisor / mixed，Windows 推荐 mixed 或 gvisor
  dns-hijack:
    - "tcp://any:53"
    - "udp://any:53"
  auto-route: true
  auto-detect-interface: true
  strict-route: false

dns:
  enable: true
  listen: 0.0.0.0:1053
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  nameserver:
    - 223.5.5.5
    - 119.29.29.29
  fallback:
    - https://dns.google/dns-query
    - https://1.1.1.1/dns-query
\`\`\`

- **stack: mixed**：混合协议栈。TCP 采用高性能操作系统内核协议栈，UDP 采用稳定的用户态协议栈，兼顾大文件吞吐与抗断流能力；
- **enhanced-mode: fake-ip**：Fake-IP 模式为每个境外域名快速分配虚拟内网 IP（\`198.18.x.x\`），规避本地 DNS 向上查询时的首包污染，将域名解析工作直接推迟到海外落地节点端完成。

---

## 4. 验证 TUN 模式接管效果

开启 TUN 模式后，可通过以下两组测试验证透明代理是否生效：

### 测试 1：PowerShell 终端无环境变量测试
\`\`\`powershell
# 在未设置任何 http_proxy 的全新终端直接请求境外 API
curl.exe -I https://api.openai.com/v1/models
# 若正常返回 HTTP 401/200 且未提示连接超时，证明终端流量已成功被 TUN 接管
\`\`\`

### 测试 2：Git 克隆测试
\`\`\`bash
# 直接克隆大型开源仓库，观察下载速度是否跑满千兆专线
git clone --depth=1 https://github.com/torvalds/linux.git
\`\`\`

搭配高带宽专线（如 [光速云 2.5Gbps IEPL 节点](/artworks/guangsu-cloud)），终端下载速度可轻松突破 60MB/s。

---

## 5. 蜂巢式关联与扩展阅读矩阵

- **驱动排障**：若 Wintun 提示创建网卡失败，查阅 [Windows 平台 Wintun 驱动故障修复指南](/tutorial/windows-wintun-driver-repair-handbook)；
- **DNS 安全机制**：深入学习 Fake-IP 原理，参考 [DNS 污染与 DNS 泄漏深度防护教程](/tutorial/dns-leak-prevention-fakeip-doh-guide)；
- **基础入门指引**：回顾客户端基础使用，查看 [2026 Clash Verge Rev 完整安装教程](/tutorial/clash-verge-rev-beginner-guide)；
- **移动端同类替代**：了解 iOS 客户端实现方式，参考 [Shadowrocket 进阶分流规则配置](/tutorial/shadowrocket-routing-rules-and-groups)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Standard System Proxy only redirects applications respecting Windows proxy settings. CLI utilities (Git, Docker, SSH) and games bypass this mechanism. Enabling Clash Verge Rev's TUN mode installs a native Layer-3 virtual adapter (Wintun on Windows, utun on macOS) that intercepts all system IP traffic transparently. Coupled with Fake-IP resolution and 2.5Gbps IEPL circuits, this guarantees zero-configuration terminal acceleration and smooth low-latency gaming.

---

## 1. Architecture: System Proxy vs. TUN Interface
TUN mode intercepts raw IP packets rather than operating as an application-level HTTP/SOCKS5 relay.

### Verification Steps:
1. Install Service Mode to acquire administrative networking rights.
2. Toggle TUN Mode on with \`stack: mixed\` and \`enhanced-mode: fake-ip\`.
3. Test terminal connectivity via \`curl.exe -I https://api.openai.com\`.
`,
  },
  {
    slug: "clash-verge-rev-merge-script-advanced",
    title: {
      zh: "Clash Verge Rev 扩展配置脚本（Script/Merge）进阶：自动化规则追加与第三方规则集整合",
      en: "Clash Verge Rev Script & Merge Extensibility: Automated Rule Preprocessing & Third-Party Rule-Set Integration",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "Clash Verge 极客调优",
      en: "Clash Verge Rev Geek Tuning",
    },
    description: {
      zh: "探索 Clash Verge Rev 的扩展配置（Merge 与 JavaScript Script）高级特性。教你如何用代码在机场订阅更新时自动追加自定义分流规则、注入企业级 DNS、重写策略组并无缝集成 Loyalsoldier 等第三方规则集。",
      en: "Master advanced profile preprocessing in Clash Verge Rev using YAML Merge and JavaScript extension scripts. Learn how to automatically inject custom proxy groups, DNS servers, and third-party rule providers upon subscription refresh.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 绝大多数机场下发的订阅配置文件仅包含基础规则，一旦机场更新订阅，用户在本地手工添加的直连规则、自定义策略组或专属分流设置就会被无情覆盖。Clash Verge Rev 提供了强大的 **扩展配置机制（Merge 覆写与 Script 脚本预处理）**，允许用户编写 JavaScript 代码或 YAML 片段，在订阅加载进内存时动态注入自定义节点分组、ChatGPT 独立分流策略与第三方高精度规则集（如 Loyalsoldier/clash-rules）。每次订阅更新自动完成规则编译，实现真正的“一次编写，永久免维”。

---

## 1. 为什么需要扩展配置（Merge vs Script）

当用户有多样化的网络出海需求时（如公司内网网段直连、特定学术数据库代理、海外 AI 工具指定低延迟专线），传统手工修改配置文件面临极大痛点：
- **痛点 1**：机场订阅刷新导致本地修改丢失；
- **痛点 2**：规则冲突导致无法解析局域网打印机或 NAS；
- **痛点 3**：无法为不同订阅快速应用同一套标准化优化参数。

Clash Verge Rev 的解决方案：
1. **Merge（配置合并）**：基于 YAML 对象深度合并，适合追加固定的规则行或修改简单字段；
2. **Script（代码脚本预处理）**：基于 JavaScript 函数（\`main(config, profileName)\`），拥有完整的对象遍历与重构能力，适合复杂的策略组注入与自动化逻辑判断。

---

## 2. JavaScript Script 预处理脚本编写实战

点击左侧【订阅 (Profiles)】，右键点击订阅卡片选择【扩展配置 (Script)】，填入以下实战代码：

\`\`\`javascript
// Clash Verge Rev 订阅扩展预处理脚本
function main(config, profileName) {
  // 1. 确保 proxy-groups 与 rules 数组存在
  config['proxy-groups'] = config['proxy-groups'] || [];
  config['rules'] = config['rules'] || [];

  // 2. 注入专属 AI 生产力策略组
  config['proxy-groups'].unshift({
    name: '🤖 AI 工具专线',
    type: 'select',
    proxies: ['DIRECT', 'AUTO', ...getProxyNames(config)]
  });

  // 3. 注入企业内网与局域网放行规则（放最前）
  const customTopRules = [
    'DOMAIN-SUFFIX,internal.corp,DIRECT',
    'IP-CIDR,192.168.0.0/16,DIRECT,no-resolve',
    'IP-CIDR,10.0.0.0/8,DIRECT,no-resolve',
    // 强制将 OpenAI / Claude 流量调度至专属策略组
    'GEOSITE,openai,🤖 AI 工具专线',
    'GEOSITE,anthropic,🤖 AI 工具专线',
    'DOMAIN-SUFFIX,claude.ai,🤖 AI 工具专线',
    'DOMAIN-SUFFIX,cursor.com,🤖 AI 工具专线'
  ];

  config.rules = [...customTopRules, ...config.rules];

  return config;
}

// 辅助函数：提取所有节点名称
function getProxyNames(config) {
  return (config.proxies || []).map(p => p.name);
}
\`\`\`

---

## 3. 集成 Loyalsoldier 高精度第三方规则集 (rule-providers)

通过 Merge 模式引入 GitHub 高星开源规则集，可彻底解决冷门国内应用走海外代理造成的带宽浪费：

\`\`\`yaml
# 在 Merge 配置中注入 rule-providers
rule-providers:
  reject:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.yaml
    interval: 86400

  direct:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    path: ./ruleset/direct.yaml
    interval: 86400

rules:
  - RULE-SET,reject,REJECT
  - RULE-SET,direct,DIRECT
\`\`\`

配合高可靠的专线服务商（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），可确保仅有真正的出海流量经过专线隧道，国内流量 100% 毫秒级直连。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **排错诊断**：脚本编写语法错误导致白屏？参考 [Clash Verge Rev 常见报错全景排障手册](/tutorial/clash-verge-rev-troubleshooting-handbook)；
- **协议底座**：了解 Sing-box 新型规则集体系，参考 [Sing-box 规则集（Rule-Set）与智能分流实战](/tutorial/sing-box-ruleset-smart-routing)；
- **大模型实战**：配置 AI 解锁策略组，参考 [ChatGPT 4o 纯净住宅 IP 选线策略](/airport/iepl-qos-bypass-architecture)；
- **返回聚合导航**：探索全平台客户端指南，查阅 [客户端教程库聚合中心](/tutorial)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Subscription updates from proxy providers overwrite manual client configuration changes. Clash Verge Rev solves this with its Script and Merge extensibility pipeline. By writing custom JavaScript preprocessors, you can programmatically inject dedicated AI policy groups, bypass private subnets, and consume upstream rule-providers like Loyalsoldier on every refresh without manual upkeep.

---

## 1. Why Preprocessing Matters
Merges and scripts allow declarative transformations applied dynamically in memory when profiles are imported.

### Core Features:
- Inject custom proxy groups (e.g., dedicated AI routing).
- Prepend low-latency direct routes for LAN and corporate VPN subnets.
- Integrate dynamic HTTP rule-sets with automated cache validation.
`,
  },
  {
    slug: "clash-verge-rev-troubleshooting-handbook",
    title: {
      zh: "Clash Verge Rev 常见报错全景排障：Service 安装失败、订阅更新 0 节点与网络死锁恢复",
      en: "Clash Verge Rev Comprehensive Troubleshooting Handbook: Service Mode Failure, 0 Nodes Import & Deadlock Recovery",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "Clash Verge 极客调优",
      en: "Clash Verge Rev Geek Tuning",
    },
    description: {
      zh: "汇总 Clash Verge Rev 实际运行中的高频疑难杂症与技术排错方案。深入解决 Service Mode 服务安装失败、订阅更新提示 Fetch error 或 0 节点、关闭客户端后系统无法上网（网络死锁）以及虚拟网卡驱动冲突恢复。",
      en: "The definitive troubleshooting handbook for Clash Verge Rev. Step-by-step technical solutions for Service Mode installation failures, subscription fetch errors, zero-node parsing bugs, and system-wide internet lockouts after client shutdown.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> Clash Verge Rev 日常使用中最令人困扰的四大核心故障及其秒级恢复方法：
> 1. **关闭软件后整机打不开网页（网络死锁）**：由于软件非正常退出导致 Windows 系统代理注册表残留，直接在设置中搜索“代理服务器设置”，关闭【使用代理服务器】开关即可秒级恢复；
> 2. **订阅导入提示 Fetch Error 或 0 节点**：多数由于国内运营商 DNS 污染订阅域名引起，可在订阅 URL 中将机场域名替换为测速通过的直接 IP，或在浏览器中打开链接验证是否触发了安全验证；
> 3. **Service Mode 安装失败**：由于杀毒软件（360、火绒或 Windows Defender）拦截了服务注册，需在白名单放行并以管理员身份重新运行；
> 4. **TUN 模式开启后无网络**：多数由于本地网卡冲突或 Wintun.dll 被旧版覆盖，重置网络堆栈即可彻底修复。

---

## 1. 故障场景一：客户端退出后整机断网（网络死锁）

### 1.1 产生根因剖析
当开启【系统代理 (System Proxy)】时，Clash Verge Rev 会修改 Windows 注册表中的 Internet Settings 项，将系统的 HTTP 代理指向 \`127.0.0.1:7897\`。如果客户端意外崩溃、系统直接关机或未点“退出”便直接结束进程，该注册表项不会被自动复原。浏览器仍向已关闭的 \`7897\` 端口发送数据，导致所有网页报错 \`ERR_PROXY_CONNECTION_FAILED\`。

### 1.2 终端一行命令彻底恢复
无需重启电脑，打开 PowerShell 运行以下命令即可立即清空残留系统代理：

\`\`\`powershell
# 彻底关闭 Windows 系统代理并清空代理服务器地址
Set-ItemProperty -Path 'HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings' -Name ProxyEnable -Value 0
Set-ItemProperty -Path 'HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings' -Name ProxyServer -Value ''
Write-Host "系统代理已完全重置，网络恢复正常！" -ForegroundColor Green
\`\`\`

---

## 2. 故障场景二：订阅导入失败与 Fetch Error 排障

### 2.1 诊断与修复流程
1. **检查订阅链接是否被阻断**：在浏览器隐私窗口直接粘贴机场订阅链接，观察是否能正常下载到一个包含 YAML 内容的文本文件；
2. **DNS 污染修复**：部分机场的订阅下发域名可能被当地运营商 DNS 污染。将本地网络 DNS 修改为阿里的 \`223.5.5.5\` 或腾讯的 \`119.29.29.29\`；
3. **关闭安全软件 SSL 过滤**：部分杀毒软件启用了“HTTPS 流量扫描”，破坏了订阅下载时的 TLS 证书链，将其临时关闭即可正常拉取。

如果使用的是高可用专线（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），其后台提供多套防封动态订阅链接，可在用户后台直接切换。

---

## 3. 故障场景三：Service Mode（服务模式）安装报错

### 3.1 常见错误代码与清理
当提示 \`Install service error: Access is denied\` 或服务启动超时：

\`\`\`cmd
:: 以管理员身份打开 CMD 执行服务清理
sc stop clash_verge_service
sc delete clash_verge_service
\`\`\`

随后进入 Clash Verge Rev 的安装目录（默认在 \`C:\\Program Files\\Clash Verge\\resources\`），右键以管理员身份运行客户端，再次点击 Install Service 即可完成驱动装载。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **TUN 虚拟网卡配置**：排除服务故障后开启透明接管，参考 [Clash Verge Rev TUN 模式与虚拟网卡深度调优](/tutorial/clash-verge-rev-tun-mode-setup)；
- **驱动深入修复**：针对底层虚拟驱动排障，查阅 [Windows 平台 Wintun 驱动故障修复指南](/tutorial/windows-wintun-driver-repair-handbook)；
- **替代客户端**：若特定环境无法运行 Clash，可转向体验 [Sing-box 桌面客户端图形界面实操](/tutorial/sing-box-gui-desktop-setup)；
- **防跑路指南**：节点大面积变红时排查机场状态，参考 [机场跑路前的五大核心技术预警信号](/airport/early-warning-signs-of-proxy-exit-scams)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Four frequent Clash Verge Rev issues and instant fixes: 1. No internet after closing: Windows registry retains proxy settings, fix instantly by resetting ProxyEnable to 0; 2. Subscription Fetch Error: DNS poisoning of provider domain, switch DNS to 223.5.5.5 or use backup API links; 3. Service Mode install failure: Antivirus blocking service creation, remove stale service with \`sc delete clash_verge_service\`; 4. TUN mode silent failure: Outdated Wintun.dll conflicting with network adapters.

---

## 1. Resetting Stale Windows Proxy Settings
When closed unexpectedly, registry keys pointing to 127.0.0.1:7897 remain active. Run:
\`\`\`powershell
Set-ItemProperty -Path 'HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings' -Name ProxyEnable -Value 0
\`\`\`
`,
  },
  {
    slug: "sing-box-core-architecture-beginner-guide",
    title: {
      zh: "Sing-box 新一代通用代理平台入门全景：轻量核心架构、配置文件语法与客户端选型",
      en: "Sing-box Universal Proxy Platform Primer: Lightweight Architecture, Config Syntax & Client Ecosystem",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "Sing-box 极简实践",
      en: "Sing-box Minimalist Setup",
    },
    description: {
      zh: "全面梳理 Sing-box 通用代理平台的核心架构与设计理念。深度解析其基于 Go 语言原生开发的高性能网络栈、严谨的 JSON 配置文件语法、与传统 Clash 的底层差异及跨平台客户端选型建议。",
      en: "An exhaustive architectural exploration of Sing-box, the next-generation universal proxy platform. Covers Go-based high-concurrency network stack design, JSON configuration format, differences from Clash, and multi-platform client selection.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> Sing-box 是当前代理生态中最具颠覆性的新型开源核心。相比基于 YAML 的传统 Clash，Sing-box 采用完全原生的纯 JSON 配置架构，原生集成现代抗封锁协议（VLESS Reality、TUIC v5、Hysteria 2、ShadowTLS），在多核高并发吞吐场景下，其内存占用仅为原版 Clash 的 35%，单线程吞吐能力提升 22% 以上。对于注重极致低延迟与协议兼容性的进阶用户，Sing-box 是 2026 年最具前瞻性的网络底座。

---

## 1. Sing-box 诞生背景与架构革新

### 1.1 破除历史包袱的纯净网络栈
传统的科学出海工具往往基于年代久远的架构修修补补，而 Sing-box 从代码设计之初就立足于现代协议与通用代理平台（Universal Proxy Platform）。其核心优势体现在：
- **原生支持全部现代协议**：无需外挂任何第三方 Core，原生实现 VLESS、Reality、Hysteria 2、TUIC、WireGuard 与 SSH；
- **极致的资源开销控制**：采用精简的 Go 协程管理与零拷贝网络转发，常驻内存低至 20MB–35MB；
- **统一的规则集（Rule-Set）架构**：编译为二进制的高速 \`.srs\` 规则，秒级加载上万条域名规则而毫无卡顿。

---

## 2. Sing-box 核心配置模型结构拆解

Sing-box 配置文件采用严谨的 JSON 结构，主要由以下核心模块组成：

\`\`\`json
{
  "log": {
    "level": "info",
    "timestamp": true
  },
  "dns": {
    "servers": [
      {
        "tag": "remote-dns",
        "address": "https://1.1.1.1/dns-query",
        "detour": "select-out"
      },
      {
        "tag": "local-dns",
        "address": "223.5.5.5",
        "detour": "direct"
      }
    ]
  },
  "inbounds": [
    {
      "type": "mixed",
      "tag": "mixed-in",
      "listen": "127.0.0.1",
      "listen_port": 2080
    }
  ],
  "outbounds": [
    {
      "type": "selector",
      "tag": "select-out",
      "outbounds": ["专线节点-01", "专线节点-02", "direct"]
    },
    {
      "type": "direct",
      "tag": "direct"
    }
  ]
}
\`\`\`

- **inbounds（入站）**：接收本地应用程序流量（如 Mixed 协议整合了 HTTP 与 SOCKS5）；
- **outbounds（出站）**：流量发往的目标通道，包含具体代理节点、直连（direct）或阻断（block）；
- **route（路由）**：判定规则将每个数据包派发至对应的出站标签。

---

## 3. 全平台客户端推荐与选型指南

1. **Windows 平台**：
   - **Sing-box 原生 CLI**：最轻量，适合程序员与服务器后台常驻；
   - **Hiddify / FlClash**：提供开箱即用的现代化图形界面，完美兼容 Sing-box 核心。
2. **macOS 平台**：
   - **Sing-box for Apple Platforms**：Mac App Store 官方原生版本，支持系统级 Network Extension；
3. **Android / iOS**：
   - **Sing-box 官方 Android 客户端**；
   - **Shadowrocket / Loon**：支持直接解析 Sing-box 节点格式。

结合高品质专线（如 [光速云 2.5Gbps 双向 IEPL 节点](/artworks/guangsu-cloud)），可在 Sing-box 下获得极具弹性的网络体验。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **规则深入实操**：进一步编写高性能分流引擎，查阅 [Sing-box 规则集（Rule-Set）与智能分流实战](/tutorial/sing-box-ruleset-smart-routing)；
- **图形客户端落地**：小白用户配置桌面 GUI，参考 [Sing-box 桌面客户端图形界面实操](/tutorial/sing-box-gui-desktop-setup)；
- **配置格式转换**：从现有 Clash 订阅无损导入，查看 [Sing-box 与 Clash 订阅格式无损互转实战](/tutorial/sing-box-clash-subscription-converter)；
- **横向跑分对比**：对比不同客户端协议性能，查看 [晚高峰单线程下载速率总天梯榜](/airport/peak-hour-single-thread-ladder-ranking)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Sing-box is the most performant next-generation universal proxy core. Moving away from legacy YAML architectures, it features a native JSON schema and zero-copy routing pipeline with built-in VLESS Reality, TUIC v5, and Hysteria 2 support. It cuts memory usage to 35% of legacy Clash while improving single-thread network throughput by over 20%.

---

## 1. Architectural Highlights
- Native modern protocol implementations without external binaries.
- Binary rule-set compilation (.srs) for instant routing queries.
- Clean JSON schema dividing inbounds, outbounds, DNS, and routing rules.
`,
  },
  {
    slug: "sing-box-ruleset-smart-routing",
    title: {
      zh: "Sing-box 规则集（Rule-Set）与智能分流实战：配置低内存占用、高性能路由分流引擎",
      en: "Sing-box Rule-Set & Intelligent Routing: Deploying High-Performance, Minimal-Footprint Routing Engines",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "Sing-box 极简实践",
      en: "Sing-box Minimalist Setup",
    },
    description: {
      zh: "详解 Sing-box 独创的二进制规则集（.srs Rule-Set）编译与智能分流配置方案。手把手教你编写轻量化路由规则，实现国内 IP 毫秒级直连、海外 AI/流媒体精准出海与零内存开销。",
      en: "Master Sing-box binary rule-sets (.srs) for blazingly fast routing decisions with near-zero RAM footprint. Configure split-tunneling policies for domestic bypass, AI tooling, and streaming services.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 传统的文本规则列表（如含有数万条域名的 GeoIP / GeoSite 文本文件）在客户端启动时需要耗费几百兆内存进行字符串解析与正则匹配，极大拖慢系统响应。Sing-box 引入了革命性的 **编译型规则集（Binary Rule-Set，.srs 格式）**。通过预编译的二进制索引，Sing-box 匹配数万条国内外域名的耗时被压缩至微秒级别，内存开销减少 80% 以上。本文提供开箱即用的高性能分流配置模板，兼顾国内秒级直连与全球专线加速。

---

## 1. 编译型规则集 (.srs) 的技术优势

Sing-box 规则集分为两种存储格式：
- **Headless JSON 源码**：人类可读的 JSON 规则文件，用于编写和二次开发；
- **Compiled Binary (.srs)**：利用官方 \`sing-box rule-set compile\` 命令编译出的二进制文件。

| 指标 | 传统文本规则列表 | Sing-box 二进制规则集 (.srs) |
| :--- | :--- | :--- |
| **文件体积** | 12 MB ~ 25 MB | **1.2 MB ~ 2.5 MB**（压缩率达 90%） |
| **内存占用** | 180 MB ~ 320 MB | **仅 15 MB ~ 30 MB** |
| **查询算法复杂度** | O(N) 线性遍历或正则回溯 | **O(1) 哈希索引与高效 Radix 树** |
| **启动加载时间** | 1.8s ~ 4.2s | **< 80ms 毫秒级秒开** |

---

## 2. 生产级智能分流配置代码模板

以下配置文件展示了如何在线拉取官方维护的高质量 \`.srs\` 规则，实现精细化分流：

\`\`\`json
{
  "route": {
    "rule_set": [
      {
        "tag": "geosite-geolocation-cn",
        "type": "remote",
        "format": "binary",
        "url": "https://raw.githubusercontent.com/SagerNet/sing-box-ruleset/rule-set-geosite/geosite-geolocation-cn.srs",
        "download_detour": "direct"
      },
      {
        "tag": "geosite-openai",
        "type": "remote",
        "format": "binary",
        "url": "https://raw.githubusercontent.com/SagerNet/sing-box-ruleset/rule-set-geosite/geosite-openai.srs",
        "download_detour": "select-out"
      },
      {
        "tag": "geoip-cn",
        "type": "remote",
        "format": "binary",
        "url": "https://raw.githubusercontent.com/SagerNet/sing-box-ruleset/rule-set-geoip/geoip-cn.srs",
        "download_detour": "direct"
      }
    ],
    "rules": [
      {
        "rule_set": "geosite-openai",
        "outbound": "AI专用专线"
      },
      {
        "rule_set": ["geosite-geolocation-cn", "geoip-cn"],
        "outbound": "direct"
      },
      {
        "ip_is_private": true,
        "outbound": "direct"
      }
    ],
    "auto_detect_interface": true
  }
}
\`\`\`

---

## 3. 落地建议与专线协同

在设置分流策略时，建议将 OpenAI / Claude 等高风控 AI 节点单独绑定至高品质专线（如 [光速云 2.5Gbps IEPL 香港/日本专线](/artworks/guangsu-cloud)），而将常规 GitHub 或普通出海流量导向大带宽普通节点，实现流量与安全的最优平衡。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **客户端入门指南**：回顾 Sing-box 基础框架，参考 [Sing-box 新一代通用代理平台入门全景](/tutorial/sing-box-core-architecture-beginner-guide)；
- **格式快速转换**：将现有规则导入 Sing-box，查阅 [Sing-box 与 Clash 订阅格式无损互转实战](/tutorial/sing-box-clash-subscription-converter)；
- **底层网络知识**：深入理解路由转发原理，查看 [TUN 虚拟网卡模式原理深度解析](/tutorial/tun-mode-osi-layer3-deep-dive)；
- **专线跑分基准**：查看节点晚高峰表现，参考 [2026 晚高峰 42 家机场单线程天梯榜](/airport/peak-hour-single-thread-ladder-ranking)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Legacy text-based GeoIP/GeoSite lists consume hundreds of megabytes in memory and cause noticeable lookup latency. Sing-box introduces compiled binary rule-sets (.srs) that leverage Radix trees and hash lookups for microsecond routing queries with 80% less RAM usage. This guide provides production-ready split-tunneling templates separating domestic traffic, AI workloads, and streaming platforms.

---

## 1. Technical Benefits of Compiled Rule-Sets
- Compact binary payloads up to 90% smaller than plain text.
- Microsecond routing lookups powered by Radix search trees.
- Seamless remote rule-set caching with automatic update intervals.
`,
  },
  {
    slug: "sing-box-gui-desktop-setup",
    title: {
      zh: "Sing-box 桌面客户端图形界面实操：从零配置出海代理到 TUN 虚拟网卡全流量托管",
      en: "Sing-box Desktop GUI Walkthrough: From Initial Configuration to System-Wide TUN Interface Capture",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "Sing-box 极简实践",
      en: "Sing-box Minimalist Setup",
    },
    description: {
      zh: "面向普通用户的 Sing-box 桌面图形化客户端保姆级实操教程。覆盖 Windows / macOS 平台主流 Sing-box GUI 工具下载、一键订阅导入、图形化分流模式选择与开启虚拟网卡透明代理。",
      en: "User-friendly desktop walkthrough for Sing-box graphical interfaces across Windows and macOS. Step-by-step guidance on downloading GUI variants, importing subscriptions, and enabling full system-level TUN mode.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 尽管 Sing-box 命令行拥有无与伦比的性能，但繁琐的终端命令和手动编写 JSON 配置文件阻退了许多新手用户。目前开源社区已推出多款优秀的图形界面封装工具（如跨平台的 **Hiddify** 与 **FlClash**，以及原生的 **Sing-box for Apple Platforms**）。通过现代化 GUI，用户只需点击几下即可导入专线机场订阅链接（如 [光速云 IEPL 专线](/artworks/guangsu-cloud)），在图形化面板中直观查看节点延迟、切换分流规则并开启一键 TUN 虚拟网卡加速，兼顾顶尖内核性能与直观易用体验。

---

## 1. 主流 Sing-box 桌面 GUI 客户端横向评测

| 客户端名称 | 适用操作系统 | 界面风格 | 易用度评级 | 适用人群 |
| :--- | :--- | :--- | :--- | :--- |
| **Hiddify** | Windows / macOS / Linux / Android / iOS | 极简现代化 Material You | ★★★★★ | 零基础出海新手、多端统一用户 |
| **FlClash** | Windows / macOS / Linux / Android | 流畅 Flutter 跨平台 | ★★★★☆ | 习惯 Clash 操作逻辑但追求轻量化用户 |
| **Sing-box for Mac** | macOS (原生 App Store / DMG) | 苹果原生 Swift 设计 | ★★★★☆ | 追求极低功耗与原生体验的 Mac 用户 |

---

## 2. Windows 平台 Hiddify（Sing-box 内核）保姆级配置实战

### 2.1 软件下载与安装
1. 前往官方 GitHub Releases 页面，下载 \`Hiddify-Windows-Setup-x64.exe\`；
2. 双击安装程序，按提示完成安装并运行；
3. 首次启动时，区域选择【中国 (China)】，运行模式选择【VPN 模式（即 TUN 虚拟网卡模式）】。

### 2.2 订阅导入与一键连接
1. 打开机场后台，复制 Sing-box 或通用订阅链接；
2. 在 Hiddify 软件主界面点击右上角【加号 (+)】图标，选择【添加订阅链接】；
3. 粘贴订阅 URL 并命名，点击【保存】。软件将自动解析出所有可用节点；
4. 点击主界面的大圆形【连接】按钮，绿色对勾亮起即表示已成功接管全系统网络。

\`\`\`powershell
# 验证 Hiddify 代理下本地网络真实出口
curl.exe https://api.ipify.org
\`\`\`

---

## 3. 性能调优与故障恢复

- **游戏加速调优**：在设置中开启【严格路由 (Strict Route)】与【UDP 转发】，可显著改善外服游戏连线稳定性；
- **排障备用**：若遇到节点红线，优先尝试在主界面右上方执行【更新订阅 (Update Profile)】，同步最新机房节点信息。

搭配拥有 2.5Gbps 双向专线与稳定带宽保障的服务商（如 [光速云 IEPL 专线](/artworks/guangsu-cloud)），可确保 4K 视频秒开无缓冲。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **内核原理精讲**：了解 GUI 背后的 Sing-box 技术，参考 [Sing-box 新一代通用代理平台入门全景](/tutorial/sing-box-core-architecture-beginner-guide)；
- **移动端配置**：在手机端配置 Sing-box，参考 [Hiddify 全平台客户端全景实测](/tutorial/hiddify-next-all-in-one-client-guide)；
- **替代客户端选型**：对比 Clash 系列，查看 [Clash Verge Rev 完整安装教程](/tutorial/clash-verge-rev-beginner-guide)；
- **性价比选购**：了解优质专线资费，参考 [高性价比机场选购指南](/airport/budget-friendly-proxy-selection-guide)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> While Sing-box's CLI delivers peerless performance, desktop graphical frontends like Hiddify and FlClash bridge the gap for everyday users. This guide shows how to import provider subscriptions, toggle split-routing policies, and enable one-click TUN virtual interface acceleration across Windows and macOS without touching raw JSON files.

---

## 1. Desktop GUI Options
- **Hiddify**: Modern multi-platform Material interface powered by Sing-box.
- **FlClash**: Lightweight Flutter interface offering Clash-like controls with Sing-box performance.
- **Sing-box for Mac**: Native Swift GUI integrated with Apple Network Extensions.
`,
  },
  {
    slug: "sing-box-clash-subscription-converter",
    title: {
      zh: "Sing-box 与 Clash 订阅格式无损互转实战：解析 JSON 配置与 YAML 规则的映射机制",
      en: "Lossless Sing-box & Clash Subscription Conversion: Mapping JSON Schemas to YAML Profiles",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "Sing-box 极简实践",
      en: "Sing-box Minimalist Setup",
    },
    description: {
      zh: "深入讲解如何将传统的 Clash YAML 订阅无损转换为 Sing-box JSON 格式。解析 Subconverter 在线与本地转换原理、节点加密参数映射、分流规则继承与自建转换后端防隐私泄露实践。",
      en: "Master seamless conversion between Clash YAML and Sing-box JSON subscription profiles. Learn how Subconverter maps protocol parameters, transforms routing rules, and deploy a self-hosted conversion backend for maximum privacy.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 许多老牌机场仅提供 Clash YAML 或纯 Base64 订阅链接，并未原生提供 Sing-box JSON 订阅。使用公开的第三方在线“订阅转换平台”存在被记录 Token 与节点窃取的严重安全隐患。本文详细介绍两套**安全无损转换方案**：1. 使用本地自建的 Docker 版 **Subconverter** 进行纯离线转换，彻底杜绝隐私泄露；2. 掌握 Clash YAML 与 Sing-box JSON 核心节点参数的映射原理，手动编写自动化脚本实现节点无缝平移。

---

## 1. 在线转换的安全风险与黑产内幕

将包含敏感 Token 的机场订阅链接输入未经验证的第三方转换网址，面临极大风险：
- **节点被转售**：不法站点后台爬取订阅内的服务器 IP、端口与密码，将高质量专线打包为免费节点倒卖；
- **流量被盗刷**：原本属于用户的流量额度被第三方滥用，造成月底突发清零；
- **中间人规则注入**：转换服务在生成的规则末尾注入推广返利链接或挖矿脚本。

因此，强烈建议用户使用本地离线工具，或直接选用原生支持全协议全格式订阅的优质机场（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)）。

---

## 2. 本地自建 Subconverter 安全转换方案

使用 Docker 在本地或内网部署轻量级转换容器：

\`\`\`bash
# 启动本地 Subconverter 转换容器
docker run -d \\
  --name subconverter \\
  --restart always \\
  -p 25500:25500 \\
  tindy2013/subconverter:latest
\`\`\`

部署完成后，在本地浏览器或客户端中构造转换请求：
\`\`\`text
http://127.0.0.1:25500/sub?target=singbox&url=YOUR_AIRPORT_SUBSCRIBE_URL
\`\`\`
所有订阅解析与 JSON 编译完全在本地机器内存中进行，无任何网络数据包外泄。

---

## 3. 核心节点参数对应映射表

理解底层参数映射有助于在转换异常时快速定位排错：

| 节点属性 | Clash YAML 字段 | Sing-box JSON 字段 | 转换注意事项 |
| :--- | :--- | :--- | :--- |
| **服务器地址** | \`server: 1.2.3.4\` | \`"server": "1.2.3.4"\` | 保持一致 |
| **端口** | \`port: 443\` | \`"server_port": 443\` | 字段名称不同 |
| **加密方式** | \`cipher: auto\` | \`"method": "auto"\` | Shadowsocks 中注意字段映射 |
| **用户 UUID** | \`uuid: xxxx-xxxx\` | \`"uuid": "xxxx-xxxx"\` | 保持一致 |
| **Reality 公钥** | \`public-key: xxx\` | \`"tls": { "reality": { "public_key": "xxx" } }\` | 需嵌套在 tls 对象内 |

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **Sing-box 规则实操**：转换后配置分流策略，查阅 [Sing-box 规则集（Rule-Set）与智能分流实战](/tutorial/sing-box-ruleset-smart-routing)；
- **客户端排障**：遇到转换后 0 节点错误，参考 [Clash Verge Rev 常见报错全景排障手册](/tutorial/clash-verge-rev-troubleshooting-handbook)；
- **免费代理风险**：了解订阅泄露背后的危害，参考 [免费 VPN 如何将用户设备转化为黑产肉鸡出口](/airport/how-free-vpns-turn-devices-into-botnets)；
- **返回聚合导航**：探索全站架构，查看 [客户端教程库聚合中心](/tutorial)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Many providers only expose Clash YAML feeds. Utilizing public online conversion sites risks token hijacking and node bandwidth theft. This guide covers two secure approaches: self-hosting Subconverter locally via Docker to ensure 100% offline conversion, and understanding the parameter mapping between Clash YAML properties and Sing-box JSON outbound descriptors.

---

## 1. Security Risks of Public Converters
Public web converters often log subscription URLs and resell bandwidth. Self-hosting Subconverter locally via Docker guarantees full privacy.
`,
  },
];

// Generator execution
for (const art of batch1Articles) {
  const dir = path.join(targetDir, art.slug);
  fs.mkdirSync(path.join(dir, "body"), { recursive: true });

  const meta = {
    slug: art.slug,
    title: art.title,
    pubDate: art.pubDate,
    category: art.category,
    cluster: art.cluster,
    description: art.description,
  };

  fs.writeFileSync(
    path.join(dir, "index.json"),
    JSON.stringify(meta, null, 2),
    "utf-8",
  );
  fs.writeFileSync(path.join(dir, "body/zh.md"), art.bodyZh.trim(), "utf-8");
  fs.writeFileSync(path.join(dir, "body/en.md"), art.bodyEn.trim(), "utf-8");
  console.log(`✓ Generated Tutorial Article 1-8: ${art.slug}`);
}
