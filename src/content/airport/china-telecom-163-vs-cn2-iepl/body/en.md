> **Benchmark Overview & Key Finding (TL;DR)**: China Telecom AS4134 backbone carries ~60% of mainland cross-border traffic, with evening peak gateway saturation regularly topping **92%** and packet loss hitting **32.8%**. While enterprise CN2 GIA (AS4809) provides quality transit at prohibitive cost, deploying **2.5Gbps dual-way IEPL circuits with native Telecom POP ingresses (such as [Guangsu Cloud](/artworks/guangsu-cloud))** sustains **780+ Mbps single-thread throughput with 0.00% packet loss** at a fraction of the price.

---

## 1. Why Telecom AS4134 Suffers Catastrophic Evening Congestion

ChinaNet AS4134 concentrates cross-border transit through congested international gateways in Shanghai and Guangzhou. During peak hours (20:30–22:30 CST), buffer bloat forces routers into aggressive WRED packet dropping.

---

## 2. Three Routing Paths for China Telecom Users

| Architecture            | ASN Backbone                  | Peak Loss Rate | Peak Single-Thread | Cost Profile               |
| :---------------------- | :---------------------------- | :------------- | :----------------- | :------------------------- |
| **AS4134 Direct**       | 163 Best-Effort               | 25% – 45%      | < 5 Mbps           | Lowest (Cheap VPS)         |
| **CN2 GIA Transit**     | AS4809 Premium                | 1% – 3%        | 150 – 300 Mbps     | Expensive ($50+/mo)        |
| **2.5G IEPL Dedicated** | **Local POP + Private Cable** | **0.00%**      | **780+ Mbps**      | **Optimal Value (¥99/yr)** |

---

## 3. Ecosystem Linking Matrix

- **Upward Pillar**: [Back to 2026 Global Proxy Speed Ladder & Architecture Hub](/airport)
- **Lateral Insights**:
  - [China Unicom AS4837 vs AS9929 Global Routes](/airport/china-unicom-4837-9929-route-guide)
  - [China Mobile CMI Bottleneck Breakthrough](/airport/china-mobile-cmi-cmin2-breakthrough)
- **Client Tutorials**: [Clash Verge Rev Guide](/artists/clash-verge-rev)
