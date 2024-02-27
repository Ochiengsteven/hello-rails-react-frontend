
import fetch from 'node-fetch';

const baseUrl = 'http://localhost:3000/greetings/random';

const fetchData = async () => {
  try {
    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('API Response:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

// Call the function to fetch data
fetchData();
