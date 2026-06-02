# iSparkYou Website

English-first B2B website for iSparkYou electrical equipment sourcing and
technical solutions.

## Local Preview

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

The default mode is `demo`. RFQ submissions display the success state but do
not send email or save data.

For a public Vercel demo, explicitly set `PUBLIC_DEMO_DEPLOYMENT=true`. This
keeps the RFQ form in simulation mode. Remove that variable before the live
launch.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

## Live RFQ Setup

1. Create a Supabase project in `Canada (Central) ca-central-1`.
2. Copy `.env.example` to `.env.local`.
3. Set `RFQ_MODE=live`.
4. Add the Supabase PostgreSQL pooler URL as `DATABASE_URL`.
5. Add the Formspree form URL as `FORMSPREE_ENDPOINT`.
6. Generate the migration if the schema changes:

   ```bash
   npm run db:generate
   ```

7. Apply the SQL file in `drizzle/` through the Supabase SQL editor before
   enabling the live form.

Do not commit `.env.local`. It contains external service credentials.

## Deployment

Connect this repository to Vercel and add the live environment variables in the
Vercel project settings. Production deployment intentionally fails if
`RFQ_MODE=live`, `DATABASE_URL`, or `FORMSPREE_ENDPOINT` is missing, unless an
intentional public demo is deployed with `PUBLIC_DEMO_DEPLOYMENT=true`.

Before public launch:

- Register `isparkyou.ca`.
- Configure `rfq@isparkyou.ca` in Zoho Mail.
- Add MX, SPF, DKIM, and DMARC DNS records.
- Apply the Supabase migration.
- Test one real RFQ submission and confirm both database storage and email
  notification.
