window.addEventListener('load', function () {
  var theme = document.querySelector('.theme');
  theme.addEventListener('click', function () {
    themerange++;
    changetheme(themerange % 2);
    if(logstatus!=""){
      const xhr = new XMLHttpRequest();
      xhr.open('GET', "http://124.223.161.139:8000/theme?theme="+themerange%2+"&"+"name="+logstatus);
      xhr.send();
    }
    })
  })

function changetheme(i) {
  var body = document.querySelector('body');
  var list = ["theme-default", "theme-yellow"]
  body.className = list[i]
}