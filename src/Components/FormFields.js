import React from 'react';

const FormFields = ({ formData, handleChange, errors }) => {
  return (
    <div>
      <div className="form-group" style={{marginBottom:'20px'}}>
        <label htmlFor="fullName" style={{marginBottom:'5px'}}>Full Name</label>
        <input
          type="text"
          className={`form-control ${errors.fullName && 'is-invalid'}`}
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
      </div>
      <div className="form-group"style={{marginBottom:'20px'}}>
        <label htmlFor="email" style={{marginBottom:'5px'}}>Email</label>
        <input
          type="email"
          className={`form-control ${errors.email && 'is-invalid'}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="form-group" style={{marginBottom:'20px'}}>
        <label htmlFor="surveyTopic" style={{marginBottom:'5px'}}>Survey Topic</label>
        <select
          className={`form-control ${errors.surveyTopic && 'is-invalid'}`}
          id="surveyTopic"
          name="surveyTopic"
          value={formData.surveyTopic}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        {errors.surveyTopic && <div className="invalid-feedback">{errors.surveyTopic}</div>}
      </div>
      {formData.surveyTopic === 'Technology' && (
        <div>
          <div className="form-group" style={{marginBottom:'20px'}}>
            <label htmlFor="techLanguage" style={{marginBottom:'5px'}}>Favorite Programming Language</label>
            <select
              className="form-control"
              id="techLanguage"
              name="techLanguage"
              value={formData.techLanguage}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
            </select>
          </div>
          <div className="form-group" style={{marginBottom:'20px'}}>
            <label htmlFor="techExperience" style={{marginBottom:'5px'}}>Years of Experience</label>
            <input
              type="number"
              className="form-control"
              id="techExperience"
              name="techExperience"
              value={formData.techExperience}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {formData.surveyTopic === 'Health' && (
        <div>
          <div className="form-group" style={{marginBottom:'20px'}}>
            <label htmlFor="healthFrequency" style={{marginBottom:'5px'}}>Exercise Frequency</label>
            <select
              className="form-control" style={{marginBottom:'20px'}}
              id="healthFrequency"
              name="healthFrequency"
              value={formData.healthFrequency}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
          </div>
          <div className="form-group" style={{marginBottom:'20px'}}>
            <label htmlFor="healthDiet" style={{marginBottom:'5px'}}>Diet Preference</label>
            <select
              className="form-control"
              id="healthDiet"
              name="healthDiet"
              value={formData.healthDiet}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
          </div>
        </div>
      )}
      {formData.surveyTopic === 'Education' && (
        <div>
          <div className="form-group" style={{marginBottom:'20px'}}>
            <label htmlFor="educationQualification" style={{marginBottom:'5px'}}>Highest Qualification</label>
            <select
              className="form-control"
              id="educationQualification"
              name="educationQualification"
              value={formData.educationQualification}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <div className="form-group" style={{marginBottom:'20px'}}>
            <label htmlFor="educationField" style={{marginBottom:'5px'}}>Field of Study</label>
            <input
              type="text"
              className="form-control"
              id="educationField"
              name="educationField"
              value={formData.educationField}
              onChange={handleChange}
            />
          </div>
        </div>
      )}
      {/* Feedback textarea */}
      <div className="form-group" style={{marginBottom:'20px'}}>
        <label htmlFor="feedback" style={{marginBottom:'5px'}}>Feedback</label>
        <textarea
          className={`form-control ${errors.feedback && 'is-invalid'}`}
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
        {errors.feedback && <div className="invalid-feedback">{errors.feedback}</div>}
      </div>
    </div>
  );
};

export default FormFields;
