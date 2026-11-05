> **Key Takeaway (TL;DR)**:
> Since modern mobile traffic is encrypted via TLS, domain-level rules cannot filter payload ads or inspect in-app telemetry. Shadowrocket supports local Man-in-the-Middle (MitM) decryption. By generating a private local CA certificate and enabling full trust under iOS Certificate Trust Settings, users can run JavaScript script rewrites to remove mobile video advertisements safely.

---

## 1. MitM Security Best Practices

Always generate the Root CA certificate directly on your local device—never trust third-party pre-compiled root certificates.
