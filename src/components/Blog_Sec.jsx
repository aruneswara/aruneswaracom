import { Link } from "react-router-dom";
import { Arrowsvg } from "./Svg_components/Svg";
import blogPosts from "../data/blogPosts";
import {
  formatBlogDate,
  getBlogReadTime,
  getBlogRouteId,
} from "../data/blogUtils";

const Blog_Sec = () => {
  return (
    <section className="Blog_Sec">
      <div className="container">
        <div className="main_blog_Sec">
          <div className="blog_Sec_top">
            <div className="back_btn">
              <Link to="/">← Back to home</Link>
            </div>
            <div className="blog_Sec_top_heading">
              <h2>Writing</h2>
              <p>Essays and project writeups, newest first.</p>
            </div>
          </div>

          <div className="blog_Sec_tab">
            <div className="blog_Sec_tab_body">
              <div className="blog_Sec_box">
                {blogPosts.map((post) => (
                  <Link
                    className="blog_Sec_card"
                    to={`/blog-inner/${encodeURIComponent(getBlogRouteId(post))}`}
                    key={post._id}
                    aria-label={`Read ${post.title}`}
                  >
                    <div className="blog_Sec_date">
                      <p>{formatBlogDate(post.date)}</p>
                    </div>
                    <div className="blog_Sec_card_title">
                      <span>
                        <h3>{post.title}</h3>
                        <span className="blog_Sec_card_arrow" aria-hidden="true">
                          <Arrowsvg />
                        </span>
                      </span>
                      <p>{post.description}</p>
                      <p>{getBlogReadTime(post)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog_Sec;
