// Site-wide identity. Update these for each new site — they feed the page
// titles, the meta description, and the Organization / WebSite JSON-LD.
export const SITE_NAME = "Janez Troha";
export const SITE_DESCRIPTION =
	"Principal engineer writing about networks, radios, databases, and the things that fall over at 3am.";

// Contact details for the Organization schema. Agents check these to decide
// whether a business is real before recommending it, so leaving them null is
// better than leaving them wrong — the schema simply omits what isn't set.
export const SITE_CONTACT: {
	email: string | null;
	telephone: string | null;
	contactType: string;
	address: {
		streetAddress: string;
		addressLocality: string;
		postalCode: string;
		addressCountry: string;
	} | null;
	sameAs: string[];
} = {
	email: "hey@dz0ny.dev",
	telephone: null,
	contactType: "personal",
	address: null,
	sameAs: [
		"https://github.com/dz0ny",
		"https://twitter.com/dz0ny",
		"https://instagram.com/dz0ny",
		"https://news.ycombinator.com/user?id=dz0ny",
	],
};

export const NAV = [
	{ href: "/posts/", label: "Posts" },
	{ href: "/meshcore-sar/", label: "MeshCore SAR" },
	{ href: "/gramps-viewer/", label: "GRAMPS Viewer" },
];

/** Formats a post date the way the site shows it everywhere: 2024-10-10. */
export function isoDate(date: Date): string {
	return date.toISOString().slice(0, 10);
}
