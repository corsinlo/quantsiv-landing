# Quantsiv Project Roadmap & Status

## Completed (as of 2026-09-30)
- Initial MVP scaffolding (FastAPI, ARQ, SQLAlchemy models placeholder, basic API endpoints, worker placeholder, basic SPA)
- Added whitepaper (this document)
- Enhanced api.py with GitHub OAuth login placeholder endpoint
- Enhanced worker.py with TODO comment for actual cbomkit-lib integration
- SPA (index.html) updated with sections describing quantum-vulnerability detection, future plans, and placeholders for upcoming features

## In Progress / Next Steps
- Replace placeholder SQLAlchemy models with proper declarative models (users, installations, scans, findings, cbom_snapshots, tls_scans) including constraints and relationships.
- Implement real GitHub OAuth flow (login, callback, token storage).
- Implement actual scanning pipeline: cbomkit-lib subprocess, sslyze TLS scan, cyclonedx-python-lib CBOM generation, risk scoring, database persistence.
- Add database migrations via Alembic.
- Implement compliance-report PDF generation endpoint (WEasyPrint) and gate it behind paid plan.
- Add Stripe checkout and webhook handling for subscription management.
- Implement rate limiting, security hardening (input validation, webhook HMAC validation, temporary file cleanup).
- Write unit and integration tests for API endpoints and worker tasks.
- Set up CI/CD pipeline (GitHub Actions) for linting, testing, and Docker image build.
- Deploy MVP to a staging environment (e.g., Railway or Render) for beta testing.

## Future Phases (Post-MVP)
**Phase 2 (Months 3-6)**
- Automated PR remediation: generate language-specific code fixes and open pull requests.
- PQC library recommendation engine: curated list of vetted post-quantum libraries with drop-in guidance.
- Basic cloud-infrastructure scanning (AWS S3 encryption, Azure Key Vault) via SDKs.

**Phase 3 (Months 6-12)**
- Full cloud-infrastructure scanning (AWS, Azure, GCP) for KMS, storage, compute services.
- API access tier (Team/Enterprise): programmatic scan initiation, findings export, risk-score trends.
- Quantum-cloud benchmark sandbox: on-demand IBM Quantum Lab / Azure Quantum / AWS Braket instances to run toy-scale Shor’s algorithm demos and benchmark PQC primitive performance; results shown in compliance reports.
- Enhanced risk scoring incorporating asset criticality and data sensitivity.

**Phase 4 (Year?2+)**
- Managed PQC crypto service (Enterprise): hosted API for quantum-safe key exchange/signing using FIPS-validated libraries, optional BYOK.
- Advanced threat intelligence feed integrating with vulnerability databases and quantum-research alerts.
- Global multi-region deployment with data-residency options.
- SOC?2 Type?II and ISO?27001 compliance for the platform itself.

## Notes
- This roadmap aligns with the MVP spec and requirements while iterating toward a full-featured quantum-risk-management platform.
- All future features are subject to change based on customer feedback and market demand.
