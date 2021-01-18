import { data } from './request.js'

export const printCurrentDay = (day=0)=>{
    console.log(data);
    printNextdays()
    

}
export const printNextdays = ()=>{
    const $container = document.querySelector('.nextDays')
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




