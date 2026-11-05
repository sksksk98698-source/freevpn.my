> **Key Takeaway (TL;DR)**:
> Standard System Proxy only redirects applications respecting Windows proxy settings. CLI utilities (Git, Docker, SSH) and games bypass this mechanism. Enabling Clash Verge Rev's TUN mode installs a native Layer-3 virtual adapter (Wintun on Windows, utun on macOS) that intercepts all system IP traffic transparently. Coupled with Fake-IP resolution and 2.5Gbps IEPL circuits, this guarantees zero-configuration terminal acceleration and smooth low-latency gaming.

---

## 1. Architecture: System Proxy vs. TUN Interface

TUN mode intercepts raw IP packets rather than operating as an application-level HTTP/SOCKS5 relay.

### Verification Steps:

1. Install Service Mode to acquire administrative networking rights.
2. Toggle TUN Mode on with `stack: mixed` and `enhanced-mode: fake-ip`.
3. Test terminal connectivity via `curl.exe -I https://api.openai.com`.
