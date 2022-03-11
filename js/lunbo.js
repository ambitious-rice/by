window.addEventListener('load',function(){
    var lb=document.querySelector(".main-lb");
    var next=document.querySelector(".next");
    var last=document.querySelector(".last");
    var focus=document.querySelector('.focus');
    var button=document.querySelector(".button");
    var width=lb.offsetWidth;
    var index
    lb.addEventListener('mouseenter',function() {
        last.style.display="block";
        next.style.display="block"
        clearInterval(timer);
    })
    lb.addEventListener('mouseleave',function() {
        last.style.display="none";
        next.style.display="none"
        timer=t=setInterval(function() {
            next.click();
        },2000);
    })
    var num=0;
    var circle=0;
    for(var i=0;i<focus.children.length;i++) {
        var li=this.document.createElement('li');
        li.innerHTML="<span></span>";
        li.setAttribute("index",i);
        button.appendChild(li);
        li.addEventListener('click',function() {
            index=this.getAttribute("index");
            circle=index;
            change();
            num=index;
            animate(focus,-num*width);
        })
    }
    button.firstElementChild.className="current_out";
    button.firstElementChild.firstElementChild.className="current_in";
    var first=focus.firstElementChild.cloneNode(true);
    focus.appendChild(first);
    var flag=true;
    next.addEventListener("click" ,function() {
        if(flag){
            flag=false;
            if(num==focus.children.length-1) {
                focus.style.left=0;
                num=0;
            }
            circle++;
            if(circle==button.children.length) {
                circle=0;
            }
            change();
            num++;
            console.log(num);
            animate(focus,-num*width,function() {
                flag=true;
            });
        }
    })
    last.addEventListener("click" ,function() {
        if(flag){
            flag=false;
            if(num==0) {
                num=focus.children.length-1;
                focus.style.left = -num * width + 'px';
            }
            circle--;
            if(circle<0) {
                circle=button.children.length-1;
            }
            change();
            num--;
            animate(focus,-num*width,function() {
                flag=true;
            });
        }
    })
    var timer=this.setInterval(function() {
        next.click();
    },2000);
    function change() {
        for(var i=0;i<button.children.length;i++) {
            button.children[i].className="";
            button.children[i].children[0].className="";
        }
        button.children[circle].className="current_out";
        button.children[circle].firstElementChild.className="current_in";
    }
})