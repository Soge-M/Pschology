const buttTime1 = document.querySelector('.butt-time_morning');
const buttTime2 = document.querySelector('.butt-time_day');
const buttTime3 = document.querySelector('.butt-time_evening');
if (bodyt.offsetWidth < 560){
    buttTime1.innerHTML ='10-11';
    buttTime2.innerHTML ='13-14';
    buttTime3.innerHTML ='18-19';
} else {
    buttTime1.innerHTML ='Утро: 10 - 11';
    buttTime2.innerHTML ='День: 13 - 14';
    buttTime3.innerHTML ='Вечер: 18 - 19';
}