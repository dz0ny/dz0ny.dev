import type { APIRoute } from "astro";
import { getPosts } from "@/lib/posts";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

// Hugo published the feed at /index.xml. Keeping that exact path means existing
// subscribers survive the migration, so this is deliberately not /rss.xml.
const escape = (value: string) =>
	value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");

export const GET: APIRoute = async ({ site }) => {
	const base = site?.href ?? "https://dz0ny.dev/";
	const posts = await getPosts();

	const items = posts
		.map((post) => {
			const url = `${base}posts/${post.id}/`;
			const summary = post.data.description ?? post.data.subtitle ?? "";
			return `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
${summary ? `      <description>${escape(summary)}</description>\n` : ""}${post.data.tags
				.map((tag) => `      <category>${escape(tag)}</category>`)
				.join("\n")}
    </item>`;
		})
		.join("\n");

	const xml = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(SITE_NAME)}</title>
    <link>${base}</link>
    <description>${escape(SITE_DESCRIPTION)}</description>
    <language>en-gb</language>
    <lastBuildDate>${posts[0]?.data.date.toUTCString() ?? new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${base}index.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

	return new Response(xml, {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
};
