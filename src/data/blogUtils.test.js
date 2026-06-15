import assert from "node:assert/strict";
import test from "node:test";
import blogPosts, { blogCategories, getBlogById } from "./blogPosts.js";
import {
  ALL_BLOGS_CATEGORY,
  DEFAULT_READ_TIME,
  filterBlogsByCategory,
  findBlogById,
  formatBlogDate,
  getBlogCategories,
  getRecentBlogPosts,
  getBlogReadTime,
  getBlogRouteId,
  getLinkedTextSegments,
  shouldRenderHeroImage,
} from "./blogUtils.js";

test("blog categories include every category used by local posts", () => {
  const categoriesInPosts = new Set(blogPosts.flatMap((post) => post.category || []));

  assert.equal(blogCategories[0], ALL_BLOGS_CATEGORY);

  categoriesInPosts.forEach((category) => {
    assert.ok(blogCategories.includes(category), `${category} should be available as a tab`);
  });
});

test("preferred categories stay ordered while remaining categories are appended", () => {
  const categories = getBlogCategories(
    [
      { category: ["Writing", "Product"] },
      { category: ["Communication"] },
    ],
    ["Writing"]
  );

  assert.deepEqual(categories, [ALL_BLOGS_CATEGORY, "Writing", "Product", "Communication"]);
});

test("blogs can be filtered by category without hiding all posts", () => {
  const allPosts = filterBlogsByCategory(blogPosts, ALL_BLOGS_CATEGORY);
  const engineeringPosts = filterBlogsByCategory(blogPosts, "Engineering");

  assert.equal(allPosts.length, blogPosts.length);
  assert.ok(engineeringPosts.length > 0);
  assert.ok(engineeringPosts.every((post) => post.category.includes("Engineering")));
});

test("blogs can be found by id or slug", () => {
  const post = blogPosts[0];

  assert.equal(findBlogById(blogPosts, post._id), post);
  assert.equal(getBlogById(post.slug), post);
  assert.equal(findBlogById(blogPosts, encodeURIComponent(post.slug)), post);
});

test("recent posts exclude the active post and honor the requested limit", () => {
  const post = blogPosts[0];
  const recentPosts = getRecentBlogPosts(blogPosts, post.slug, 2);

  assert.equal(recentPosts.length, 2);
  assert.ok(recentPosts.every((recentPost) => recentPost.slug !== post.slug));
});

test("blog metadata helpers provide stable route, date, and read-time values", () => {
  assert.equal(getBlogRouteId({ _id: "fallback-id" }), "fallback-id");
  assert.equal(getBlogRouteId({ _id: "fallback-id", slug: "slug-id" }), "slug-id");
  assert.equal(getBlogReadTime({}), DEFAULT_READ_TIME);
  assert.equal(formatBlogDate("2025-07-31T20:24:14.032Z"), "July 31, 2025");
  assert.equal(formatBlogDate("not a date"), "");
});

test("hero images are skipped when the same image already appears in the post content", () => {
  const image = "https://example.com/post.png";

  assert.equal(shouldRenderHeroImage({ image, content: [] }), true);
  assert.equal(shouldRenderHeroImage({ image, content: [{ type: "image", src: image }] }), false);
  assert.equal(shouldRenderHeroImage({ content: [{ type: "image", src: image }] }), false);
});

test("linked text is split into ordered render segments", () => {
  const segments = getLinkedTextSegments("Read the docs and source", [
    { text: "source", url: "https://example.com/source" },
    { text: "docs", url: "https://example.com/docs" },
  ]);

  assert.deepEqual(segments, [
    { type: "text", text: "Read the " },
    { type: "link", text: "docs", url: "https://example.com/docs" },
    { type: "text", text: " and " },
    { type: "link", text: "source", url: "https://example.com/source" },
  ]);
});
