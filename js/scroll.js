const bodyl = document.querySelector('body');
const scrollBox = document.querySelector('.ImgGallety');

scrollBox.addEventListener( 'scroll', function(){
    let scrollDistance = scrollBox.scrollLeft;
    
    console.log(scrollDistance);

    document.querySelectorAll('.ImgGallety__inner').forEach((el,i) =>  {
        if ((el.offsetLeft - (bodyl.offsetWidth - 880)-18) <= scrollDistance){
            console.log(el.offsetLeft);
            document.querySelectorAll('.tag-list__item').forEach((el) => {
                if (el.classList.contains('tag-list__item_active')) {
                    el.classList.remove('tag-list__item_active');
                }
            });

            document.querySelectorAll('.tag-list__item')[i].classList.add('tag-list__item_active');
        }
    });
});


const tagListItems = document.querySelectorAll('.tag-list__item');

tagListItems.forEach((el,i) => {
    tagListItems[i].addEventListener('click',function(){
        scrollBox.scroll((880+18)*(i),0);
    });
    
});
