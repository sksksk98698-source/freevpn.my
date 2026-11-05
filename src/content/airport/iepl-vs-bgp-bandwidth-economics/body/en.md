> **Benchmark Overview & Key Finding (TL;DR)**: Bandwidth costs in international data centers adhere to strict economic laws: Tier-1 2.5Gbps enterprise IEPL physical circuits cost **¥180–¥240 / Mbps / month**, whereas public BGP tunnels cost only **¥12–¥25 / Mbps / month**. This **10x to 15x cost disparity** explains why cheap proxies must oversubscribe beyond 30:1 to remain solvent, triggering inevitable evening peak bufferbloat and packet drops.

---

## 1. Bandwidth Cost Reality: Detailed Comparison

| Circuit Architecture              | Unit Cost (per Mbps/mo) | 1Gbps Circuit Monthly Cost | GFW Bypass                | Peak Oversubscription Ratio |
| :-------------------------------- | :---------------------- | :------------------------- | :------------------------ | :-------------------------- |
| **Enterprise IEPL Dedicated**     | **¥180 – ¥240**         | **¥180,000 – ¥240,000**    | **Yes (Private Layer 2)** | **High Quality (1:3)**      |
| China Telecom CN2 GIA             | ¥90 – ¥140              | ¥90,000 – ¥140,000         | No (Priority Public)      | Medium (1:8)                |
| China Unicom 9929 Premium         | ¥70 – ¥110              | ¥70,000 – ¥110,000         | No (Public A-Net)         | Medium (1:10)               |
| Standard Public Tunnel (4837/CMI) | ¥12 – ¥25               | ¥12,000 – ¥25,000          | No (Public Gateway)       | Severe (1:30+)              |

---

## 2. The Math of Cheap Proxy Oversubscription

If a budget provider rents a 1Gbps public relay for ¥15,000/month and sells ¥9.9 plans with 500GB quotas, they must acquire at least 1,500 active subscribers to cover baseline operational expenses. When 300+ users stream 4K video simultaneously at 21:00 CST, demand hits 15Gbps against a 1Gbps pipe, triggering complete tail-drop packet loss.

---

## 3. Ecosystem Internal Linking Matrix

- **Upward Pillar**: [Back to 2026 Global Proxy Speed Ladder & Architecture Hub](/airport)
- **Lateral Insights**:
  - [2026 IEPL Dedicated Line QoS Bypass Architecture](/airport/iepl-qos-bypass-architecture)
  - [Guangsu Cloud 2.5Gbps Dual IEPL Benchmark Report](/airport/guangsu-cloud-iepl-benchmark)
- **Client Tutorials**: [Clash Verge Rev TUN Setup](/artists/clash-verge-rev)
