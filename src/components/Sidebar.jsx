import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Home", id: "home" },
    { name: "What I Work On", id: "work" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (id) => {
    // Desktop (1024px se upar) → scroll allowed
    if (window.innerWidth > 1024) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Mobile / Tablet → sirf sidebar close
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button (1024px ↓) */}
      <div className="sidebar-toggle">
        <input id="toggleChecker" type="checkbox" checked={isOpen} readOnly />
        
        <label
          id="togglerLable"
          htmlFor="toggleChecker"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="checkboxtoggler">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </label>
      </div>

      {/* Sidebar */}
      <div className={`Sidebar_box ${isOpen ? "open" : ""}`}>
        <div className="Sidebar_list">
          <ul>
            {menu.map((item, index) => (
              <li
                key={index}
                className={activeSection === index ? "active" : ""}
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>

          <Link to="/blogs" onClick={() => setIsOpen(false)}>
            <button>Blog →</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
