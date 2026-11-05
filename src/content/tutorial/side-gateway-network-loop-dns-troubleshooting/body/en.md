> **Key Takeaway (TL;DR)**:
> Broadcast storms and complete network freezes occur when side-gateways suffer from recursive DNS deadlocks or Linux reverse-path filtering (rp_filter) drops. Prevent packet dropouts by injecting an iptables MASQUERADE rule on the single LAN interface, assigning public upstream DNS (223.5.5.5) directly to the side-gateway rather than pointing it back to the main router, and disabling conflicting secondary DHCP servers.

---

## 1. Network Loop Prevention

Add `iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE` and ensure upstream resolvers bypass local router loops.
