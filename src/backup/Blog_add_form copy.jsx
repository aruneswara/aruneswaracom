import React, { useState } from "react";
import { Deletsvg } from "./Svg_components/Svg";

const Blog_add_form = () => {
  // Initial state me ek item add kiya hai
  const [headingSections, setHeadingSections] = useState([{ id: Date.now() }]);
  const [linkSections, setLinkSections] = useState([{ id: Date.now() + 1 }]);

  // Add Heading Box
  const addHeadingBox = () => {
    setHeadingSections([...headingSections, { id: Date.now() }]);
  };

  // Add Link Box
  const addLinkBox = () => {
    setLinkSections([...linkSections, { id: Date.now() }]);
  };

  // Remove Heading Box
  const removeHeadingBox = (id) => {
    setHeadingSections(headingSections.filter(item => item.id !== id));
  };

  // Remove Link Box
  const removeLinkBox = (id) => {
    setLinkSections(linkSections.filter(item => item.id !== id));
  };

  return (
    <section className="Blog_add_form">
      <div className="container">
        <div className="main_blog_Sec">

          {/* Top section for main blog inputs */}
          <div className="blog_Sec_top">
            <div className="Blog_inner_input_box">
              <h2>Add Blog Title</h2>
              <input type="text" placeholder="Title" />
              <input type="text" placeholder="Description" />
              <input type="date" placeholder="" />
            </div>
          </div>

          {/* Buttons to add sections */}
          <div className="Blog_inner_sec_btn_box">
            <button onClick={addHeadingBox}>Add Blog Heading</button>
            <button onClick={addLinkBox}>Add  Url Link</button>
          </div>

          {/* Inner section that holds dynamic boxes */}
          <div className="Blog_add_form_box">

            {/* Dynamic Heading Boxes */}
            {headingSections.map((item) => (
              <div className="Blog_inner_input_box" key={item.id}>

                <span>   <h2>Add Blog Heading</h2>
                  <button
                    onClick={() => removeHeadingBox(item.id)}
                  >
                    <Deletsvg />
                  </button></span>
                <input type="text" placeholder="Heading" />
                <input type="text" placeholder="Description" />


              </div>
            ))}

            {/* Dynamic Link Boxes */}
            {linkSections.map((item) => (
              <div className="Blog_inner_input_box" key={item.id}>
                <span>   <h2>Add  Url Link</h2>
                  <button
                    onClick={() => removeLinkBox(item.id)}

                  >
                    <Deletsvg />
                  </button></span>
                <input type="text" placeholder="Description" />
                <input type="text" placeholder=" Url link" />
                <input type="text" placeholder="Description" />

              </div>
            ))}

          </div>




          <div className="Blog_inner_input_box">
            <div className="Blog_add_form_heading">
              <h2>Add Practical Example</h2>
              <input type="text" placeholder="Heading" />
              <input type="text" placeholder="Description" />
              <textarea name="" id=""></textarea>
              <input type="text" placeholder="Description" />
            </div>
          </div>


          <div className="Blog_inner_input_box">
            <h2>Add  Real Cost</h2>

            <input type="text" placeholder="Heading" />
            <input type="text" placeholder=" Description" />
          </div>


          <div className="Blog_inner_input_box">
            <h2>Add  Further Reading</h2>


            <input type="text" placeholder="Heading" />
            <input type="text" placeholder=" Description" />
          </div>

          <div className="Blog_inner_sec_btn_box">

            <button>Save</button>
            <button>Add Blog</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blog_add_form;
