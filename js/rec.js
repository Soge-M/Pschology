const buttons = document.querySelectorAll('.butt-time');
buttons.forEach((el,i) => {
    buttons[i].addEventListener('click', function(){
        buttons.forEach((el) =>{
            if(el.classList.contains('butt-time_active'))
                el.classList.remove(('butt-time_active'));
        });
        buttons[i].classList.add('butt-time_active');
    });
});
