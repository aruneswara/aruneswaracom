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
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsOpen(false);
  };

  return (
    <>
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
