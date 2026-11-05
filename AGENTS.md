# Domus Picturae

A multilingual Astro + Keystatic website for contemporary art galleries. Static output, one view per page type shared across locales, all editorial text localised per field.

- Read `CONTEXT.md` for the vocabulary (Artwork, Availability, Private Collection, Exhibition, Workshop, Locale…) and use it in code.
- The styling system (plain CSS, no utility framework), the i18n routing (thin per-locale routes rendering shared views), the static-only deployment (Keystatic in dev only) and the generated content model are deliberate architectural decisions.
- The content model lives once in `src/content-model/collections.ts`; `src/content.config.ts` and `keystatic.config.ts` are generated adapters and should not gain hand-written fields.
- Internal URLs come from `src/routes.ts` (never a path literal in a component); images go through `picture()` in `src/utils/images.ts`; an artwork's section, theme and badge come from `presentArtwork()`; GSAP is imported from `src/assets/scripts/motion.ts`; JSON-LD comes from `src/utils/seo.ts`.
- Run `pnpm check`, `pnpm test` and `pnpm build` before finishing.

## Domain docs

Single-context: one `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
