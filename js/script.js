var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
    document.getElementById("countdown").innerHTML = days + " Gün " + hours + " Saat "
    + minutes + " Dk. " + seconds + " Sn. Kaldı ";
 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Geri sayım sona erdi";
    }
}, 1000);