# Quantsiv Project Documentation

## Project Overview
Quantsiv is a quantum risk management platform that scans codebases, certificates, and cloud infrastructure to find quantum-vulnerable cryptography before it becomes a breach.

## Core Concept
**Quant** — quantum.  
**Siv** — sieve.  
The General Number Field Sieve is the mathematical wall that makes RSA unbreakable today. Shor's algorithm on a quantum computer makes the sieve irrelevant.

## One-Liner
> Quantsiv scans your codebase, certificates, and cloud infrastructure to find quantum-vulnerable cryptography before it becomes a breach.

## Category
DevSecOps / Cryptographic Agility / PQC Compliance

## Business Type
B2B SaaS

## Primary Domain
quantsiv.io

## The Threat
Almost everything secure on the internet today — bank logins, HTTPS connections, API authentication, encrypted emails, VPN tunnels, digital signatures — is protected by three algorithms: RSA, ECDSA, and Diffie-Hellman. A sufficiently powerful quantum computer running Shor's algorithm makes factoring trivial. RSA-2048 falls in hours.

The active threat is happening now: "Harvest now, decrypt later." State actors are capturing and storing encrypted internet traffic today. When quantum computers mature (est. 2029–2035), they decrypt everything they stored.

## Regulatory Context
- NIST finalized three quantum-resistant algorithm standards in August 2024:
  - CRYSTALS-Kyber (ML-KEM, FIPS 203) — replaces Diffie-Hellman
  - CRYSTALS-Dilithium (ML-DSA, FIPS 204) — replaces ECDSA  
  - SPHINCS+ (SLH-DSA, FIPS 205) — alternative signatures
- EO-14412 (June 2026): US Executive Order mandating government-wide PQC migration with binding deadlines
- Only 5% of enterprises have actually migrated as of mid-2026
- $15 billion estimated PQC migration market

## Problem Enterprises Have
Companies don't know where their quantum-vulnerable cryptography lives. It's hidden everywhere:
- TLS certificates on every subdomain
- Code libraries importing OpenSSL, BouncyCastle, Java Cryptography
- JWT tokens signed with ECDSA
- SSH keys on every server
- VPN configurations
- S3 bucket encryption settings
- API authentication tokens
- Hardcoded keys buried in config files
- Code signing certificates
- Docker image signing

The #1 complaint from CISOs attempting migration: "We don't know what we have."

## What Quantsiv Does — Product Modules
### 1. Code Scanner
Parses source code (Python, Java, Go, JavaScript, C++) at AST level to find every use of quantum-vulnerable algorithms.

### 2. Certificate Scanner
Scans every subdomain and endpoint via TLS handshake inspection.

### 3. Cloud Infrastructure Scanner
Connects via AWS / Azure / GCP SDK.

### 4. Risk Scorer
Prioritises findings by exposure and sensitivity.

### 5. CI/CD Integration (GitHub Action)
Scans every pull request. If new RSA or ECDSA usage is introduced, the build fails.

### 6. Compliance Reporter
One-click PDF showing NIST PQC compliance percentage, migration roadmap, and board-ready summary.

## Competitive Landscape
The PQC middle layer — developer-first SaaS, self-serve, €99/month entry, compliance reporting, cloud scanning — is genuinely empty.

Quantsiv is not inventing the scanner. Quantsiv is building the product nobody has wrapped around the scanner yet.

## Pricing Tiers
- **Free:** Scan up to 3 repos or 10 certificates
- **Developer:** €99/month — unlimited scanning, GitHub integration
- **Team:** €299/month — CI/CD integration, dashboard, 5 seats
- **Enterprise:** €1,000–5,000+/month — cloud scanning, compliance reports, custom integration

## Go-to-Market Motion
Developer-led, bottom-up. A security engineer installs it, scans their repo in 5 minutes, gets a result, brings it to their manager. Manager buys the team plan. CISO sees the compliance report and buys the enterprise contract.

## Tagline Options
- "Know your quantum risk."
- "Your encryption has an expiry date."
- "Find every quantum-vulnerable algorithm before they find you."

## Immediate Next Steps
- Point all secondary domains to forward to quantsiv.io
- Set up landing page with waitlist
- Get professional email
- Write and post LinkedIn content about quantum threat
- Register ProductHunt upcoming page
- Submit to Betalist

## Strategic Position
Quantsiv sits at the intersection of:
1. Regulatory pressure — binding deadlines, compliance requirements
2. Technical urgency — harvest now decrypt later is an active threat
3. Market gap — enterprise tools exist, CLI tools exist, developer-friendly SaaS does not

Quantsiv is not a bet on quantum computers existing. It is a bet on companies being afraid they will — which is already true.