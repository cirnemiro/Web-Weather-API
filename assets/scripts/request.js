import { printCurrentDay} from './printInfo.js'

export let data = {}
export let cityNameGlobal = ''

export const getCityFromApi = (city)=>{

    var settings = {
        "url": `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6820db6e831308eb1bb1eeecb5ce0a3`,
        "method": "GET",
        "timeout": 0,
      };
      $.ajax(settings).done(function (response) {
        getDataFromCity(response.coord.lat,response.coord.lon)
      });

      
    }
export const getDataFromCity = (lat,lon)=>{

    var daylyWeather = {
        "url": `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true&key=AIzaSyBkk0w1pkTJ_QK7SeDD2SAQtBGgHvmvq5k`,
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(daylyWeather).done(function (location) {
        var daylyWeather = {
            "url": `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=f6820db6e831308eb1bb1eeecb5ce0a3`,
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(daylyWeather).done(function (response) {
            data = response
            printCurrentDay(location.plus_code.compound_code) 
            cityNameGlobal =  location.plus_code.compound_code.split(',')[0]
        });
        
    });
}






