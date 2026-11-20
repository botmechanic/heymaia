# TODOs — heymaia.app v1

## Product / content

- Swap the HTML/CSS phone mock (`components/PhoneMock.tsx`) for real app screenshots once capture assets are ready.
- Revisit the optional embedding-model download step when the app README ships a working URL. The TensorFlow Hub link currently listed in the Maia README returns 404; the site intentionally does not invent a replacement.
- When GitHub Releases publishes an APK (or Play listing goes live), update install step 1 and set `PLAY_STORE_URL` in `content/site.ts` (currently `null`, so Play copy is omitted).

## Repo facts to reconcile upstream

- Build `minSdk` is API 24 in `AndroidCommon.kt`; the app README recommends Android 8.0+ (API 26). The site states both.
- App README asks for JDK 17; Gradle convention plugins compile with Java 11. Follow the README for local builds until the project clarifies.
- In-app settings copy mentions Pixel 7 for model install guidance; the README recommends Pixel 6a or newer. The site follows the README.

## Polish

- Capture refreshed screenshots after any major visual change: `docs/screenshots/v1/`.
- Re-run mobile Lighthouse against a static `out/` server after large layout or font changes.
- Headings use a self-hosted Fraunces Medium static cut for Lighthouse budget; restoring the full variable file with SOFT≈50 / WONK 0 axes regresses mobile Performance below 95 unless further subsetting is done.
