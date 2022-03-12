function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback()
            }
        }
        var sped = (target - obj.offsetLeft) / 80;
        sped = sped > 0 ? Math.ceil(sped) : Math.floor(sped);
        obj.style.left = obj.offsetLeft + sped + 'px';
    }, 3);
}