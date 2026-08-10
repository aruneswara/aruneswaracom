export const DEFAULT_READ_TIME = "5 min read";

export const findBlogById = (posts, id = "") => {
  const normalizedId = decodeURIComponent(id).trim();

  return posts.find((post) => post._id === normalizedId || post.slug === normalizedId);
};

export const getBlogRouteId = (post) => post.slug || post._id;

export const getBlogReadTime = (post) => post.readTime || DEFAULT_READ_TIME;

export const getRecentBlogPosts = (posts, currentPostId, limit = 3) =>
  posts.filter((post) => findBlogById([post], currentPostId) !== post).slice(0, limit);

export const formatBlogDate = (dateString, locale = "en-US") => {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Chicago",
  }).format(date);
};

export const getLinkedTextSegments = (text = "", links = []) => {
  const searchOffsets = new Map();
  const linkMatches = links
    .filter((link) => link.text && link.url)
    .map((link, index) => {
      const searchFrom = searchOffsets.get(link.text) || 0;
      const start = text.indexOf(link.text, searchFrom);

      if (start !== -1) {
        searchOffsets.set(link.text, start + link.text.length);
      }

      return { ...link, index, start };
    })
    .filter((link) => link.start !== -1)
    .sort((first, second) => first.start - second.start || first.index - second.index);

  if (linkMatches.length === 0) {
    return [{ type: "text", text }];
  }

  const segments = [];
  let cursor = 0;

  linkMatches.forEach((link) => {
    if (link.start < cursor) {
      return;
    }

    if (link.start > cursor) {
      segments.push({ type: "text", text: text.slice(cursor, link.start) });
    }

    segments.push({ type: "link", text: link.text, url: link.url });
    cursor = link.start + link.text.length;
  });

  if (cursor < text.length) {
    segments.push({ type: "text", text: text.slice(cursor) });
  }

  return segments;
};
