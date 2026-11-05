> **Key Takeaway (TL;DR)**:
> CLI tools (Git, Docker, NPM, Pip) do not respect GUI system proxy toggles by default. Developers can either utilize native TUN interface mode for zero-configuration transparent capture, or define reusable `setproxy` / `unsetproxy` shell aliases mapping `HTTP_PROXY` to local client ports. Combined with [Guangsu Cloud 2.5Gbps IEPL circuits](/artworks/guangsu-cloud), Git clone throughput routinely reaches 70MB/s.

---

## 1. Terminal Shell Functions

Embed simple environment variable toggles into your PowerShell `$PROFILE` or Bash `.bashrc` to easily activate and deactivate proxies.
