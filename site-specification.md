# Site Specification

## Configuration
- **Site Type**: General (personal engineering site: writing-first blog + two product homes)
- **Target Audience**: Developers, engineering peers, and SAR/genealogy users looking for the two apps
- **Primary Goal**: Credibility — get posts read, and give MeshCore SAR and GRAMPS Viewer a real home

## Design Direction
- **Direction**: "Workbench" — the site as a well-made tool: structure shows, metadata is first-class
- **Base Language**: Technology blended with Minimalist (see `references/design-languages/`)
- **Dials**: VARIANCE 6 · MOTION 5 · DENSITY 5
- **Palette** (60/30/10): dominant `#f9fafc` ground · secondary `#141a22` ink · accent `#0c63d0` cobalt — near-monochrome cool ramp derived from the cobalt hue at C≈0.005–0.02, one accent only
- **Fonts**: Space Grotesk 500–700 (display) / Public Sans 400–600 (body, 17px/1.7) / JetBrains Mono 400–600 (metadata, tags, code) — via Astro Fonts API, `latin` + `latin-ext` for Slovenian
- **Signature patterns**: Asymmetric Split 8/4 hero with the post rail on the narrow side; Column list for indexes; hairline rules as structure
- **Motion recipes**: Orchestrated Entrance (hero stagger), Magnetic CTA, Scroll Reveal via `[data-reveal]`

### Palette tokens

| token | light | dark | role |
|---|---|---|---|
| ground | `#f9fafc` | `#0f1319` | page ground |
| surface | `#f1f3f6` | `#181d24` | raised panels |
| rule | `#dadee3` | `#2b313a` | hairline structure |
| rule-strong | `#c0c4cb` | `#414853` | emphasised rule, inputs |
| ink | `#141a22` | `#eaedf1` | body and headings |
| ink-muted | `#545b66` | `#a5abb5` | metadata |
| ink-faint | `#6a717b` | `#7e8590` | de-emphasised |
| cobalt | `#0c63d0` | `#609efa` | links, CTAs |
| cobalt-hover | `#004db2` | `#7db9ff` | hover, active |
| cobalt-soft | `#e7f1ff` | `#17263b` | accent wash |

### Contrast verdicts (light, vs ground `#f9fafc`)

```
ink          #141a22  16.75:1  ✓ AA all sizes
ink-muted    #545b66   6.56:1  ✓ AA all sizes
ink-faint    #6a717b   4.72:1  ✓ AA all sizes
cobalt       #0c63d0   5.42:1  ✓ AA all sizes
white on cobalt fill      5.66:1  ✓ AA all sizes
```

No large-text-only tokens: every palette token is safe at any size. Stock Tailwind
neutrals were checked and are **not** used for text — `text-slate-400` is 2.56:1 and
`text-sky-600` is 3.92:1 against this ground, both unsafe as body copy.

## Design Evolution
- **User customizations**: 2026-08-31 — initial build. Direction "Workbench" chosen from three proposals (against "Field Notes" warm-minimal and "Late Edition" elegant-dark). Palette seeded from the direction's strategy, not from user colors or a logo. `ink-faint` raised from L 0.61 to L 0.545 after the first contrast pass failed AA at small sizes.
- **Current style**: Stark light ground with a cool near-black ink and a single cobalt accent. Structure is visible — hairline rules separate sections instead of cards, monospace carries every date, tag, and section label, and corners sit at 4px. Layouts lead left-aligned and asymmetric; nothing centers. Motion is snappy (120–180ms) with one page-load stagger on the hero.

## Migration Notes
Migrated from Hugo (`hugo-blog-awesome` theme module) to Astro on the `astro-migration`
branch. Deploy target moved from GitHub Pages to Cloudflare Workers. Hugo's `content/`,
`layouts/`, `hugo.toml`, `go.mod`, and `archetypes/` remain in the tree until their
Astro equivalents land.
