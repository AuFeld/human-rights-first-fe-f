import axios from 'axios';

axios
  .get('https://labs27-d-hrf-api.herokuapp.com/incidents/dummy')
  .then(res => {
    console.log('data', res.data);
  })
  .catch(err => {
    console.log(err.data);
  });
