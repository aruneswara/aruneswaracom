import { useState } from "react";
import { Link } from "react-router-dom";
import { Arrowsvg } from "./Svg_components/Svg";
import blogPosts, { blogCategories } from "../data/blogPosts";
import {
  ALL_BLOGS_CATEGORY,
  filterBlogsByCategory,
  formatBlogDate,
  getBlogReadTime,
  getBlogRouteId,
} from "../data/blogUtils";

const Blog_Sec = () => {
  const [activeTab, setActiveTab] = useState(ALL_BLOGS_CATEGORY);

  const filteredBlogs = filterBlogsByCategory(blogPosts, activeTab);

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
              <p>Posts and side-project writeups migrated from aruneswara.com.</p>
            </div>
          </div>

          <div className="blog_Sec_tab">
            <div className="blog_Sec_tab_list">
              {blogCategories.map((tab) => (
                <h3
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                  style={{ cursor: "pointer" }}
                >
                  {tab}
                </h3>
              ))}
            </div>

            <div className="blog_Sec_tab_body">
              {filteredBlogs.length === 0 && (
                <div className="empty-state">
                  <p>No blogs found in this category.</p>
                  {activeTab !== ALL_BLOGS_CATEGORY && (
                    <button onClick={() => setActiveTab(ALL_BLOGS_CATEGORY)}>View all blogs</button>
                  )}
                </div>
              )}

              {filteredBlogs.length > 0 && (
                <div className="blog_Sec_box">
                  {filteredBlogs.map((post) => (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog_Sec;
