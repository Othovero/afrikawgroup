# Flyer reference images

Save the two reference flyers here with these exact filenames — the generator
reads them by name:

| File | Which reference |
|---|---|
| `reference-square.png` | The 1:1 "CaryPact Botswana Community" layout (name / ranking / country fields down the left, portrait right, three feature icons along the bottom) |
| `reference-portrait.png` | The 4:5 "Congratulations" layout (big rank badge left, portrait right, BUILD·EARN·EMPOWER footer) |

`.png` or `.jpg` both work — if you save as `.jpg`, change the extension in
`src/lib/flyer/references.ts`.

These stay **outside** `public/` on purpose: they're read server-side and sent
to the image API, and there's no reason to serve them to browsers.

## Two things to be deliberate about

**1. The reference copy trips the claims filter.**
Both references carry a "FINANCIAL FREEDOM — Unlock income opportunities"
feature block. `financial freedom` and `income` are on the blocklist in PRD §F5,
so if the model copies that text through, every flyer gets rejected before
download. The generator therefore instructs the model to leave the feature
strip's wording out, and the three feature captions are composited from a fixed,
pre-approved set instead. If you want that panel to read differently, edit
`FEATURE_STRIP` in `src/lib/flyer/prompt.ts` — one place, applies everywhere.

**2. The faces in the references belong to real members.**
They're used here as *layout and lighting* reference only. The prompt explicitly
tells the model not to reproduce any person from the reference images — the only
face that should appear in an output is the member's own uploaded photo. Worth
having those two members' okay on file for using their flyers as internal
reference material.
