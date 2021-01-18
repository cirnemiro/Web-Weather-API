// Imports
import { getCityFromApi } from './request.js'

// main script
$(document).ready(function(){
    $('.header__btn').click(()=>{
        getCityFromApi(document.querySelector('.header__input').value)
    })
})
    
        
        
        
