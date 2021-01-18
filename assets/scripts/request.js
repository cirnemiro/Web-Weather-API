export const getCityFromApi = (city)=>{
    console.log(city);
    var settings = {
        "url": `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6820db6e831308eb1bb1eeecb5ce0a3`,
        "method": "GET",
        "timeout": 0,
      };
      $.ajax(settings).done(function (response) {
        getDataFromCity(response.coord.lat,response.coord.lon)
      });

    const getDataFromCity = (lat,lon)=>{
        console.log(lat,lon);
        var daylyWeather = {
            "url": `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=f6820db6e831308eb1bb1eeecb5ce0a3`,
            "method": "GET",
            "timeout": 0,
          };
          
          $.ajax(daylyWeather).done(function (response) {
            console.log(response);
          });
    }
}





