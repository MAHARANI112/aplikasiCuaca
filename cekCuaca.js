const request = require('postman-request');
const apiKey = 'bd81196cbb702391e351e4f3316b9466'; // Ganti dengan API Access Key kamu
const latitude = '-0.8964222128684637'; // Ganti dengan latitude lokasi kamu
const longitude = '100.34965013984737'; // Ganti dengan longitude lokasi kamu

const urlCuaca = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${latitude},${longitude}&units=m`;

request({ url: urlCuaca, json: true }, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const temperature = response.body.current.temperature;
    const precip = response.body.current.precip;

    console.log(`Saat ini suhu diluar mencapai ${temperature} derajat celcius.`);
    console.log(`Kemungkinan terjadinya hujan adalah ${precip}%`);
  }
});
