window.addEventListener('load',function() {
    var ul=document.querySelector(".recommend .show ul");
    var next=document.querySelector('.recommend .next');
    var last=document.querySelector('.recommend .last');
    var li=ul.querySelector('li');
    var width=li.offsetWidth+19;
    last.style.display="none";
    next.addEventListener('click',function() {
        last.style.display="block";
        animate(ul,-width*5);
        next.style.display="none";
    })
    last.addEventListener('click',function() {
        next.style.display="block";
        animate(ul,0);
        last.style.display="none";
    })
})