> **Key Takeaway (TL;DR)**:
> Application-level proxies (Layer 7) depend on software cooperation. TUN interfaces (Layer 3) intercept raw IP packets by registering virtual network adapters with high-priority split routes (`0.0.0.0/1` and `128.0.0.0/1`). Utilizing Longest Prefix Match routing principles, all OS outbound frames are ingested into user-space network stacks (gVisor/lwIP) while preserving physical gateway breakouts for provider tunnels.

---

## 1. Network Stack Comparison

TUN bypasses application-level proxy ignorance by operating at the IP packet layer, transparently capturing UDP, ICMP, and CLI utilities.
