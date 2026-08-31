/**
 * Sizes images inside markdown content and groups screenshot runs.
 *
 * Two jobs, both done centrally so posts stay plain markdown:
 *
 * 1. Pipeline-processed markdown images render at intrinsic resolution with
 *    `sizes: 100vw` into a ~768px article column. Setting width/widths/sizes
 *    here caps every in-article image once instead of annotating each post.
 *    These are `getImage()` transform options, not HTML attributes — user
 *    rehype plugins run before `rehypeImages`, which folds `node.properties`
 *    into the payload `getImage()` consumes. Omitting `widths` strips the
 *    srcset, so all three always travel together.
 *
 * 2. A paragraph holding two or more images and nothing else was a gallery in
 *    the Hugo source. It becomes a figure grid, captioned from each alt, and
 *    those images get a phone-screenshot ladder rather than the article one.
 */

const ARTICLE_WIDTH = 768;
const SHOT_WIDTH = 320;

const isImage = (node) => node.type === "element" && node.tagName === "img";
const isBlank = (node) =>
	node.type === "text" && node.value.trim() === "";

function size(node, width, sizes) {
	if (node.properties.width) return;
	node.properties.width = width;
	node.properties.widths = [width, width * 2];
	node.properties.sizes = sizes;
}

function toFigure(img) {
	const alt = typeof img.properties.alt === "string" ? img.properties.alt : "";
	size(img, SHOT_WIDTH, `(min-width: 640px) ${SHOT_WIDTH}px, 45vw`);
	return {
		type: "element",
		tagName: "figure",
		properties: { className: ["shot"] },
		children: alt
			? [
					img,
					{
						type: "element",
						tagName: "figcaption",
						properties: {},
						children: [{ type: "text", value: alt }],
					},
				]
			: [img],
	};
}

export function rehypeContentImages() {
	return (tree) => {
		const walk = (node) => {
			if (!node.children) return;

			for (let i = 0; i < node.children.length; i++) {
				const child = node.children[i];

				if (child.type === "element" && child.tagName === "p") {
					const meaningful = child.children.filter((c) => !isBlank(c));
					if (meaningful.length > 1 && meaningful.every(isImage)) {
						node.children[i] = {
							type: "element",
							tagName: "div",
							properties: { className: ["shots"] },
							children: meaningful.map(toFigure),
						};
						continue;
					}
				}

				if (isImage(child)) {
					size(
						child,
						ARTICLE_WIDTH,
						`(min-width: ${ARTICLE_WIDTH}px) ${ARTICLE_WIDTH}px, 100vw`,
					);
					// `loading` / `decoding` are not set here: rehypeImages rebuilds
					// the attribute list from the transform payload and stamps its
					// own lazy/async, discarding anything else this plugin adds.
				}

				walk(child);
			}
		};
		walk(tree);
	};
}
