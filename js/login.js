window.addEventListener('load', function () {
    var button=document.querySelector(".main-right a");
    var login=document.querySelector('.log-border');
    var bg =document.querySelector('.bg');
    var close=login.querySelector('.log-nav>span');
    var logbut=login.querySelector('.log-nav .log-but');
    var regbut=login.querySelector('.log-nav .reg-but');
    var log=login.querySelector('.log');
    var regist=login.querySelector('.regist');
    var i=document.querySelector(".log-more i");
    i.setAttribute('click',"0");
    button.addEventListener('click',function() {
        login.style.display="block";
        bg.style.display="block";
    })
    close.addEventListener('click',function() {
        login.style.display="none";
        bg.style.display="none";
    })
    logbut.addEventListener('click',function() {
        logbut.className="log-but";
        console.log('a');
        regbut.className="change-border reg-but"
        log.style.display="block"
        regist.style.display="none"
    })
    regbut.addEventListener('click',function() {
        regbut.className="reg-but";
        console.log('b');
        logbut.className="change-border log-but"
        log.style.display="none"
        regist.style.display="block"
    })
    console.log(i);
    i.addEventListener('click',function() {
        if(i.getAttribute('click')=="0") {
            i.querySelector('em').style.display="inline";
            this.setAttribute('click',"1");
        }else {
            i.querySelector('em').style.display="none"
            this.setAttribute('click',"0");
        }
    })
})