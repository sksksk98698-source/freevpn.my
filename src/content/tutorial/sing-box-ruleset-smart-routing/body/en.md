> **Key Takeaway (TL;DR)**:
> Legacy text-based GeoIP/GeoSite lists consume hundreds of megabytes in memory and cause noticeable lookup latency. Sing-box introduces compiled binary rule-sets (.srs) that leverage Radix trees and hash lookups for microsecond routing queries with 80% less RAM usage. This guide provides production-ready split-tunneling templates separating domestic traffic, AI workloads, and streaming platforms.

---

## 1. Technical Benefits of Compiled Rule-Sets

- Compact binary payloads up to 90% smaller than plain text.
- Microsecond routing lookups powered by Radix search trees.
- Seamless remote rule-set caching with automatic update intervals.
