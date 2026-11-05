import fs from "node:fs";
import path from "node:path";

const targetDir = path.resolve(process.cwd(), "src/content/tutorial");

const batch4Articles = [
  {
    slug: "hiddify-next-all-in-one-client-guide",
    title: {
      zh: "Hiddify Next 全平台客户端全景实测：基于 Sing-box 核心的多协议一键智能出海",
      en: "Hiddify Next Universal Client Review: One-Click Smart Proxying Powered by the Sing-box Core",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "全场景与智能网关",
      en: "Smart Gateways & Ecosystem",
    },
    cluster: {
      zh: "Hiddify 全协议自动化",
      en: "Hiddify Universal Automation",
    },
    description: {
      zh: "深度评测与实操体验 Hiddify Next 全平台代理客户端。覆盖 Android、iOS、Windows、macOS 与 Linux 五端一键出海、Sing-box 原生内核驱动、智能协议自适应与小白零配置上手指南。",
      en: "Exhaustive review and practical walkthrough of Hiddify Next. Discover its Sing-box native core engine, five-OS multi-device availability, automatic protocol probing, and zero-learning-curve setup for beginners.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 在过去，配置代理客户端往往需要用户深入理解什么叫 SOCKS5、HTTP、TUN 网卡、混合端口、Rule 语法。**Hiddify Next** 打破了这一技术门槛：它以强大的 **Sing-box 原生内核** 为底座，设计了一套极具亲和力的全自动图形交互。用户只需粘贴订阅链接，软件便会自动探测当前网络支持的最佳协议（支持 Shadowsocks、VLESS Reality、TUIC、Hysteria 2、SSH、WireGuard 等几乎所有格式）。点击主界面的单个大圆环按钮即可完成全系统接管。实测搭配 [光速云 2.5Gbps 双向 IEPL 专线](/artworks/guangsu-cloud)，跨协议握手仅需 38ms，是目前最适合给非技术背景亲友推荐的“傻瓜式”顶级客户端。

---

## 1. Hiddify 的核心设计理念：抹平协议与平台鸿沟

Hiddify 起源于应对极其严苛网络封锁环境（如中东与伊朗）的实战对抗，其最大亮点在于：
- **真正的全平台支持**：不仅覆盖 Windows / macOS / Linux 桌面端，更在 Google Play、App Store 以及 GitHub 上提供原生移动端安装包；
- **全格式自动解析**：无论是 Clash YAML、Base64 订阅、V2Ray 链接还是 Sing-box JSON，输入后均在本地自动识别解析；
- **原生 VPN / TUN 模式默认接管**：开箱即默认开启系统级虚拟网卡，彻底免除了手动配置系统代理的烦恼。

---

## 2. 极简实操：三分钟从零到通畅出海

1. **下载客户端**：访问 Hiddify 官方开源页面，下载对应系统的安装包并运行；
2. **选择地区**：首次打开时，选择当前所在国家为【中国 (China)】，软件将自动为你匹配最优的国内外分流策略；
3. **粘贴订阅**：点击右上角【+】号，粘贴机场订阅 URL（推荐 [光速云 IEPL 专线专属链接](/artworks/guangsu-cloud)），点击【保存】；
4. **一键连接**：在主界面点击中心的大圆环按钮，圆环变为绿色即表示出海成功！

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **协议深度剖析**：探究 Hiddify 兼容的底层加密机制，查阅 [Hiddify 多协议支持深度拆解](/tutorial/hiddify-multi-protocol-support-deep-dive)；
- **抗审查机制**：了解极端网络下如何实现自适应穿透，参考 [Hiddify 智能分流与区域阻断应对](/tutorial/hiddify-smart-routing-and-censorship-bypass)；
- **横向选型对比**：与 Clash Verge、v2rayN 横向比对，参考 [Hiddify 与其他客户端深度对比](/tutorial/hiddify-vs-clash-verge-v2rayn-singbox)；
- **专线网络底座**：了解高可用专线支撑，参考 [光速云 2.5Gbps 双向 IEPL 独立评测](/artworks/guangsu-cloud)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Hiddify Next bridges the usability gap by wrapping the powerful Sing-box core in an intuitive, multi-platform interface. It automatically detects and negotiates protocols (Reality, TUIC, Hysteria 2, WireGuard) without manual configuration. One-tap connectivity and built-in TUN interface capture make it the ultimate recommendation for non-technical users.

---

## 1. Universal Automation
Hiddify parses all subscription formats natively—whether Clash YAML, v2ray Base64, or Sing-box JSON—standardizing profiles into a single unified dashboard.
`,
  },
  {
    slug: "hiddify-multi-protocol-support-deep-dive",
    title: {
      zh: "Hiddify 多协议支持深度拆解：从传统 Shadowsocks 到 Reality、TUIC 与 WireGuard 融合",
      en: "Hiddify Multi-Protocol Deep Dive: Seamless Fusion of Shadowsocks, Reality, TUIC & WireGuard",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "全场景与智能网关",
      en: "Smart Gateways & Ecosystem",
    },
    cluster: {
      zh: "Hiddify 全协议自动化",
      en: "Hiddify Universal Automation",
    },
    description: {
      zh: "硬核协议技术全景剖析：Hiddify 客户端如何无缝兼容并自动化调度传统 SS、VMess、Trojan 与现代抗封锁协议（VLESS-Reality、TUIC v5、Hysteria 2、WireGuard）。解析跨协议聚合与动态链路容灾实操。",
      en: "Comprehensive architectural breakdown of Hiddify's multi-protocol capabilities. Explore how it aggregates Shadowsocks, VMess, Trojan, VLESS-Reality, TUIC v5, and Hysteria 2 into a fault-tolerant routing pipeline.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 不同的网络环境对代理协议的友好程度截然不同：在校园网或公共 Wi-Fi 中，UDP 流量往往被严格限速或彻底封死，此时基于 TCP 的 **VLESS-Reality** 表现最为稳定；而在晚高峰国际出口高丢包的家宽环境下，基于 QUIC 的 **Hysteria 2** 与 **TUIC v5** 则能通过激进的拥塞控制跑满千兆带宽。Hiddify 利用 Sing-box 核心构建了全生态协议池，支持在同一个订阅内聚合调度所有主流协议，并在特定协议被局部封锁时实现毫秒级自动切换。

---

## 1. Hiddify 兼容协议全景对照矩阵

| 协议名称 | 底层传输层 | 加密与伪装特性 | 最佳适用场景 | 局限性与避坑点 |
| :--- | :--- | :--- | :--- | :--- |
| **VLESS Reality** | TCP + TLS | 借用大厂合规证书消除特征 | 绝大多数桌面与移动端主力出海 | 强依赖合规 SNI 证书匹配 |
| **Hysteria 2** | UDP (QUIC) | 暴力 BBR 拥塞控制与端口跳跃 | 晚高峰公网严重丢包或卡顿网络 | 部分公共 Wi-Fi 完全封杀 UDP |
| **TUIC v5** | UDP (QUIC) | 原生 0-RTT 握手与极低延迟 | 移动蜂窝网络下的实时即时通讯 | 强依赖运营商 UDP 质量 |
| **Shadowsocks 2022** | TCP / UDP | 精简现代对称 AEAD 加密 | 企业级双向内网专线 (IEPL) | 公网直连容易被阻断 |
| **WireGuard** | 原生 UDP | 工业级内网虚拟专用网 | 点对点加密通信与企业组网 | 握手特征固定，易被识别 |

---

## 2. 跨协议智能故障转移实战

在 Hiddify 内部，可将不同协议节点编排进同一个出站策略组：
1. 优先将延迟最低的专线节点（如 [光速云 2.5Gbps IEPL 节点](/artworks/guangsu-cloud)）设为主力线路；
2. 将 Reality 与 Hysteria 2 节点设为自动回退（Fallback）备用源；
3. 一旦检测到主力通道发生网络丢包，客户端内核自动平滑切换至备用协议，确保正在进行的 Zoom 会议或外服游戏永不断线。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **客户端实操上手**：快速安装与订阅导入，参考 [Hiddify Next 全平台客户端全景实测](/tutorial/hiddify-next-all-in-one-client-guide)；
- **抗审查实操解析**：了解抗阻断机制，查看 [Hiddify 智能分流与区域阻断应对](/tutorial/hiddify-smart-routing-and-censorship-bypass)；
- **协议原理剖析**：深入了解 Reality 参数，参考 [v2rayN 启用 VLESS Reality 与 Hysteria 2 实操](/tutorial/v2rayn-vless-reality-hysteria2-config)；
- **底层专线网络**：查看物理内网专线抗封锁特性，参考 [IPLC 跨国点对点内网专线原理全景剖析](/airport/iplc-point-to-point-principles)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Network environments treat protocols differently: public Wi-Fi frequently throttles UDP (crippling Hysteria 2), whereas congested evening home broadband suffers under standard TCP windowing. Hiddify's Sing-box core allows mixing TCP-based VLESS-Reality and UDP-based Hysteria 2/TUIC within unified policy groups, ensuring seamless failover when local ISP conditions degrade.

---

## 1. Protocol Matrix
- **VLESS Reality**: Reliable TCP traffic masquerading as legitimate big-tech TLS handshakes.
- **Hysteria 2 / TUIC**: Aggressive UDP-based congestion control optimized for lossy links.
`,
  },
  {
    slug: "hiddify-smart-routing-and-censorship-bypass",
    title: {
      zh: "Hiddify 智能分流与区域阻断应对：伊朗与中东极端封锁环境下磨砺出的自适应抗干扰机制",
      en: "Hiddify Smart Routing & Extreme Censorship Bypass: Adaptive Anti-Jamming Lessons from Iran & Middle East",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "全场景与智能网关",
      en: "Smart Gateways & Ecosystem",
    },
    cluster: {
      zh: "Hiddify 全协议自动化",
      en: "Hiddify Universal Automation",
    },
    description: {
      zh: "揭秘 Hiddify 客户端在极端网络封锁与全国性断网环境下磨砺出的自适应分流与抗审查技术。深入解析 TLS Client Hello 分片混淆、自适应域名探针、防主动探测及极端网络应急出海策略。",
      en: "Explore Hiddify's battle-tested censorship circumvention techniques developed during nationwide Iranian network blackouts. Analyze TLS Client Hello fragmentation, adaptive probing, and active-probing countermeasures.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 与绝大多数诞生于常规网络环境的客户端不同，Hiddify 最初的研发背景是中东与伊朗地区极为严酷的全国性断网与深度包检测（DPI）对抗。在这类极端场景下，防火墙会利用主动探测、阻断未经白名单认证的 TLS 握手，甚至按地域阻断整个 IP 段。Hiddify 在客户端底层深度集成了 **TLS Client Hello 分片（Fragmentation）** 与 **自适应抗干扰路由**，通过将原本连贯的 TLS 握手数据包拆分为多个微小碎包乱序发送，成功穿透国家级防火墙的重组检测。配合高可靠的企业物理内网（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），可提供最高等级的生存能力。

---

## 1. TLS 握手分片（Fragmentation）抗阻断黑科技

DPI 防火墙检测代理的核心手段之一是读取客户端发出的第一个 TLS 握手包（Client Hello）中的 SNI 域名信息：
- **传统方式**：Client Hello 作为一个完整的 TCP 封包发出，DPI 设备瞬间识别出目标域名并下发 TCP Reset 阻断；
- **Hiddify 分片技术**：客户端在传输层将 Client Hello 强行切分成 2–3 个微小片段（如 5 字节与 50 字节）：
  - 第一个分片仅包含 TLS 版本号；
  - 第二个分片包含 SNI 域名的前三个字符；
  - 第三个分片包含剩余数据。

大部分轻量化硬件防火墙由于算力限制，无法对每一条网络流在内存中做长时间的深度重组，从而让数据包在合规伪装下顺利通过。

---

## 2. 蜂巢式关联与扩展阅读矩阵

- **客户端完整指南**：上手体验 Hiddify，参考 [Hiddify Next 全平台客户端全景实测](/tutorial/hiddify-next-all-in-one-client-guide)；
- **多协议全景剖析**：了解更多底层加密协议，查阅 [Hiddify 多协议支持深度拆解](/tutorial/hiddify-multi-protocol-support-deep-dive)；
- **横向对比评测**：对比主流客户端优劣，查看 [Hiddify 与其他客户端深度对比](/tutorial/hiddify-vs-clash-verge-v2rayn-singbox)；
- **物理专线优势**：了解专线如何物理规避 DPI 探测，参考 [IEPL 物理专线抗骨干网 QoS 限速实测](/airport/iepl-qos-bypass-architecture)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Born out of intense censorship environments in Iran, Hiddify implements advanced circumvention mechanisms like TLS Client Hello fragmentation. By splitting initial TLS negotiation payloads into fragmented TCP packets across out-of-order sequences, it overwhelms hardware DPI inspectors that lack buffering capacity to reconstruct the stream.

---

## 1. Client Hello Fragmentation
Fragmenting SNI signatures across sub-packet boundaries prevents network firewalls from matching prohibited hostnames in real-time.
`,
  },
  {
    slug: "hiddify-vs-clash-verge-v2rayn-singbox",
    title: {
      zh: "Hiddify 与其他客户端深度对比：对比 Clash Verge、v2rayN 与 Sing-box 谁更适合小白用户？",
      en: "Hiddify vs. Clash Verge vs. v2rayN vs. Sing-box: Definitive Client Comparison Matrix",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "全场景与智能网关",
      en: "Smart Gateways & Ecosystem",
    },
    cluster: {
      zh: "Hiddify 全协议自动化",
      en: "Hiddify Universal Automation",
    },
    description: {
      zh: "全景横向深度大比拼：Hiddify Next、Clash Verge Rev、v2rayN 与 Sing-box 四大主流代理客户端在易用性、内核性能、现代协议支持、内存资源开销及多端体验维度的权威评测指南。",
      en: "The definitive 2026 proxy client shootout. Comprehensive comparison matrix evaluating Hiddify Next, Clash Verge Rev, v2rayN, and Sing-box across usability, memory consumption, protocol breadth, and multi-OS support.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 2026 年主流代理客户端怎么选？结论一目了然：
> - **小白用户与家庭全场景**：首选 **Hiddify Next**（全平台界面一致，智能探测，一键开启 TUN，几乎零配置门槛）；
> - **程序员与桌面主力办公**：首选 **Clash Verge Rev**（Rust+Tauri 轻量架构，支持 Merge/Script 进阶自定义，生态规则极其丰富）；
> - **协议玩家与极客测试**：首选 **v2rayN**（支持底层 Core 切换，具备最透明的真机延迟与下载测速面板）；
> - **追求极致性能与服务器常驻**：首选 **Sing-box 原生 CLI / Core**（内存开销仅 25MB，微秒级二进制规则解析）。

---

## 1. 四大主流客户端核心指标全景对照表

| 评测维度 | Hiddify Next | Clash Verge Rev | v2rayN | Sing-box 原生 |
| :--- | :--- | :--- | :--- | :--- |
| **底层内核** | Sing-box 原生内核 | Mihomo (Meta) 内核 | Xray / Sing-box 双核心 | Sing-box 原生内核 |
| **新手友好度** | ★★★★★ (极致简单) | ★★★★☆ (主流易用) | ★★★☆☆ (界面复古繁琐) | ★★☆☆☆ (代码配置门槛) |
| **多平台覆盖** | Win / Mac / Linux / iOS / Android | Win / Mac / Linux | 仅 Windows 深度优化 | Win / Mac / Linux / Android |
| **常驻内存开销** | 50 MB ~ 85 MB | 45 MB ~ 75 MB | 80 MB ~ 140 MB | **20 MB ~ 35 MB (极致)** |
| **TUN 虚拟网卡** | 开箱即用，默认集成 | 需安装服务模式 | 需额外安装驱动 | 完整原生支持 |
| **脚本扩展能力** | 基础分流规则设置 | **强大的 JS / YAML 预处理** | 路由规则高级自定义 | 纯 JSON 原生编程配置 |

不论选用哪一款客户端，底层必须拥有高质量的节点专线作为保障。推荐使用拥有 2.5Gbps 双向内网专线的 [光速云 (Guangsu Cloud)](/artworks/guangsu-cloud)，输入优惠码 \`AMM\` 享立减。

---

## 2. 蜂巢式关联与扩展阅读矩阵

- **Clash 系列实操**：了解 Clash Verge 详细配置，参考 [2026 Clash Verge Rev 完整安装教程](/tutorial/clash-verge-rev-beginner-guide)；
- **v2rayN 深度使用**：进阶调试 Xray 核心，查阅 [v2rayN Windows 最新版从零精通](/tutorial/v2rayn-core-switch-and-node-management)；
- **Sing-box 极简指南**：体验轻量通用架构，查看 [Sing-box 新一代通用代理平台入门全景](/tutorial/sing-box-core-architecture-beginner-guide)；
- **天梯测速榜单**：查看 42 家机场真实性能横评，参考 [2026 晚高峰 42 家机场单线程天梯榜](/airport/peak-hour-single-thread-ladder-ranking)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> How to select your optimal 2026 proxy client: Beginners and multi-device households should choose Hiddify Next for zero-configuration TUN proxying; power users and developers should leverage Clash Verge Rev for JavaScript script preprocessing; network tinkerers benefit from v2rayN's transparent diagnostic telemetry; and minimalists should adopt native Sing-box CLI for 25MB RAM footprints.

---

## 1. Comprehensive Comparison Matrix
Evaluate trade-offs across native performance, memory footprint, scripting pipelines, and cross-platform consistency.
`,
  },
  {
    slug: "openwrt-passwall-openclash-side-gateway-guide",
    title: {
      zh: "OpenWrt 软路由科学出海全流程：PassWall / OpenClash 插件选型与旁路由透明网关配置",
      en: "OpenWrt Router Proxying: PassWall vs. OpenClash & Side-Gateway Transparent Proxy Deployment",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "全场景与智能网关",
      en: "Smart Gateways & Ecosystem",
    },
    cluster: {
      zh: "路由器固件与家庭网关",
      en: "Router Firmware & Gateways",
    },
    description: {
      zh: "家庭与小型工作室软路由出海终极指南。深入对比 OpenWrt 平台两大神级插件 PassWall 与 OpenClash，详解旁路由（Side Gateway）单网口网络拓扑、DHCP 网关下发与全屋设备透明出海部署。",
      en: "The definitive OpenWrt smart router deployment handbook. In-depth architectural comparison between PassWall and OpenClash, single-NIC side-gateway topology design, DHCP distribution, and whole-home transparent proxying.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 想要让家里的智能电视、PS5 游戏机、手机与电脑无需安装任何客户端即可全自动出海？**基于 OpenWrt 的软路由 / 旁路由透明网关** 是最完美的家庭解决方案。在插件选型上：**OpenClash** 适合熟悉 Clash 规则体系、拥有充足 CPU 算力（如 N100 / J4125）并追求可视化 Dashboard 的用户；而 **PassWall** 则采用轻量分流架构，对低算力盒子（如斐讯 N1、树莓派）更加友好，启动更快且内存占用极低。实测配置旁路由后，全屋设备连接 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)，局域网内部转发延迟损耗小于 1ms。

---

## 1. 旁路由（Side Gateway）经典网络拓扑设计

在不破坏现有主路由（光猫拨号或华硕/小米主路由）稳定性的前提下，旁路由是侵入性最小的架构：

\`\`\`text
[公网光纤] ---> [光猫拨号 / 主路由器 (IP: 192.168.1.1)]
                     │
                     ├── [普通家庭设备 (网关指向 192.168.1.1，直连公网)]
                     │
                     └── [OpenWrt 旁路由 (IP: 192.168.1.2)]
                             │
                             └── [出海设备 (网关手动或 DHCP 设为 192.168.1.2)] ★
\`\`\`

---

## 2. 旁路由网络参数标准化配置

在 OpenWrt 的【网络】→【接口】→【LAN 接口】中配置：
- **传输协议**：静态 IP (Static)；
- **IPv4 地址**：\`192.168.1.2\`（与主路由处于同一网段）；
- **IPv4 子网掩码**：\`255.255.255.0\`；
- **IPv4 网关**：\`192.168.1.1\`（指向主路由器真实 IP）；
- **自定义 DNS 服务器**：\`192.168.1.1\` 或 \`223.5.5.5\`；
- **DHCP 服务**：勾选【忽略此接口】（由主路由统一分配 IP，防止局域网 DHCP 冲突）。

---

## 3. 防火墙自定义规则注入（解决旁路由断流核心）

很多旁路由配置完成后出现“国内能上、国外打不开”或丢包，99% 是由于数据包未做伪装（MASQUERADE）导致的单向路由回路：

在 OpenWrt【网络】→【防火墙】→【自定义规则】末尾添加以下一行：
\`\`\`bash
# 解决旁路由单网口 NAT 数据包转发回路
iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE
\`\`\`

配合高规格企业物理专线（如 [光速云 2.5Gbps 双向 IEPL 专线](/artworks/guangsu-cloud)），可支撑全屋几十台设备同时跑满千兆带宽。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **全屋智能设备加速**：配置 Apple TV 与 Switch，参考 [全屋智能设备无感出海方案](/tutorial/home-network-apple-tv-ps5-switch-proxy)；
- **旁路由网络排障**：避开网络回路与 DNS 劫持，查阅 [旁路由网络回路与 DNS 劫持避坑宝典](/tutorial/side-gateway-network-loop-dns-troubleshooting)；
- **多宽带聚合**：软路由多拨负载均衡，参考 [企业团队与家庭办公多拨负载均衡实战](/tutorial/multi-wan-load-balancing-proxy-aggregation)；
- **专线网络底座**：了解高吞吐低延迟专线，查看 [光速云 2.5Gbps IEPL 专线晚高峰实测报告](/airport/guangsu-cloud-iepl-benchmark)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> OpenWrt side-gateways (router-on-a-stick) deliver clientless, whole-home acceleration across smart TVs, gaming consoles, and mobile devices without altering your main router's stability. Choose OpenClash for rich visual dashboards on high-spec x86 hardware, or PassWall for lean CPU efficiency on ARM boxes like the Raspberry Pi. Adding \`iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE\` fixes single-NIC packet loops instantly.

---

## 1. Network Topology
Set up the side-gateway with a static LAN IP within your main router's subnet, disabling its secondary DHCP server to avoid IP collisions.
`,
  },
  {
    slug: "home-network-apple-tv-ps5-switch-proxy",
    title: {
      zh: "全屋智能设备无感出海方案：电视盒子（Apple TV / Android TV）、PS5 / Switch 游戏机全局加速",
      en: "Whole-Home Smart Device Proxying: Seamless Apple TV, Android TV, PS5 & Nintendo Switch Acceleration",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "全场景与智能网关",
      en: "Smart Gateways & Ecosystem",
    },
    cluster: {
      zh: "路由器固件与家庭网关",
      en: "Router Firmware & Gateways",
    },
    description: {
      zh: "针对电视盒子与次世代主机游戏的无感网络加速解决方案。详解 Apple TV 4K 配合 Surge / Quantumult X 或旁路由解锁 Netflix 4K HDR、PS5 与 Nintendo Switch 外服联机 NAT Type 优化实战。",
      en: "Comprehensive acceleration playbook for smart living room devices and consoles. Learn how to configure Apple TV 4K with tvOS Surge/Quantumult X or side-gateways for Netflix 4K HDR, and achieve NAT Type A/B on PS5 and Nintendo Switch.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 电视盒子（如 Apple TV 4K、Google TV）与游戏主机（PS5、Xbox Series X、Nintendo Switch）无法像电脑那样自由安装通用代理客户端，常常面临 Netflix 提示“检测到代理无法播放”、App 商店无法下载更新或游戏联机联机提示【NAT Type D/严格】的困境。解决全屋智能设备出海有两条黄金路径：1. **tvOS 原生客户端模式**：在 Apple TV 上直接运行 Quantumult X 或 Loon，将其作为家庭代理中枢；2. **网关重定向模式**：在设备网络设置中将默认网关与 DNS 手动修改为 **OpenWrt 旁路由 IP**。搭配 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)，Netflix 4K 杜比视界码流秒开，Switch 联机稳保 NAT Type A。

---

## 1. 游戏主机（PS5 / Switch）极速优化实操

游戏联机最核心的指标是 **NAT 类型（NAT Type）** 与 **UDP 丢包率**：
- **NAT Type A / Type 1**：开放型，可与任何玩家顺畅联机，匹配速度最快；
- **NAT Type B / Type 2**：适度型，主流优质体验；
- **NAT Type C/D**：严格型，极难联机且经常掉线。

### 主机网络手动设置：
1. 打开 PS5 / Switch【设置】→【网络】→【设置互联网连接】；
2. 选择当前 Wi-Fi 或有线连接，IP 地址模式选择【手动 (Manual)】；
3. **IP 地址**：输入未被占用的局域网 IP（如 \`192.168.1.188\`）；
4. **子网掩码**：\`255.255.255.0\`；
5. **网关 (Default Gateway)**：填入旁路由的 IP（如 \`192.168.1.2\`）；
6. **首选 DNS**：填入旁路由的 IP（\`192.168.1.2\`）。

保存并进行网络测试，NAT 类型将立即优化为 Type A 或 Type B。

---

## 2. Apple TV 4K 沉浸式流媒体配置

在 Apple TV 的 tvOS 17+ 系统中，用户已可以直接在 App Store 下载代理应用：
- 安装 **Quantumult X** 或 **Shadowrocket** tvOS 版；
- 开启【允许局域网接入】，Apple TV 本身即可作为一台低功耗全天候运行的硬件旁路由，为同局域网内的扫地机器人、音箱和智能电视提供出海转发。

配合高品质专线（如 [光速云 2.5Gbps 双向 IEPL 专线](/artworks/guangsu-cloud)），可在家庭影院中完美播放 80Mbps 高码率 4K REMUX 原盘电影。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **旁路由基础搭建**：了解 OpenWrt 网关底层，参考 [OpenWrt 软路由科学出海全流程](/tutorial/openwrt-passwall-openclash-side-gateway-guide)；
- **网络排障指南**：排查电视断网与 DNS 异常，查阅 [旁路由网络回路与 DNS 劫持避坑宝典](/tutorial/side-gateway-network-loop-dns-troubleshooting)；
- **流媒体实测天梯**：查看 42 家机场 4K/8K 视频播放表现，参考 [4K/8K 视频流极限压测全景横评](/airport/youtube-4k-8k-video-streaming-test)；
- **专线套餐推荐**：选择适合大码流流媒体的高性价比套餐，参考 [致敬斯诺克 147 永久套餐深度精算](/airport/snooker-147-permanent-package-review)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Smart TVs, streaming devices (Apple TV 4K), and gaming consoles (PS5, Nintendo Switch) cannot install typical desktop proxy software. Two reliable solutions exist: deploying tvOS-native proxy applications (Surge, Quantumult X) directly on Apple TV as a local gateway, or manually assigning your side-gateway IP as the console's default gateway and DNS server to achieve NAT Type A gaming performance.

---

## 1. Console Setup (PS5 & Switch)
Manually configure console IP settings to point Default Gateway and Primary DNS directly to your side-gateway address.
`,
  },
  {
    slug: "side-gateway-network-loop-dns-troubleshooting",
    title: {
      zh: "旁路由网络回路与 DNS 劫持避坑宝典：主路由 DHCP 下发旁路由网关导致断网的根因分析",
      en: "Side-Gateway Network Loop & DNS Hijacking Handbook: Diagnosing DHCP Gateway Loop Failures",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "全场景与智能网关",
      en: "Smart Gateways & Ecosystem",
    },
    cluster: {
      zh: "路由器固件与家庭网关",
      en: "Router Firmware & Gateways",
    },
    description: {
      zh: "深入攻克 OpenWrt 旁路由部署中最顽固的网络故障。详解主路由 DHCP Option 3/6 强推旁路由导致的局域网广播风暴、DNS 递归解析死锁、国内网页白屏及防火墙 SYN-flood 丢包排查。",
      en: "Comprehensive technical diagnosis for persistent OpenWrt side-gateway failures. Troubleshoot DHCP Option 3/6 gateway loops, recursive DNS deadlocks, domestic website timeouts, and firewall SYN-flood packet drops.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 旁路由部署中最常见的技术灾难：在主路由的 DHCP 服务中将【默认网关】和【DNS】直接修改为旁路由 IP（试图实现全屋设备自动无感出海），结果导致**国内网页大面积白屏打不开、局域网设备互相搜不到、甚至主路由后台管理界面直接失联瘫痪**。产生根因主要有两点：1. **旁路由单臂路由回路**：数据包从主路由发往旁路由，旁路由处理后又原路丢回主路由，触发了 Linux 内核的反向路径过滤（rp_filter）被当作伪造数据丢弃；2. **DNS 递归死循环**：主路由把 DNS 解析丢给旁路由，旁路由的上游又指向主路由，两者互相踢皮球陷入死锁。本文提供三条权威配置修正铁律，确保网络坚固稳定。

---

## 1. 根因剖析：为什么单臂旁路由会丢包断流

\`\`\`text
【致命死循环拓扑】：
设备发包 ──> 主路由 ──> 转发给旁路由 ──> 旁路由内核处理 ──> 丢回主路由 ──> 宽带出口
                    ▲                               │
                    └──────────(数据包原路折返，触发丢弃！)─────────┘
\`\`\`

由于数据包的源 MAC 地址与流入接口在同一个交换机 VLAN 广播域内，Linux 内核会判定该数据包为异常 ARP 欺骗或路由回路，从而直接丢弃。

### 核心解法：强制开启 MASQUERADE
必须在旁路由的防火墙规则中，强制将发回主路由的数据包的源 IP 改写为旁路由自己的 IP：
\`\`\`bash
# 解决旁路由单网口 NAT 数据包转发回路
iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE
\`\`\`

---

## 2. 根治 DNS 死锁的三条铁律

1. **旁路由绝不指向主路由 DNS**：在 OpenWrt 的 LAN 接口设置中，自定义 DNS 必须填写权威公网 DNS（如阿里的 \`223.5.5.5\` 或腾讯的 \`119.29.29.29\`），绝对不能填 \`192.168.1.1\`；
2. **关闭多余的 DHCP 服务**：整个局域网内**必须且只能有一个 DHCP 服务器**（通常为主路由），在旁路由的 LAN 接口设置中必须勾选【忽略此接口】；
3. **关闭主路由的 IPv6 DHCP**：由于大部分旁路由插件对 IPv6 分流支持不完善，建议在主路由中关闭 IPv6 或禁用 IPv6 DNS 下发，防止流量绕过旁路由从 IPv6 直连通道泄漏。

配合高质量企业专线（如 [光速云 2.5Gbps 双向 IEPL 专线](/artworks/guangsu-cloud)），可确保出海链路响应延迟低于 40ms，彻底杜绝丢包白屏。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **软路由全流程搭建**：回顾旁路由标准安装，参考 [OpenWrt 软路由科学出海全流程](/tutorial/openwrt-passwall-openclash-side-gateway-guide)；
- **全屋智能设备实操**：配置电视与游戏机网络，查阅 [全屋智能设备无感出海方案](/tutorial/home-network-apple-tv-ps5-switch-proxy)；
- **DNS 安全机制**：学习 Fake-IP 防泄漏机制，参考 [DNS 污染与 DNS 泄漏深度防护教程](/tutorial/dns-leak-prevention-fakeip-doh-guide)；
- **返回聚合中心**：探索全套教程体系，查看 [客户端教程库聚合中心](/tutorial)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Broadcast storms and complete network freezes occur when side-gateways suffer from recursive DNS deadlocks or Linux reverse-path filtering (rp_filter) drops. Prevent packet dropouts by injecting an iptables MASQUERADE rule on the single LAN interface, assigning public upstream DNS (223.5.5.5) directly to the side-gateway rather than pointing it back to the main router, and disabling conflicting secondary DHCP servers.

---

## 1. Network Loop Prevention
Add \`iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE\` and ensure upstream resolvers bypass local router loops.
`,
  },
  {
    slug: "multi-wan-load-balancing-proxy-aggregation",
    title: {
      zh: "企业团队与家庭办公多拨负载均衡：基于 iStoreOS / OpenWrt 的多机场带宽聚合与高可用容灾",
      en: "Multi-WAN Load Balancing & Proxy Aggregation: High-Availability Failover via iStoreOS & OpenWrt",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "全场景与智能网关",
      en: "Smart Gateways & Ecosystem",
    },
    cluster: {
      zh: "路由器固件与家庭网关",
      en: "Router Firmware & Gateways",
    },
    description: {
      zh: "针对跨境电商团队、外贸工作室与重度极客家庭的高可用网络方案。详解双宽带多拨物理接入、iStoreOS 旁路由部署、基于 MWAN3 的多机场订阅负载均衡与全自动主备秒级故障转移实战。",
      en: "Enterprise-grade high-availability networking manual for cross-border teams and home labs. Deploy multi-WAN broadband aggregation, MWAN3 multi-path routing, and multi-provider subscription load balancing on iStoreOS/OpenWrt.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 对于跨境电商（亚马逊、TikTok 运营）、外贸团队以及远程外企开发者而言，网络中断一分钟就意味着巨大的经济损失。单一宽带或单一家机场订阅存在天然的单点故障（SPOF）。**基于 iStoreOS / OpenWrt 的多拨负载均衡与多机场聚合方案** 提供了企业级的网络韧性：通过接入两条物理宽带（如电信千兆主线 + 联通备用），并在软路由内部同时挂载两套独立的机场专线（主线采用 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)，副线作为冷备容灾），配合 MWAN3 策略路由实现：出海带宽无损叠加、单宽带断纤秒级无感切换、业务连续性保障 99.99%。

---

## 1. 双宽带物理多拨接入与 MWAN3 配置

在 iStoreOS / OpenWrt 路由器上，通过划分 VLAN 或利用双网口实现多 WAN 口接入：
1. **WAN1（电信千兆）**：承担主力出海数据流，权重设为 3；
2. **WAN2（联通/移动）**：承担常规下载与容灾备用，权重设为 1；
3. 进入【网络】→【负载均衡 (MWAN3)】，创建跟踪目标（Ping 8.8.8.8 与 223.5.5.5），设置检测间隔为 3 秒。一旦某条宽带发生丢包或断纤，系统在 3 秒内将全部局域网流量平滑迁移至备用线路。

---

## 2. 双机场专线跨服务商容灾编排

在 OpenClash 或 PassWall 插件中，同时导入两套完全异构的机场订阅：
- **Primary 专线**：主力配置 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)，享受极低延迟与零丢包传输；
- **Secondary 备用**：配置备用大流量容灾套餐；
- **创建回退策略组 (Fallback Group)**：
  \`\`\`yaml
  proxy-groups:
    - name: "🛡️ 高可用容灾出海"
      type: fallback
      url: "https://www.google.com/generate_204"
      interval: 15
      proxies:
        - "光速云-香港IEPL-01"
        - "备用机场-香港节点-01"
  \`\`\`
当主节点因机房突发维护超过 15 秒无响应时，内核自动接管并切换至备用节点，办公电脑的浏览器、SSH 连接毫无感知。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **软路由基础入门**：回顾 OpenWrt 部署，参考 [OpenWrt 软路由科学出海全流程](/tutorial/openwrt-passwall-openclash-side-gateway-guide)；
- **全屋智能设备加速**：配置电视与游戏机网络，查阅 [全屋智能设备无感出海方案](/tutorial/home-network-apple-tv-ps5-switch-proxy)；
- **冷备与热备理论**：了解双订阅灾备体系架构，参考 [多机场冷备与热备灾备体系搭建](/airport/high-availability-dual-subscription-failover)；
- **专线天梯实测**：查看主力专线稳定性跑分，参考 [42 家机场晚高峰链路抖动详实记录](/airport/packet-loss-jitter-benchmark-500-probes)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Cross-border e-commerce operations and remote software engineers cannot afford single points of network failure. Deploying dual physical WAN lines combined with MWAN3 and heterogeneous proxy provider fallback groups on OpenWrt/iStoreOS guarantees 99.99% operational continuity. Primary traffic routes through 2.5Gbps IEPL circuits, while secondary subscriptions automatically catch traffic if packet loss spikes.

---

## 1. Multi-WAN Architecture
Combine diverse ISPs (Telecom + Unicom) and multiple provider subscriptions via MWAN3 policy rules for seamless load aggregation and automated failover.
`,
  },
];

// Generator execution
for (const art of batch4Articles) {
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
  console.log(`✓ Generated Tutorial Article 25-32: ${art.slug}`);
}
