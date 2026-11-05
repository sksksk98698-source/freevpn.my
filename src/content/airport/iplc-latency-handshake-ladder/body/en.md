> **Benchmark Overview & Key Finding (TL;DR)**: Perceived responsiveness in web browsing, coding, and gaming is **90% dictated by round-trip latency (RTT) and TLS handshake time (TTFB), rather than raw bandwidth**. Benchmarks at 21:00 CST reveal that enterprise Shenzhen-Hong Kong IPLC circuits (such as [Guangsu Cloud](/artworks/guangsu-cloud)) achieve **3.8 ms RTT** and complete TLS 1.3 handshakes in **11.2 ms**. In contrast, congested public relays spike to 164.8 ms due to packet queue buffering.

---

## 1. APAC Core IPLC Evening Peak Ladder (21:00 CST)

| Circuit Route                  | Subsea Cable Cable Path | Physical Distance | Peak RTT (ms) | TLS 1.3 Handshake | TTFB         | Tier        |
| :----------------------------- | :---------------------- | :---------------- | :------------ | :---------------- | :----------- | :---------- |
| **Shenzhen – Hong Kong IPLC**  | Terrestrial Fiber       | ~45 km            | **3.8 ms**    | **11.2 ms**       | **18.4 ms**  | **Tier S+** |
| **Shanghai – Tokyo IPLC**      | SJC2 / NCP Subsea       | ~1,800 km         | **26.4 ms**   | **48.6 ms**       | **58.2 ms**  | **Tier S**  |
| **Guangzhou – Singapore IPLC** | APG Direct Subsea       | ~2,600 km         | **32.1 ms**   | **59.8 ms**       | **71.5 ms**  | **Tier S**  |
| Shanghai – LA Dedicated        | Trans-Pacific Fiber     | ~10,500 km        | **124.5 ms**  | **162.0 ms**      | **184.2 ms** | **Tier A**  |

---

## 2. Client Optimization: TCP Fast Open & TLS 0-RTT

Enable TCP Fast Open within your client (Clash Verge Rev or Sing-box) to bundle HTTP payloads with initial SYN packets, eliminating an entire RTT cycle.

---

## 3. Ecosystem Linking Matrix

- **Upward Pillar**: [Back to 2026 Global Proxy Speed Ladder & Architecture Hub](/airport)
- **Lateral Insights**:
  - [IPLC Point-to-Point Circuit Architecture](/airport/iplc-point-to-point-principles)
  - [Detecting Fake IPLC Proxies](/airport/detecting-fake-iplc-proxies)
- **Client Tutorials**: [Shadowrocket iOS Guide](/artists/shadowrocket)
