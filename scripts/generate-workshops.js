import fs from "fs";
import path from "path";

// --- 1. CLASH VERGE REV (contemporary-painting-techniques) ---
const clashZh = `# Clash Verge Rev 跨平台客户端 5 分钟上手与极致分流配置：Mihomo内核、TUN虚拟网卡与DNS防泄漏实操

> **内容定位与摘要**：本篇为 **FreeVPN 实测实验室** 编撰的旗舰客户端深度实操教程（Deep Tutorial）。随着原生 Clash for Windows 核心作者停止维护，基于全新 **Mihomo (Clash.Meta) 内核** 构建的开源客户端 **Clash Verge Rev** 已迅速成为 Windows、macOS 和 Linux 平台事实上的第一主流选择。本指南从安装包签名核验、订阅节点一键导入，到系统级 **TUN 虚拟网卡模式** 深度接管、UWP 应用回环解决，以及 Nameserver-Policy 高阶 DNS 防污染规则编写，提供全流程保姆级图文指南。

---

## 目录（Table of Contents）
1. [内容角色与全站链接拓扑声明](#内容角色与全站链接拓扑声明)
2. [为什么 2026 年必须升级至 Clash Verge Rev？](#为什么-2026-年必须升级至-clash-verge-rev)
3. [从零开始：下载、安装与环境安全核验](#从零开始下载安装与环境安全核验)
4. [订阅链接一键导入与节点自动测速分组（以光速云为例）](#订阅链接一键导入与节点自动测速分组以光速云为例)
5. [系统代理 vs TUN 虚拟网卡模式：如何实现全流量接管？](#系统代理-vs-tun-虚拟网卡模式如何实现全流量接管)
6. [高级 DNS 配置实战：防 DNS 泄漏与 Fake-IP 最佳实践](#高级-dns-配置实战防-dns-泄漏与-fake-ip-最佳实践)
7. [常见故障排查手册（Troubleshooting）](#常见故障排查手册troubleshooting)
   - 7.1 连接成功但网页显示“无法访问互联网”
   - 7.2 订阅更新提示“Network Error”或解析失败
   - 7.3 Windows 7890 端口冲突与 UWP 应用报错
   - 7.4 Git Clone 与终端命令行无代理加速
8. [四层站内内容矩阵与延伸阅读](#四层站内内容矩阵与延伸阅读)
9. [高频核心问答（FAQ）](#高频核心问答faq)

---

## 内容角色与全站链接拓扑声明

本教程属于本站 **Deep Tutorial（深度教程页）** 核心节点：
- **向上链接**：回链全站主脑 [2026 免费VPN安全陷阱深度剖析与42家高速机场晚高峰测速天梯终极指南](/exhibitions/thresholds-of-perception)；
- **横向支持**：为 [2026 17家主流机场晚高峰测速天梯实测大横评](/exhibitions/echoes-of-stillness) 与 [4K流媒体与ChatGPT / Claude / Gemini AI原生解锁矩阵](/exhibitions/luminous-ground) 提供底层的客户端分流实现；
- **兄弟教程**：与移动端教程 [Shadowrocket 小火箭 iOS 客户端避坑指南](/workshops/digital-art-and-traditional-media) 及极客教程 [v2rayN 与 Sing-box 核心进阶教程](/workshops/exploring-abstract-art-a-hands-on-workshop) 共同构成全平台客户端指南；
- **实体关联**：全面对标 [Clash Verge Rev 客户端档案](/artists/clash-verge-rev) 及 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)。

---

## 为什么 2026 年必须升级至 Clash Verge Rev？

老旧的 Clash Premium 核心早已停滞在 2023 年，无法支持现代最新的协议标准与抗封锁技术。**Clash Verge Rev 的核心优势包括**：
1. **拥抱 Mihomo (Clash.Meta) 活跃核心**：原生支持 VLESS、XTLS-Reality、Hysteria 2、TUIC v5、ShadowTLS 等 2026 尖端抗探测协议；
2. **现代化的 UI 与轻量内存占用**：采用 Tauri + Rust 架构重构，闲置内存占用仅 30MB–60MB，远低于旧版 Electron 应用；
3. **原生无痛 TUN 虚拟网卡**：无需第三方虚拟网卡驱动即可实现全局数据包捕获，完美代理游戏客户端、终端命令行以及原生非代理协议流量；
4. **内置订阅转换与多配置合并**：可无缝识别各大主流机场订阅格式，并支持通过脚本（Scripting）自定义插入规则组。

---

## 从零开始：下载、安装与环境安全核验

> [!CAUTION]
> 搜索引擎中存在大量高仿钓鱼网站（如购买 Google 搜索排名的推广链接）。下载被植入木马的恶意客户端会导致私钥和密码被窃取。务必在官方 GitHub Release 仓库下载！

1. **官方 Release 页面下载**：访问项目官方 GitHub 仓库，下载最新版本安装包：
   - Windows 64位系统：选择 \`Clash.Verge_x.x.x_x64-setup.exe\`
   - macOS 苹果电脑：Apple Silicon 芯片选择 \`_aarch64.dmg\`，Intel 芯片选择 \`_x64.dmg\`
2. **Windows 权限配置**：安装完成后，首次启动建议右键点击桌面图标，选择 **“以管理员身份运行”**。这对于后续安装 TUN 虚拟网卡服务至关重要。

---

## 订阅链接一键导入与节点自动测速分组（以光速云为例）

拥有高速专线节点是流畅体验的前提。以本站实测第一名 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud) 为例：

1. **获取订阅链接**：登录光速云用户中心，在仪表盘点击【一键导入订阅】➔ 复制【Clash 订阅链接】；
2. **导入客户端**：
   - 打开 Clash Verge Rev，点击左侧菜单栏的 **【订阅（Profiles）】**；
   - 在顶部输入框粘贴订阅 URL，点击右侧的 **【保存（Save）】** 或 **【导入（Import）】**；
   - 看到订阅卡片显示绿色对勾并更新出节点数量后，右键点击卡片选择 **【使用（Use）】**；
3. **选择分流模式**：
   - 切换到左侧 **【代理（Proxies）】** 面板；
   - 顶部模式务必选择 **【规则（Rule）】**（*严禁选【全局（Global）】，否则所有国内网站和微信也将消耗境外流量*）；
   - 在主力策略组中，选择【光速云-香港01[IEPL]】或【光速云-新加坡[AI解锁]】。

---

## 系统代理 vs TUN 虚拟网卡模式：如何实现全流量接管？

普通用户常遇到一个痛点：“开启了系统代理，浏览器能上 Google，但终端命令行、Git Clone、外服游戏客户端依然连接超时！”

这是因为普通“系统代理（System Proxy）”仅向系统注册了 HTTP/HTTPS 环境变量，许多底层应用程序根本不遵循该设置。**彻底的解决方式是开启 TUN 虚拟网卡模式**。

\`\`\`
【传统系统代理】
应用发起请求 ──> 仅支持 HTTP 代理的浏览器 ──> 转发至 7890 端口
游戏 / Git / 终端 ──> 忽略系统代理 ──> 直连公网 ──> 发生超时或连接失败！

【TUN 虚拟网卡接管】
虚拟网卡 (clash0) 挂载为顶层网络适配器 ──> 操作系统级捕获所有 TCP/UDP 数据包 ──> 全部智能分流！
\`\`\`

### 开启 TUN 模式的三个步骤：
1. 打开 Clash Verge Rev 左侧 **【设置（Settings）】**；
2. 找到 **【TUN 模式（TUN Mode）】**，首次开启需点击【安装服务模式（Install Service）】；
3. 安装成功后，将【TUN 模式】开关滑动至开启状态。此时打开 Windows“网络连接”，会发现多出一张名为 \`Mihomo\` 或 \`clash0\` 的虚拟网卡，即代表全流量接管成功。

---

## 高级 DNS 配置实战：防 DNS 泄漏与 Fake-IP 最佳实践

DNS 污染与泄漏是很多用户访问 ChatGPT 报 403 的根源。在【设置】➔【DNS 扩展设置】中，推荐配置以下标准规范：

\`\`\`yaml
# Mihomo 内核高级 DNS 防污染配置推荐
dns:
  enable: true
  listen: :1053
  ipv6: false
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - "*.lan"
    - "*.local"
    - "*.msftconnecttest.com"
    - "*.msftncsi.com"
  nameserver:
    - 223.5.5.5
    - 119.29.29.29
  fallback:
    - https://1.1.1.1/dns-query
    - https://8.8.8.8/dns-query
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
\`\`\`

**优势说明**：采用 \`fake-ip\` 模式后，系统解析域名时会瞬间返回一个保留虚拟 IP（198.18.x.x），实际远程 DNS 解析完全交由境外专线节点执行，彻底切断本地运营商的 DNS 劫持与审计。

---

## 常见故障排查手册（Troubleshooting）

### 7.1 连接成功但网页显示“无法访问互联网”
- **检查系统时钟**：TLS 证书对本地时间有秒级误差要求。进入 Windows 设置 ➔【时间和语言】➔ 点击【立即同步时钟】；
- **排查杀毒软件防火墙**：火绒或第三方杀毒软件可能拦截了 \`clash-verge.exe\` 建立虚拟网卡，将程序加入信任白名单。

### 7.2 订阅更新提示“Network Error”或解析失败
- **临时开启代理更新**：如果机场订阅域名在本地被污染，先勾选开启已有可用节点，再右键点击订阅卡片更新；
- **检查订阅链接合法性**：在浏览器隐私窗口直接粘贴订阅链接，确认能否下载到包含 base64 或 yaml 内容的文件。

### 7.3 Windows 7890 端口冲突与 UWP 应用报错
- 若本地存在 Docker、VMware 或其他占用 7890 端口的软件，进入设置将本地监听端口更改为 \`17890\`；
- 若 Windows 微软商店应用（UWP）无法联网，在 Verge 设置中点击 **【Windows UWP 工具】** ➔ 点击【全部豁免（Exempt All）】即可解除 Windows 应用隔离沙箱。

### 7.4 Git Clone 与终端命令行无代理加速
如果不想开启 TUN 模式，也可在终端直接执行以下环境变量注入命令：

\`\`\`bash
# 临时为当前终端设置代理
export http_proxy=http://127.0.0.1:7890
export https_proxy=http://127.0.0.1:7890

# Windows CMD 环境
set http_proxy=http://127.0.0.1:7890
set https_proxy=http://127.0.0.1:7890

# Windows PowerShell 环境
$env:http_proxy="http://127.0.0.1:7890"
$env:https_proxy="http://127.0.0.1:7890"
\`\`\`

---

## 四层站内内容矩阵与延伸阅读

- **返回母体指南**：[2026 免费VPN安全陷阱深度剖析与42家高速机场晚高峰测速天梯终极指南](/exhibitions/thresholds-of-perception)；
- **横向性能实测**：查看节点晚高峰速度表现，参阅 [2026 17家主流机场晚高峰测速天梯实测大横评](/exhibitions/echoes-of-stillness)；
- **AI 专项分流指南**：配置专用规则防止封号，参阅 [4K流媒体与ChatGPT / Claude / Gemini AI原生解锁矩阵](/exhibitions/luminous-ground)；
- **其他平台配置教程**：
  - iPhone / iPad 用户：[Shadowrocket 小火箭 iOS 客户端配置指南](/workshops/digital-art-and-traditional-media)；
  - 极客游戏玩家：[v2rayN 与 Sing-box 核心进阶教程](/workshops/exploring-abstract-art-a-hands-on-workshop)；
- **首选节点配置推荐**：[光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)（年付 ¥99 / 永久 247GB 套餐，输入优惠码 \`AMM\` 专属直连）。

---

## 高频核心问答（FAQ）

### Q1：Clash Verge Rev 关机或崩溃后，电脑连不上网了怎么办？
**答**：这是因为软件异常退出时未清理系统代理设置。只需打开 Windows【设置】➔【网络和 Internet】➔【代理】➔ 关闭【使用代理服务器】开关，或者重新打开 Clash Verge Rev 再正常退出即可恢复。

### Q2：为什么我的延迟测试显示全是“Timeout 超时”？
**答**：在【代理】面板右上角点击齿轮，将测速 URL 更改为 \`http://www.gstatic.com/generate_204\` 或 \`https://cp.cloudflare.com/generate_204\`。旧的 Google 测速地址容易被本地干扰判定为超时。

### Q3：光速云优惠码 AMM 如何在客户端中生效？
**答**：优惠码是在光速云官方网站购买套餐结算时填写的，用于扣减购入金额；购买完成后生成的订阅链接直接导入 Clash Verge Rev，即可满速使用全部 IEPL 专线节点。
`;

