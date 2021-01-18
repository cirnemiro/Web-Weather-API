// Imports
import { getCityFromApi } from './request.js'
    
// main script
$(document).ready(function(){
        $('.header_content_search__btn').click(()=>{
        getCityFromApi(document.querySelector('.header_content_search__input').value)
    })

})    
        
            
                   
