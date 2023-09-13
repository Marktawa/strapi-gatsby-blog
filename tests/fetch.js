// Define the API URL you want to fetch data from
const apiUrl = 'http://127.0.0.1:1337/api/test'; // Replace with your API URL

// Make an HTTP GET request to the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the API data here
    console.log('Data from API:', data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error fetching data:', error);
  });