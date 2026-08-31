import { type CollectionEntry, getCollection } from "astro:content";

/** Published posts, newest first. Drafts never ship. */
export async function getPosts(): Promise<CollectionEntry<"posts">[]> {
	const posts = await getCollection("posts", ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Every tag in use, with its post count, alphabetical. */
export async function getTags(): Promise<{ tag: string; count: number }[]> {
	const posts = await getPosts();
	const counts = new Map<string, number>();
	for (const post of posts) {
		for (const tag of post.data.tags) {
			counts.set(tag, (counts.get(tag) ?? 0) + 1);
		}
	}
	return [...counts.entries()]
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => a.tag.localeCompare(b.tag));
}

/** Every category in use, with its post count, alphabetical. */
export async function getCategories(): Promise<{ category: string; count: number }[]> {
	const posts = await getPosts();
	const counts = new Map<string, number>();
	for (const post of posts) {
		for (const category of post.data.categories) {
			counts.set(category, (counts.get(category) ?? 0) + 1);
		}
	}
	return [...counts.entries()]
		.map(([category, count]) => ({ category, count }))
		.sort((a, b) => a.category.localeCompare(b.category));
}
