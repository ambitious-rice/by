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
    if (addname.length == 0) {
      passError.style.display = "none"
      nameError.style.display = "block"
    } else if (addpass.length == 0) {
      nameError.style.display = "none";
      passError.style.display = "block";
    } else {
      nameError.style.display = "none"
      passError.style.display = "none"
      if (localStorage.length == 0) {
        let dataLength = localStorage.length;
        let data = {};
        data.name = addname;
        data.password = addpass;
        data.id = dataLength;
        let info = JSON.stringify(data);
        localStorage.setItem("key" + dataLength, info);
        document.querySelector('.regist .name input').value = "";
        addpass = document.querySelector('.regist .paddword input').value = ""
        alert('注册成功');
        logbut.click();
      } else {
        var flag = true;
        for (var i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          let keydata = localStorage.getItem(key);
          let keyinfo = JSON.parse(keydata);
          if (keyinfo.name == addname) {
            alert("账号名重复");
            flag = false;
            break;
          }
        }
        if (flag) {
          let dataLength = localStorage.length;
          let data = {};
          data.name = addname;
          data.password = addpass;
          data.id = dataLength;
          let info = JSON.stringify(data);
          console.log(info);
          localStorage.setItem("key" + dataLength, info);
          document.querySelector('.regist .name input').value = "";
          addpass = document.querySelector('.regist .paddword input').value = "";
          alert('注册成功');
          logbut.click();
        }
      }
    }
  })

  //开始写登录功能
  var denglu = document.querySelector('.log button');
  denglu.addEventListener('click', function () {
    var logname = document.querySelector(".log .name input").value;
    var logpass = document.querySelector('.log .paddword input').value;
    console.log(logname, logpass);
    if (localStorage.length == 0) {
      console.log("您还未注册 请先注册");
      regbut.click();
    } else {
      let namelist = [];
      let passlist = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        console.log(key);
        let keydate = localStorage.getItem(key);
        let keyinfo = JSON.parse(keydate);
        console.log('keyinfo');
        namelist[i] = keyinfo.name;
        passlist[i] = keyinfo.password;
      }
      if (namelist.indexOf(logname) < 0) {
        alert('您还未注册 请先注册');
        regbut.click();
      } else if (passlist[namelist.indexOf(logname)] != logpass) {
        alert('密码错误')
      } else {
        alert('欢迎登录' + logname);
        close.click();
        document.querySelector(".log .name input").value = "";
        var logpass = document.querySelector('.log .paddword input').value = ""
        button.style.display = "none";
        var user = document.querySelector('.main-right .user');
        user.style.display = "block"
        user.innerHTML = "你好" + "," + logname;
      }
    }
  })
})

// 查询模块
window.addEventListener('load', function () {
  var search = document.querySelector('.search_lf input');
  var result = document.querySelector("#result");
  var ul = document.querySelector('.result ul');
  var data = ["浙江大学计算机", "华中科技大学计算机", "同济大学土木工程", "武汉大学计算机", "清华大学线性代数", "宋浩线性代数", "山本的日语课堂", "张凯的网球课"]
  localStorage.setItem('searchdata', JSON.stringify(data));
  let searchdata = JSON.parse(localStorage.getItem('searchdata'))
  let message = result.querySelector('div');
  search.addEventListener('focus', function () {
    console.log('he');
    result.style.display = "block";
    search.placeholder = "";
  })
  search.addEventListener('keyup', function () {
    console.log('up');
    ul.innerHTML = "";
    var string = this.value;
    var temp = [];
    for (var i = 0; i < searchdata.length; i++) {
      if (string == "") {
        break;
      }
      if (searchdata[i].indexOf(string) >= 0) {
        temp.push(searchdata[i]);
      }
    }
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
  })
  search.addEventListener('blur', function () {
    result.style.display = "none";
    if (search.value == "") {
      search.placeholder = "搜索感兴趣的课程";
    }
  })
})