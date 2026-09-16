# Interpolation Lab

An academic numerical-analysis workspace for exploring Newton forward and backward interpolation on equally spaced data.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/interpolation-lab` — responsive React dashboard and preview entry point.
- `artifacts/api-server/python/interpolation.py` — auditable Python interpolation algorithms and graph data generation.
- `artifacts/api-server/src/routes/interpolate.ts` — API boundary that validates requests and invokes the Python engine.
- `lib/api-spec/openapi.yaml` — source-of-truth request and response contract.

## Architecture decisions

- Numerical computation stays in a small Python module so students can inspect the formulas independently of the web server.
- The existing Express API owns routing and response validation; it invokes Python per calculation so the browser only needs the typed generated hook.
- Graph coordinates, difference tables, and derivation terms are returned by the same calculation to keep the explanation synchronized with the result.

## Product

Users can edit any equally spaced X/Y dataset, choose Newton Forward or Newton Backward, compare both methods, inspect the finite-difference table and step-by-step terms, and view the interpolated curve with the target point.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- X values must remain equally spaced; the Python engine applies a floating-point tolerance when checking intervals.
- After changing the OpenAPI contract, run `pnpm --filter @workspace/api-spec run codegen` before checking packages.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
