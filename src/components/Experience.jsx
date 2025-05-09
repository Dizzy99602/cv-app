// src/components/Experience.jsx
import { useState } from 'react';

function Experience({ data, setData }) {
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(prev => [...prev, experience]);
    setExperience({
      company: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          value={experience.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
        <input
          type="text"
          name="position"
          value={experience.position}
          onChange={handleChange}
          placeholder="Position Title"
          required
        />
        <textarea
          name="responsibilities"
          value={experience.responsibilities}
          onChange={handleChange}
          placeholder="Job Responsibilities"
          required
        />
        <input
          type="date"
          name="startDate"
          value={experience.startDate}
          onChange={handleChange}
          placeholder="Start Date"
          required
        />
        <input
          type="date"
          name="endDate"
          value={experience.endDate}
          onChange={handleChange}
          placeholder="End Date"
          required
        />
        <button type="submit">Add Experience</button>
      </form>
      
      <div className="experience-list">
        {data.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.company}</h3>
            <p>{exp.position}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.responsibilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;