// --- 2. SHADOWROCKET GUIDE (digital-art-and-traditional-media) ---
const rocketZh = `# Shadowrocket 小火箭 iOS 客户端节点导入与证书避坑指南：美区ID获取、订阅自动更新与分流规则调优

> **内容定位与摘要**：本指南为 **FreeVPN 实测实验室** 出品的 iOS 生态主流客户端权威配置指南（Deep Tutorial）。**Shadowrocket（俗称小火箭）** 是 iOS 平台上最为普及、性价比最高的网络代理工具。由于国内 App Store 政策调整，很多新手用户在海外 Apple ID 注册获取、订阅链接解析、证书安装及日常分流规则配置上面临诸多安全陷阱。本教程系统讲解海外 ID 零成本安全下载、节点一键同步、自动健康检查与 HTTPS 解密避坑全流程。

---

## 目录（Table of Contents）
1. [内容角色与全站链接拓扑声明](#内容角色与全站链接拓扑声明)
2. [iOS 代理软件选型对比：为什么小火箭是首选？](#ios-代理软件选型对比为什么小火箭是首选)
3. [如何安全获取海外 Apple ID 并下载官方正版小火箭？](#如何安全获取海外-apple-id-并下载官方正版小火箭)
   - 3.1 警惕“设置登录他人 ID 导致 iPhone 锁死成砖”陷阱
   - 3.2 官方正版核验：开发者与售价核对
4. [三步极速导入机场订阅（以光速云为例）](#三步极速导入机场订阅以光速云为例)
5. [路由模式深度解析：配置（Rule）vs 代理（Proxy）vs 直连（Direct）](#路由模式深度解析配置rule-vs-代理proxy-vs-直连direct)
6. [分流规则进阶：精准调度 AI 与 4K 流媒体](#分流规则进阶精准调度-ai-与-4k-流媒体)
7. [HTTPS 解密与 MitM 证书避坑指南](#https-解密与-mitm-证书避坑指南)
8. [iOS 常见疑难故障排查（Troubleshooting）](#ios-常见疑难故障排查troubleshooting)
9. [四层站内内容矩阵与延伸阅读](#四层站内内容矩阵与延伸阅读)
10. [高频核心问答（FAQ）](#高频核心问答faq)

---

## 内容角色与全站链接拓扑声明

作为 iOS 移动生态核心教程，本页面承担 **Deep Tutorial（深度教程页）** 职责：
- **向上链接**：回链全站主脑 [2026 免费VPN安全陷阱深度剖析与42家高速机场晚高峰测速天梯终极指南](/exhibitions/thresholds-of-perception)；
- **横向联动**：与桌面端教程 [Clash Verge Rev 跨平台客户端指南](/workshops/contemporary-painting-techniques) 和 [v2rayN / Sing-box 进阶指南](/workshops/exploring-abstract-art-a-hands-on-workshop) 共同构筑三端合围教程矩阵；
- **场景互补**：紧密衔接 [4K流媒体与AI原生解锁矩阵](/exhibitions/luminous-ground)，保障 iPhone/iPad 在移动网络下安全使用 ChatGPT APP 与 Claude；
- **实体推荐**：[光速云 2.5Gbps IEPL 专线独立评测](/artworks/guangsu-cloud)（年付 ¥99 / 永久 247GB 套餐）。

---

## iOS 代理软件选型对比：为什么小火箭是首选？

在苹果 iOS 平台上，主流代理工具包括 **Shadowrocket（小火箭）**、**Quantumult X（圈叉）**、**Loon** 和 **Stash**：
- **Shadowrocket**：售价 $2.99，性价比极高，支持协议最全面（SS/SSR/VMess/VLESS/Trojan/Hysteria 2/TUIC），上手门槛最低，适合 95% 以上的普通与进阶用户；
- **Quantumult X / Loon**：脚本扩展性强，但规则编写复杂，学习曲线陡峭；
- **Stash**：Clash 的 iOS 移植版，售价较高（$3.99），对资源消耗相对小火箭略大。

综合易用性、抗封锁协议支持及价格，**Shadowrocket 是目前 iOS 用户出海的首选必备工具**。

---

## 如何安全获取海外 Apple ID 并下载官方正版小火箭？

> [!CAUTION]
> **绝对生死红线**：严禁在 iPhone 的【系统设置 ➔ Apple ID / iCloud】中直接登录他人共享账号！一旦登录，他人可通过“查找我的 iPhone”直接远程抹掉并锁死你的设备进行勒索！

### 1. 正确的账号登录流程（仅在 App Store 登录）
1. 打开 iPhone 自带的 **【App Store】** 软件；
2. 点击右上角个人头像，滑动到最底部，点击 **【退出登录（Sign Out）】**；
3. 在弹出的登录框中，输入已准备好的美区或海外 Apple ID 与密码；
4. 提示“双重认证”时输入验证码，进入美区商店后即可搜索并购买下载。

### 2. 官方正版核验指标
- **应用全称**：Shadowrocket
- **开发者名称**：Shadow Launch Technology Limited
- **官方售价**：$2.99 USD（约合 ¥22 元人民币，一次购买终身免费升级）
- **图标标识**：白底蓝色小火箭经典图标（*切勿下载名字带有“Shadowrocket VPN”等后缀的山寨吸费软件*）。

---

## 三步极速导入机场订阅（以光速云为例）

购买了 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud) 后，iOS 导入订阅仅需三步：

1. **复制小火箭专属订阅**：
   - 在 Safari 浏览器中登录光速云官网后台；
   - 点击【一键导入】➔ 选择【导入到 Shadowrocket】或直接点击【复制订阅链接】；
2. **在小火箭中添加节点**：
   - 打开 Shadowrocket 客户端；
   - 点击右上角的 **“+”号**；
   - 在【类型】栏选择 **【Subscribe（订阅）】**；
   - 在【URL】栏粘贴刚才复制的订阅链接，【备注】填写 \`光速云 IEPL 专线\`；
   - 点击右上角【完成（Save）】，客户端会自动拉取几十条全球专线节点；
3. **开启连接与系统授权**：
   - 选择一个低延迟节点（如“香港01”或“新加坡AI专线”）；
   - 打开顶部的【未连接】主开关；
   - 首次连接时，iOS 系统会弹出“Shadowrocket 想添加 VPN 配置”，点击 **【允许（Allow）】** 并输入 iPhone 锁屏密码即可。

---

## 路由模式深度解析：配置（Rule）vs 代理（Proxy）vs 直连（Direct）

在小火箭底部菜单栏的【全局路由】选项中，包含四种核心模式：
- **配置（Config / Rule）- 【强烈推荐】**：根据内置分流规则智能判断。访问国内应用直连不走代理，访问海外受限服务自动走代理专线，最省电、最省流量；
- **代理（Proxy）**：全局代理模式。所有网络数据包无脑通过境外节点转发，会导致国内 App 变慢并暴露国内访问痕迹；
- **直连（Direct）**：所有流量不走代理，相当于关闭软件；
- **场景（Scene）**：可根据当前连接的 WiFi 名称自动切换不同策略。

---

## 分流规则进阶：精准调度 AI 与 4K 流媒体

为保障 OpenAI ChatGPT APP 与 Claude 不触发风控封号，建议在小火箭中设置专属规则：
1. 点击底部菜单栏 **【配置】** ➔ 点击当前使用的 \`default.conf\` 规则文件 ➔ 选择 **【编辑配置】**；
2. 点击 **【添加规则】**；
3. 类型选择 **\`DOMAIN-KEYWORD\`**，内容填入 \`openai\`，策略选择 **【光速云-美西原生专线】**；
4. 再次添加规则，内容填入 \`anthropic\`，策略选择 **【光速云-新加坡原生专线】**；
5. 点击右上角保存。从此手机打开官方 ChatGPT APP 时，将始终固定走最高纯净度的双 ISP 住宅专线。

---

## HTTPS 解密与 MitM 证书避坑指南

部分高级用户需要对流媒体进行重定向或去广告，需要安装根证书。**如果操作不当，会导致 Safari 提示“您的连接不是私密连接”**：
1. 若无脚本去广告需求，**切勿随意开启 MitM 和安装未知证书**；
2. 若确实需要开启，在小火箭【配置】➔【证书】中点击【生成新的 CA 证书】➔【安装证书】；
3. 安装后必须打开 iOS【设置】➔【通用】➔【关于本机】➔ 滑动到底部【证书信任设置】➔ 手动开启该证书的完全信任开关。

---

## iOS 常见疑难故障排查（Troubleshooting）

| 故障现象 | 潜在诱因 | 快速解决对策 |
| :--- | :--- | :--- |
| **小火箭后台经常被系统杀掉** | iOS 内存管理机制将耗电应用静默回收 | 在 iOS【设置】➔【通用】➔【后台 App 刷新】中，确保 Shadowrocket 处于开启状态 |
| **WiFi 切换到 5G 移动蜂窝后断网** | iOS 路由表未及时刷新网络接口 | 在小火箭设置中开启【按需连接（On Demand）】，并在通知栏快速开关一次飞行模式 |
| **测速显示全是毫秒超时** | 小火箭默认使用 ICMP 测速被国内阻断 | 在小火箭【设置】➔【延迟测试方法】中，将测试方式由 ICMP 改为 **【HTTP (CONNECT)】** |
| **微信接收消息有延迟** | 微信服务器被错误划入了代理规则 | 检查分流规则，确保【白名单 / Direct】列表中包含所有微信与腾讯域域名 |

---

## 四层站内内容矩阵与延伸阅读

- **返回全站主脑**：[2026 免费VPN安全陷阱深度剖析与42家高速机场晚高峰测速天梯终极指南](/exhibitions/thresholds-of-perception)；
- **横向性能实测**：查看节点晚高峰速度表现，参阅 [2026 17家主流机场晚高峰测速天梯实测大横评](/exhibitions/echoes-of-stillness)；
- **流媒体与 AI 风控**：[4K流媒体与ChatGPT / Claude / Gemini AI原生解锁矩阵](/exhibitions/luminous-ground)；
- **桌面端教程配合**：[Clash Verge Rev 跨平台客户端指南](/workshops/contemporary-painting-techniques)；
- **极客工具指南**：[v2rayN 与 Sing-box 核心进阶教程](/workshops/exploring-abstract-art-a-hands-on-workshop)；
- **高品质专线推荐**：[光速云 2.5Gbps IEPL 专线独立评测报告](/artworks/guangsu-cloud)（立减优惠码 \`AMM\`）。

---

## 高频核心问答（FAQ）

### Q1：淘宝上花几块钱买的小火箭共享账号安全吗？
**答**：只能用于在 App Store 下载软件，下载完成后**必须立即在 App Store 退出该账号**！切勿将该账号用于购买内购或登录 iCloud。若条件允许，建议自行使用美区虚拟信用卡注册独立海外 Apple ID。

### Q2：为什么我的小火箭测速延迟很低，但看视频很卡？
**答**：小火箭默认的“测试延迟”只是测量本地手机到代理入口服务器的握手耗时（通常只要十几毫秒），不代表海外落地服务器到视频服务商的带宽。真实晚高峰吞吐需参考 [17家晚高峰测速横评](/exhibitions/echoes-of-stillness)。

### Q3：小火箭可以与光速云的 147 永久套餐搭配使用吗？
**答**：完美契合。光速云提供的订阅链接原生支持 Shadowrocket 自动拉取，147 元 247GB 永久不限期流量非常适合在手机上作为备用和移动出海主力，配合优惠码 \`AMM\` 极为划算。
`;

