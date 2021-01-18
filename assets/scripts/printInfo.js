
import { data } from './request.js'

export const printCurrentDay = (day=0)=>{
    $(".currentDay__title").html(document.querySelector('.header_content_search__input').value);
    
    console.log(data.daily[0].weather[0].description);
    $(".currentDay__hour").html(data.daily[0].dt);
    $(".temperature").html(Math.round(data.daily[0].temp.day - 273.15) + "º")
    $(".weather").html(data.daily[0].weather[0].description)
}

export const printNextdays = ()=>{
    data.daily.forEach((day,index) => {

    });
}

$('.2ndContainer').click(()=>{
    printCurrentDay(day)
})





