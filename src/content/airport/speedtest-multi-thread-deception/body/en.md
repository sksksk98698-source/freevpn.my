> **Benchmark Overview & Key Finding (TL;DR)**: Speedtest benchmarks spawn **16–32 parallel TCP sockets**, masking packet drops by aggregating fragmented throughput. In contrast, **YouTube 4K chunks and Git clones operate over single TCP connections**. In a 20% loss environment, synthetic tests display 2Gbps, but single streams collapse to **under 3 Mbps** as Cubic congestion control repeatedly halves the congestion window.

---

## 1. Multi-Socket Aggregation vs Single-Stream Reality

Synthetic speedtests sum throughput across dozens of parallel sockets. While thread A stalls during a retransmit timeout, threads B through D receive data, producing an illusory aggregate speed figure impossible to achieve in actual web use.

---

## 2. Ecosystem Linking Matrix

- **Upward Pillar**: [Back to 2026 Global Proxy Speed Ladder & Architecture Hub](/airport)
- **Lateral Insights**:
  - [2026 Peak-Hour 42-Proxy Single-Thread Speed Ladder](/airport/peak-hour-single-thread-ladder-ranking)
  - [YouTube 4K/8K Video Streaming Stress Test](/airport/youtube-4k-8k-video-streaming-test)
- **Brand Dossier**: [Guangsu Cloud Lab Dossier](/artworks/guangsu-cloud)
