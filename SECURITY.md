# Security Policy

Thank you for taking the time to help keep WerdNerd safe, stable, and secure.  
This project values responsible disclosure and clear communication around vulnerabilities.

---

## 🔐 Supported Versions

WerdNerd is an active, evolving project.  
Security updates apply to the following branches:

| Version / Branch | Supported |
|------------------|-----------|
| `main`           | ✅ Active |
| `develop`        | ⚠️ Best‑effort |
| Other branches   | ❌ Not supported |

If you discover a vulnerability, please ensure it exists on the `main` branch before reporting.

---

## 🛡️ Reporting a Vulnerability

If you believe you’ve found a security issue, please report it privately.

### **📬 Contact**
Send an email to:

**security@werdnerd.dev**  
(or your preferred email — replace this with your real contact)

Please include:

- A clear description of the issue  
- Steps to reproduce  
- Potential impact  
- Any suggested fixes (optional but appreciated)

You will receive a response within **48–72 hours**.

---

## 🤝 Responsible Disclosure

We ask that you:

- Do **not** publicly disclose the issue before it is resolved  
- Do **not** test vulnerabilities on production data  
- Do **not** attempt to access user accounts, private data, or Supabase resources beyond your own  
- Do **not** run automated scanners against production deployments  

We commit to:

- Acknowledging your report promptly  
- Keeping you informed as we investigate  
- Prioritizing fixes based on severity  
- Crediting you (if desired) once the issue is resolved  

---

## 🔧 Security Best Practices for Contributors

If you contribute to WerdNerd, please:

- Never commit `.env` files or secrets  
- Use environment variables for Supabase keys  
- Avoid logging sensitive data  
- Use typed Supabase queries (`.returns<T>()`)  
- Validate all user input before sending to the backend  
- Keep dependencies updated (Dependabot helps with this)  

---

## 🧪 Dependency Security

WerdNerd uses:

- GitHub Dependabot for automated dependency updates  
- GitHub Actions for CI  
- Vercel for deployment  
- Supabase for backend services  

If you notice a dependency with a known vulnerability, feel free to open an issue or PR.

---

## ❤️ Thank You

Security is a community effort.  
Your help keeps WerdNerd safe, stable, and delightful for everyone.
