import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Arrowsvg } from "../components/Svg_components/Svg";

const Blog_Sec = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Array of blog posts
  const blogPosts = [
    {
      title: "Designing APIs That Age Well",
      date: "November 2, 2024",
      description: "Why most APIs break under change, and how to build interfaces that evolve gracefully over time.",
      readTime: "6 min read",
      category: ["All", "Backend", "API Design", "Systems", "Engineering"],
    },
    {
      title: "Lessons from Debugging Distributed Systems",
      date: "October 15, 2024",
      description: "The hardest bugs I've encountered weren't in the code—they were in the assumptions I made about how systems communicate.",
      readTime: "8 min read",
      category: ["All", "Backend", "API Design", "Engineering"],
    },
    {
      title: "Why I Still Write Tests (Even When No One Is Looking)",
      date: "September 20, 2024",
      description: "Testing isn't about catching bugs. It's about understanding what you're building.",
      readTime: "5 min read",
      category: ["All", "API Design", "Engineering"],
    },
    // You can add more blog posts here
  ];

  // Tab names
  const tabs = ["All", "Backend", "API Design", "Systems", "Engineering"];

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
              <div className="blog_Sec_box">
                {blogPosts
                  .filter((post) => post.category.includes(activeTab)) // Show posts for active tab
                  .map((post, index) => (
                    <div className="blog_Sec_card" key={index}>
                      <div className="blog_Sec_date">
                        <p>{post.date}</p>
                      </div>
                      <div className="blog_Sec_card_title">
                        <span>
                          <h3>{post.title}</h3> <Link to="/blog-inner"><Arrowsvg /></Link>
                        </span>
                        <p>{post.description}</p>
                        <p>{post.readTime}</p>
                      </div>
                    </div>
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
