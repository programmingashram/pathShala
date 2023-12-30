import React from 'react';
import { Modal } from 'antd';
import { useState } from 'react';
import {  Steps } from 'antd';
import { Button } from 'antd';

const CourseDetails = ({ course, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (current) => {
    setCurrentStep(current);
  };
  return (
    <Modal
      title={course ? course.title : 'Course Details'}
      visible={!!course}
      onCancel={onClose}
      footer={null}
      width={1000}
      style={{
        top: 20,
      }}
    >
      {course && (
        <div>
          <p>{course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
        </div>
      )}

    <h6 className='my-3'>What will you learn</h6>

    {course && course.steps && course.steps.length > 0 && (
        <Steps
        current={currentStep}
        onChange={handleStepChange}
        direction="vertical"
        items={course.steps.map((step, index) => ({
          title: step.title || `Step ${index + 1}`,
          description: step.description || '', // Assuming the step object has a 'description' property
        }))}
      />
      )}

      <div className='mt-2'>
        <Button type="primary" size='large'>Chat with mentor</Button>
      </div>
    </Modal>
  );
};

export default CourseDetails;
