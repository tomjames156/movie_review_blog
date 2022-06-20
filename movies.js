const links = document.querySelectorAll("div.side-navigation > a")
const sideNav = document.querySelector("div.side-navigation");
const mainContent = document.querySelector("div.main-content")

function closeMenu(){
    sideNav.style.width = 0;

    for(let link of links){
        link.style.display = "none";
    }

    mainContent.style.opacity = "100%";
}

function openMenu(){
    sideNav.style.width = "40%";
    
    for(let link of links){
        link.style.display = "block";
    }

    mainContent.style.opacity = "50%";
}