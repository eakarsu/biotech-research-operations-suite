# Biotech Research Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIBiotechResearchOperationsAssistant`
- `AIBiotechResearchOperationsOperations`
- `AIBiotechResearchOperationsAnalytics`
- `AIBiotechResearchOperationsWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/biotech-research-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:18080`

Seeded users:
- `admin@biotech-research-operations.local / admin123`
- `manager@biotech-research-operations.local / manager123`
- `analyst@biotech-research-operations.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/biotech-research-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:18080 npm run smoke
```
