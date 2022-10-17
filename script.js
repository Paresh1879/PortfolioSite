let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

document.getElementById("tweet").onclick = function () {
        location.href = "https://twitter.com/PareshN7";
    };

document.getElementById("github").onclick=function () {
    location.href = "https://github.com/Paresh1879?tab=repositories"
}
document.getElementById("instagram").onclick=function () {
    location.href = "https://instagram.com/paresh.sr/"
}    
document.getElementById("linkedin").onclick=function () {
    location.href = "https://www.linkedin.com/in/pareshns99/"

}    



document.getElementByClassName("btn").onclick=function () {
    window.alert("Mail sent successfully")

}  
