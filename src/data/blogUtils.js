export const ALL_BLOGS_CATEGORY = "All";
export const DEFAULT_READ_TIME = "5 min read";

export const getBlogCategories = (posts, preferredOrder = []) => {
  const seenCategories = new Set();
  const categories = [ALL_BLOGS_CATEGORY];

  const addCategory = (category) => {
    if (!category || seenCategories.has(category)) {
      return;
    }

    seenCategories.add(category);
    categories.push(category);
  };

  preferredOrder.forEach(addCategory);
  posts.forEach((post) => post.category?.forEach(addCategory));

  return categories;
};

export const isBlogInCategory = (post, category) => {
  if (category === ALL_BLOGS_CATEGORY) {
    return true;
  }

  return Array.isArray(post.category) && post.category.includes(category);
};

export const filterBlogsByCategory = (posts, category = ALL_BLOGS_CATEGORY) =>
  posts.filter((post) => isBlogInCategory(post, category));

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
  }).format(date);
};

export const shouldRenderHeroImage = (blog) => {
  if (!blog?.image) {
    return false;
  }

  return !blog.content?.some((block) => block.type === "image" && block.src === blog.image);
};

export const getLinkedTextSegments = (text = "", links = []) => {
  const linkMatches = links
    .filter((link) => link.text && link.url)
    .map((link, index) => ({
      ...link,
      index,
      start: text.indexOf(link.text),
    }))
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
