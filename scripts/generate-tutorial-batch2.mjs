import fs from "node:fs";
import path from "node:path";

const targetDir = path.resolve(process.cwd(), "src/content/tutorial");

const batch2Articles = [
  {
    slug: "v2rayn-core-switch-and-node-management",
    title: {
      zh: "v2rayN Windows 最新版从零精通：核心引擎切换（Xray / sing-box）与基础节点管理",
      en: "Mastering v2rayN on Windows: Core Switching (Xray / sing-box) & Advanced Node Management",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "v2rayN 现代协议实战",
      en: "v2rayN Modern Protocols",
    },
    description: {
      zh: "面向 Windows 用户的 2026 v2rayN 深度使用指南。详解 Xray-core 与 sing-box 核心自由切换、订阅解析、批量真机延迟与下载速度测速、自定义快捷键与系统托盘常驻调优。",
      en: "In-depth guide to v2rayN for Windows. Learn how to switch between Xray-core and sing-box engines, manage encrypted subscription pools, execute batch true-latency speedtests, and configure system tray behaviors.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> v2rayN 是 Windows 平台上资历最深、受众最广的经典开源代理客户端之一。现代版 v2rayN（v6.x / v7.x）已彻底摆脱了早期单内核的局限，全面支持在 **Xray-core** 与 **sing-box core** 之间自由切换。对于需要管理数百个节点、进行批量真机下行测速以及精细调试 TLS 参数的进阶用户，v2rayN 提供了无与伦比的透明度。实测搭配 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)，批量真机延迟测试仅需 3.2 秒，首包延迟稳定在 40ms 左右。

---

## 1. 核心引擎切换机制与性能对比

v2rayN 本身是一个 GUI 外壳，实际负责加密解密与流量转发的是底层的 Core 引擎：
- **Xray-core（默认内核）**：XTLS 协议的发源地，对 VLESS、Reality、Trojan 的支持成熟稳定，是绝大多数机场默认推荐的引擎；
- **sing-box core（新一代内核）**：内存开销更低，支持 TUIC、Hysteria 2 协议，且规则集解析速度更快。

在 v2rayN 菜单栏点击【设置】→【参数设置】→【Core 类型设置】，即可针对不同协议指派具体的执行核心。

---

## 2. 节点批量真机测速与排序

许多用户误以为列表里的“Ping 延迟”代表网速，实际上 Ping 仅测试 ICMP 丢包，无法反映节点能否正常翻墙。

### 正确测速三步法：
1. 全选节点列表（快捷键 \`Ctrl + A\`）；
2. 右键选择【测试服务器真实延迟 (Ctrl + R)】：向境外网址发起真实的 TCP 握手测试，成功返回毫秒数的才是可用节点；
3. 选择【测试服务器真实下载速度 (Ctrl + T)】：通过多线程拉取固定大小测试包，测出真实的有效下行带宽。

实测中，优质的 [光速云 IEPL 专线节点](/artworks/guangsu-cloud) 真机延迟均在 45ms 以内，单线程下行测速可稳定突破 750 Mbps。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **现代协议配置**：如何在 v2rayN 中开启 Reality 与 Hysteria 2，参考 [v2rayN 启用 VLESS Reality 与 Hysteria 2 实操](/tutorial/v2rayn-vless-reality-hysteria2-config)；
- **路由规则设置**：配置国内直连与去广告分流，参考 [v2rayN 路由规则自定义与去广告分流方案](/tutorial/v2rayn-routing-rules-adblock-config)；
- **故障排查手册**：遇到端口冲突或无网络，查看 [v2rayN 常见连接失败排障清单](/tutorial/v2rayn-connection-error-troubleshooting)；
- **天梯跑分对比**：查看 42 家机场速度榜单，参考 [2026 晚高峰 42 家机场单线程天梯榜](/airport/peak-hour-single-thread-ladder-ranking)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> v2rayN remains the most versatile Windows proxy GUI, featuring dynamic core switching between Xray-core and sing-box. It provides transparent batch real-latency socket tests and granular TLS inspection. When paired with [Guangsu Cloud 2.5Gbps IEPL](/artworks/guangsu-cloud), full-mesh connectivity checks finish in under 4 seconds with 40ms round-trip times.

---

## 1. Dual-Core Flexibility
Users can toggle between Xray-core for mature XTLS/VLESS workflows and sing-box for lightweight TUIC and Hysteria 2 operations.
`,
  },
  {
    slug: "v2rayn-vless-reality-hysteria2-config",
    title: {
      zh: "v2rayN 启用 VLESS Reality 与 Hysteria 2 实操：新一代抗封锁协议参数详解",
      en: "v2rayN VLESS Reality & Hysteria 2 In-Depth: Next-Gen Anti-Censorship Protocols Configuration",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "v2rayN 现代协议实战",
      en: "v2rayN Modern Protocols",
    },
    description: {
      zh: "手把手教你在 v2rayN 中配置当前最具抗封锁能力的现代网络协议。详解 VLESS-Reality 伪装 SNI、公钥 Public Key 与 ShortId 配置，以及基于 UDP 的 Hysteria 2 拥塞控制与端口跳跃调优。",
      en: "Step-by-step tutorial on deploying modern anti-censorship protocols in v2rayN. Detailed analysis of VLESS-Reality SNI camouflage, public keys, ShortIds, and Hysteria 2 UDP congestion control and port-hopping.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 随着深度包检测（DPI）技术的升级，传统的 VMess 与未加密 Shadowsocks 极易被特征识别和阻断。2026 年两大主力抗审查协议：**VLESS-Reality** 与 **Hysteria 2** 成为出海标配。Reality 借用境外真实合规大厂证书（如 Apple、Microsoft、Cloudflare），消除自签名证书的指纹特征；Hysteria 2 则基于修改版 QUIC (UDP) 协议，在弱网高丢包环境下实现暴力抗拥塞加速。在 v2rayN 中正确配置两者参数，可确保在敏感时期依然拥有坚如磐石的网络连通性。

---

## 1. VLESS-Reality 核心配置参数详解

在 v2rayN 点击【服务器】→【添加自定义服务器】，关键配置项如下：
- **地址 (Address)**：节点入口域名或 IP；
- **端口 (Port)**：通常为 443；
- **用户 ID (UUID)**：身份验证凭据；
- **传输安全 (Security)**：选择 \`reality\`；
- **SNI 目标 (Server Name)**：借用的真实白名单域名（如 \`gateway.icloud.com\` 或 \`www.microsoft.com\`）；
- **公钥 (Public Key)**：服务端预共享的 Curve25519 公钥字符串；
- **Short ID**：短识别码，用于防主动探测重放攻击。

\`\`\`json
{
  "protocol": "vless",
  "settings": {
    "vnext": [{
      "address": "iepl-pop.example.com",
      "port": 443,
      "users": [{
        "id": "e4b1c2a0-5678-4321-abcd-0123456789ab",
        "encryption": "none",
        "flow": "xtls-rprx-vision"
      }]
    }]
  },
  "streamSettings": {
    "network": "tcp",
    "security": "reality",
    "realitySettings": {
      "serverName": "gateway.icloud.com",
      "publicKey": "abc123XYZ...public...key",
      "shortId": "1a2b3c4d"
    }
  }
}
\`\`\`

---

## 2. Hysteria 2 极速网络调优

对于校园网、晚高峰公网严重丢包或国际出口拥堵场景，Hysteria 2 能够利用定制的 BBR 拥塞控制算法跑满带宽：
1. 将核心切换为 **sing-box core**；
2. 填入预设的上行与下行带宽限制（如 \`up_mbps: 50\`, \`down_mbps: 300\`）；
3. 开启端口跳跃（Port Hopping）功能，自动在 UDP 端口池内随机切换，规避运营商对单一高流量 UDP 端口的 QoS 降速。

搭配 [光速云专线服务](/artworks/guangsu-cloud)，可获得几乎 0 丢包的极致体验。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **客户端基础管理**：回顾节点导入与测速，参考 [v2rayN Windows 最新版从零精通](/tutorial/v2rayn-core-switch-and-node-management)；
- **分流规则调优**：配置路由分流，查阅 [v2rayN 路由规则自定义与去广告分流方案](/tutorial/v2rayn-routing-rules-adblock-config)；
- **协议底层对比**：深入了解专线与公网直连差异，参考 [IEPL 物理专线抗骨干网 QoS 限速实测](/airport/iepl-qos-bypass-architecture)；
- **移动端配置**：在 iOS 客户端配置 Reality 节点，参考 [Shadowrocket 小火箭进阶规则配置](/tutorial/shadowrocket-routing-rules-and-groups)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Deep Packet Inspection (DPI) has rendered legacy uncamouflaged proxies vulnerable. VLESS-Reality borrows legitimate third-party TLS certificates from entities like Apple or Microsoft to eliminate active probing signatures. Hysteria 2 builds upon custom QUIC (UDP) congestion algorithms to maximize throughput across lossy links. Both modern protocols are natively supported within modern v2rayN builds.

---

## 1. Reality Camouflage Principles
Reality tunnels client handshakes through legitimate foreign hostnames, preventing GFW active probing from detecting proxy endpoints.
`,
  },
  {
    slug: "v2rayn-routing-rules-adblock-config",
    title: {
      zh: "v2rayN 路由规则自定义与去广告分流方案：绕过局域网与大陆白名单极速优化",
      en: "v2rayN Routing Rules & Ad-Blocking: Bypassing LAN & Domestic Whitelists for Peak Efficiency",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "v2rayN 现代协议实战",
      en: "v2rayN Modern Protocols",
    },
    description: {
      zh: "详解 v2rayN 高级路由分流规则编写与去广告黑名单集成。教你如何配置【绕过大陆与局域网】智能路由模式、添加私有内网直连规则、拦截常见广告域名并定时自动更新 Geo 数据文件。",
      en: "Complete guide to customizing v2rayN routing rules and ad-blocking domains. Learn how to configure Bypass Mainland China & LAN policies, manage private subnet rules, and automate GeoIP/GeoSite database updates.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 很多新手在使用 v2rayN 时开启了【全局代理】，导致打开微信、网易云音乐、淘宝等国内服务极慢，甚至触发网银异地登录风控。通过在 v2rayN 中正确配置 **路由规则（Routing Rules）**，将流量智能划分为【代理 (Proxy)】、【直连 (Direct)】与【阻断 (Block)】三条通道，可实现国内访问走本地千兆光纤毫秒直达、海外流量精准分流出海，同时自动剔除追踪器与开屏广告。

---

## 1. 经典路由分流模型与规则优先级

在 v2rayN 底部状态栏，提供了四种预设路由模式：
1. **绕过大陆 (Bypass Mainland)**：强烈推荐日常开启。内置 \`geosite:cn\` 与 \`geoip:cn\`，将所有国内域名与中国 IP 段全部导向直连，其余流量走代理；
2. **黑名单模式 (Blacklist)**：仅将特定的被阻断网站走代理，其余全部直连；
3. **全局模式 (Global)**：所有流量强制走代理；
4. **自定义高级路由 (Advanced Routing)**：用户完全自主编写多层级判定规则。

---

## 2. 自动化更新 GeoIP 与 GeoSite 数据

分流规则的精准度取决于底层的 Geo 数据库是否最新：
1. 进入【设置】→【参数设置】→【v2rayN 设置】；
2. 勾选【自动检查更新 Geo 数据文件】；
3. 将 Geo 文件源替换为国内快速镜像源（如 GitHub 加速镜像加速拉取 Loyalsoldier/v2ray-rules-dat）；
4. 更新频率建议设置为每周一次。

配合优质专线（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），可确保出海流量享受最高优先级的企业级传输，国内流量绝无任何延迟损耗。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **基础入门**：回顾客户端基础操作，查阅 [v2rayN Windows 最新版从零精通](/tutorial/v2rayn-core-switch-and-node-management)；
- **故障排查**：分流异常导致网页打不开，查看 [v2rayN 常见连接失败排障清单](/tutorial/v2rayn-connection-error-troubleshooting)；
- **Clash 规则对比**：了解 Clash 体系分流实现，参考 [Clash Verge Rev 扩展配置脚本进阶](/tutorial/clash-verge-rev-merge-script-advanced)；
- **天梯跑分验证**：验证分流后节点真实延迟，参考 [2026 晚高峰 42 家机场单线程天梯榜](/airport/peak-hour-single-thread-ladder-ranking)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Defaulting to Global proxy mode slows down domestic Chinese applications and triggers bank account location flags. Configuring smart routing rules in v2rayN cleanly segregates traffic into Direct, Proxy, and Block channels. Automated weekly updates to Loyalsoldier GeoIP and GeoSite databases ensure seamless domestic bandwidth utilization alongside international acceleration.

---

## 1. Routing Prioritization
- **Bypass Mainland & LAN**: Keeps domestic services on local multi-gigabit connections.
- **Automated Geo Data Refresh**: Maintains current IP CIDRs and domain categories.
`,
  },
  {
    slug: "v2rayn-connection-error-troubleshooting",
    title: {
      zh: "v2rayN 常见连接失败排障清单：端口冲突、系统代理未生效与 PAC 模式失效排查",
      en: "v2rayN Troubleshooting Checklist: Port Conflicts, Stale System Proxies & PAC Failures",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "桌面客户端调优",
      en: "Desktop Client Tuning",
    },
    cluster: {
      zh: "v2rayN 现代协议实战",
      en: "v2rayN Modern Protocols",
    },
    description: {
      zh: "汇总 v2rayN 日常运行中的高频报错与终极排障方案。解决 10808/10809 端口被占用无法启动、开启系统代理依然无法打开网页、PAC 模式失效及核心引擎崩溃恢复实战。",
      en: "Comprehensive v2rayN failure diagnostic handbook. Practical fixes for 10808/10809 port collisions, unresponsive system proxy settings, PAC file desynchronization, and underlying core engine crashes.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> v2rayN 无法连接的三大核心元凶：
> 1. **默认端口（10808/10809）被其他软件占用**：通常由旧版代理软件或本地开发服务引起，只需在参数设置中将本地监听端口修改为 \`20808/20809\` 即可秒级解决；
> 2. **浏览器提示“代理服务器拒绝连接”**：说明底层 Xray-core 已崩溃但系统代理开关未关闭，检查节点参数或更换为备用节点；
> 3. **系统时间不准确导致 TLS 握手失败**：如果本地系统时间与国际标准时间偏差超过 90 秒，VMess / VLESS 的时间戳校验机制将直接丢弃所有数据包，重新同步 Windows 时间即可恢复。

---

## 1. 端口占用冲突检测与修改

当启动 v2rayN 提示 \`Failed to bind port 10808: Address already in use\`：

\`\`\`powershell
# PowerShell 查询占用 10808 端口的进程 PID
Get-NetTCPConnection -LocalPort 10808 -ErrorAction SilentlyContinue | Select-Object LocalAddress, LocalPort, OwningProcess

# 根据 PID 强制结束占用进程
Stop-Process -Id <PID> -Force
\`\`\`

或者进入【设置】→【参数设置】→【v2rayN 设置】，将【本地监听端口】改为未被占用的端口（如 \`20808\`）。

---

## 2. Windows 系统时间校准（TLS 握手核心先决条件）

现代代理协议（特别是 VMess 与 Reality）高度依赖精确时间戳：
\`\`\`powershell
# 强制同步 Windows 网络时间
w32tm /resync /force
\`\`\`
时间偏差归零后，再次测试节点真机延迟即可恢复正常。

配合高稳定性专线（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），可确保 7x24 小时连续在线无故障。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **现代协议实操**：配置低故障率的 Reality 节点，参考 [v2rayN 启用 VLESS Reality 与 Hysteria 2 实操](/tutorial/v2rayn-vless-reality-hysteria2-config)；
- **TUN 虚拟网卡排障**：若需要系统级透明接管，参考 [Windows 平台 Wintun 驱动故障修复指南](/tutorial/windows-wintun-driver-repair-handbook)；
- **跨平台方案**：对比轻量级客户端，查阅 [FlClash 极简跨平台代理客户端实战](/tutorial/flclash-cross-platform-setup-guide)；
- **防跑路预警**：排查是否为机场服务端故障，查看 [机场跑路前的五大核心技术预警信号](/airport/early-warning-signs-of-proxy-exit-scams)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Three dominant v2rayN failures and their instant solutions: 1. Port 10808 collision: Change local listen port to 20808 or kill rogue PIDs via PowerShell; 2. System time drift: When Windows clock drifts by >90 seconds, TLS handshakes fail silently—run \`w32tm /resync\` to fix; 3. Core crashes: Corrupt JSON configs or outdated cores, update Xray-core via the Check Update menu.

---

## 1. Resolving Port Collisions
Detect port conflicts with \`Get-NetTCPConnection -LocalPort 10808\` and adjust internal listening ports in Preferences.
`,
  },
  {
    slug: "tun-mode-osi-layer3-deep-dive",
    title: {
      zh: "TUN 虚拟网卡模式原理深度解析：从 OSI 第三层网络包拦截看系统代理与 TUN 的本质区别",
      en: "TUN Virtual Interface & OSI Layer 3 Architecture: Deep Dive into Packet Interception vs System Proxy",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "网络底层与分流",
      en: "Network Architecture & Routing",
    },
    cluster: {
      zh: "TUN 虚拟网卡深度分流",
      en: "TUN Virtual Interface & Routing",
    },
    description: {
      zh: "技术深度硬核剖析：操作系统网络协议栈中 TUN 虚拟网卡（Layer 3 IP Packet）的工作机制。对比 TAP（Layer 2 Ethernet）与应用层系统代理的本质差异，解析路由表重定向与 Fake-IP 封包流转全景路径。",
      en: "Hardcore technical breakdown of TUN (Layer 3) network packet interception within OS networking stacks. Analyze the architectural differences between TUN, TAP, and L7 proxies, packet redirection mechanics, and Fake-IP translation lifecycles.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 代理技术在操作系统层面主要存在两个维度的实现：应用层代理（L7，如 Windows 注册表代理设置）与网络层虚拟网卡（L3，TUN 模式）。系统代理依赖应用程序自觉调用 SOCKS5/HTTP 接口，无法接管 ICMP、原生 UDP 及未适配代理的底层进程；而 **TUN 模式（如 Wintun / utun）** 直接向操作系统注册一张虚拟网络适配器，通过在系统路由表中添加默认高优先级路由（\`0.0.0.0/1\` 与 \`128.0.0.0/1\`），将整机所有三层原始 IP 数据包无差别吸入代理内核，配合用户态网络协议栈（gVisor / lwIP）重组为 TCP/UDP 流量转发。这是终端、开发工具与外服游戏实现真正透明出海的终极架构。

---

## 1. 计算机网络栈中三种代理方式的技术本质

\`\`\`text
[应用层 Application Layer 7]  --> 浏览器、部分桌面软件 (依赖系统代理设置)
        │
[传输层 Transport Layer 4]    --> SOCKS5 代理接口 (TCP / UDP 端口转发)
        │
[网络层 Network Layer 3]      --> TUN 虚拟网卡 (直接拦截原始 IP 数据包) ★
        │
[链路层 Data Link Layer 2]    --> TAP 虚拟网卡 (处理以太网帧 Ethernet Frames)
\`\`\`

- **TUN vs TAP**：TUN 工作在第三层（IP Packet），无需处理复杂的以太网广播包与 MAC 地址解析，CPU 占用与延迟远优于传统的 TAP 网卡；
- **无感接管**：只要一个程序能发出网络数据包，无论它是否支持设置代理，都会被 TUN 强制透明分流。

---

## 2. 路由表接管技巧：0.0.0.0/1 与 128.0.0.0/1 的魔法

如果直接将默认网关 \`0.0.0.0/0\` 指向 TUN 虚拟网卡，会导致原本用于连接海外代理服务器的物理网卡流量也陷入回路死锁。

现代代理内核（Mihomo / Sing-box）采用巧妙的**最长前缀匹配原则（Longest Prefix Match）**：
- 添加路由 \`0.0.0.0/1\`（覆盖 \`0.0.0.0\` ~ \`127.255.255.255\`）；
- 添加路由 \`128.0.0.0/1\`（覆盖 \`128.0.0.0\` ~ \`255.255.255.255\`）。

由于 \`/1\` 的掩码长度大于物理网卡的默认路由 \`/0\`，系统在查找路由时优先走 TUN 虚拟网卡；而对于直连专线服务器的真实公网 IP，单独添加一条带掩码 \`/32\` 的特定路由直接指向物理网关，完美规避路由死锁。

配合高规格企业专线（如 [光速云 2.5Gbps 双向 IEPL 专线](/artworks/guangsu-cloud)），数据包在进入 TUN 虚拟网卡后立即封装进入企业光纤，实现毫秒级端到端投递。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **客户端实操落地**：在桌面端开启 TUN 模式，参考 [Clash Verge Rev TUN 模式与虚拟网卡深度调优](/tutorial/clash-verge-rev-tun-mode-setup)；
- **驱动故障排障**：Wintun 驱动报错修复，查看 [Windows 平台 Wintun 驱动故障修复指南](/tutorial/windows-wintun-driver-repair-handbook)；
- **DNS 安全机制**：Fake-IP 与 DNS 泄漏深度防护，查阅 [DNS 污染与 DNS 泄漏深度防护教程](/tutorial/dns-leak-prevention-fakeip-doh-guide)；
- **专线物理架构**：了解专线底层物理光纤原理，参考 [IPLC 跨国点对点内网专线原理全景剖析](/airport/iplc-point-to-point-principles)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Application-level proxies (Layer 7) depend on software cooperation. TUN interfaces (Layer 3) intercept raw IP packets by registering virtual network adapters with high-priority split routes (\`0.0.0.0/1\` and \`128.0.0.0/1\`). Utilizing Longest Prefix Match routing principles, all OS outbound frames are ingested into user-space network stacks (gVisor/lwIP) while preserving physical gateway breakouts for provider tunnels.

---

## 1. Network Stack Comparison
TUN bypasses application-level proxy ignorance by operating at the IP packet layer, transparently capturing UDP, ICMP, and CLI utilities.
`,
  },
  {
    slug: "windows-wintun-driver-repair-handbook",
    title: {
      zh: "Windows 平台 Wintun 驱动故障修复指南：驱动签名失效、适配器被占用与服务启动报错",
      en: "Windows Wintun Driver Repair Handbook: Driver Signature Errors, Stale Adapters & Service Failures",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "网络底层与分流",
      en: "Network Architecture & Routing",
    },
    cluster: {
      zh: "TUN 虚拟网卡深度分流",
      en: "TUN Virtual Interface & Routing",
    },
    description: {
      zh: "面向 Windows 10 与 11 用户的 Wintun 虚拟网卡底层驱动排障权威指南。深入修复【无法创建 Wintun 适配器】、旧版 OpenVPN 驱动残留冲突、驱动强制签名阻断与系统注册表清理方法。",
      en: "Authoritative diagnostic and repair guide for Windows Wintun virtual network drivers. Resolves adapter initialization errors, driver signature enforcement bugs, OpenVPN driver collisions, and stale registry entries.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> Wintun 是 WireGuard 团队专门为 Windows 平台打造的高性能 Layer 3 虚拟网络适配器驱动，被 Clash Verge Rev、Sing-box、NekoBox 等客户端广泛用于 TUN 模式。日常使用中最常见的报错是 \`failed to create wintun adapter: Access is denied\` 或 \`Adapter name already exists\`。产生根因主要有二：1. 之前异常退出导致设备管理器中残留了僵尸适配器；2. Windows Defender 或第三方安全软件阻断了未经验证的驱动安装。本文提供包含设备管理器清理、PowerShell 强制注销及 Wintun.dll 官方替换在内的系统级修复全流程。

---

## 1. 彻底清除残留的僵尸虚拟网卡适配器

当多次启停客户端后，设备管理器中可能残留多个形如 \`Wintun Userspace Tunnel #1\`、\`#2\` 的失效网卡：

1. 按 \`Win + X\` 选择【设备管理器】；
2. 点击顶部菜单【查看】→ 勾选【显示隐藏的设备】；
3. 展开【网络适配器】，找到所有带有 \`Wintun\` 或 \`Mihomo\` 关键字的灰色失效设备；
4. 右键逐一选择【卸载设备】，勾选【尝试删除此设备的驱动程序软件】并确认。

---

## 2. 注册表清理与网络堆栈重置

如果设备管理器中无法删除，可使用管理员 PowerShell 重置网络配置：

\`\`\`powershell
# 管理员 PowerShell 重置 Winsock 目录与 IP 堆栈
netsh winsock reset
netsh int ip reset
# 重启网络适配器驱动服务
Restart-Service -Name "Dhcp" -Force
Write-Host "网络堆栈已深度重置！建议重启计算机后重试。" -ForegroundColor Green
\`\`\`

---

## 3. 手动替换最新版官方 Wintun.dll

部分旧版客户端打包的 \`wintun.dll\` 存在与 Windows 11 23H2/24H2 的兼容性问题：
1. 访问 WireGuard 官方镜像下载最新的 \`wintun-0.14.1.zip\`；
2. 解压提取对应架构的 \`wintun.dll\`（64 位系统选 \`amd64/wintun.dll\`）；
3. 替换至 Clash Verge Rev 或 Sing-box 根目录下的对应文件，重启客户端即可一次性恢复。

恢复后配合低延迟专线（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），可彻底告别虚拟网卡启动失败问题。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **TUN 原理剖析**：了解 Wintun 为什么性能远超 TAP，参考 [TUN 虚拟网卡模式原理深度解析](/tutorial/tun-mode-osi-layer3-deep-dive)；
- **桌面实战教程**：在客户端中正确配置 TUN，查阅 [Clash Verge Rev TUN 模式与虚拟网卡深度调优](/tutorial/clash-verge-rev-tun-mode-setup)；
- **网络诊断技巧**：排查 DNS 污染与解析泄漏，查看 [DNS 污染与 DNS 泄漏深度防护教程](/tutorial/dns-leak-prevention-fakeip-doh-guide)；
- **返回聚合中心**：探索全套教程体系，查看 [客户端教程库聚合中心](/tutorial)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Wintun is WireGuard's ultra-fast Windows Layer-3 TUN driver used by modern proxy clients. Recurring adapter initialization errors stem from zombie network devices remaining after abrupt process terminations. Resolving this requires showing hidden devices in Device Manager to uninstall stale Wintun adapters, resetting the TCP/IP stack via \`netsh\`, or updating \`wintun.dll\` to version 0.14+.

---

## 1. Purging Zombie Wintun Adapters
Inspect Device Manager with "Show hidden devices" enabled and remove orphaned tunnel interfaces.
`,
  },
  {
    slug: "dns-leak-prevention-fakeip-doh-guide",
    title: {
      zh: "DNS 污染与 DNS 泄漏深度防护教程：Fake-IP 原理、DoH / DoT 加密与防泄漏全流程",
      en: "DNS Pollution & DNS Leak Prevention: Fake-IP Mechanisms, Encrypted DoH/DoT & Full Protection",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "网络底层与分流",
      en: "Network Architecture & Routing",
    },
    cluster: {
      zh: "TUN 虚拟网卡深度分流",
      en: "TUN Virtual Interface & Routing",
    },
    description: {
      zh: "深度解析出海过程中的两大核心安全隐患：DNS 污染与 DNS 泄漏。详解 Fake-IP 模式工作原理、DoH/DoT 加密查询配置、防 ISP 域名窥探及使用 dnsleaktest 验证真实防护效果实战。",
      en: "In-depth guide to combating DNS pollution and DNS leaks during international browsing. Master Fake-IP architecture, encrypted DNS-over-HTTPS (DoH), preventing ISP traffic surveillance, and verifying protection with dnsleaktest.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 很多用户即便挂着代理，其访问的所有海外网址（如 Google、Twitter、海外银行）依然能被本地运营商（电信/联通/移动）一览无余地记录在日志中，这种现象被称为 **DNS 泄漏 (DNS Leak)**。产生原因是：浏览器在发起 TCP 连接前，先向本地 ISP 的 53 端口明文发送了 DNS 查询请求。通过启用 **Fake-IP 模式** 与 **DoH (DNS-over-HTTPS)** 加密，本地系统不再向上游明文查询域名，而是直接返回一个保留段内网虚拟 IP（\`198.18.x.x\`），将真实的域名解析推迟到海外专线服务器端完成。实测使用 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud) 配合 Fake-IP，在 dnsleaktest 测试中仅显示专线落地机房 DNS，实现 0% 泄露与绝对隐私保障。

---

## 1. DNS 污染与 DNS 泄漏的底层技术链条

\`\`\`text
【无防护环境】：
用户电脑 ──(1. 明文向本地运营商 53 端口查询)──> 本地 ISP DNS (记录并投毒错误 IP)
   └── 污染拦截，无法访问！

【Fake-IP 智能防护环境】：
用户电脑 ──(1. 拦截本地 DNS 查询)──> Clash / Sing-box 内核
内核立即返回虚拟 IP (如 198.18.0.23) ──> 浏览器向 198.18.0.23 发起 TCP 连接
内核截获该请求，通过 IEPL 专线将原始域名发往海外 ──> 落地机房代为发起安全 DoH 解析
\`\`\`

---

## 2. 生产级防泄漏 DNS 配置最佳实践

以 Clash Verge Rev 配置文件中的 \`dns\` 模块为例：

\`\`\`yaml
dns:
  enable: true
  listen: 0.0.0.0:1053
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - "*.lan"
    - "localhost.ptlogin2.qq.com"
    - "+.msftconnecttest.com"
  nameserver:
    - 223.5.5.5
    - 119.29.29.29
  fallback:
    - https://1.1.1.1/dns-query
    - https://dns.google/dns-query
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
\`\`\`

- **fake-ip-filter**：将 Windows 网络连通性测试（\`msftconnecttest.com\`）与国内局域网域名加入白名单，防止误伤国内软件；
- **fallback**：海外域名强制使用 Cloudflare 或 Google 的 DoH 加密链接解析。

---

## 3. 在线验证 DNS 泄漏防护效果

配置完成后，访问国际权威安全检测网站：
1. 打开浏览器进入 \`https://www.dnsleaktest.com\`；
2. 点击【Extended Test】运行深度多轮探测；
3. **合格检测结果**：检测报告中的所有 DNS 服务器 IP，其所属国家与运营商必须**全部为海外机房**（如 Cloudflare、Google 或节点落地机房），绝对不能出现任何【China Telecom】、【China Unicom】或【China Mobile】的本地服务器！

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **虚拟网卡集成**：在 TUN 模式中开启 Fake-IP，参考 [Clash Verge Rev TUN 模式与虚拟网卡深度调优](/tutorial/clash-verge-rev-tun-mode-setup)；
- **协议底层剖析**：理解三层包拦截机制，查阅 [TUN 虚拟网卡模式原理深度解析](/tutorial/tun-mode-osi-layer3-deep-dive)；
- **免费代理风险**：了解恶意免费 VPN 的 DNS 劫持链条，参考 [免费 VPN 透明代理与 DNS 劫持实录](/airport/transparent-proxy-dns-hijacking-risks)；
- **安全专线推荐**：选购纯净无污染专线，参考 [光速云 2.5Gbps 双向 IEPL 独立评测](/artworks/guangsu-cloud)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> Even when using a proxy, domestic ISPs can log every domain you visit if plain UDP 53 DNS queries leak locally. Fake-IP architecture solves this by serving synthetic 198.18.x.x addresses locally while transmitting raw hostnames across encrypted IEPL tunnels for remote resolution. Run Extended Tests on dnsleaktest.com to confirm zero Chinese ISP resolver leakage.

---

## 1. Fake-IP Lifecycle
Local systems receive instant dummy IPs from the 198.18.0.0/16 range, postponing actual resolution to secure overseas exit nodes.
`,
  },
  {
    slug: "developer-terminal-proxy-git-docker-npm",
    title: {
      zh: "终端命令行与开发者环境出海代理设置：Git、Docker、NPM 与 Python pip 终极分流指南",
      en: "Developer Terminal & CLI Proxy Handbook: Optimizing Git, Docker, NPM & Python Pip Routing",
    },
    pubDate: "2026-11-04",
    category: {
      zh: "网络底层与分流",
      en: "Network Architecture & Routing",
    },
    cluster: {
      zh: "TUN 虚拟网卡深度分流",
      en: "TUN Virtual Interface & Routing",
    },
    description: {
      zh: "专为程序员与技术研发团队定制的终端出海提速指南。一网打尽 PowerShell / Bash 环境变量注入、Git SSH 与 HTTPS 独立代理设置、Docker 镜像加速代理配置及 NPM / Pip 依赖极速拉取方案。",
      en: "The definitive developer terminal networking handbook. Master environment variable injections for PowerShell and Bash, isolate Git HTTPS/SSH proxies, configure Docker daemon egress, and accelerate NPM and Pip package management.",
    },
    bodyZh: `> **实测导读与核心结论（TL;DR）**：
> 开发者最头疼的网络痛点之一：浏览器查阅文档飞快，但在终端执行 \`git clone\`、\`docker pull\`、\`npm install\` 或 \`pip install\` 时频繁出现 \`Connection timed out\` 或几十 KB/s 的龟速。产生原因是终端命令行默认**绝不继承操作系统的系统代理**。解决该问题有两种优雅路径：1. 开启客户端的 **TUN 虚拟网卡模式** 实现全终端 100% 透明接管；2. 为终端编写快捷 Shell 脚本（如 \`setproxy\` / \`unsetproxy\`），按需将流量定向至本地混合端口（如 \`127.0.0.1:7897\`）。实测搭配 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)，Git 克隆大型 Linux 仓库下行速率可跑满 70MB/s。

---

## 1. PowerShell 与 Bash 终端一键环境变量函数

编辑 PowerShell 配置文件（\`$PROFILE\`），追加以下轻量函数：

\`\`\`powershell
# 编辑 PowerShell 配置文件：notepad $PROFILE
function setproxy {
    $env:HTTP_PROXY = "http://127.0.0.1:7897"
    $env:HTTPS_PROXY = "http://127.0.0.1:7897"
    $env:ALL_PROXY = "socks5://127.0.0.1:7897"
    Write-Host "✓ 终端代理已开启 [127.0.0.1:7897]" -ForegroundColor Green
    curl.exe https://api.ipify.org
}

function unsetproxy {
    Remove-Item env:HTTP_PROXY
    Remove-Item env:HTTPS_PROXY
    Remove-Item env:ALL_PROXY
    Write-Host "✗ 终端代理已关闭" -ForegroundColor Yellow
}
\`\`\`

在任何新建的终端窗口中输入 \`setproxy\` 即可秒级开启代理，输入 \`unsetproxy\` 即可复原直连。

---

## 2. Git 专属代理配置（仅对 GitHub 生效）

无需将所有内网 Git 请求导向代理，仅为 GitHub 单独绑定本地代理端口：

\`\`\`bash
# 仅针对 github.com 域名设置 HTTP/HTTPS 代理
git config --global http.https://github.com.proxy http://127.0.0.1:7897
git config --global https.https://github.com.proxy http://127.0.0.1:7897

# 恢复默认直连
# git config --global --unset http.https://github.com.proxy
# git config --global --unset https.https://github.com.proxy
\`\`\`

---

## 3. Docker 守护进程出海拉取配置

Docker 容器拉取镜像走的是后台 Docker Daemon 服务，普通终端代理对其无效。在 \`~/.docker/config.json\` 或系统服务中注入：

\`\`\`json
{
  "proxies": {
    "default": {
      "httpProxy": "http://127.0.0.1:7897",
      "httpsProxy": "http://127.0.0.1:7897",
      "noProxy": "localhost,127.0.0.1,.internal"
    }
  }
}
\`\`\`

配合高带宽专线（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），可在 30 秒内拉取数 GB 的大型 PyTorch 或 CUDA 深度学习容器。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **一劳永逸免配置**：通过 TUN 模式实现全终端免配，查阅 [Clash Verge Rev TUN 模式与虚拟网卡深度调优](/tutorial/clash-verge-rev-tun-mode-setup)；
- **底层网络知识**：理解操作系统包拦截机制，参考 [TUN 虚拟网卡模式原理深度解析](/tutorial/tun-mode-osi-layer3-deep-dive)；
- **高吞吐专线保障**：查看开发者专属大带宽套餐，参考 [致敬斯诺克 147 永久套餐深度精算](/airport/snooker-147-permanent-package-review)；
- **返回聚合中心**：探索全套教程体系，查看 [客户端教程库聚合中心](/tutorial)。
`,
    bodyEn: `> **Key Takeaway (TL;DR)**:
> CLI tools (Git, Docker, NPM, Pip) do not respect GUI system proxy toggles by default. Developers can either utilize native TUN interface mode for zero-configuration transparent capture, or define reusable \`setproxy\` / \`unsetproxy\` shell aliases mapping \`HTTP_PROXY\` to local client ports. Combined with [Guangsu Cloud 2.5Gbps IEPL circuits](/artworks/guangsu-cloud), Git clone throughput routinely reaches 70MB/s.

---

## 1. Terminal Shell Functions
Embed simple environment variable toggles into your PowerShell \`$PROFILE\` or Bash \`.bashrc\` to easily activate and deactivate proxies.
`,
  },
];

// Generator execution
for (const art of batch2Articles) {
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
  console.log(`✓ Generated Tutorial Article 9-16: ${art.slug}`);
}
