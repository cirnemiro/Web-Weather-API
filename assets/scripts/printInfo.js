
import { data,cityNameGlobal } from './request.js'


const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


let day = 0

const changeDay = (e)=>{
    console.log(e.target.parentNode.id);
    day = e.target.parentNode.id
    printCurrentDay()
}

export const printCurrentDay = (cityName)=>{
    console.log(data);
    console.log(data.daily[day].weather[0].main);

    // document.querySelector('body').style.backgroundImage= `url('https://media4.giphy.com/media/76miNUQaZGPxFqLlBB/giphy.gif?cid=ecf05e476vuhxhax1gyohec7hpxnl9zj9yxzr30lwgruisv7&rid=giphy.gif')`

    if (cityName) {
        $(".currentDay__title").html(cityName.slice(7,cityName.length));
    }else{
        $(".currentDay__title").html(cityNameGlobal.slice(7,cityNameGlobal.length))
    }
    
    $(".currentDay__hour").html(new Date(data.current.dt * 1000));
    let d = (data.current.dt * 1000) + data.timezone_offset;
    
   
    if (day === 0) {
        $(".temperature").html(Math.round(data.current.temp - 273.15) + "º")
    }else{
        $(".temperature").html(Math.round(data.daily[day].temp.day - 273.15) + "º")
    }
    $(".weather").html(data.daily[day].weather[0].description)
    
    printNextdays()
    
    $(".moreInfo").click(function(){
        console.log("hola");
        $("#feelsLike").html("feels like: " + Math.round(data.current.feels_like - 273.15) + "º");
        $("#visibility").html("visibility: " + data.current.visibility / 1000 + " km")
        $("#windSpeed").html("windSpeed: " + data.current.wind_speed);
        $("humidity").html("humidity: " + data.current.humidity + " %");
        $("#pressure").html("pressure: " + data.current.pressure + " hPa");
        $("#uv").html("UV Index: " + data.current.uvi) ;
    })


}
export const printNextdays = ()=>{
    let d = new Date()
    const currentDay = d.getDay() 
    const $container = document.querySelector('.nextDays')
    $container.innerHTML = ''
    let weekDay = d.getDay() -1
    let numberDay = d.getDate()

    data.daily.forEach((day,index) => { 
        if (weekDay===6) {
            weekDay=0
        }else{
            weekDay++
        }
        const div = document.createElement('div')
        div.innerHTML = `
            <div id='${index}' class="nextDays__element">
                <p class="nextDays_element__title">${daysOfTheWeek[weekDay]}</p>
                <p class="nextDays_element__number">${numberDay}</p>
                <div class="nextDays_element__data">
                    <div class="nextDayselement_data__photo">
                        <img src="https://img.icons8.com/color/452/sun-star.png" alt="">
                    </div>
                    <div class="nextDays_element_data__content">
                        <p class="nextDays_element_data_content__temp">${Math.round(day.temp.min-273.15)}º/${Math.round(day.temp.max-273.15)}º</p>
                        <p class="nextDays_element_data_content__humedad">${day.humidity}%</p>
                    </div>
                </div>
            </div>
        `
        $container.appendChild(div)
        div.addEventListener('click',changeDay)
        numberDay++
        
    });
}






