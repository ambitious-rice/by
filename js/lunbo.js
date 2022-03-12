//轮播图
window.addEventListener('load', function () {
    var lb = document.querySelector(".main-lb");
    var next = document.querySelector(".next");
    var last = document.querySelector(".last");
    var focus = document.querySelector('.focus');
    var button = document.querySelector(".button");
    var width = lb.offsetWidth;
    var index
    lb.addEventListener('mouseenter', function () {
        last.style.display = "block";
        next.style.display = "block"
        clearInterval(timer);
    })
    lb.addEventListener('mouseleave', function () {
        last.style.display = "none";
        next.style.display = "none"
        timer = t = setInterval(function () {
            next.click();
        }, 2000);
    })
    var num = 0;
    var circle = 0;
    for (var i = 0; i < focus.children.length; i++) {
        var li = this.document.createElement('li');
        li.innerHTML = "<span></span>";
        li.setAttribute("index", i);
        button.appendChild(li);
        li.addEventListener('click', function () {
            index = this.getAttribute("index");
            circle = index;
            change();
            num = index;
            animate(focus, -num * width);
        })
    }
    button.firstElementChild.className = "current_out";
    button.firstElementChild.firstElementChild.className = "current_in";
    var first = focus.firstElementChild.cloneNode(true);
    focus.appendChild(first);
    var flag = true;
    next.addEventListener("click", function () {
        if (flag) {
            flag = false;
            if (num == focus.children.length - 1) {
                focus.style.left = 0;
                num = 0;
            }
            circle++;
            if (circle == button.children.length) {
                circle = 0;
            }
            change();
            num++;
            animate(focus, -num * width, function () {
                flag = true;
            });
        }
    })
    last.addEventListener("click", function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = focus.children.length - 1;
                focus.style.left = -num * width + 'px';
            }
            circle--;
            if (circle < 0) {
                circle = button.children.length - 1;
            }
            change();
            num--;
            animate(focus, -num * width, function () {
                flag = true;
            });
        }
    })
    var timer = this.setInterval(function () {
        next.click();
    }, 2000);

    function change() {
        for (var i = 0; i < button.children.length; i++) {
            button.children[i].className = "";
            button.children[i].children[0].className = "";
        }
        button.children[circle].className = "current_out";
        button.children[circle].firstElementChild.className = "current_in";
    }
})

//更多课程
window.addEventListener('load', function () {
    var more = document.querySelector('.left-more');
    console.log(more)
    var leftTop = document.querySelector('.left-top');
    more.addEventListener('mouseover', function () {
        leftTop.style.height = "600px";
    })
    leftTop.addEventListener('mouseleave', function () {
        leftTop.style.height = "315px";
    })
})



//range切换
window.addEventListener('load', function () {
    var range = document.querySelector('.range');
    var next = range.querySelectorAll('.next');
    var last = range.querySelectorAll('.last');
    for (var i = 0; i < next.length; i++) {
        next[i].addEventListener('click', function () {
            var father = this.parentNode;
            console.log(father);
            father.querySelector('.last').style.display = "block"
            var ul = father.querySelector('ul');
            var width = ul.querySelector('li').offsetWidth;
            animate(ul, -width);
            this.style.display = "none";
        })
    }
    for (var i = 0; i < last.length; i++) {
        last[i].style.display = "none";
        last[i].addEventListener('click', function () {
            var father = this.parentNode;
            father.querySelector('.next').style.display = "block"
            var ul = father.querySelector('ul');
            animate(ul, 0);
            this.style.display = "none";
        })
    }

})


//推荐切换
window.addEventListener('load', function () {
    var ul = document.querySelector(".recommend .show ul");
    var next = document.querySelector('.recommend .next');
    var last = document.querySelector('.recommend .last');
    var li = ul.querySelector('li');
    var width = li.offsetWidth + 19;
    last.style.display = "none";
    next.addEventListener('click', function () {
        last.style.display = "block";
        animate(ul, -width * 5);
        next.style.display = "none";
    })
    last.addEventListener('click', function () {
        next.style.display = "block";
        animate(ul, 0);
        last.style.display = "none";
    })
})

//侧边栏
window.addEventListener('load', function () {
    var sidebar = document.querySelector('.sidebar');
    var backtop = sidebar.querySelector('.backtop');
    document.addEventListener('scroll', function () {
        if (window.pageYOffset <= 100) {
            backtop.style.display = "none";
        } else {
            backtop.style.display = "block";
        }
    })
    var backtop = document.querySelector('.backtop');
    backtop.addEventListener('click', function () {
        var timer = setInterval(function () {
            var left = window.pageYOffset;
            var step = Math.ceil(left / 10);
            window.scroll(0, left - step);
            if (left == 0) {
                clearInterval(timer);
            }
        })
    }, 30)
})