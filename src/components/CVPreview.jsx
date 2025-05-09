// src/components/CVPreview.jsx

function CVPreview({ generalInfo, education, experience }) {
  return (
    <div className="cv-preview">
      <h1>CV Preview</h1>
      
      <section className="general-info-preview">
        <h2>{generalInfo.name}</h2>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </section>
      
      <section className="education-preview">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </section>
      
      <section className="experience-preview">
        <h2>Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.company}</h3>
            <p>{exp.position}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.responsibilities}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CVPreview;