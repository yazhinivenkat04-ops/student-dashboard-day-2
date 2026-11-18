
import { useState } from "react";

function StudentForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    regNo: "",
    department: "",
    year: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    email: "",
    photo: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Photo must be below 2 MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setForm(prev => ({ ...prev, photo: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some(v => !String(v).trim())) {
      alert("Please fill all details and upload photo");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      alert("Enter a valid 10 digit phone number");
      return;
    }

    onAdd(form);

    setForm({
      name: "",
      regNo: "",
      department: "",
      year: "",
      dob: "",
      gender: "",
      bloodGroup: "",
      phone: "",
      email: "",
      photo: ""
    });

    e.target.reset();
  };

  return (
    <div className="form-box">
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Student Name"
          value={form.name} onChange={handleChange} />

        <input name="regNo" placeholder="Register Number"
          value={form.regNo} onChange={handleChange} />

        <input name="department" placeholder="Department"
          value={form.department} onChange={handleChange} />

        <input name="year" placeholder="Academic Year"
          value={form.year} onChange={handleChange} />

        <label>Date of Birth</label>
        <input type="date" name="dob"
          value={form.dob} onChange={handleChange} />

        <label>Gender</label>
        <select name="gender" value={form.gender}
          onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <label>Blood Group</label>
        <select name="bloodGroup" value={form.bloodGroup}
          onChange={handleChange}>
          <option value="">Select Blood Group</option>
          {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(group => (
            <option key={group}>{group}</option>
          ))}
        </select>

        <input name="phone" placeholder="Phone Number"
          type="tel" maxLength="10"
          value={form.phone} onChange={handleChange} />

        <input name="email" type="email"
          placeholder="Email Address"
          value={form.email} onChange={handleChange} />

        <label>Upload Student Photo</label>
        <input type="file" accept="image/*" onChange={handlePhoto} />

        {form.photo && (
          <img src={form.photo} alt="Preview" className="preview" />
        )}

        <button type="submit">Generate Student ID Card</button>
      </form>
    </div>
  );
}

export default StudentForm;
