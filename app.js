const londonResponse = 'https://weatherapi.ali-ereneren12.repl.co/london';
const berlinResponse = 'https://weatherapi.ali-ereneren12.repl.co/berlin';
const parisResponse = 'https://weatherapi.ali-ereneren12.repl.co/paris';
const tempText = "Temperature:";
const windSpeedText = "WindSpeed:";
const windDirectionText = "WindDirection:";
const celcius = "°C";
const space = " ";
const WindSpeedMeasure = "Km/h";
async function fetchLondon() {
  fetch(londonResponse)
    .then(res => res.json())
    .then(data => {
      document.getElementById('temperature').innerHTML = tempText + space + data.temperature + space + celcius
      document.getElementById('windspeed').innerHTML = windSpeedText + space + data.windspeed + space + WindSpeedMeasure
      document.getElementById('winddirection').innerHTML = windDirectionText + space + data.winddirection
    })
    .catch(error => console.log(error));
}


async function fetchBerlin() {
  fetch(berlinResponse)
    .then(res => res.json())
    .then(data => {
      document.getElementById('temperature-berlin').innerHTML = tempText + space + data.temperature + space + celcius
      document.getElementById('windspeed-berlin').innerHTML = windSpeedText + space + data.windspeed + space + WindSpeedMeasure
      document.getElementById('winddirection-berlin').innerHTML = windDirectionText + space + data.winddirection
    })
    .catch(error => console.log(error));
}


async function fetchParis() {
  fetch(parisResponse)
    .then(res => res.json())
    .then(data => {
      document.getElementById('temperature-paris').innerHTML = tempText + space + data.temperature + space + celcius
      document.getElementById('windspeed-paris').innerHTML = windSpeedText + space + data.windspeed + space + WindSpeedMeasure
      document.getElementById('winddirection-paris').innerHTML = windDirectionText + space + data.winddirection
    })
    .catch(error => console.log(error));
}
fetchLondon();
fetchBerlin();
fetchParis();
