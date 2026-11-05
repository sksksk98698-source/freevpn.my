> **Benchmark Overview & Key Finding (TL;DR)**: Under extreme evening peak congestion (20:30–22:30 CST) where public international gateway link utilization reaches 92%, enterprise IEPL dedicated circuits with Shanghai and Guangzhou dual-core POP ingresses (such as [Guangsu Cloud 2.5Gbps Dual IEPL](/artworks/guangsu-cloud)) achieve **742.6 Mbps** single-thread download throughput with **0.00% ICMP packet loss**. In contrast to public relays experiencing 28.4% packet loss, IEPL circuits bypass public GFW inspection and QoS degradation queues entirely via private Layer-2 MPLS/VXLAN tunnels.

---

## 1. Why Public Relay Tunnels Collapse During Evening Peak Hours

Cross-border network users frequently encounter a paradox: during the daytime, connection speeds reach hundreds of megabits with instant 4K playback, but between 20:30 and 22:30 CST, video buffers incessantly and Git fetches drop connection.

### 1.1 The Funnel Bottleneck & QoS Penalties

The international gateways of China's top three telcos (China Telecom AS4134, China Unicom AS4837, China Mobile AS58453) face massive concurrency spikes every evening. Once edge link saturation surpasses 85%, backbone core routers trigger **Random Early Detection (RED)** and **Weighted RED (WRED)** queue drop policies.

Public relays (whether self-hosted WS+TLS or port forwarding) transmit traffic over public submarine cables:

- Packets carry default Best-Effort QoS tags (DSCP 0);
- Deep Packet Inspection (DPI) firewalls throttle encrypted high-bandwidth flows via TCP RST or artificial window clamping;
- End-to-end packet loss spikes to 25%–40%, causing the TCP congestion window (CWND) to repeatedly collapse.

---

## 2. IEPL Architecture: Layer-2 Point-to-Point Topology

**IEPL (International Ethernet Private Line)** differs fundamentally from public proxy tunnels: **it is an enterprise-grade, point-to-point Layer-2 Ethernet circuit**.

### 2.1 Shanghai & Guangzhou Dual-Core POP Topology

Tier-1 dedicated proxy providers deploy redundant high-capacity POP nodes:

1. **East China POP (Shanghai)**: Multi-homed to Telecom AS4134 and Unicom AS4837, directly interfacing with trans-Pacific submarine cable terminal stations. Optimal for low-latency routing to Japan (Tokyo/Osaka), Korea, and US West.
2. **South China POP (Guangzhou/Shenzhen)**: Multi-homed to Mobile AS58453 and Telecom, linking to Hong Kong data centers (Equinix HK, Mega-i) via land cable in under 5ms. Serving Hong Kong, Singapore, and Southeast Asia.

---

## 3. Verified Laboratory Telemetry Data

Benchmarked over 500 consecutive ICMP probes during evening peak hours (21:00 CST) on a gigabit China Telecom fiber connection:

| Circuit Architecture                    | Peak Single-Thread Speed (Mbps) | 500-Probe Packet Loss | RTT Jitter  | 4K Buffering Latency | QoS Immunity             |
| :-------------------------------------- | :------------------------------ | :-------------------- | :---------- | :------------------- | :----------------------- |
| **IEPL Dedicated Line (Guangsu Cloud)** | **742.6 Mbps**                  | **0.00%**             | **0.42 ms** | **0.2s**             | **Excellent (Immune)**   |
| China Unicom 9929 Premium Relay         | 218.4 Mbps                      | 3.20%                 | 4.80 ms     | 1.4s                 | Good (Occasional jitter) |
| China Unicom 4837 Standard Relay        | 42.1 Mbps                       | 18.60%                | 24.30 ms    | 6.8s                 | Poor (Severe drop)       |
| China Telecom 163 Direct (Single)       | 4.3 Mbps                        | 34.20%                | 68.50 ms    | Frequent Stall       | Critical Failure         |

---

## 4. Reproducible Terminal Diagnostic Commands

```bash
# Test single-thread real HTTP throughput and TTFB
curl -x http://127.0.0.1:7890 -o /dev/null -s -w "Connect Time: %{time_connect}s | TLS Handshake: %{time_appconnect}s | TTFB: %{time_starttransfer}s | Download Speed: %{speed_download} B/s
" https://speed.cloudflare.com/__down?bytes=104857600
```

---

## 5. Ecosystem Internal Linking Matrix

- **Upward Pillar**: [Back to 2026 Global Proxy Speed Ladder & Architecture Hub](/airport)
- **Lateral Insights**:
  - [Guangsu Cloud 2.5Gbps Dual IEPL Benchmark Report](/airport/guangsu-cloud-iepl-benchmark)
  - [Economics of IEPL Dedicated Circuits vs BGP Tunnels](/airport/iepl-vs-bgp-bandwidth-economics)
- **Client Tutorials**: [Clash Verge Rev TUN Mode Complete Guide](/artists/clash-verge-rev)
- **Brand Dossier**: [Guangsu Cloud Performance Lab Dossier](/artworks/guangsu-cloud)
