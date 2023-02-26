const app = {

  init: () => {
    document
      .querySelector('#get-weather')
      .addEventListener('click', app.getWeather);
  },


  getWeather: () => {

    let latitude = document.querySelector('#latitude').value;
    let longitude = document.querySelector('#longitude').value;
    let key = '762fa4a9b403c8a3c74281817629f55d';
    let unit = 'metric';
    let baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    let url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${key}&units=${unit}`;


    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => app.displayData(json))
      .catch((error) => console.error(error));
  },


  displayData: (json) => {

    let $image = document.querySelector('.weather-icon');
    // destructuring to pull icon from the weather array
    const {icon} = json.weather[0];
   

    let $location = document.querySelector('#location');
    let $temp = document.querySelector('#temp');
    let $temp_min = document.querySelector('#temp-min');
    let $temp_max = document.querySelector('#temp-max');
    let $feels_like = document.querySelector('#feels-like');
    let $humidity = document.querySelector('#humidity');


    /* 
    while($display.firstChild) {
      $display.removeChild($display.firstChild);
    }
    */

    $location.append(" " + json.name);
    $temp.append(" " + json.main["temp"] + " " + "\xB0" + "C");
    $temp_min.append(" " + json.main["temp_min"] + " " + "\xB0" + "C");
    $temp_max.append(" " + json.main["temp_max"] + " " + "\xB0" + "C");
    $feels_like.append(" " + json.main["feels_like"] + " " + "\xB0" + "C");
    $humidity.append(" " + json.main["humidity"] + " " + "\u0025");

    $image.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" >`
    
  }


}

app.init();