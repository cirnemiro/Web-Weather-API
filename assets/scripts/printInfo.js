
import { data,cityNameGlobal } from './request.js'
import { themes } from './weatherObj.js'


const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


export var day = 0




const changeDay = (e)=>{
    day = e.target.parentNode.id
    printCurrentDay(cityNameGlobal)
    console.log(cityNameGlobal);
}

export const printCurrentDay = (cityName)=>{
    console.log(cityName);
   console.log(day);
    $(".currentDay_flex__element2 img").attr("src", `https://openweathermap.org/img/wn/${data.daily[day].weather[0].icon}@4x.png`)

    
    


    if (cityName) {
        $(".currentDay__title").html(cityName.slice(7,cityName.length));
    }else{
        $(".currentDay__title").html(document.querySelector('.header_content_search__input').value)
    }
    
    $(".currentDay__hour").html(new Date(data.current.dt * 1000));
    let d = (data.current.dt * 1000) + data.timezone_offset;
    
   
    if (day === 0) {
        $(".temperature").html(Math.round(data.current.temp - 273.15) + "º")
        $(".max-min").html(`Max: ${Math.round(data.daily[day].temp.max - 273.15)}º / Min: ${Math.round(data.daily[day].temp.min - 273.15)}º`)
    }else{
      
        $(".max-min").html(`Max: ${Math.round(data.daily[day].temp.max - 273.15)}º / Min: ${Math.round(data.daily[day].temp.min - 273.15)}º`)
    }
    $(".weather").html(data.daily[day].weather[0].description)
    
    
    
    $(".moreInfo").click(function(){
        console.log("hola");
        $("#feelsLike").html("feels like: " + Math.round(data.current.feels_like - 273.15) + "º");
        $("#visibility").html("visibility: " + data.current.visibility / 1000 + " km")
        $("#windSpeed").html("windSpeed: " + data.current.wind_speed);
        $("humidity").html("humidity: " + data.current.humidity + " %");
        $("#pressure").html("pressure: " + data.current.pressure + " hPa");
        $("#uv").html("UV Index: " + data.current.uvi) ;
    })


    

    printNextdays()
}
export const printNextdays = ()=>{
    let d = new Date()
    const currentDay = d.getDay() 
    const $container = document.querySelector('.nextDays')
    $container.innerHTML = ''
    let weekDay = d.getDay() -1
    let numberDay = d.getDate()
    let weather = data.daily[day].weather[0].main

    data.daily.forEach((e,index) => { 
        const div = document.createElement('div')
        if (weekDay>=6) {
            weekDay=0
        }else{
            weekDay++
        }
        if (index == day) {
            div.innerHTML = `
                <div id='${index}' class="nextDays__element border">
                    <p class="nextDays_element__title">${daysOfTheWeek[weekDay]}</p>
                    <p class="nextDays_element__number">${numberDay}</p>
                    <div class="nextDays_element__data">
                        <div class="nextDayselement_data__photo">
                            <img src="https://openweathermap.org/img/wn/${data.daily[index].weather[0].icon}@4x.png" alt="">
                        </div>
                        <div class="nextDays_element_data__content">
                            <p class="nextDays_element_data_content__temp">${Math.round(e.temp.min-273.15)}º/${Math.round(e.temp.max-273.15)}º</p>
                            <p class="nextDays_element_data_content__humedad">${day.humidity}%</p>
                        </div>
                    </div>
                </div>
            `
        }else{
            div.innerHTML = `
                <div id='${index}' class="nextDays__element ">
                    <p class="nextDays_element__title">${daysOfTheWeek[weekDay]}</p>
                    <p class="nextDays_element__number">${numberDay}</p>
                    <div class="nextDays_element__data">
                        <div class="nextDayselement_data__photo">
                            <img src="https://openweathermap.org/img/wn/${data.daily[index].weather[0].icon}@4x.png" alt="">
                        </div>
                        <div class="nextDays_element_data__content">
                            <p class="nextDays_element_data_content__temp">${Math.round(e.temp.min-273.15)}º/${Math.round(e.temp.max-273.15)}º</p>
                            <p class="nextDays_element_data_content__humedad">${day.humidity}%</p>
                        </div>
                    </div>
                </div>
            `
        }
        $container.appendChild(div)
        div.addEventListener('click',changeDay)
        numberDay++
        
        
    });
    switch (weather) {
        case 'Clouds':
            document.querySelector('body').style.backgroundImage=  `url('${themes.clouds.gif}')`
            document.querySelector('.currentDay').style.backgroundColor = ' rgba(100, 148, 237, 0.708)'
            document.querySelectorAll('.nextDays__element').forEach(e => {
                e.style.backgroundColor = '  rgba(100, 148, 237, 0.708)'
            });
            document.querySelector('.header').style.backgroundColor = '  rgba(100, 148, 237, 0.708)'
            break;
        case 'Snow':
            document.querySelector('body').style.backgroundImage=  `url('${themes.snow.gif}')`
            document.querySelector('.currentDay').style.backgroundColor = ' rgba(213, 224, 243, 0.608)'
            document.querySelectorAll('.nextDays__element').forEach(e => {
                e.style.backgroundColor = '   rgba(213, 224, 243, 0.608)'
            });
            console.log('snow');
            document.querySelector('.header').style.backgroundColor = '  rgba(213, 224, 243, 0.608)'
            break;
        case 'Drizzle':
            document.querySelector('body').style.backgroundImage=  `url('${themes.drizzle.gif}')`
            document.querySelector('.currentDay').style.backgroundColor = '  rgba(53, 53, 54, 0.708)'
            document.querySelectorAll('.nextDays__element').forEach(e => {
                e.style.backgroundColor = ' rgba(53, 53, 54, 0.708)'
            });
            document.querySelector('.header').style.backgroundColor = '  rgba(53, 53, 54, 0.708)'
            break;
        case 'Thunderstorm':
            document.querySelector('body').style.backgroundImage=  `url('${themes.thunderstorm.gif}')`
            document.querySelector('.currentDay').style.backgroundColor = '  rgba(53, 53, 54, 0.708)'
            document.querySelectorAll('.nextDays__element').forEach(e => {
                e.style.backgroundColor = ' rgba(53, 53, 54, 0.708)'
            });
            document.querySelector('.header').style.backgroundColor = '  rgba(53, 53, 54, 0.708)'
            break;   
        case 'Clear':
            document.querySelector('body').style.backgroundImage=  `url('${themes.clear.gif}')`
            document.querySelector('.currentDay').style.backgroundColor = '  rgba(156, 229, 255, 0.708)'
            document.querySelectorAll('.nextDays__element').forEach(e => {
                e.style.backgroundColor = ' rgba(156, 229, 255, 0.708)'
            });
            document.querySelector('.header').style.backgroundColor = '  rgba(156, 229, 255, 0.708)'
            break; 
        case 'Rain':
            document.querySelector('body').style.backgroundImage=  `url('${themes.rain.gif}')`
            document.querySelector('.currentDay').style.backgroundColor = '  rgba(53, 53, 54, 0.708)'
            document.querySelector('.header').style.backgroundColor = '  rgba(53, 53, 54, 0.708)'
            document.querySelectorAll('.nextDays__element').forEach(e => {
                e.style.backgroundColor = ' rgba(53, 53, 54, 0.708)'
            });
            break;
        default:
            break;
    }
}






