> **Key Takeaway (TL;DR)**:
> Even when using a proxy, domestic ISPs can log every domain you visit if plain UDP 53 DNS queries leak locally. Fake-IP architecture solves this by serving synthetic 198.18.x.x addresses locally while transmitting raw hostnames across encrypted IEPL tunnels for remote resolution. Run Extended Tests on dnsleaktest.com to confirm zero Chinese ISP resolver leakage.

---

## 1. Fake-IP Lifecycle

Local systems receive instant dummy IPs from the 198.18.0.0/16 range, postponing actual resolution to secure overseas exit nodes.
