let year = document.querySelector('#year');
let month = document.querySelector('#month');
let day = document.querySelector('#day');
let btn = document.querySelector('#btn');
let type;
let stars;
const date = new Date();
let yearDate = date.getFullYear();
let monthDate = date.getMonth();
let dayDate = date.getDate();
let years;
let months;
let days;
let nextMonth;
let nextDay;
function calcOld() {

    if (monthDate < +month.value) {
        yearResult = (yearDate - 1) - (+year.value);
        monthResult = (monthDate + 12) - (+month.value);
        nextMonth = (+month.value) - (monthDate + 1) ;
    }
    else {
        yearResult = yearDate - (+year.value);
        monthResult = monthDate - (+month.value);
        nextMonth = (+month.value + 12) - (monthDate + 1)
    }

    if (dayDate < +day.value) {
        dayResult = (dayDate + 30) - (+day.value);
        nextDay = (+day.value) - (dayDate ) ;

    }
    else {
        dayResult = dayDate - (+day.value);
        nextDay = (+day.value + 12) - (dayDate)
    }
    console.log(+month.value , nextMonth , monthDate);
    years = yearResult;
    months = monthResult;
    days = dayResult;
    if (+day.value < 32 && days > 0 && +day.value > 0 && months > 0 && +month.value < 13 && +month.value > 0 && years > 4) {
        display();
        clear();
    }
}
btn.addEventListener("click", function () {
    if (validate() == true) {
        calcOld();
    } else {
        console.log('dhsj');
    }
});
function display() {
    if (years < 20) {
        type = 'young';
    } else {
        type = 'adult'
    }
    stars = '';
    for (let i = 0; i < years; i++) {
        stars += '*';
    }
    let demo = document.querySelector('#demo');
    let cartona = '';
    cartona += `                
    <h3>Your age is :  ${years} years , ${months} months and ${days} days</h3>
    <h3>Your are <span id="type"> ${type}</span></h3>
    <h3>${stars}</h3>
    <hr class="text-white-50">
    <h3>Your next birthday will be after : ${nextMonth} months and ${nextDay} days </h3>
    `;
    demo.innerHTML = cartona;
}
function clear() {
    year.value = '';
    month.value = '';
    day.value = '';
}
function validate() {
    let regexY = /^[0-9]{4}$/;
    let regexM = /^([0-9]{2}|[0-9]{1})$/;
    let regexD = /^([0-9]{2}|[0-9]{1})$/;
    if (regexY.test(+year.value) && regexM.test(+month.value) && regexD.test(+day.value)) {
        return true;
    }
    else {
        return false;
    }
}