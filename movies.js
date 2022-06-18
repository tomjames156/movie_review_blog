const links = document.querySelectorAll("div.side-navigation > a")
const sideNav = document.querySelector("div.side-navigation");

function closeMenu(){
    sideNav.style.width = 0;
    for(let link of links){
        link.style.display = "none";
    }
}

function openMenu(){
    sideNav.style.width = "25%";
    for(let link of links){
        link.style.display = "block";
    }
}