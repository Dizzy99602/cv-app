// src/components/App.jsx
import { useState, useEffect } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';
import './App.css'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  // In App.jsx
useEffect(() => {
  const savedData = localStorage.getItem('cvData');
  if (savedData) {
    const { generalInfo, education, experience } = JSON.parse(savedData);
    setGeneralInfo(generalInfo);
    setEducation(education);
    setExperience(experience);
  }
}, []);

useEffect(() => {
  const cvData = { generalInfo, education, experience };
  localStorage.setItem('cvData', JSON.stringify(cvData));
}, [generalInfo, education, experience]);

  return (
    <div className="app-container">
      <div className="editor-panel">
        <h1>CV Editor</h1>
        <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
        <Education data={education} setData={setEducation} />
        <Experience data={experience} setData={setExperience} />
      </div>
      
      <div className="preview-panel">
        <h1>Live Preview</h1>
        <CVPreview 
          generalInfo={generalInfo} 
          education={education} 
          experience={experience} 
        />
      </div>
    </div>
  );
}

export default App;