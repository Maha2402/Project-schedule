const axios = require('axios');
const create = 'create';
const apiUrl = 'http://localhost:8080/create';


const dataToStore = {
    dateinput:'2002',
    teamselection:'team a,team b'
  };

axios.post(apiUrl, dataToStore, {
  headers: {
    'Authorization': `Bearer ${create}`
  }
})
.then(function (response) {
  // Handle the success response, if needed
})
.catch(function (error) {
  // Handle errors, if any
});


axios.get(apiUrl)
  .then(function (response) {
    // Handle the successful response here
    console.log(response.data);
  })
  .catch(function (error) {
    // Handle errors here
    console.error(error);
  });
  
  