> **Key Takeaway (TL;DR)**:
> Network environments treat protocols differently: public Wi-Fi frequently throttles UDP (crippling Hysteria 2), whereas congested evening home broadband suffers under standard TCP windowing. Hiddify's Sing-box core allows mixing TCP-based VLESS-Reality and UDP-based Hysteria 2/TUIC within unified policy groups, ensuring seamless failover when local ISP conditions degrade.

---

## 1. Protocol Matrix

- **VLESS Reality**: Reliable TCP traffic masquerading as legitimate big-tech TLS handshakes.
- **Hysteria 2 / TUIC**: Aggressive UDP-based congestion control optimized for lossy links.
