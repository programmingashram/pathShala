
// ResumeForm.js
import React from 'react';

function ResumeForm({ updateResumeData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateResumeData({ [name]: value });
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleInputChange} />
      </label>
      {/* Additional fields for education, experience, etc. */}
    </form>
  );
}

export default ResumeForm;