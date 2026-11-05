> **Benchmark Overview & Key Finding (TL;DR)**: China Mobile broadband routes international traffic primarily through **AS58453 (CMI)**. Evening peak benchmarks reveal that public CMI transit enforces aggressive **UDP dropping and TCP rate-limiting against non-whitelisted IPs, with packet loss spiking to 35.6%**. For China Mobile users, the definitive solution is deploying **2.5Gbps IEPL dedicated circuits with native domestic Mobile POP ingresses (such as [Guangsu Cloud](/artworks/guangsu-cloud))**, sustaining 700+ Mbps throughput with 0.00% packet loss.

---

## 1. Carrier-Grade NAT (NAT444) & CMI Throttling

China Mobile rarely provisions public IPv4 addresses, placing residential gateways behind shared `100.64.0.0/10` pools. During peak hours, NAT port table saturation combined with aggressive CMI QoS policies suppresses UDP and unknown TLS streams.

---

## 2. Dedicated Ingress Bypass Architecture

By routing to domestic China Mobile data center POPs in Guangzhou and Shenzhen, traffic travels entirely across low-latency domestic paths before crossing submarine circuits over private IEPL links.

---

## 3. Ecosystem Linking Matrix

- **Upward Pillar**: [Back to 2026 Global Proxy Speed Ladder & Architecture Hub](/airport)
- **Lateral Insights**:
  - [China Telecom Global Routing Guide](/airport/china-telecom-163-vs-cn2-iepl)
  - [China Unicom AS4837 vs AS9929 Global Routes](/airport/china-unicom-4837-9929-route-guide)
- **Client Tutorials**: [Sing-box Geek Client Guide](/artists/sing-box)
