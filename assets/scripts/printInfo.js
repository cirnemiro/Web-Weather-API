import { data } from './request.js'

export const printCurrentDay = (day=0)=>{
    console.log(data);

}

export const printNextdays = ()=>{
    data.daily.forEach((day,index) => {

    });
}

$('.2ndContainer').click(()=>{
    printCurrentDay(day)
})