// --- 3. V2RAYN & SING-BOX (exploring-abstract-art-a-hands-on-workshop) ---
const v2rayZh = `# v2rayN 与 Sing-box 核心进阶教程：开启 TUN 模式与游戏低延迟加速全攻略

> **内容定位与摘要**：本指南为 **FreeVPN 实测实验室** 面向高阶极客、开发者及外服电竞玩家编写的硬核进阶配置教程（Deep Tutorial）。深入剖析 Windows 平台常青树工具 **v2rayN 7.x** 与新一代通用网络核心 **sing-box** 的底层架构。手把手指导如何编译与配置高性能 TUN 虚拟网卡、优化 UDP 全锥型 NAT 转发以降低外服竞技游戏（Steam/Apex/Valorant）丢包与抖动（Jitter），并通过终端命令实现自动化路由规则管理。

---

## 目录（Table of Contents）
1. [内容角色与全站链接拓扑声明](#内容角色与全站链接拓扑声明)
2. [工具生态架构：为什么极客偏爱 v2rayN 与 Sing-box 核心？](#工具生态架构为什么极客偏爱-v2rayn-与-sing-box-核心)
3. [环境准备：.NET 8.0 运行时与全功能 Core 核心包部署](#环境准备net-80-运行时与全功能-core-核心包部署)
4. [核心切换实操：Xray-core vs Sing-box 性能与特性对比](#核心切换实操xray-core-vs-sing-box-性能与特性对比)
5. [开启系统级 TUN 虚拟网卡：全面接管外服游戏与命令行流量](#开启系统级-tun-虚拟网卡全面接管外服游戏与命令行流量)
6. [外服游戏极速调优：全锥型 NAT (FullCone) 与 UDP 转发配置](#外服游戏极速调优全锥型-nat-fullcone-与-udp-转发配置)
7. [高级路由规则编写：自定义分流与 DNS 防污染方案](#高级路由规则编写自定义分流与-dns-防污染方案)
8. [极客终端自测命令与排错手册（Troubleshooting）](#极客终端自测命令与排错手册troubleshooting)
9. [四层站内内容矩阵与延伸阅读](#四层站内内容矩阵与延伸阅读)
10. [高频核心问答（FAQ）](#高频核心问答faq)

---

## 内容角色与全站链接拓扑声明

作为高阶极客技术教程，本页面承担 **Deep Tutorial（深度教程页）** 核心职能：
- **向上链接**：回链全站主脑 [2026 免费VPN安全陷阱深度剖析与42家高速机场晚高峰测速天梯终极指南](/exhibitions/thresholds-of-perception)；
- **横向联动**：与 [2026 17家主流机场晚高峰测速天梯实测大横评](/exhibitions/echoes-of-stillness)（验证高吞吐与低抖动）及 [4K流媒体与AI原生解锁矩阵](/exhibitions/luminous-ground) 紧密协作；
- **兄弟教程**：与 [Clash Verge Rev 跨平台配置指南](/workshops/contemporary-painting-techniques) 和 [Shadowrocket 小火箭 iOS 配置指南](/workshops/digital-art-and-traditional-media) 共同覆盖三大生态；
- **推荐节点底座**：[光速云 2.5Gbps IEPL 专线独立评测报告](/artworks/guangsu-cloud)（年付 ¥99 / 永久 247GB 套餐）。

---

## 工具生态架构：为什么极客偏爱 v2rayN 与 Sing-box 核心？

虽然 Clash 体系在普通用户中极为流行，但在追求极致性能、单核心高吞吐及多协议原生支持的开发者群体中，**v2rayN + Sing-box** 拥有不可替代的地位：
1. **纯净与极低开销**：sing-box 采用 Go 语言极简设计，内存占用比同类核心低 40% 以上，对网络数据包的处理零拷贝（Zero-copy），转发吞吐能力极强；
2. **真正的全协议集成**：原生兼容 Shadowsocks 2022、VMess、VLESS、Trojan、Hysteria 2、TUIC v5、WireGuard 等，无任何历史包袱；
3. **出色的外服游戏兼容性**：支持原生 TUN 虚拟网卡模式，能够完美处理网络游戏高度依赖的 UDP 数据包广播与全锥型 NAT 映射。

---

## 环境准备：.NET 8.0 运行时与全功能 Core 核心包部署

1. **安装运行环境**：v2rayN 7.x 采用最新 WPF 框架，运行前必须安装微软官方 **.NET 8.0 Desktop Runtime (x64)**；
2. **下载全功能集成包**：从官方 GitHub Release 页面下载名为 \`v2rayN-with-Core.zip\` 的完整压缩包（*切勿下载仅包含主界面的精简包，否则会缺失核心二进制文件*）；
3. **目录存放建议**：解压至无中文、无空格的路径（例如 \`D:\\Tools\\v2rayN\\\`），并右键以管理员身份运行 \`v2rayN.exe\`。

---

## 核心切换实操：Xray-core vs Sing-box 性能与特性对比

在 v2rayN 顶部菜单栏点击 **【设置】➔ 【核心类型设置】**：
- **Xray-core**：VLESS XTLS-Reality 的原创发源地，适合连接高防中转与标准 VLESS 专线；
- **sing-box-core（推荐）**：新一代多协议引擎，其 TUN 模式性能卓越，对 CPU 占用控制极佳。建议将核心类型默认选择为 **sing-box**。

---

## 开启系统级 TUN 虚拟网卡：全面接管外服游戏与命令行流量

要让 Steam、Epic、Discord 语音以及终端控制台享受加速，必须开启系统级 TUN 模式：

1. 打开 v2rayN 底部任务栏，找到 **【启用TUN模式】** 勾选框；
2. 首次勾选时，系统会弹出 UAC 提权请求，允许后系统会自动下载并安装 \`wintun.dll\` 虚拟网卡驱动；
3. **检查虚拟网卡运行状态**：
   - 打开 Windows 控制台，运行 \`ipconfig\`；
   - 看到名为 \`sing-box_tun\` 或 \`wintun\` 的网络适配器，且被分配了 \`172.19.0.1\` 网段的 IP，代表 TUN 模式已经无缝接管全系统网络流量。

---

## 外服游戏极速调优：全锥型 NAT (FullCone) 与 UDP 转发配置

外服多人联机竞技游戏（如 Apex Legends、使命召唤、暗黑破坏神4）对 UDP 抖动与 NAT 类型极为敏感。劣质代理会导致“NAT 类型严格”或“语音房间无法进入”。

### 极客调优步骤：
1. 在 v2rayN 中右键点击节点（以 [光速云 2.5Gbps 游戏专线](/artworks/guangsu-cloud) 为例）选择【编辑服务器】；
2. 找到 **【UDP 转发】** 选项，确保处于勾选状态；
3. 在【参数设置】➔【v2rayN设置】中，开启 **【启用全锥型 NAT (FullCone NAT)】**；
4. 这将使得游戏服务器能够直接穿越 NAT 映射，将游戏联机抖动降低至极限（Jitter < 3ms）。

---

## 高级路由规则编写：自定义分流与 DNS 防污染方案

在【路由设置】中，推荐选择预设的 **【绕过大陆 (Whitelist) 模式】**：
- 国内常用网站（\`geosite:cn\`）与国内 IP 段（\`geoip:cn\`）直连访问；
- 境外流量自动走代理；
- 对于特定的开发环境（如 GitHub、Docker Hub、HuggingFace），可在路由自定义列表中显式指定走高带宽专线节点。

---

## 极客终端自测命令与排错手册（Troubleshooting）

在开启 TUN 模式后，可在 PowerShell 中运行以下网络诊断命令进行链路质量核验：

\`\`\`powershell
# 1. 验证 UDP 53 端口是否被捕获与 DNS 防泄漏状态
nslookup chatgpt.com 127.0.0.1

# 2. 测量从本地经由代理至外服游戏服务器的 UDP 往返抖动
Test-NetConnection -ComputerName 1.1.1.1 -Port 443

# 3. 检查当前 TUN 网卡路由跃点优先级
Get-NetIPInterface | Where-Object { $_.InterfaceAlias -like "*tun*" } | Select-Object InterfaceAlias, InterfaceMetric
\`\`\`

> [!NOTE]
> 如果外服游戏依然提示代理不可用，请检查【任务管理器】中的后台服务，确保没有其他旧版加速器驱动在同时占用虚拟网卡接口。

---

## 四层站内内容矩阵与延伸阅读

- **返回全站主脑**：[2026 免费VPN安全陷阱深度剖析与42家高速机场晚高峰测速天梯终极指南](/exhibitions/thresholds-of-perception)；
- **晚高峰实测数据**：[2026 17家主流机场晚高峰测速天梯实测大横评](/exhibitions/echoes-of-stillness)；
- **流媒体与 AI 解锁**：[4K流媒体与ChatGPT / Claude / Gemini AI原生解锁矩阵](/exhibitions/luminous-ground)；
- **其他平台配置教程**：
  - [Clash Verge Rev 跨平台配置指南](/workshops/contemporary-painting-techniques)；
  - [Shadowrocket 小火箭 iOS 客户端配置指南](/workshops/digital-art-and-traditional-media)；
- **极客推荐硬件底座**：[光速云 2.5Gbps IEPL 专线独立评测报告](/artworks/guangsu-cloud)（年付 ¥99 / 永久 247GB 套餐，输入优惠码 \`AMM\` 专属立减）。

---

## 高频核心问答（FAQ）

### Q1：为什么开启 TUN 模式后局域网共享打印机搜不到了？
**答**：这是因为 TUN 模式默认接管了全网段。只需在 v2rayN 路由设置中添加一条规则：目标为 \`192.168.0.0/16\`、\`10.0.0.0/8\` 的局域网网段设置为 **DIRECT（直连）** 即可。

### Q2：v2rayN 和 Clash Verge Rev 相比该怎么选？
**答**：日常办公、学术检索与流媒体观影首选 **Clash Verge Rev**，界面更友好且分流策略组更直观；对外服电竞游戏联机、命令行重度开发及自定义核心调试，首选 **v2rayN + Sing-box**。

### Q3：光速云 147 永久套餐适合游戏玩家吗？
**答**：非常适合。电竞外服联机对带宽总量消耗较小（通常每小时游戏仅消耗几十兆流量），但对专线物理延迟与抗抖动要求极高。光速云 2.5Gbps IEPL 专线拥有全网顶尖的稳定低抖动表现，配合 247GB 永不过期流量与优惠码 \`AMM\`，一次购买即可长期畅玩。
`;

// Write the files
fs.writeFileSync(
  "src/content/workshops/contemporary-painting-techniques/body/zh.md",
  clashZh,
  "utf8",
);
fs.writeFileSync(
  "src/content/workshops/contemporary-painting-techniques/body/en.md",
  clashZh,
  "utf8",
);

fs.writeFileSync(
  "src/content/workshops/digital-art-and-traditional-media/body/zh.md",
  rocketZh,
  "utf8",
);
fs.writeFileSync(
  "src/content/workshops/digital-art-and-traditional-media/body/en.md",
  rocketZh,
  "utf8",
);

fs.writeFileSync(
  "src/content/workshops/exploring-abstract-art-a-hands-on-workshop/body/zh.md",
  v2rayZh,
  "utf8",
);
fs.writeFileSync(
  "src/content/workshops/exploring-abstract-art-a-hands-on-workshop/body/en.md",
  v2rayZh,
  "utf8",
);

console.log("Workshops generated successfully.");
