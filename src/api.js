// api.js

import axios from 'axios';

const API_URL = 'https://opentdb.com/api.php';

export const fetchAdditionalQuestions = async (topic) => {
  try {
    // Configure API request parameters
    const params = {
      amount: 5, // Number of questions to fetch
      category: getCategoryId(topic), // Map survey topic to category ID
      type: 'multiple', // Specify question type (multiple choice)
    };

    // Make API request
    const response = await axios.get(API_URL, { params });

    // Extract questions from the response
    const questions = response.data.results.map((result) => result.question);

    return questions;
  } catch (error) {
    console.error('Error fetching additional questions:', error);
    return [];
  }
};

// Helper function to map survey topic to category ID
const getCategoryId = (topic) => {
  switch (topic) {
    case 'Technology':
      return 18; // Category ID for Computers
    case 'Health':
      return 17; // Category ID for Science & Nature
    case 'Education':
      return 9; // Category ID for General Knowledge
    default:
      return 9; // Default to General Knowledge
  }
};
