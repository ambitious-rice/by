window.addEventListener('load', function () {
    var ul=document.querySelector('.recommend .show ul');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "http://124.223.161.139:8000/recommend");
    xhr.send();
    console.log(xhr.response);
})