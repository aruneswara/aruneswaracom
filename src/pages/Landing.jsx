import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Hero_sec from "../components/Hero_sec";
import Work_on_sec from "../components/Work_on_sec";
import Experience_sec from "../components/Experience_sec";
import Get_in_touch_sec from "../components/Get_in_touch_sec";
import Sidebar from "../components/Sidebar";

const Landing = () => {
  const [activeSection, setActiveSection] = useState(0); // track active section

  return (
    <div className="Main_page">

      
        <Sidebar activeSection={activeSection} /> {/* pass active section */}
      

      <div className="Page_layout">
        <ReactFullpage
          scrollingSpeed={900}
          navigation={false}
          afterLoad={(origin, destination) => {
            setActiveSection(destination.index); // update active section
          }}
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Hero_sec />
              </div>

              <div className="section">
                <Work_on_sec />
              </div>

              <div className="section">
                <Experience_sec />
              </div>

              <div className="section">
                <Get_in_touch_sec />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    </div>
  );
};

export default Landing;
