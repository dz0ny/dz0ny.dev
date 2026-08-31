// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { defineConfig as viteConfig } from "vite";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import favicons from "astro-favicons";
import pagefind from "astro-pagefind";
import { agentsSummary } from "@nuasite/agent-summary";
import astroAgentAnnotate from "astro-agent-annotate";
import cloudflare from "@astrojs/cloudflare";
import { rehypeContentImages } from "./src/lib/rehype-content-images.mjs";

const isDevelopment = process.env.NODE_ENV === "development";
const devToolbar = { enabled: isDevelopment };

// https://astro.build/config
export default defineConfig({
  site: "https://dz0ny.dev",
  output: "static",
  trailingSlash: "always",

  markdown: {
    rehypePlugins: [rehypeContentImages],
    // Dual themes with `defaultColor: false` emit both palettes as CSS
    // variables; index.css picks the dark one under `.dark`, since this site
    // toggles by class rather than by prefers-color-scheme alone.
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
      wrap: false,
    },
  },
  // No `image.service` key on purpose: Astro's schema default is already
  // `astro/assets/services/sharp`, which is what we want. Setting it explicitly
  // buys nothing — and see the adapter note below before changing `imageService`.
  integrations: [
    react(),
    // branding.astro is the living style guide, not a public page: it is
    // noindex, so it has no business in the sitemap either.
    sitemap({ filter: (page) => !page.includes("/branding/") }),
    agentsSummary(),
    pagefind(),
    ...(devToolbar.enabled ? [astroAgentAnnotate()] : []),
    favicons({
      input: "./src/assets/favicon.png",
      name: "Janez Troha",
      short_name: "dz0ny",
    }),
  ],

  vite: viteConfig({
    cacheDir: ".astro/vite",
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  }),

  build: {
    concurrency: 4,
    // Keep this at "auto" (Astro's default: inline only stylesheets under ~4 kB).
    // Forcing "always" puts the whole compiled Tailwind bundle in a <style> block
    // in every document — byte-identical CSS re-transferred on every navigation,
    // and render delay dominates LCP because nothing paints until it is parsed.
    // A bundle over ~15 kB belongs behind the immutable /_astro/* cache instead.
    inlineStylesheets: "auto",
  },

  server: { port: 4321, host: "0.0.0.0", allowedHosts: true },
  devToolbar,
  // `imageService: "custom"` is load-bearing — do NOT "fix" it to "compile".
  // In the adapter's `setImageConfig()`, "compile" returns the workerd image
  // service (v13 does so unconditionally; v14 keeps sharp only if a custom
  // service is set, and `hasUserImageService()` explicitly excludes sharp).
  // "custom" is the only branch that returns the config untouched, so it is
  // what lets Astro's sharp service survive. `prerenderEnvironment: "node"`
  // pairs with it so sharp runs in plain Node during the build, not workerd.
  adapter: isDevelopment
    ? undefined
    : cloudflare({ imageService: "custom", prerenderEnvironment: "node" }),

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Space Grotesk",
      cssVariable: "--font-display-family",
      weights: ["500 700"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Public Sans",
      cssVariable: "--font-body-family",
      weights: ["400 600"],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-code-family",
      weights: ["400 600"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
});
