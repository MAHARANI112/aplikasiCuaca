const request = require('postman-request');
const url = 'http://api.weatherstack.com/current?access_key=bd81196cbb702391e351e4f3316b9466&query=-0.8964222128684637,%20100.34965013984737'

request({ url: url }, (error, response) => {
  //console.log(response);
   const data = JSON.parse(response.body);
   //console.log(data);
  // console.log(data.current);
  console.log(data.current.temperature);
});
