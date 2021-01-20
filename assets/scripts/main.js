// Imports
import { getCityFromApi , getDataFromCity } from './request.js'
    
// main script
$(document).ready(function(){
        $('.header_content_search__btn').click(()=>{
        getCityFromApi(document.querySelector('.header_content_search__input').value)
    })

})    

navigator.geolocation.getCurrentPosition((position)=>{
    getDataFromCity(position.coords.latitude,position.coords.longitude)
})
        
            
                   
