> **Key Takeaway (TL;DR)**:
> OpenWrt side-gateways (router-on-a-stick) deliver clientless, whole-home acceleration across smart TVs, gaming consoles, and mobile devices without altering your main router's stability. Choose OpenClash for rich visual dashboards on high-spec x86 hardware, or PassWall for lean CPU efficiency on ARM boxes like the Raspberry Pi. Adding `iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE` fixes single-NIC packet loops instantly.

---

## 1. Network Topology

Set up the side-gateway with a static LAN IP within your main router's subnet, disabling its secondary DHCP server to avoid IP collisions.
