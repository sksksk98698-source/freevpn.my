> **实测导读与核心结论（TL;DR）**：
> Shadowrocket（俗称“小火箭”）是 iOS 平台上性价比最高、普及率最广的代理利器（App Store 售价仅 $2.99 一次性买断）。由于中国大陆区 App Store 下架了所有代理软件，新手出海的首要门槛是准备一个**海外地区（通常为美区）Apple ID**。核心原则：只需在 App Store 单独登录美区账号下载，切勿在系统设置的 iCloud 中登录以防设备被锁。下载后，使用小火箭扫描机场提供的二维码或粘贴订阅 URL（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），在 iOS 弹窗中允许添加 VPN 配置，即可享受毫秒级移动端加速。

---

## 1. 美区 Apple ID 合规注册与安全准则

### 1.1 避免踩坑的“三不原则”

1. **不要在【设置】顶部登录公共账号**：如果公共账号开启了“查找我的 iPhone”或遭遇双重认证封锁，你的手机将彻底变砖；
2. **只在【App Store】中切换账号**：点击 App Store 右上角头像，滑到最底部退出当前国区账号，仅在 App Store 登录海外账号；
3. **支持正版，拒绝租借带毒账号**：通过苹果官网注册个人专属美区账号，通过海外礼品卡（Apple Gift Card）充值正版小火箭。

---

## 2. 节点导入与首次连接三步走

1. **导入节点**：打开 Shadowrocket，点击右上角的【+】号。类型选择【Subscribe (订阅)】，在 URL 栏粘贴机场提供的专线订阅链接，点击右上角【完成】；
2. **自动化更新**：点击底部【设置】→【订阅】→ 勾选【打开时更新】与【自动后台更新】，保证节点列表始终处于最新可用状态；
3. **全局分流模式选择**：主界面全局路由推荐选择【配置 (Config)】模式（相当于桌面端的规则模式），国内应用走直连，海外应用走节点。

点击顶部的连接开关，在 iOS 弹出的【“Shadowrocket”想要添加 VPN 配置】提示中输入锁屏密码确认，顶部状态栏出现【VPN】图标即表示出海成功。

实测搭配 [光速云 IEPL 专线](/artworks/guangsu-cloud)，iPhone 在 5G 移动蜂窝网络下首包延迟仅 48ms，刷 Twitter 与 Instagram 秒开高清大图。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **进阶分流规则**：进阶去广告与分应用流控，参考 [Shadowrocket 进阶规则与分流策略组](/tutorial/shadowrocket-routing-rules-and-groups)；
- **HTTPS 抓包与脚本**：配置证书与去开屏广告，查阅 [Shadowrocket HTTPS 解密与脚本扩展](/tutorial/shadowrocket-https-mitm-script-guide)；
- **故障排障手册**：连上后无法访问 App Store，查看 [Shadowrocket 节点异常排查宝典](/tutorial/shadowrocket-troubleshooting-and-battery-saving)；
- **Android 平替工具**：安卓端跨平台客户端选型，参考 [FlClash 极简跨平台代理客户端实战](/tutorial/flclash-cross-platform-setup-guide)。
