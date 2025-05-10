// src/components/GeneralInfo.jsx
import '../styles/GeneralInfo.css';

function GeneralInfo({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
        />
      </div>
    </div>
  );
}

export default GeneralInfo;