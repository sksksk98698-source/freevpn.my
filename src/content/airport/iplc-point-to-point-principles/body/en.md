> **Benchmark Overview & Key Finding (TL;DR)**: **IPLC (International Private Leased Circuit)** represents a dedicated physical point-to-point communication channel leased on international submarine fiber backbones. Unlike public proxy protocols (such as TLS or Shadowsocks), IPLC payloads travel across private **SDH/OTN physical timeslots**, completely bypassing public GFW border gateway routers. Consequently, IPLC provides **100% immunity against Deep Packet Inspection (DPI), stateful throttling, and active probing attacks**.

---

## 1. Physical Layer Reality: Public Internet vs IPLC

Public proxies inevitably traverse border gateway routers where traffic is subjected to passive optical splitting and active probing. In contrast, IPLC operates via dedicated Layer-1/Layer-2 timeslots between private enterprise data centers.

---

## 2. Why IPLC Defeats Active Probing

GFW active probing inspects high-entropy public flows and dispatches synthetic handshake probes to identify proxy endpoints. Because IPLC links are private intranet circuits without public border routing entries, external active probes physically cannot reach the cross-border segment.

---

## 3. Ecosystem Linking Matrix

- **Upward Pillar**: [Back to 2026 Global Proxy Speed Ladder & Architecture Hub](/airport)
- **Lateral Insights**:
  - [2026 IPLC Peak-Hour TLS Handshake Latency Ladder](/airport/iplc-latency-handshake-ladder)
  - [Detecting Fake IPLC Proxies: Guide to Identifying Public Relays](/airport/detecting-fake-iplc-proxies)
- **Client Tutorials**: [Sing-box Geek Client Guide](/artists/sing-box)
