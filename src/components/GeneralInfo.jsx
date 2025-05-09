// src/components/GeneralInfo.jsx
import { useState } from 'react';

function GeneralInfo({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Full Name"
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder="Phone Number"
      />
    </div>
  );
}

export default GeneralInfo;