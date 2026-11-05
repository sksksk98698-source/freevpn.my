> **Benchmark Overview & Key Finding (TL;DR)**: Gigabit fiber users frequently encounter mysterious stalls where web pages hang at 99% and large assets fail to render. This is caused by **PPPoE MTU (1492) combining with proxy encapsulation headers (TLS/WireGuard) to exceed Path MTU, triggering Path MTU Black Holes where DF-flagged packets are silently dropped**. Clamping client-side MTU/MSS to **1400 bytes** resolves 100% of fragmentation deadlocks.

---

## 1. Path MTU Black Holes Explained

Standard Ethernet MTU is 1500 bytes. PPPoE broadband introduces an 8-byte overhead, reducing physical MTU to 1492. When proxy encapsulation adds 50–85 bytes of transport headers, full-size TCP segments exceed 1492 bytes. Because the Don't Fragment (DF) bit is active, upstream routers drop packets without successfully delivering ICMP feedback.

---

## 2. Determining Optimal MTU via Ping Probing

```powershell
# Probe maximum unfragmented payload size
ping sh-iepl.gsyvip.com -f -l 1432
```

---

## 3. Client Optimization: TUN MTU Clamping

In Clash Verge Rev, configure TUN MTU to 1400 bytes to ensure MSS is automatically clamped at 1360 bytes, leaving ample headroom for encapsulation.

---

## 4. Ecosystem Linking Matrix

- **Upward Pillar**: [Back to 2026 Global Proxy Speed Ladder & Architecture Hub](/airport)
- **Lateral Insights**:
  - [BGP Multi-ISP Smart Routing Explained](/airport/bgp-smart-routing-multi-isp)
  - [High Bandwidth BGP Tunnel Buyer's Guide](/airport/high-bandwidth-bgp-tunnel-guide)
- **Client Tutorials**: [Clash Verge Rev Guide](/artists/clash-verge-rev)
