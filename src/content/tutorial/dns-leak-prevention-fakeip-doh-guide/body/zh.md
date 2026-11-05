> **实测导读与核心结论（TL;DR）**：
> 很多用户即便挂着代理，其访问的所有海外网址（如 Google、Twitter、海外银行）依然能被本地运营商（电信/联通/移动）一览无余地记录在日志中，这种现象被称为 **DNS 泄漏 (DNS Leak)**。产生原因是：浏览器在发起 TCP 连接前，先向本地 ISP 的 53 端口明文发送了 DNS 查询请求。通过启用 **Fake-IP 模式** 与 **DoH (DNS-over-HTTPS)** 加密，本地系统不再向上游明文查询域名，而是直接返回一个保留段内网虚拟 IP（`198.18.x.x`），将真实的域名解析推迟到海外专线服务器端完成。实测使用 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud) 配合 Fake-IP，在 dnsleaktest 测试中仅显示专线落地机房 DNS，实现 0% 泄露与绝对隐私保障。

---

## 1. DNS 污染与 DNS 泄漏的底层技术链条

```text
【无防护环境】：
用户电脑 ──(1. 明文向本地运营商 53 端口查询)──> 本地 ISP DNS (记录并投毒错误 IP)
   └── 污染拦截，无法访问！

【Fake-IP 智能防护环境】：
用户电脑 ──(1. 拦截本地 DNS 查询)──> Clash / Sing-box 内核
内核立即返回虚拟 IP (如 198.18.0.23) ──> 浏览器向 198.18.0.23 发起 TCP 连接
内核截获该请求，通过 IEPL 专线将原始域名发往海外 ──> 落地机房代为发起安全 DoH 解析
```

---

## 2. 生产级防泄漏 DNS 配置最佳实践

以 Clash Verge Rev 配置文件中的 `dns` 模块为例：

```yaml
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
```

- **fake-ip-filter**：将 Windows 网络连通性测试（`msftconnecttest.com`）与国内局域网域名加入白名单，防止误伤国内软件；
- **fallback**：海外域名强制使用 Cloudflare 或 Google 的 DoH 加密链接解析。

---

## 3. 在线验证 DNS 泄漏防护效果

配置完成后，访问国际权威安全检测网站：

1. 打开浏览器进入 `https://www.dnsleaktest.com`；
2. 点击【Extended Test】运行深度多轮探测；
3. **合格检测结果**：检测报告中的所有 DNS 服务器 IP，其所属国家与运营商必须**全部为海外机房**（如 Cloudflare、Google 或节点落地机房），绝对不能出现任何【China Telecom】、【China Unicom】或【China Mobile】的本地服务器！

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **虚拟网卡集成**：在 TUN 模式中开启 Fake-IP，参考 [Clash Verge Rev TUN 模式与虚拟网卡深度调优](/tutorial/clash-verge-rev-tun-mode-setup)；
- **协议底层剖析**：理解三层包拦截机制，查阅 [TUN 虚拟网卡模式原理深度解析](/tutorial/tun-mode-osi-layer3-deep-dive)；
- **免费代理风险**：了解恶意免费 VPN 的 DNS 劫持链条，参考 [免费 VPN 透明代理与 DNS 劫持实录](/airport/transparent-proxy-dns-hijacking-risks)；
- **安全专线推荐**：选购纯净无污染专线，参考 [光速云 2.5Gbps 双向 IEPL 独立评测](/artworks/guangsu-cloud)。
