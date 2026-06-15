import assert from "node:assert/strict";
import test from "node:test";
import blogPosts from "./blogPosts.js";
import profile from "./profile.js";

test("profile contact fields used by the site are present", () => {
  assert.ok(profile.tagline);
  assert.ok(profile.location);
  assert.ok(profile.contact.emails[0]);
  assert.ok(profile.contact.github.startsWith("https://github.com/"));
  assert.ok(profile.contact.linkedin.startsWith("https://www.linkedin.com/"));
});

test("profile sections have content for the landing page", () => {
  assert.ok(profile.focusAreas.length >= 4);
  assert.ok(profile.experience.length >= 4);
  assert.ok(profile.education.length >= 1);
  assert.ok(profile.projects.length >= 1);
});

test("profile project links resolve to local blog posts when slugs are provided", () => {
  const blogSlugs = new Set(blogPosts.map((post) => post.slug));
  const linkedProjects = profile.projects.filter((project) => project.slug);

  assert.ok(linkedProjects.length > 0);

  linkedProjects.forEach((project) => {
    assert.ok(blogSlugs.has(project.slug), `${project.title} should link to a local blog post`);
  });
});
