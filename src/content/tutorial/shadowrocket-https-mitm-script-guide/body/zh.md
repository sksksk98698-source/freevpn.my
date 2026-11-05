> **实测导读与核心结论（TL;DR）**：
> 现代移动应用普遍采用 HTTPS 强加密通信，普通的分流规则只能根据域名和 IP 进行粗粒度拦截，无法过滤应用内部的数据流广告或重写请求参数。Shadowrocket 支持强大的 **HTTPS 解密（MitM，Man-in-the-Middle）** 与 **脚本重写（Script）** 功能。通过在 iPhone 本地生成专属的自签名根证书并在 iOS 系统设置中开启【完全信任】，小火箭可在本地安全解密数据包头，剔除开屏牛皮癣广告、解锁特定应用的隐藏功能，并执行定时签到脚本。

---

## 1. HTTPS 解密（MitM）安全与信任流程

⚠️ **安全警示**：证书必须由手机本地的 Shadowrocket 独立生成，**绝对不要安装任何第三方来源预先打包好的未知证书**，以保护个人网银与敏感数据安全。

### 正规安装三步走：

1. **生成并导出证书**：打开 Shadowrocket →【配置】→ 点击当前使用的配置文件右侧的【(i)】图标 →【HTTPS 解密】→ 开启【HTTPS 解密】开关 → 点击【生成新的 CA 证书】→【安装证书】；
2. **下载描述文件**：在 Safari 弹出的系统提示中点击【允许】，提示描述文件已下载；
3. **激活完全信任**：
   - 打开 iPhone【设置】→【已下载描述文件】→ 点击【安装】输入锁屏密码；
   - 进入【设置】→【通用】→【关于本机】→ 滑动到最底部【证书信任设置】；
   - 找到刚刚安装的 Shadowrocket CA 证书，将其右侧的【完全信任】开关打开。

---

## 2. 脚本重写（Script）去广告实战配置

在配置文件中追加去广告重写规则与 JavaScript 处理逻辑：

```ini
[Script]
# 拦截常见视频应用信息流广告
video_ad_block = type=http-response,pattern=^https?://api.example.com/v1/ads,requires-body=1,script-path=https://raw.githubusercontent.com/user/rules/main/scripts/clean.js

[MITM]
enable = true
hostname = api.example.com, *.adservice.com
```

配合高可靠的专线服务商（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），能够在剥离冗余广告数据包的同时，享受纯净、极速的出海体验。

---

## 3. 蜂巢式关联与扩展阅读矩阵

- **基础配置指引**：回顾小火箭安装导入，参考 [iOS Shadowrocket 小火箭最新官方配置教程](/tutorial/shadowrocket-ios-setup-and-apple-id-guide)；
- **分流规则进阶**：掌握策略组分流，查看 [Shadowrocket 进阶规则模式与按需代理](/tutorial/shadowrocket-routing-rules-and-groups)；
- **网络排障技巧**：证书异常导致断网排查，查阅 [Shadowrocket 节点异常排查宝典](/tutorial/shadowrocket-troubleshooting-and-battery-saving)；
- **协议安全性探讨**：了解 TLS 握手与伪装原理，参考 [v2rayN 启用 VLESS Reality 与 Hysteria 2 实操](/tutorial/v2rayn-vless-reality-hysteria2-config)。
