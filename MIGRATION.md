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

## Deploy — current state

Done on 2026-08-31:

- Worker `dz0ny-dev` created in account `My Account` and deployed with
  `wrangler deploy`. Preview URL: https://dz0ny-dev.dz0ny.workers.dev
- The apex `dz0ny.dev` was a proxied CNAME to `dz0ny.github.io`. That record was
  deleted and `dz0ny.dev` attached to the Worker as a custom domain, so the
  domain now serves the Astro build. `wrangler.toml` claims the same route, so
  later deploys keep it.
- Deploys are run by hand with `bunx wrangler deploy`. There is no CI build:
  `.github/workflows/hugo.yml` is deleted and no Actions workflow replaced it.
- `.github/workflows/hugo.yml` was deleted, so nothing publishes to GitHub Pages
  any more.

### Rollback

To put the old GitHub Pages site back, recreate the apex record and detach the
Worker domain:

```sh
# CNAME dz0ny.dev -> dz0ny.github.io, proxied, TTL auto (record was
# 19cd5d5c8f3151bbe5b5adfa1e4bb8a2 in zone bfebc0425af5556166912aa72f9c6ea9)
```

The Worker custom domain has to be removed first; Cloudflare refuses to create a
conflicting DNS record while it is attached.

### Still to do

1. **Turn off GitHub Pages** in the repository settings. The workflow is gone,
   but the Pages site itself is still configured.
2. **Optional:** Workers Builds, if you want pushes to deploy on their own.
   That needs the Cloudflare GitHub App installed on the repo through the
   dashboard, which an API token cannot do. If you set it up, use this build
   command so git history survives the shallow clone:
   ```sh
   git fetch --unshallow || true && bun run build
   ```
3. **Optional:** enable Markdown for Agents on the zone (AI Crawl Control). It is
   a Cloudflare setting, not code, and needs a paid plan; `dz0ny.dev` is on Free.
