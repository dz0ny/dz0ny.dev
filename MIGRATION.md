# Hugo to Astro migration

The site was a Hugo blog on the `hugo-blog-awesome` theme module, deployed to
GitHub Pages. It is now an Astro 6 site built with Bun, deployed to Cloudflare
Workers. This file records what changed and the steps that are not code.

## URLs

Every public URL Hugo served is preserved:

| Route | Notes |
|---|---|
| `/` | Homepage |
| `/posts/` | Post index |
| `/posts/<slug>/` | Directory name is still the slug, `mysql_and_strace` included |
| `/tags/<tag>/`, `/tags/` | Tag taxonomy |
| `/categories/<name>/`, `/categories/` | Category taxonomy, kept only so old links resolve |
| `/gramps-viewer/`, `/meshcore-sar/` and their `contact/` and `privacy-policy/` children | Product pages |
| `/index.xml` | RSS feed, deliberately not `/rss.xml`, so existing subscribers survive |

`trailingSlash: "always"` matches Hugo's behaviour, so internal links must keep
their trailing slash or they cost a 301.

## Content

Posts moved from `content/posts/` to `src/content/posts/` and are now a typed
content collection (`src/content.config.ts`). Frontmatter is unchanged: `title`,
`subtitle`, `description`, `date`, `draft`, `featured`, `tags`, `categories`.

Two Hugo-only constructs were removed from the MeshCore SAR post:

- The `{{< img >}}` shortcode became plain markdown images.
- The hand-written `<div style="display: flex">` galleries became runs of
  consecutive markdown images. `src/lib/rehype-content-images.mjs` turns any run
  of two or more images in one paragraph into a captioned figure grid, using
  each image's alt text as the caption, and sizes them for a phone screenshot
  rather than a full article column.

Captions for the four client-device photos were rewritten to describe what the
photos actually show; the originals were "Client device view 1" through "4".

## Deploy — manual steps

The code is ready; the hosting move is not automatic.

1. **Create the Worker.** In Cloudflare, connect this repo through Workers
   Builds, or run `bunx wrangler deploy` locally once to create `dz0ny-dev`.
2. **Set the build command** in the Cloudflare project to:
   ```sh
   git fetch --unshallow || true && bun run build
   ```
   Cloudflare checks out a shallow clone, so anything deriving a date from git
   history gets the deploy date on every page without this.
3. **Point the domain.** `wrangler.toml` claims `dz0ny.dev` as a custom domain;
   the zone has to exist in the same Cloudflare account first.
4. **Retire GitHub Pages** once Cloudflare serves the domain. The old workflow
   `.github/workflows/hugo.yml` is already deleted, so Pages will go stale on
   its own, but the Pages site should be turned off in repo settings.
5. **Optional:** enable Markdown for Agents on the zone (AI Crawl Control). It
   is a Cloudflare setting, not code, and needs a paid plan.

`.github/workflows/build.yml` only builds and type-checks on push. It does not
deploy, and it does not need any secrets.
