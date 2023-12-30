// ResumePreview.js
import React from 'react';

function ResumePreview({ resumeData }) {
  return (
    <div>
      <h2>Resume Preview</h2>
      <p>Name: {resumeData.name}</p>
      <p>Email: {resumeData.email}</p>
    </div>
  );
}

export default ResumePreview;