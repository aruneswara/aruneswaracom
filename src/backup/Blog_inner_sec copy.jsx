import React from "react";
import { Link } from "react-router-dom";
import Get_in_touch_sec from "../components/Get_in_touch_sec";

const Blog_inner_sec = () => {
  const userData = {
    id: "user_123",
    name: "Arun Eswara",
    email: "arun@example.com",
    _links: {
      self: "/users/123",
      posts: "/users/123/posts",
      settings: "/users/123/settings"
    }
  };

  // Array of blog sections
  const blogContent = [
    {
      type: "title",
      title: "The Problem with Most APIs",
      paragraphs: [""]
    },
    {
      type: "box",
      paragraphs: [
        "Most APIs are designed for today's requirements. They work perfectly—until they don't. The database schema changes. A new use case emerges. Suddenly, your elegant",
      ],
      link: "/users",
      afterLink: "endpoint needs to return 50 extra fields, half of which are null for 90% of requests."
    },
    {
      type: "box",
      paragraphs: ["The typical response? Version the API. Create"],
      link: "/v2/users",
      afterLink: "Now you're maintaining two codebases, writing twice as many tests, and confusing new developers about which version to use."
    }
  ];

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
                <h2>Designing APIs That Age Well</h2>
                <p>
                  APIs are promises. When you publish an endpoint, you're making a
                  contract with every developer who uses it. Break that contract
                  carelessly, and you'll spend years apologizing through
                  deprecation notices and migration guides.
                </p>
                <p>November 2, 2024 · 6 min read</p>
              </div>
            </div>

            <div className="Blog_inner_sec_box">
              {/* Map over dynamic content */}
              {blogContent.map((item, index) => {
                if (item.type === "title") {
                  return (
                    <div className="Blog_inner__title" key={index}>
                      <h3>{item.title}</h3>
                      {item.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  );
                }

                if (item.type === "box") {
                  return (
                    <div className="Blog_inner_box" key={index}>
                      {item.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                      {item.link && (
                        <div className="Blog_inner_link">
                          <p>{item.link}</p>
                        </div>
                      )}
                      {item.afterLink && <p>{item.afterLink}</p>}
                    </div>
                  );
                }

                return null;
              })}

              {/* Static section (Example_add_code_fixed) */}
              <div className="Blog_inner__title">
                <h3>Designing for Change</h3>
                <p>The best APIs I've worked with share a few characteristics:</p>
              </div>

              <div className="Blog_inner_box">
                <div className="Blog_inner_link code_Add">
                  <p>
                    <pre>
                      <code>{JSON.stringify(userData, null, 2)}</code>
                    </pre>
                  </p>
                </div>
                <p>
                  endpoint needs to return 50 extra fields, half of which are null
                  for 90% of requests.
                </p>
              </div>

              <div className="Blog_inner__title">
                <h3>The Real Cost of Breaking Changes</h3>
                <p>Every breaking change has a cost:</p>
                <p>Support tickets to answer</p>
                <p>Trust to rebuild</p>
                <p>
                  Sometimes breaking changes are necessary. But with thoughtful
                  design, they're rarer than you think.
                </p>
              </div>

              <div className="Blog_inner__title">
                <h3>Further Reading</h3>
                <p>REST API Design Rulebook</p>
                <p>Building Hypermedia APIs with HTML5 and Node</p>
              </div>
            </div>

            <div className="Written_by_box">
              <h3>Written by Arun Eswara</h3>
              <h3>Software Engineer</h3>
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
  