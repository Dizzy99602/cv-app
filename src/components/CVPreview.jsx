// src/components/CVPreview.jsx
import '../styles/CVPreview.css';

function CVPreview({ generalInfo, education, experience }) {
  return (
    <div className="cv-preview">
      <header className="cv-header">
        <h1>{generalInfo.name || "Your Name"}</h1>
        <div className="contact-info">
          {generalInfo.email && <span>{generalInfo.email}</span>}
          {generalInfo.phone && <span>{generalInfo.phone}</span>}
        </div>
      </header>
      
      {education.length > 0 && (
        <section className="cv-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <h3>{edu.school || "School Name"}</h3>
                <span className="date-range">
                  {edu.startDate || "Start"} - {edu.endDate || "End"}
                </span>
              </div>
              <p>{edu.degree || "Degree/Field of Study"}</p>
            </div>
          ))}
        </section>
      )}
      
      {experience.length > 0 && (
        <section className="cv-section">
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="cv-item">
              <div className="cv-item-header">
                <h3>{exp.company || "Company Name"}</h3>
                <span className="date-range">
                  {exp.startDate || "Start"} - {exp.endDate || "End"}
                </span>
              </div>
              <h4>{exp.position || "Position Title"}</h4>
              <p>{exp.responsibilities || "Job responsibilities"}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default CVPreview;