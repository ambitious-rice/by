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
    var show = next[i].parentNode;
    show.setAttribute("light", "1");
    next[i].addEventListener('click', function () {
      var father = this.parentNode;
      father.querySelector('.last').style.display = "block"
      var ul = father.querySelector('ul');
      var width = ul.querySelector('li').offsetWidth;
      animate(ul, -width);
      this.parentNode.setAttribute("light", "0");
      this.style.display = "none";
    })
    show.addEventListener('mouseenter', function () {
      if (this.getAttribute("light") == "1") {
        this.querySelector('.next').style.display = "block";
        this.querySelector('.last').style.display = "none";
      } else {
        this.querySelector('.last').style.display = "block";
        this.querySelector('.next').style.display = "none";
      }
    })
    show.addEventListener('mouseleave', function () {
      this.parentNode.querySelector('.next').style.display = "none";
      this.parentNode.querySelector('.last').style.display = "none";
    })
  }

  for (var i = 0; i < last.length; i++) {
    last[i].style.display = "none";
    last[i].addEventListener('click', function () {
      var father = this.parentNode;
      father.querySelector('.next').style.display = "block"
      var ul = father.querySelector('ul');
      animate(ul, 0);
      this.parentNode.setAttribute("light", "1");
      this.style.display = "none";
    })
  }

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
      var step = Math.ceil(left / 20);
      window.scroll(0, left - step);
      if (left == 0) {
        clearInterval(timer);
      }
    })
  }, 30)
})

//登录注册功能
window.addEventListener('load', function () {
  var button = document.querySelector(".main-right a");
  var login = document.querySelector('.log-border');
  var bg = document.querySelector('.bg');
  var close = login.querySelector('.log-nav>span');
  var logbut = login.querySelector('.log-nav .log-but');
  var regbut = login.querySelector('.log-nav .reg-but');
  var log = login.querySelector('.log');
  var regist = login.querySelector('.regist');
  var i = document.querySelector(".log-more i");

  // 完成基础的点击功能
  i.setAttribute('click', "0");
  button.addEventListener('click', function () {
    login.style.display = "block";
    bg.style.display = "block";
  })
  close.addEventListener('click', function () {
    login.style.display = "none";
    bg.style.display = "none";
  })
  logbut.addEventListener('click', function () {
    logbut.className = "log-but";
    console.log('a');
    regbut.className = "change-border reg-but"
    log.style.display = "block"
    regist.style.display = "none"
  })
  regbut.addEventListener('click', function () {
    regbut.className = "reg-but";
    console.log('b');
    logbut.className = "change-border log-but"
    log.style.display = "none"
    regist.style.display = "block"
  })
  i.addEventListener('click', function () {
    if (i.getAttribute('click') == "0") {
      i.querySelector('em').style.display = "inline";
      this.setAttribute('click', "1");
    } else {
      i.querySelector('em').style.display = "none"
      this.setAttribute('click', "0");
    }
  })
  localStorage.clear();

  // 开始写注册功能
  var addnew = document.querySelector('.regist button');
  var nameError = document.querySelector('.name-error');
  var passError = document.querySelector('.pass-error');
  addnew.addEventListener('click', function () {
    let addname = document.querySelector('.regist .name input').value;
    let addpass = document.querySelector('.regist .paddword input').value;
    if (addname.length == 0 | addname.length > 20) {
      passError.style.display = "none"
      nameError.style.display = "block"
    } else if (addpass.length == 0 | addpass.length > 20) {
      nameError.style.display = "none";
      passError.style.display = "block";
    } else {
      nameError.style.display = "none"
      passError.style.display = "none"
      const xhr = new XMLHttpRequest();
      xhr.open('GET', "http://124.223.161.139:8000/regist?name=" + addname + "&pass=" + addpass);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            var result = xhr.response;
            if (result == '-1') {
              alert('您的名字重复,请重新取一个吧');
              document.querySelector('.regist .name input').value = "";
            } else {
              alert('注册成功' + addname);
              document.querySelector('.regist .name input').value = "";
              document.querySelector('.regist .paddword input').value = "";
              logbut.click();
            }
          }
        }
      }
    }
  })

  //开始写登录功能
  var denglu = document.querySelector('.log button');
  denglu.addEventListener('click', function () {
    var logname = (document.querySelector(".log .name input").value);
    var logpass = (document.querySelector('.log .paddword input').value);
    //自己写的登录代码
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "http://124.223.161.139:8000/login?name=" + logname + "&pass=" + logpass);
    xhr.send();
    xhr.onreadystatechange = function () {
      console.log('change');
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          var result = xhr.response;
          if (result == '-1') {
            alert('您还未注册 请先注册');
            regbut.click();
          } else if (result == '1') {
            alert('密码错误')
          } else {
            alert('欢迎登录' + logname);
            document.querySelector(".log .name input").value = "";
            var logpass = document.querySelector('.log .paddword input').value = ""
            button.style.display = "none";
            var user = document.querySelector('.main-right .user');
            user.style.display = "block"
            user.innerHTML = "你好" + "," + logname;
            close.click();
          }
        }
      }
    }
  })
})

