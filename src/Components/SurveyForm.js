import React, { useState } from 'react';
import FormFields from './FormFields';
import { fetchAdditionalQuestions } from '../api';

const SurveyForm = () => {
    const initialFormData = {
    fullName: '',
    email: '',
    surveyTopic: '',
    techLanguage: '',
    techExperience: '',
    healthFrequency: '',
    healthDiet: '',
    educationQualification: '',
    educationField: '',
    feedback: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const validationErrors = {};
    if (!formData.fullName) {
      validationErrors.fullName = 'Full Name is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.surveyTopic) {
      validationErrors.surveyTopic = 'Survey Topic is required';
    }
    if (!formData.feedback || formData.feedback.length < 50) {
      validationErrors.feedback = 'Feedback is required and must be at least 50 characters';
    }
    setErrors(validationErrors);
    
    // If there are validation errors, stop submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    
    // Form submission handling
    // Fetch additional questions
    if (formData.surveyTopic) {
      const questions = await fetchAdditionalQuestions(formData.surveyTopic);
      setAdditionalQuestions(questions);
    }
    
    // Set submitted data
    setSubmittedData(formData);
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const clearForm = () => {
    setFormData(initialFormData);
    setAdditionalQuestions([]);
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div>
      <h1 className="mb-4">Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <FormFields
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
        <div className=''>
        <button type="submit" className="btn btn-primary" style={{marginRight:'50px'}}>Submit</button>
        <button type="button" className="btn btn-secondary" onClick={clearForm}>Clear Form</button>
        </div>
      </form>
      
      {/* Display submitted data and additional questions */}
      {submittedData && (
        <div className="mt-5">
          <h2>Summary</h2>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Survey Topic:</strong> {submittedData.surveyTopic}</p>
          {additionalQuestions.length > 0 && (
            <div>
              <h3>Additional Questions</h3>
              <ul>
                {additionalQuestions.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SurveyForm;
