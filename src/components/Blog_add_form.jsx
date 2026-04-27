import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Deletsvg } from "./Svg_components/Svg";
import blogService from "../Redux/blogService";

const Blog_add_form = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    category: [],
    readTime: "5 min read",
  });

  // Dynamic sections state
  const [headingSections, setHeadingSections] = useState([]);
  const [linkSections, setLinkSections] = useState([]);

  // Required sections state
  const [practicalExample, setPracticalExample] = useState({
    heading: "Practical Example",
    descriptionBefore: "",
    code: "",
    descriptionAfter: "",
  });

  const [realCost, setRealCost] = useState({
    heading: "The Real Cost",
    description: "",
  });

  const [furtherReading, setFurtherReading] = useState({
    heading: "Further Reading",
    description: "",
  });

  // UI state
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Available categories
  const availableCategories = ["Backend", "API Design", "Systems", "Engineering"];

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!formData.date) {
      newErrors.date = "Date is required";
    }
    if (!practicalExample.heading.trim()) {
      newErrors.practicalExampleHeading = "Practical example heading is required";
    }
    if (!realCost.heading.trim()) {
      newErrors.realCostHeading = "Real cost heading is required";
    }
    if (!furtherReading.heading.trim()) {
      newErrors.furtherReadingHeading = "Further reading heading is required";
    }

    // Validate code is valid JSON if provided
    if (practicalExample.code.trim()) {
      try {
        JSON.parse(practicalExample.code);
      } catch {
        newErrors.code = "Code must be valid JSON";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle main form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      category: checked
        ? [...prev.category, value]
        : prev.category.filter(cat => cat !== value)
    }));
  };

  // Add Heading Box
  const addHeadingBox = () => {
    setHeadingSections([...headingSections, { id: Date.now(), heading: "", description: "" }]);
  };

  // Add Link Box
  const addLinkBox = () => {
    setLinkSections([
      ...linkSections,
      { id: Date.now(), descriptionBefore: "", url: "", descriptionAfter: "" }
    ]);
  };

  // Remove Heading Box
  const removeHeadingBox = (id) => {
    setHeadingSections(headingSections.filter(item => item.id !== id));
  };

  // Remove Link Box
  const removeLinkBox = (id) => {
    setLinkSections(linkSections.filter(item => item.id !== id));
  };

  // Handle heading section change
  const handleHeadingChange = (id, field, value) => {
    setHeadingSections(prev =>
      prev.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Handle link section change
  const handleLinkChange = (id, field, value) => {
    setLinkSections(prev =>
      prev.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // Handle submit
  const handleSubmit = async (isDraft = false) => {
    if (!validateForm()) {
      setSubmitStatus({ type: "error",
        message: Object.values(errors).join(", "),
       });
      return;
    }

    setLoading(true);
    setSubmitStatus(null);

    try {
      // Prepare blog data
      const blogData = {
        ...formData,
        headings: headingSections.filter(h => h.heading || h.description),
        links: linkSections.filter(l => l.descriptionBefore || l.url || l.descriptionAfter),
        practicalExample,
        realCost,
        furtherReading,
      };

      await blogService.createBlog(blogData);

      setSubmitStatus({
        type: "success",
        message: isDraft ? "Draft saved successfully!" : "Blog published successfully!"
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/blogs");
      }, 2000);

    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || "Failed to save blog. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="Blog_add_form">
      <div className="container">
        <div className="main_blog_Sec">

          {/* Top section for main blog inputs */}
          <div className="blog_Sec_top">
            <div className="Blog_inner_input_box">
              <h2>Add Blog Title</h2>

              <input
                type="text"
                name="title"
                placeholder="Title *"
                value={formData.title}
                onChange={handleFormChange}
                className={errors.title ? "error" : ""}
              />
              {errors.title && <span className="error-text">{errors.title}</span>}

              <input
                type="text"
                name="description"
                placeholder="Description *"
                value={formData.description}
                onChange={handleFormChange}
                className={errors.description ? "error" : ""}
              />
              {errors.description && <span className="error-text">{errors.description}</span>}

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleFormChange}
                className={errors.date ? "error" : ""}
              />
              {errors.date && <span className="error-text">{errors.date}</span>}

              <input
                type="text"
                name="readTime"
                placeholder="Read Time (e.g., 5 min read)"
                value={formData.readTime}
                onChange={handleFormChange}
              />

              {/* Category Selection */}
              <div className="category-selection">
                <h2>Select Categories:</h2>
                {availableCategories.map(cat => (
                  <span key={cat}>
                  <label>
                    <input
                      type="checkbox"
                      value={cat}
                      checked={formData.category.includes(cat)}
                      onChange={handleCategoryChange}
                    />
                    <p>{cat}</p>
                  </label>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons to add sections */}
          <div className="Blog_inner_sec_btn_box">
            <button type="button" onClick={addHeadingBox}>Add Blog Heading</button>
            <button type="button" onClick={addLinkBox}>Add URL Link</button>
          </div>

          {/* Inner section that holds dynamic boxes */}
          <div className="Blog_add_form_box">

            {/* Dynamic Heading Boxes */}
            {headingSections.map((item) => (
              <div className="Blog_inner_input_box" key={item.id}>
                <span>
                  <h2>Blog Heading</h2>
                  <button
                    type="button"
                    onClick={() => removeHeadingBox(item.id)}
                  >
                    <Deletsvg />
                  </button>
                </span>
                <input
                  type="text"
                  placeholder="Heading"
                  value={item.heading}
                  onChange={(e) => handleHeadingChange(item.id, "heading", e.target.value)}
                />
                <textarea
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) => handleHeadingChange(item.id, "description", e.target.value)}
                  rows="4"
                />
              </div>
            ))}

            {/* Dynamic Link Boxes */}
            {linkSections.map((item) => (
              <div className="Blog_inner_input_box" key={item.id}>
                <span>
                  <h2>URL Link</h2>
                  <button
                    type="button"
                    onClick={() => removeLinkBox(item.id)}
                  >
                    <Deletsvg />
                  </button>
                </span>
                <textarea
                  placeholder="Description before link"
                  value={item.descriptionBefore}
                  onChange={(e) => handleLinkChange(item.id, "descriptionBefore", e.target.value)}
                  rows="3"
                />
                <input
                  type="text"
                  placeholder="URL link"
                  value={item.url}
                  onChange={(e) => handleLinkChange(item.id, "url", e.target.value)}
                />
                <textarea
                  placeholder="Description after link"
                  value={item.descriptionAfter}
                  onChange={(e) => handleLinkChange(item.id, "descriptionAfter", e.target.value)}
                  rows="3"
                />
              </div>
            ))}

          </div>

          {/* Practical Example - Required */}
          <div className="Blog_inner_input_box">
            <div className="Blog_add_form_heading">
              <h2>Add Practical Example *</h2>

              <input
                type="text"
                placeholder="Heading *"
                value={practicalExample.heading}
                onChange={(e) => setPracticalExample(prev => ({ ...prev, heading: e.target.value }))}
                className={errors.practicalExampleHeading ? "error" : ""}
              />
              {errors.practicalExampleHeading && (
                <span className="error-text">{errors.practicalExampleHeading}</span>
              )}

              <textarea
                placeholder="Description before code"
                value={practicalExample.descriptionBefore}
                onChange={(e) => setPracticalExample(prev => ({ ...prev, descriptionBefore: e.target.value }))}
                rows="3"
              />

              <textarea
                placeholder="Code (JSON format)"
                value={practicalExample.code}
                onChange={(e) => setPracticalExample(prev => ({ ...prev, code: e.target.value }))}
                rows="8"
                className={errors.code ? "error" : ""}
              />
              {errors.code && <span className="error-text">{errors.code}</span>}

              <textarea
                placeholder="Description after code"
                value={practicalExample.descriptionAfter}
                onChange={(e) => setPracticalExample(prev => ({ ...prev, descriptionAfter: e.target.value }))}
                rows="3"
              />
            </div>
          </div>

          {/* Real Cost - Required */}
          <div className="Blog_inner_input_box">
            <h2>Add Real Cost *</h2>

            <input
              type="text"
              placeholder="Heading *"
              value={realCost.heading}
              onChange={(e) => setRealCost(prev => ({ ...prev, heading: e.target.value }))}
              className={errors.realCostHeading ? "error" : ""}
            />
            {errors.realCostHeading && (
              <span className="error-text">{errors.realCostHeading}</span>
            )}

            <textarea
              placeholder="Description"
              value={realCost.description}
              onChange={(e) => setRealCost(prev => ({ ...prev, description: e.target.value }))}
              rows="4"
            />
          </div>

          {/* Further Reading - Required */}
          <div className="Blog_inner_input_box">
            <h2>Add Further Reading *</h2>

            <input
              type="text"
              placeholder="Heading *"
              value={furtherReading.heading}
              onChange={(e) => setFurtherReading(prev => ({ ...prev, heading: e.target.value }))}
              className={errors.furtherReadingHeading ? "error" : ""}
            />
            {errors.furtherReadingHeading && (
              <span className="error-text">{errors.furtherReadingHeading}</span>
            )}

            <textarea
              placeholder="Description"
              value={furtherReading.description}
              onChange={(e) => setFurtherReading(prev => ({ ...prev, description: e.target.value }))}
              rows="4"
            />
          </div>


          {/* Status Message */}
          {submitStatus && (
            <div className={`status-message ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          {/* Submit Buttons */}
          <div className="Blog_inner_sec_btn_box">
            <button
              type="button"
              onClick={() => handleSubmit(true)}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Draft"}
            </button>
            <button
              type="button"
              onClick={() => handleSubmit(false)}
              disabled={loading}
              className="primary"
            >
              {loading ? "Publishing..." : "Publish Blog"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog_add_form;
