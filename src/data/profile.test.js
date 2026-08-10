import assert from "node:assert/strict";
import test from "node:test";
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
