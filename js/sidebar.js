window.addEventListener('load',function() {
    var sidebar=document.querySelector('.sidebar');
    var backtop=sidebar.querySelector('.backtop');
    this.document.addEventListener('scroll',function() {
        if(window.pageYOffset<=100 ){
            backtop.style.display="none";
        }else {
            backtop.style.display="block";
        }
    })
})