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

//contact_button hover on click
// show contact_bar on click contact_button

const contactButtonHover = document.querySelector(".contact_button");
const showContactBar = document.querySelector(".contact_bar");
const addHover = function() {
    contactButtonHover.style.borderLeft = "solid rgb(59, 59, 59) 2px"
    contactButtonHover.style.borderTop = "solid rgb(59, 59, 59) 2px"
    contactButtonHover.style.borderRight = "solid white 2px"
    contactButtonHover.style.borderBottom = "solid white 2px"
    showContactBar.style.display = "block"
};
// const removeHover = function() {
//     contactButtonHover.style.borderLeft = "solid white 2px"
//     contactButtonHover.style.borderTop = "solid white 2px"
//     contactButtonHover.style.borderRight = "solid rgb(59, 59, 59) 2px"
//     contactButtonHover.style.borderBottom = "solid rgb(59, 59, 59) 2px"
// };

contactButtonHover.addEventListener("click", addHover);