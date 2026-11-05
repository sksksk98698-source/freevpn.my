> **Key Takeaway (TL;DR)**:
> Three dominant v2rayN failures and their instant solutions: 1. Port 10808 collision: Change local listen port to 20808 or kill rogue PIDs via PowerShell; 2. System time drift: When Windows clock drifts by >90 seconds, TLS handshakes fail silently—run `w32tm /resync` to fix; 3. Core crashes: Corrupt JSON configs or outdated cores, update Xray-core via the Check Update menu.

---

## 1. Resolving Port Collisions

Detect port conflicts with `Get-NetTCPConnection -LocalPort 10808` and adjust internal listening ports in Preferences.
