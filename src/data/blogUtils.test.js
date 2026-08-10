import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import blogPosts, { getBlogById } from "./blogPosts.js";
import {
  DEFAULT_READ_TIME,
  findBlogById,
  formatBlogDate,
  getRecentBlogPosts,
  getBlogReadTime,
  getBlogRouteId,
  getLinkedTextSegments,
} from "./blogUtils.js";

test("Wix posts are listed newest first without categories", () => {
  assert.equal(blogPosts.length, 9);
  assert.ok(blogPosts.every((post) => post.sourceUrl.startsWith("https://aruneswara.wixsite.com/mysite/post/")));
  assert.ok(blogPosts.every((post) => !("category" in post)));

  const timestamps = blogPosts.map((post) => new Date(post.date).getTime());
  assert.deepEqual(timestamps, [...timestamps].sort((first, second) => second - first));
  assert.deepEqual(
    blogPosts.map((post) => post.title),
    [
      "you're the problem",
      "there's no such thing as free will",
      "Ribbon: Transform Chrome into a seamless shortcut-based, mouse-less experience",
      "LyricLearner: An AI Music Generator and Interpreter",
      "MediData: Bringing the Hospital to You",
      "A Letter to My Future Self",
      "BioProtect: A Phased Array Spatial Sensor for Visual Detection and Assistance",
      "Ortho, An Intelligent Exoskeleton: Powered Orthosis via Neural Network for Rehabilitative Assistance",
      "An Open Letter to Incoming High School Seniors",
    ]
  );
});

test("inline Wix media is preserved locally with the Ortho video and presentation", () => {
  const localMedia = blogPosts.flatMap((post) =>
    post.content.filter((block) => block.type === "image" || block.type === "video")
  );
  const ortho = blogPosts.find((post) => post.slug.startsWith("ortho-"));

  assert.equal(localMedia.filter((block) => block.type === "image").length, 41);
  assert.ok(localMedia.every((block) => block.src.startsWith("/blog/")));
  assert.ok(localMedia.every((block) => existsSync(new URL(`../../public${block.src}`, import.meta.url))));
  assert.ok(ortho.content.some((block) => block.type === "video"));
  assert.ok(ortho.content.some((block) => block.type === "embed" && block.src.includes("docs.google.com/presentation")));
  assert.ok(blogPosts.some((post) => post.content.some((block) => block.type === "list")));
  assert.ok(blogPosts.some((post) => post.content.some((block) => block.type === "embed" && block.src.includes("usrfiles.com"))));
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
  assert.equal(formatBlogDate("2025-07-27T05:18:57.966Z"), "July 27, 2025");
  assert.equal(formatBlogDate("2020-08-26T00:28:53.125Z"), "August 25, 2020");
  assert.equal(formatBlogDate("not a date"), "");
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

test("repeated linked text maps to successive occurrences", () => {
  const segments = getLinkedTextSegments("Code is here and docs are here", [
    { text: "here", url: "https://example.com/code" },
    { text: "here", url: "https://example.com/docs" },
  ]);

  assert.deepEqual(
    segments.filter((segment) => segment.type === "link"),
    [
      { type: "link", text: "here", url: "https://example.com/code" },
      { type: "link", text: "here", url: "https://example.com/docs" },
    ]
  );
});
