//current time
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    m = (m < 10) ? "0" + m : m;
    var time = h + ":" + m;
    document.getElementById("datetime").innerText = time;
    document.getElementById("datetime").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

//contact_button hover on click
// show contact_bar on click contact_button

const contactButtonHover = document.querySelector(".contact_button");
const showContactBar = document.querySelector(".contact_bar");

const addToggle = function() {
    contactButtonHover.classList.toggle("contact_button-toggle");
    showContactBar.classList.toggle("contact_bar-toggle");
};

contactButtonHover.addEventListener("click", addToggle);