> **Key Takeaway (TL;DR)**:
> Subscription updates from proxy providers overwrite manual client configuration changes. Clash Verge Rev solves this with its Script and Merge extensibility pipeline. By writing custom JavaScript preprocessors, you can programmatically inject dedicated AI policy groups, bypass private subnets, and consume upstream rule-providers like Loyalsoldier on every refresh without manual upkeep.

---

## 1. Why Preprocessing Matters

Merges and scripts allow declarative transformations applied dynamically in memory when profiles are imported.

### Core Features:

- Inject custom proxy groups (e.g., dedicated AI routing).
- Prepend low-latency direct routes for LAN and corporate VPN subnets.
- Integrate dynamic HTTP rule-sets with automated cache validation.
