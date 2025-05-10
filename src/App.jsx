// src/components/App.jsx
import { useState } from 'react';
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