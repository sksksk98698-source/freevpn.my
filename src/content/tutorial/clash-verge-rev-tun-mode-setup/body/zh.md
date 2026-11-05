> **实测导读与核心结论（TL;DR）**：
> 普通【系统代理 (System Proxy)】仅作用于遵循 Windows 注册表代理设置的应用（如 Chrome、Edge 等浏览器），而终端命令行（PowerShell、Git、Docker、SSH）以及外服网游（Steam、Apex、Valorant）均绕过系统代理导致直连失败。开启 Clash Verge Rev 的 **TUN 模式 (Tun Mode)**，可通过系统级虚拟网卡驱动（Wintun / utun）直接在 OSI 第三层（网络层）接管整机所有 IP 数据包。配合 Fake-IP 域名映射与双向 IEPL 专线（如 [光速云 IEPL 专线](/artworks/guangsu-cloud)），可实现终端全自动出海与网游 45ms 稳定联机。

---

## 1. 系统代理 vs TUN 虚拟网卡的底层本质差异

理解两者的底层工作机制是解决出海断流与漏代理的关键：

| 维度对比           | 普通系统代理 (System Proxy)                      | TUN 虚拟网卡模式 (TUN Mode)                       |
| :----------------- | :----------------------------------------------- | :------------------------------------------------ |
| **OSI 工作层级**   | 应用层 / 会话层 (Layer 7 / Layer 5)              | 网络层 (Layer 3 IP Packet)                        |
| **数据包拦截方式** | 依赖应用程序主动向 `127.0.0.1:7897` 发起 CONNECT | 虚拟网卡驱动在网络堆栈底部无差别截获所有 IP 封包  |
| **终端命令行支持** | 默认不支持，需手动导出 `$env:http_proxy`         | **100% 原生透明接管**，无需任何环境变量配置       |
| **UDP 协议转发**   | 支持有限，极易造成 UDP 断流                      | **完全支持原生 UDP 转发**，语音通话与游戏联机极佳 |
| **DNS 防泄漏机制** | 依赖浏览器 DoH 或本地转发                        | **内置 Fake-IP 劫持**，彻底杜绝运营商 DNS 污染    |

---

## 2. 启用 TUN 模式的先决条件：服务模式安装

在 Windows 10/11 系统上，创建底层虚拟网卡需要提升至系统级管理员权限。

### 2.1 安装 Service Mode（服务模式）

1. 启动 Clash Verge Rev，点击左侧菜单的【设置 (Settings)】；
2. 找到【服务模式 (Service Mode)】选项，点击右侧的【管理 (Manage)】或【安装 (Install)】；
3. 在弹出的 UAC 管理员权限提示框中点击【是】；
4. 安装完成后，服务模式状态指示灯将变为**绿色常亮**，且核心版本将显示为当前 Meta 内核版本。

```powershell
# 验证 Windows Wintun 驱动服务运行状态
Get-Service -Name "clash_verge_service" | Select-Object Status, StartType, DisplayName
```

---

## 3. TUN 核心配置参数精讲（Stack 与 Fake-IP）

进入 Clash Verge Rev 设置中的【TUN 模式设置】，推荐使用以下高可用参数组合：

```yaml
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
```

- **stack: mixed**：混合协议栈。TCP 采用高性能操作系统内核协议栈，UDP 采用稳定的用户态协议栈，兼顾大文件吞吐与抗断流能力；
- **enhanced-mode: fake-ip**：Fake-IP 模式为每个境外域名快速分配虚拟内网 IP（`198.18.x.x`），规避本地 DNS 向上查询时的首包污染，将域名解析工作直接推迟到海外落地节点端完成。

---

## 4. 验证 TUN 模式接管效果

开启 TUN 模式后，可通过以下两组测试验证透明代理是否生效：

### 测试 1：PowerShell 终端无环境变量测试

```powershell
# 在未设置任何 http_proxy 的全新终端直接请求境外 API
curl.exe -I https://api.openai.com/v1/models
# 若正常返回 HTTP 401/200 且未提示连接超时，证明终端流量已成功被 TUN 接管
```

### 测试 2：Git 克隆测试

```bash
# 直接克隆大型开源仓库，观察下载速度是否跑满千兆专线
git clone --depth=1 https://github.com/torvalds/linux.git
```

搭配高带宽专线（如 [光速云 2.5Gbps IEPL 节点](/artworks/guangsu-cloud)），终端下载速度可轻松突破 60MB/s。

---

## 5. 蜂巢式关联与扩展阅读矩阵

- **驱动排障**：若 Wintun 提示创建网卡失败，查阅 [Windows 平台 Wintun 驱动故障修复指南](/tutorial/windows-wintun-driver-repair-handbook)；
- **DNS 安全机制**：深入学习 Fake-IP 原理，参考 [DNS 污染与 DNS 泄漏深度防护教程](/tutorial/dns-leak-prevention-fakeip-doh-guide)；
- **基础入门指引**：回顾客户端基础使用，查看 [2026 Clash Verge Rev 完整安装教程](/tutorial/clash-verge-rev-beginner-guide)；
- **移动端同类替代**：了解 iOS 客户端实现方式，参考 [Shadowrocket 进阶分流规则配置](/tutorial/shadowrocket-routing-rules-and-groups)。
