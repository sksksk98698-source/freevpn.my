> **实测导读与核心结论（TL;DR）**：
> 绝大多数机场下发的订阅配置文件仅包含基础规则，一旦机场更新订阅，用户在本地手工添加的直连规则、自定义策略组或专属分流设置就会被无情覆盖。Clash Verge Rev 提供了强大的 **扩展配置机制（Merge 覆写与 Script 脚本预处理）**，允许用户编写 JavaScript 代码或 YAML 片段，在订阅加载进内存时动态注入自定义节点分组、ChatGPT 独立分流策略与第三方高精度规则集（如 Loyalsoldier/clash-rules）。每次订阅更新自动完成规则编译，实现真正的“一次编写，永久免维”。

---

## 1. 为什么需要扩展配置（Merge vs Script）

当用户有多样化的网络出海需求时（如公司内网网段直连、特定学术数据库代理、海外 AI 工具指定低延迟专线），传统手工修改配置文件面临极大痛点：

- **痛点 1**：机场订阅刷新导致本地修改丢失；
- **痛点 2**：规则冲突导致无法解析局域网打印机或 NAS；
- **痛点 3**：无法为不同订阅快速应用同一套标准化优化参数。

Clash Verge Rev 的解决方案：

1. **Merge（配置合并）**：基于 YAML 对象深度合并，适合追加固定的规则行或修改简单字段；
2. **Script（代码脚本预处理）**：基于 JavaScript 函数（`main(config, profileName)`），拥有完整的对象遍历与重构能力，适合复杂的策略组注入与自动化逻辑判断。

---

## 2. JavaScript Script 预处理脚本编写实战

点击左侧【订阅 (Profiles)】，右键点击订阅卡片选择【扩展配置 (Script)】，填入以下实战代码：

```javascript
// Clash Verge Rev 订阅扩展预处理脚本
function main(config, profileName) {
  // 1. 确保 proxy-groups 与 rules 数组存在
  config["proxy-groups"] = config["proxy-groups"] || [];
  config["rules"] = config["rules"] || [];

  // 2. 注入专属 AI 生产力策略组
  config["proxy-groups"].unshift({
    name: "🤖 AI 工具专线",
    type: "select",
    proxies: ["DIRECT", "AUTO", ...getProxyNames(config)],
  });

  // 3. 注入企业内网与局域网放行规则（放最前）
  const customTopRules = [
    "DOMAIN-SUFFIX,internal.corp,DIRECT",
    "IP-CIDR,192.168.0.0/16,DIRECT,no-resolve",
    "IP-CIDR,10.0.0.0/8,DIRECT,no-resolve",
    // 强制将 OpenAI / Claude 流量调度至专属策略组
    "GEOSITE,openai,🤖 AI 工具专线",
    "GEOSITE,anthropic,🤖 AI 工具专线",
    "DOMAIN-SUFFIX,claude.ai,🤖 AI 工具专线",
    "DOMAIN-SUFFIX,cursor.com,🤖 AI 工具专线",
  ];

  config.rules = [...customTopRules, ...config.rules];

  return config;
}

// 辅助函数：提取所有节点名称
function getProxyNames(config) {
  return (config.proxies || []).map((p) => p.name);
}
```

---

## 3. 集成 Loyalsoldier 高精度第三方规则集 (rule-providers)

通过 Merge 模式引入 GitHub 高星开源规则集，可彻底解决冷门国内应用走海外代理造成的带宽浪费：

```yaml
# 在 Merge 配置中注入 rule-providers
rule-providers:
  reject:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.yaml
    interval: 86400

  direct:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    path: ./ruleset/direct.yaml
    interval: 86400

rules:
  - RULE-SET,reject,REJECT
  - RULE-SET,direct,DIRECT
```

配合高可靠的专线服务商（如 [光速云 2.5Gbps IEPL 专线](/artworks/guangsu-cloud)），可确保仅有真正的出海流量经过专线隧道，国内流量 100% 毫秒级直连。

---

## 4. 蜂巢式关联与扩展阅读矩阵

- **排错诊断**：脚本编写语法错误导致白屏？参考 [Clash Verge Rev 常见报错全景排障手册](/tutorial/clash-verge-rev-troubleshooting-handbook)；
- **协议底座**：了解 Sing-box 新型规则集体系，参考 [Sing-box 规则集（Rule-Set）与智能分流实战](/tutorial/sing-box-ruleset-smart-routing)；
- **大模型实战**：配置 AI 解锁策略组，参考 [ChatGPT 4o 纯净住宅 IP 选线策略](/airport/iepl-qos-bypass-architecture)；
- **返回聚合导航**：探索全平台客户端指南，查阅 [客户端教程库聚合中心](/tutorial)。
