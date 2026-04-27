import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Arrowsvg } from "./Svg_components/Svg";
import blogService from "../Redux/blogService";

const Blog_Sec = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Tab names
  const tabs = ["All", "Backend", "API Design", "Systems", "Engineering"];

  // Fetch blogs from API
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await blogService.getAllBlogs();
      setBlogs(response.data || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError("Failed to load blogs. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Filter blogs based on active tab
  const getFilteredBlogs = () => {
    if (activeTab === "All") {
      return blogs;
    }
    return blogs.filter(blog => blog.category && blog.category.includes(activeTab));
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
              <p>Notes on software engineering, systems, and things I'm learning.</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="blog_Sec_tab">
            {/* Tab headings */}
            <div className="blog_Sec_tab_list">
              {tabs.map((tab) => (
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
              {/* Loading State */}
              {loading && (
                <div className="loading-state">
                  <p>Loading blogs...</p>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="error-state">
                  <p>{error}</p>
                  <button onClick={fetchBlogs}>Retry</button>
                </div>
              )}

              {/* Empty State */}
              {!loading && !error && filteredBlogs.length === 0 && (
                <div className="empty-state">
                  <p>No blogs found in this category.</p>
                  {activeTab !== "All" && (
                    <button onClick={() => setActiveTab("All")}>View all blogs</button>
                  )}
                </div>
              )}

              {/* Blog List */}
              {!loading && !error && filteredBlogs.length > 0 && (
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