> **实测导读与核心结论（TL;DR）**：
> 许多老牌机场仅提供 Clash YAML 或纯 Base64 订阅链接，并未原生提供 Sing-box JSON 订阅。使用公开的第三方在线“订阅转换平台”存在被记录 Token 与节点窃取的严重安全隐患。本文详细介绍两套**安全无损转换方案**：1. 使用本地自建的 Docker 版 **Subconverter** 进行纯离线转换，彻底杜绝隐私泄露；2. 掌握 Clash YAML 与 Sing-box JSON 核心节点参数的映射原理，手动编写自动化脚本实现节点无缝平移。

---

## 1. 在线转换的安全风险与黑产内幕

将包含敏感 Token 的机场订阅链接输入未经验证的第三方转换网址，面临极大风险：

- **节点被转售**：不法站点后台爬取订阅内的服务器 IP、端口与密码，将高质量专线打包为免费节点倒卖；
- **流量被盗刷**：原本属于用户的流量额度被第三方滥用，造成月底突发清零；
- **中间人规则注入**：转换服务在生成的规则末尾注入推广返利链接或挖矿脚本。

因此，强烈建议用户使用本地离线工具，或直接选用原生支持全协议全格式订阅的优质机场（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)）。

---

## 2. 本地自建 Subconverter 安全转换方案

使用 Docker 在本地或内网部署轻量级转换容器：

```bash
# 启动本地 Subconverter 转换容器
docker run -d \
  --name subconverter \
  --restart always \
  -p 25500:25500 \
  tindy2013/subconverter:latest
```

部署完成后，在本地浏览器或客户端中构造转换请求：

```text
http://127.0.0.1:25500/sub?target=singbox&url=YOUR_AIRPORT_SUBSCRIBE_URL
```

所有订阅解析与 JSON 编译完全在本地机器内存中进行，无任何网络数据包外泄。

---

## 3. 核心节点参数对应映射表

理解底层参数映射有助于在转换异常时快速定位排错：

| 节点属性         | Clash YAML 字段   | Sing-box JSON 字段                              | 转换注意事项               |
| :--------------- | :---------------- | :---------------------------------------------- | :------------------------- |
| **服务器地址**   | `server: 1.2.3.4` | `"server": "1.2.3.4"`                           | 保持一致                   |
| **端口**         | `port: 443`       | `"server_port": 443`                            | 字段名称不同               |
| **加密方式**     | `cipher: auto`    | `"method": "auto"`                              | Shadowsocks 中注意字段映射 |
| **用户 UUID**    | `uuid: xxxx-xxxx` | `"uuid": "xxxx-xxxx"`                           | 保持一致                   |
| **Reality 公钥** | `public-key: xxx` | `"tls": { "reality": { "public_key": "xxx" } }` | 需嵌套在 tls 对象内        |

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **Sing-box 规则实操**：转换后配置分流策略，查阅 [Sing-box 规则集（Rule-Set）与智能分流实战](/tutorial/sing-box-ruleset-smart-routing)；
- **客户端排障**：遇到转换后 0 节点错误，参考 [Clash Verge Rev 常见报错全景排障手册](/tutorial/clash-verge-rev-troubleshooting-handbook)；
- **免费代理风险**：了解订阅泄露背后的危害，参考 [免费 VPN 如何将用户设备转化为黑产肉鸡出口](/airport/how-free-vpns-turn-devices-into-botnets)；
- **返回聚合导航**：探索全站架构，查看 [客户端教程库聚合中心](/tutorial)。
