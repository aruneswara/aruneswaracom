import { Link, useParams } from "react-router-dom";
import Get_in_touch_sec from "./Get_in_touch_sec";
import { getBlogById } from "../data/blogPosts";

const Blog_inner_sec = () => {
  const { id = "" } = useParams();
  const blog = getBlogById(decodeURIComponent(id));

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const renderTextWithLinks = (text, links = []) => {
    const usableLinks = links.filter((link) => link.text && link.url);

    if (usableLinks.length === 0) {
      return text;
    }

    const parts = [];
    let cursor = 0;

    usableLinks.forEach((link, index) => {
      const start = text.indexOf(link.text, cursor);

      if (start === -1) {
        return;
      }

      if (start > cursor) {
        parts.push(text.slice(cursor, start));
      }

      parts.push(
        <a href={link.url} target="_blank" rel="noreferrer" key={`${link.url}-${index}`}>
          {link.text}
        </a>
      );
      cursor = start + link.text.length;
    });

    if (cursor < text.length) {
      parts.push(text.slice(cursor));
    }

    return parts.length > 0 ? parts : text;
  };

  const renderContentBlock = (block, index) => {
    if (block.type === "image") {
      return (
        <figure className="Blog_inner_image" key={`${block.src}-${index}`}>
          <img src={block.src} alt={block.alt || ""} loading="lazy" />
        </figure>
      );
    }

    if (block.type === "heading") {
      return (
        <div className="Blog_inner__title" key={`${block.text}-${index}`}>
          <h3>{renderTextWithLinks(block.text, block.links)}</h3>
        </div>
      );
    }

    if (block.type === "quote") {
      return (
        <blockquote className="Blog_inner_quote" key={`${block.text}-${index}`}>
          {renderTextWithLinks(block.text, block.links)}
        </blockquote>
      );
    }

    if (block.type === "code") {
      return (
        <pre className="Blog_inner_code" key={`${block.text}-${index}`}>
          <code>{block.text}</code>
        </pre>
      );
    }

    if (block.type === "embed") {
      return (
        <div className="Blog_inner_link" key={`${block.src}-${index}`}>
          <a href={block.src} target="_blank" rel="noreferrer">
            View embedded media
          </a>
        </div>
      );
    }

    return (
      <div className="Blog_inner_box" key={`${block.text}-${index}`}>
        <p>{renderTextWithLinks(block.text, block.links)}</p>
      </div>
    );
  };

  if (!blog) {
    return (
      <section className="Blog_Sec">
        <div className="container">
          <div className="main_blog_Sec">
            <div className="error-state">
              <p>Blog not found</p>
              <Link to="/blogs">← Back to all posts</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const repeatsHeroImage = blog.image && blog.content?.some((block) => block.type === "image" && block.src === blog.image);

  return (
    <>
      <section className="Blog_Sec">
        <div className="container">
          <div className="main_blog_Sec">
            <div className="blog_Sec_top">
              <div className="back_btn">
                <Link to="/blogs">← Back to all posts</Link>
              </div>
              <div className="blog_Sec_top_heading">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <p>{formatDate(blog.date)} · {blog.readTime || "5 min read"}</p>
              </div>
            </div>

            {blog.image && !repeatsHeroImage && (
              <figure className="Blog_inner_image Blog_inner_hero_image">
                <img src={blog.image} alt="" loading="eager" />
              </figure>
            )}

            <div className="Blog_inner_sec_box blog_post_content">
              {blog.content?.map((block, index) => renderContentBlock(block, index))}
            </div>

            <div className="Written_by_box">
              <h3>Written by {blog.author?.name || "Arun Eswara"}</h3>
              <h3>{blog.author?.title || "Software Engineer"}</h3>
              {blog.sourceUrl && (
                <p>
                  <a href={blog.sourceUrl} target="_blank" rel="noreferrer">
                    Original post
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Get_in_touch_sec />
    </>
  );
};

export default Blog_inner_sec;
