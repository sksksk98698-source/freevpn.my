> **实测导读与核心结论（TL;DR）**：
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
3. **IP 地址**：输入未被占用的局域网 IP（如 `192.168.1.188`）；
4. **子网掩码**：`255.255.255.0`；
5. **网关 (Default Gateway)**：填入旁路由的 IP（如 `192.168.1.2`）；
6. **首选 DNS**：填入旁路由的 IP（`192.168.1.2`）。

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
