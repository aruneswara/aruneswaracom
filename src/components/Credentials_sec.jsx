import profile from "../data/profile";

const Credentials_sec = () => {
  return (
    <section id="education" className="Credentials_sec panel">
      <div className="container">
        <div className="resume_section_header">
          <p>Education and Activities</p>
          <h2>Education</h2>
        </div>

        <div className="credentials_grid">
          {profile.education.map((item) => (
            <article className="credential_card" key={item.school}>
              <p>{item.period}</p>
              <h3>{item.school}</h3>
              <h4>{item.degree}{item.meta ? ` · ${item.meta}` : ""}</h4>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="resume_section_header resume_section_header--secondary">
          <p>Recognition</p>
          <h2>Awards</h2>
        </div>

        <div className="award_grid">
          {profile.awards.map((item) => (
            <article className="award_item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Credentials_sec;
