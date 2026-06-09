# iSparkYou Website

Bilingual B2B website for iSparkYou electrical equipment supply and technical
coordination.

## First-Phase Scope

- English homepage at `/`
- Chinese homepage at `/zh`
- Transformers, switchgear, and control panels
- Technical capabilities and target markets
- RFQ form in demo or email mode
- English and Chinese privacy notices
- No customer login, file upload, or RFQ database

## Local Preview

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default `demo` mode
simulates RFQ submission without transmitting or storing form data.

## RFQ Modes

Copy `.env.example` to `.env.local`.

Demo:

```text
RFQ_MODE=demo
```

Email submission:

```text
RFQ_MODE=live
FORMSPREE_ENDPOINT=https://formspree.io/f/<form-id>
```

The Formspree endpoint is read only on the server. A production deployment
requires live mode and `FORMSPREE_ENDPOINT`, unless
`PUBLIC_DEMO_DEPLOYMENT=true` is explicitly set for a public preview.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

## Future Phase

Add Supabase PostgreSQL, Storage, RLS, RFQ numbers, file versions, quote status,
and internal follow-up records only when the customer portal or structured RFQ
workflow is approved.
