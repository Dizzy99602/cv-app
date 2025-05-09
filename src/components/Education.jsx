// src/components/Education.jsx
import { useState } from 'react';

function Education({ data, setData }) {
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(prev => [...prev, education]);
    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="school"
          value={education.school}
          onChange={handleChange}
          placeholder="School Name"
          required
        />
        <input
          type="text"
          name="degree"
          value={education.degree}
          onChange={handleChange}
          placeholder="Degree/Field of Study"
          required
        />
        <input
          type="date"
          name="startDate"
          value={education.startDate}
          onChange={handleChange}
          placeholder="Start Date"
          required
        />
        <input
          type="date"
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
          placeholder="End Date"
          required
        />
        <button type="submit">Add Education</button>
      </form>
      
      <div className="education-list">
        {data.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;