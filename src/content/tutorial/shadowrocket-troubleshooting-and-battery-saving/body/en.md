> **Key Takeaway (TL;DR)**:
> Three common Shadowrocket iOS issues solved: 1. App Store timeouts: Add Apple CDNs to Direct routing; 2. Severe battery drain: Turn off Debug logging and remove blanket `*.*` MITM wildcards; 3. Network dropouts during Wi-Fi to cellular transitions: Enable Auto-Reconnect and rely on BGP multi-ingress providers like Guangsu Cloud.

---

## 1. Battery Conservation Checklist

- Disable verbose diagnostic logs.
- Restrict MitM hostnames strictly to required endpoints.
- Configure clean rule-sets to bypass domestic networking.
