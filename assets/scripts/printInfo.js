
import { data,cityNameGlobal } from './request.js'

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


let day = 0

const changeDay = (e)=>{
    console.log(e.target.parentNode.id);
    day = e.target.parentNode.id
    printCurrentDay()
}

export const printCurrentDay = (cityName)=>{
    console.log(cityNameGlobal.slice(7,cityNameGlobal.length));

    if (cityName) {
        if (document.querySelector('.header_content_search__input').value) {
            $(".currentDay__title").html(document.querySelector('.header_content_search__input').value);
        }else{
            $(".currentDay__title").html(cityName.slice(7,cityName.length));
        }
    }else{
        $(".currentDay__title").html(cityNameGlobal.slice(7,cityNameGlobal.length))
    }
    
    $(".currentDay__hour").html(new Date(data.daily[day].dt * 1000));
    
   
    if (day === 0) {
        $(".temperature").html(Math.round(data.current.temp - 273.15) + "º")
    }else{
        $(".temperature").html(Math.round(data.daily[day].temp.day - 273.15) + "º")
    }
    $(".weather").html(data.daily[day].weather[0].description)
    
    printNextdays()
    


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




