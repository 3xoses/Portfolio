//current time
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var time = h + ":" + m;
    document.getElementById("datetime").innerText = time;
    document.getElementById("datetime").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();