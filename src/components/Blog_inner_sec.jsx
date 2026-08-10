import { Link, useParams } from "react-router-dom";
import Get_in_touch_sec from "./Get_in_touch_sec";
import blogPosts, { getBlogById } from "../data/blogPosts";
import {
  formatBlogDate,
  getRecentBlogPosts,
  getBlogReadTime,
  getBlogRouteId,
  getLinkedTextSegments,
} from "../data/blogUtils";

const renderLinkedText = (text, links) =>
  getLinkedTextSegments(text, links).map((segment, index) => {
    if (segment.type === "link") {
      return (
        <a key={`${segment.url}-${index}`} href={segment.url} target="_blank" rel="noreferrer">
          {segment.text}
        </a>
      );
    }

    return segment.text;
  });

const renderContentBlock = (block, index) => {
  if (block.type === "image") {
    return (
      <figure className="Blog_inner_image" key={`${block.src}-${index}`}>
        <img src={block.src} alt={block.alt || ""} loading="lazy" />
        {block.alt && <figcaption>{block.alt}</figcaption>}
      </figure>
    );
  }

  if (block.type === "video") {
    return (
      <figure className="Blog_inner_media" key={`${block.src}-${index}`}>
        <video controls preload="metadata" aria-label={block.title}>
          <source src={block.src} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </figure>
    );
  }

  if (block.type === "embed") {
    return (
      <div className="Blog_inner_embed" key={`${block.src}-${index}`}>
        <iframe
          src={block.src}
          title={block.title}
          loading="lazy"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="Blog_inner_box blog_post_content" key={`${block.text}-${index}`}>
      <p>{renderLinkedText(block.text, block.links)}</p>
    </div>
  );
};

const Blog_inner_sec = () => {
  const { id } = useParams();
  const blog = getBlogById(id);
  const recentPosts = getRecentBlogPosts(blogPosts, id);

  if (!blog) {
    return (
      <section className="Blog_Sec">
        <div className="container">
          <div className="main_blog_Sec">
            <div className="error-state">
              <p>Blog not found.</p>
              <Link to="/blogs">← Back to all posts</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                <p>{formatBlogDate(blog.date)} · {getBlogReadTime(blog)}</p>
                {blog.sourceUrl && (
                  <a className="source_post_link" href={blog.sourceUrl} target="_blank" rel="noreferrer">
                    Original post ↗
                  </a>
                )}
              </div>
            </div>

            <div className="Blog_inner_sec_box">
              {blog.content.map(renderContentBlock)}
            </div>

            <div className="recent_posts_box">
              <h3>Recent Posts</h3>
              <div className="recent_posts_grid">
                {recentPosts.map((post) => (
                  <Link to={`/blog-inner/${encodeURIComponent(getBlogRouteId(post))}`} key={getBlogRouteId(post)}>
                    <span>{formatBlogDate(post.date)}</span>
                    <strong>{post.title}</strong>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Get_in_touch_sec />
    </>
  );
};

export default Blog_inner_sec;
