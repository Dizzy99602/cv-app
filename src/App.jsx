// src/components/App.jsx
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';
import './App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="app">
      {isEditing ? (
        <div className="edit-form">
          <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
          <Education data={education} setData={setEducation} />
          <Experience data={experience} setData={setExperience} />
          <button onClick={() => setIsEditing(false)}>Submit CV</button>
        </div>
      ) : (
        <div className="preview-container">
          <CVPreview 
            generalInfo={generalInfo} 
            education={education} 
            experience={experience} 
          />
          <button onClick={() => setIsEditing(true)}>Edit CV</button>
        </div>
      )}
    </div>
  );
}

export default App;