// 查询模块
window.addEventListener('load', function () {
  var search = document.querySelector('.search_lf input');
  var result = document.querySelector("#result");
  var ul = document.querySelector('.result ul');
  search.addEventListener('focus', function () {
    result.style.display = "block";
    search.placeholder = "";
  })
  search.addEventListener('keyup', function () {
    var string = search.value;
    if (search.value != "") {
      ul.innerHTML = "";
      const xhr = new XMLHttpRequest();
      xhr.open('GET', "http://124.223.161.139:8000/search?search=" + string);
      console.log("http://124.223.161.139:8000/search?search=" + string);
      xhr.send();
      xhr.onreadystatechange = function () {
        ul.innerHTML = "";
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            var temp = JSON.parse(xhr.response);
            if (temp.length != 0) {
              var li = document.createElement('li');
              li.innerHTML = "搜索" + '"' + string + '"' + "所有相关课程";
              ul.appendChild(li);
              for (var j = 0; j < temp.length && j < 8; j++) {
                var p = document.createElement('li');
                ul.appendChild(p);
                p.innerHTML = temp[j];
              }
            }
          }
        }
      }
    } else {
      ul.innerHTML = "";
    }
  })
  search.addEventListener('blur', function () {
    result.style.display = "none";
    if (search.value == "") {
      search.placeholder = "搜索感兴趣的课程";
    }
  })
})
// 每日热榜转换成利用插入节点方式生成
window.addEventListener('load', function () {
  console.log('hello');
  var ul = document.querySelector('.recommend .show ul');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', "http://124.223.161.139:8000/recommend?name=1");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        var response=JSON.parse(xhr.response);
        for(var i=0;i<response.length;i++) {
          var n=response[i].runoob_title.split(" ");
          var li=document.createElement('li');
          ul.appendChild(li);
          var a=document.createElement('a');
          a.href="javascript:;";
          li.appendChild(a);
          var img=document.createElement('img');
          img.src=n[0];
          a.appendChild(img);
          var h3=document.createElement('h3');
          h3.innerHTML=n[1];
          a.appendChild(h3);
          var h5=document.createElement('h5');
          h5.innerHTML=n[2];
          a.appendChild(h5);
          var h6=document.createElement('h6');
          h6.innerHTML=n[3];
          var div=document.createElement('div');
          div.innerHTML=n[4];
          a.appendChild(div);
        }
      }
    }
  }
})
//推荐切换
window.addEventListener('load', function () {
  var ul = document.querySelector(".recommend .show ul");
  var next = document.querySelector('.recommend .next');
  var last = document.querySelector('.recommend .last');
  var li = ul.querySelector('li');
  var width = 223 + 19;
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