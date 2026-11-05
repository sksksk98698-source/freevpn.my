> **实测导读与核心结论（TL;DR）**：
> 在手机上开启代理时，很多用户最反感国内应用（如招商银行、微信支付、美团外卖）也受到代理影响，导致定位漂移或频繁触发异地登录保护。**FlClash 的【分应用代理 (Per-App Proxy)】** 功能允许用户在应用级别建立精准白名单：勾选的海外 App（如 Telegram、YouTube、Chrome、X）强制走加密专线隧道，而未勾选的所有国内 App 100% 绕过 VPN 接口走本地原生网络。这种“硬件级分流”既杜绝了网银风控风险，又大幅节省了昂贵的专线流量。

---

## 1. 开启 Android 分应用代理实战步骤

1. 打开 FlClash 侧边栏，点击进入【设置 (Settings)】；
2. 找到并点击【分应用代理 (Per-App Proxy)】选项；
3. 将顶部开关切换为【仅允许已选应用 (Whitelist 模式)】；
4. 在下方应用列表中，勾选需要出海的 App：
   - 必备办公类：`Telegram`, `Slack`, `Gmail`, `Notion`；
   - 生产力 AI 类：`ChatGPT`, `Claude`, `Copilot`；
   - 媒体娱乐类：`YouTube`, `Twitter (X)`, `Netflix`。
5. 点击右上角【保存】并重新连接代理。

此时在手机上打开任何未勾选的国内应用，其网络请求绝不会经过 FlClash 核心，完全享受本地千兆 5G 的极致直连延迟。

---

## 2. 路由规则与分应用代理的双重叠加优势

在分应用代理的基础上，FlClash 内部的 Mihomo 规则系统依然在第二层提供防护：

- 即使勾选了 Chrome 浏览器，当你在 Chrome 中访问 `baidu.com` 或 `taobao.com` 时，内置的 `geosite:cn` 规则依然会自动调度至直连（DIRECT）出站；
- 只有真正的海外请求才会消耗高品质专线带宽（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)）。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **客户端入门指南**：回顾客户端基础安装，参考 [FlClash 极简跨平台代理客户端实战](/tutorial/flclash-cross-platform-setup-guide)；
- **订阅与备份迁移**：配置自动同步与更新，查看 [FlClash 订阅自动更新与故障恢复](/tutorial/flclash-auto-update-and-backup-migration)；
- **iOS 类似方案**：了解苹果生态分流实现，参考 [Shadowrocket 进阶规则模式与按需代理](/tutorial/shadowrocket-routing-rules-and-groups)；
- **专线选购避坑**：了解大流量高性价比套餐，参考 [一次付费终身有效：各大机场永久套餐横评](/airport/permanent-non-expiring-packages-review)。
