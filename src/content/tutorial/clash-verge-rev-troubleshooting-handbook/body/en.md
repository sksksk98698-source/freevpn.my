> **Key Takeaway (TL;DR)**:
> Four frequent Clash Verge Rev issues and instant fixes: 1. No internet after closing: Windows registry retains proxy settings, fix instantly by resetting ProxyEnable to 0; 2. Subscription Fetch Error: DNS poisoning of provider domain, switch DNS to 223.5.5.5 or use backup API links; 3. Service Mode install failure: Antivirus blocking service creation, remove stale service with `sc delete clash_verge_service`; 4. TUN mode silent failure: Outdated Wintun.dll conflicting with network adapters.

---

## 1. Resetting Stale Windows Proxy Settings

When closed unexpectedly, registry keys pointing to 127.0.0.1:7897 remain active. Run:

```powershell
Set-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings' -Name ProxyEnable -Value 0
```
