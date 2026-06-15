import { useState } from "react";
import { Link } from "react-router-dom";
import { Arrowsvg } from "./Svg_components/Svg";
import blogPosts, { blogCategories } from "../data/blogPosts";

const Blog_Sec = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Filter blogs based on active tab
  const getFilteredBlogs = () => {
    if (activeTab === "All") {
      return blogPosts;
    }
    return blogPosts.filter(blog => blog.category && blog.category.includes(activeTab));
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredBlogs = getFilteredBlogs();

  return (
    <section className="Blog_Sec">
      <div className="container">
        <div className="main_blog_Sec">
          {/* Top section */}
          <div className="blog_Sec_top">
            <div className="back_btn">
              <Link to="/">← Back to home</Link>
            </div>
            <div className="blog_Sec_top_heading">
              <h2>Writing</h2>
              <p>Notes on software engineering, systems, and things I&apos;m learning.</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="blog_Sec_tab">
            {/* Tab headings */}
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

            {/* Tab content */}
            <div className="blog_Sec_tab_body">
              {/* Empty State */}
              {filteredBlogs.length === 0 && (
                <div className="empty-state">
                  <p>No blogs found in this category.</p>
                  {activeTab !== "All" && (
                    <button onClick={() => setActiveTab("All")}>View all blogs</button>
                  )}
                </div>
              )}

              {/* Blog List */}
              {filteredBlogs.length > 0 && (
                <div className="blog_Sec_box">
                  {filteredBlogs.map((post) => (
                    <div className="blog_Sec_card" key={post._id}>
                      <div className="blog_Sec_date">
                        <p>{formatDate(post.date)}</p>
                      </div>
                      <div className="blog_Sec_card_title">
                        <span>
                          <h3>{post.title}</h3>
                          <Link to={`/blog-inner/${post._id}`}>
                            <Arrowsvg />
                          </Link>
                        </span>
                        <p>{post.description}</p>
                        <p>{post.readTime || "5 min read"}</p>
                      </div>
                    </div>
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
