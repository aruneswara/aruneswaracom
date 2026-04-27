import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Get_in_touch_sec from "./Get_in_touch_sec";
import blogService from "../Redux/blogService";

const Blog_inner_sec = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await blogService.getBlogById(id);
      setBlog(response.data);
    } catch (err) {
      console.error("Error fetching blog:", err);
      setError("Failed to load blog. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [id]);

  // Fetch single blog by ID
  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Parse and format JSON code
  const formatCode = (codeString) => {
    try {
      const parsed = JSON.parse(codeString);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return codeString;
    }
  };

  // Loading State
  if (loading) {
    return (
      <section className="Blog_Sec">
        <div className="container">
          <div className="main_blog_Sec">
            <div className="loading-state">
              <p>Loading blog...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error State
  if (error || !blog) {
    return (
      <section className="Blog_Sec">
        <div className="container">
          <div className="main_blog_Sec">
            <div className="error-state">
              <p>{error || "Blog not found"}</p>
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
            {/* Top section */}
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

            <div className="Blog_inner_sec_box">
              
              {/* Dynamic Heading Sections */}
              {blog.headings && blog.headings.length > 0 && blog.headings.map((section, index) => (
                <div className="Blog_inner__title" key={index}>
                  {section.heading && <h3>{section.heading}</h3>}
                  {section.description && <p>{section.description}</p>}
                </div>
              ))}

              {/* Dynamic Link Sections */}
              {blog.links && blog.links.length > 0 && blog.links.map((linkSection, index) => (
                <div className="Blog_inner_box" key={index}>
                  {linkSection.descriptionBefore && <p>{linkSection.descriptionBefore}</p>}
                  {linkSection.url && (
                    <div className="Blog_inner_link">
                      <p>{linkSection.url}</p>
                    </div>
                  )}
                  {linkSection.descriptionAfter && <p>{linkSection.descriptionAfter}</p>}
                </div>
              ))}

              {/* Practical Example Section */}
              {blog.practicalExample && (
                <>
                  <div className="Blog_inner__title">
                    <h3>{blog.practicalExample.heading}</h3>
                    {blog.practicalExample.descriptionBefore && (
                      <p>{blog.practicalExample.descriptionBefore}</p>
                    )}
                  </div>

                  {blog.practicalExample.code && (
                    <div className="Blog_inner_box">
                      <div className="Blog_inner_link code_Add">
                        <p>
                          <pre>
                            <code>{formatCode(blog.practicalExample.code)}</code>
                          </pre>
                        </p>
                      </div>
                      {blog.practicalExample.descriptionAfter && (
                        <p>{blog.practicalExample.descriptionAfter}</p>
                      )}
                    </div>
                  )}
                </>
              )}

              {/* Real Cost Section */}
              {blog.realCost && (
                <div className="Blog_inner__title">
                  <h3>{blog.realCost.heading}</h3>
                  {blog.realCost.description && (
                    <p>{blog.realCost.description}</p>
                  )}
                </div>
              )}

              {/* Further Reading Section */}
              {blog.furtherReading && (
                <div className="Blog_inner__title">
                  <h3>{blog.furtherReading.heading}</h3>
                  {blog.furtherReading.description && (
                    <p>{blog.furtherReading.description}</p>
                  )}
                </div>
              )}
            </div>

            {/* Author Info */}
            <div className="Written_by_box">
              <h3>Written by {blog.author?.name || "Arun Eswara"}</h3>
              <h3>{blog.author?.title || "Software Engineer"}</h3>
              <p>Thanks for reading.</p>
            </div>
          </div>
        </div>
      </section>

      <Get_in_touch_sec />
    </>
  );
};

export default Blog_inner_sec;
