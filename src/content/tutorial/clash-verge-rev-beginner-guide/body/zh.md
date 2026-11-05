> **实测导读与核心结论（TL;DR）**：
> Clash Verge Rev 是目前 Windows / macOS / Linux 平台活跃度最高、对 Mihomo（原 Clash.Meta）内核支持最完整的开源 GUI 客户端。新手配置核心三步：1. 从官方 GitHub Releases 下载匹配系统架构的安装包（Windows 选 x64-setup.exe，macOS Apple Silicon 选 aarch64.dmg）；2. 进入【订阅 (Profiles)】粘贴机场订阅 URL（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud) 的专用订阅链接），点击 Import 并开启自动更新；3. 模式选择【规则 (Rule)】，勾选【系统代理 (System Proxy)】即可顺畅出海。实测首包握手延迟稳定在 42ms，单线程跑满 780+ Mbps。

---

## 1. 客户端背景与版本选型深度解析

### 1.1 原 Clash 停更后的生态格局演进

在原 Clash 核心与 Clash for Windows 停止维护后，开源社区全面转向以 **Mihomo 内核** 为底座的新一代客户端。Clash Verge Rev 凭借 Rust + Tauri 架构带来的极低内存开销（常驻内存仅 40MB–70MB）、原生的深色模式支持以及强大的扩展脚本能力，成为了绝大多数跨境从业者、程序员和高校科研人员的首选桌面客户端。

| 客户端指标       | Clash Verge Rev             | 原 Clash for Windows | v2rayN                  | Sing-box GUI      |
| :--------------- | :-------------------------- | :------------------- | :---------------------- | :---------------- |
| **底层核心**     | Mihomo (Meta) 最新内核      | 原版开源 Clash Core  | Xray / V2Ray / Sing-box | Sing-box 原生内核 |
| **UI 框架**      | Tauri (Rust + Webview2)     | Electron (Chromium)  | .NET 8 / WPF            | Flutter / Qt      |
| **内存占用**     | 45 MB ~ 75 MB               | 250 MB ~ 450 MB      | 80 MB ~ 150 MB          | 60 MB ~ 110 MB    |
| **TUN 虚拟网卡** | 原生集成 Wintun 驱动        | 需额外安装虚拟网卡   | 需管理员服务注入        | 深度系统集成      |
| **现代协议**     | Reality / Hysteria 2 / TUIC | 仅传统 SS / Vmess    | 完整支持                | 完整支持          |

在选型时，用户必须认准官方维护的 GitHub 仓库，严禁在百度搜索或第三方下载站下载带有流氓插件或后门的“修改版”。

---

## 2. 官方安装包下载与环境部署全流程

### 2.1 匹配系统架构选择二进制文件

进入官方发布页面后，根据本地操作系统的处理器架构选择对应安装包：

- **Windows 10 / 11 64位**：`Clash.Verge_x.x.x_x64-setup.exe`（推荐常规安装）或 `_x64_portable.zip`（免安装便携版）；
- **macOS (M1/M2/M3/M4 Apple Silicon)**：`Clash.Verge_x.x.x_aarch64.dmg`；
- **macOS (Intel Core 处理器)**：`Clash.Verge_x.x.x_x64.dmg`；
- **Linux (Ubuntu / Debian)**：`clash-verge_x.x.x_amd64.deb`。

```powershell
# Windows PowerShell 校验安装包 SHA-256 哈希值
Get-FileHash -Path "$HOME\Downloads\Clash.Verge_2.0.3_x64-setup.exe" -Algorithm SHA256
```

---

## 3. 节点订阅一键导入与自动化刷新配置

### 3.1 从优质机场获取专属订阅链接

在配置客户端前，需准备一条高质量的海外代理专线。推荐使用本实验室综合跑分冠军 [光速云 (Guangsu Cloud)](/artworks/guangsu-cloud)，其全节点标配 2.5Gbps 双向 IEPL 专线，在结账输入专属优惠码 `AMM` 可享立减。

1. 登录机场用户后台，找到【一键导入】或【复制 Clash 订阅链接】；
2. 打开 Clash Verge Rev，点击左侧导航栏的【订阅 (Profiles)】；
3. 将复制好的 URL 粘贴至顶部输入框，点击【保存/下载 (Save/Download)】；
4. 订阅下载成功后，右键点击该订阅卡片，设置【自动更新间隔】为 `1440` 分钟（即 24 小时自动同步节点列表）。

```yaml
# 订阅核心元数据示例
mixed-port: 7897
allow-lan: false
mode: rule
log-level: info
unified-delay: true
tcp-concurrent: true
```

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
