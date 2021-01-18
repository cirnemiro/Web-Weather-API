
import { data } from './request.js'

export const printCurrentDay = (day=0)=>{

    $(".currentDay__title").html(document.querySelector('.header_content_search__input').value);
    
    console.log(data.daily[0].weather[0].description);
    $(".currentDay__hour").html(data.daily[0].dt);
    $(".temperature").html(Math.round(data.daily[0].temp.day - 273.15) + "º")
    $(".weather").html(data.daily[0].weather[0].description)

    
    printNextdays()
    


}
export const printNextdays = ()=>{
    const $container = document.querySelector('.nextDays')
    $container.innerHTML = ''
    data.daily.forEach((day,index) => { 
        const div = document.createElement('div')
        div.innerHTML = `
            <div id='${index}' class="nextDays__element">
                <p class="nextDays_element__title">Monday</p>
                <p class="nextDays_element__number">7</p>
                <div class="nextDays_element__data">
                    <div class="nextDayselement_data__photo">
                        <img src="https://img.icons8.com/color/452/sun-star.png" alt="">
                    </div>
                    <div class="nextDays_element_data__content">
                        <p class="nextDays_element_data_content__temp">${day.temp.min}/${day.temp.max}º</p>
                        <p class="nextDays_element_data_content__humedad">${day.humidity}%</p>
                        <p class="nextDays_element_data_content__rain">10%</p>
                    </div>
                </div>
            </div>
        `
        $container.appendChild(div)
        
    });
}

$('.2ndContainer').click(()=>{
    printCurrentDay(day)
})




