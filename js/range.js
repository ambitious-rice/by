window.addEventListener('load',function() {
    var range=document.querySelector('.range');
    var next=range.querySelectorAll('.next');
    var last=range.querySelectorAll('.last');
    for(var i=0;i<next.length;i++) {
        next[i].addEventListener('click',function() {
            var father=this.parentNode;
            console.log(father);
            father.querySelector('.last').style.display="block"
            var ul=father.querySelector('ul');
            var width=ul.querySelector('li').offsetWidth;
            animate(ul,-width);
            this.style.display="none";
        })
    }
    for(var i=0;i<last.length;i++) {
        last[i].style.display="none";
        last[i].addEventListener('click',function() {
            var father=this.parentNode;
            father.querySelector('.next').style.display="block"
            var ul=father.querySelector('ul');
            animate(ul,0);
            this.style.display="none";
        })
    }

})