> **实测导读与核心结论（TL;DR）**：
> 默认的 Shadowrocket 规则配置较为粗糙，容易导致部分国内银行 App 提示网络异常，或 ChatGPT 流量因误走普通节点而被封禁。通过在小火箭中导入 **高精度远程规则集（如 ACL4SSR 或 Hackl0us/Surge-Rule-Snippets）**，并建立专属的 **策略组（Proxy Groups）**，用户可以实现：OpenAI / Claude 流量定向走香港或日本低风控住宅 IP，YouTube / Netflix 走大带宽流媒体解锁节点，微信、高德地图、外卖等国内 App 毫秒级直连，同时节省手机 30% 以上的电量与套餐流量。

---

## 1. 导入第三方远程规则集（Remote Config）

1. 打开 Shadowrocket，点击底部导航栏的【配置 (Config)】；
2. 点击右上角【+】号，在 URL 输入框中粘贴权威规则集地址（推荐 ACL4SSR 精简版规则）：
   ```text
   https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Mini.ini
   ```
3. 下载完成后，点击该配置文件，选择【使用配置 (Use Config)】。

---

## 2. 策略组（Policy Group）精细化分流实战

在优质配置文件中，节点会被智能拆分为不同的逻辑分组：

- **🤖 AI 生产力分组**：专门绑定高质量、低风控的专线节点（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)）；
- **🎬 海外流媒体分组**：指定支持 Netflix / Disney+ 解锁的大流量节点；
- **🎯 兜底策略 (FINAL)**：未匹配规则的未知流量默认走 PROXY 或 DIRECT。

---

## 3. 按需连接（On Demand）极客设置

在经常切换 Wi-Fi 与蜂窝网络的通勤场景中，可开启按需连接：

- 进入【设置】→【按需连接】；
- 设置特定受信任的家庭 Wi-Fi SSID 自动断开代理，离开家切换至 5G 移动网络时自动唤醒 VPN 隧道，实现全天候无感续航。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **抓包去广告扩展**：配置小火箭 MitM 证书，查阅 [Shadowrocket HTTPS 解密与脚本扩展](/tutorial/shadowrocket-https-mitm-script-guide)；
- **排障与省电技巧**：解决 iPhone 耗电发热问题，参考 [Shadowrocket 节点异常排查宝典](/tutorial/shadowrocket-troubleshooting-and-battery-saving)；
- **专线网络匹配**：为策略组匹配最佳专线，查看 [IEPL 双向物理专线抗骨干网 QoS 实测](/airport/iepl-qos-bypass-architecture)；
- **返回聚合导航**：浏览全平台客户端，查看 [客户端教程库聚合中心](/tutorial)。
