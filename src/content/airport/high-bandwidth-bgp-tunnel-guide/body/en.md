> **Benchmark Overview & Key Finding (TL;DR)**: Budget proxy providers marketing "¥15/month for 2,000GB" commonly operate with **oversubscription ratios exceeding 40:1 to 60:1**. While synthetic multi-thread speedtests present illusory 500Mbps results, real-world single-thread throughput for 4K streaming and software downloads collapses to **under 5 Mbps** during evening peak congestion. Auditing actual capacity requires measuring single-thread TCP throughput.

---

## 1. The Economics of Extreme Oversubscription

A 1Gbps domestic BGP relay costs ~¥16,000/month. At ¥15/subscriber, 1,200+ users are required to break even. This allocates a theoretical concurrency floor of just 0.83 Mbps per user.

---

## 2. Multi-Thread Speedtest Illusions vs Single-Thread Reality

Speedtest benchmarks spawn 16–32 parallel sockets, aggregating fragmented bandwidth. In contrast, YouTube video chunks and Git transfers rely on single TCP streams, which suffer immediate window degradation upon encountering packet loss.

---

## 3. Ecosystem Linking Matrix

- **Upward Pillar**: [Back to 2026 Global Proxy Speed Ladder & Architecture Hub](/airport)
- **Lateral Insights**:
  - [Economics of IEPL Dedicated Circuits vs BGP Tunnels](/airport/iepl-vs-bgp-bandwidth-economics)
  - [Home Broadband MTU & MSS Clamping Optimization](/airport/home-broadband-mtu-mss-optimization)
- **Client Tutorials**: [Hiddify Multi-Platform Guide](/artists/hiddify)
