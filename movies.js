const links = document.querySelectorAll("div.side-navigation > a");
const sideNav = document.querySelector("div.side-navigation");
const mainContent = document.querySelector("div.main-content");


function closeMenu(){
    sideNav.style.width = 0;

    for(let link of links){
        link.style.display = "none";
    }

    mainContent.style.opacity = "100%";
}

function openMenu(){
    sideNav.style.width = "42%";
    
    for(let link of links){
        link.style.display = "block";
    }

    mainContent.style.opacity = "50%";
}

function showGenres(genres){
    let output = "";

    for(i = 0; i < genres.length; i++){
        output += `${genres[i]} `;
    }
    return output.trimEnd();
}

function showStars(stars){
    let rating = "";
    let current_stars = stars;
    let left_over = 5 - current_stars;
    left_over = Math.floor(left_over);

    for(let i = current_stars; i >= 0.5; i--){
        if(i == 0.5){
            rating += "+";
        }else{
            rating += "*";
        }
    }

    for(let i = 0; i < left_over; i++){
        rating += "-";
    }

    return rating;
}

function aboutMovie(stars, genres){
    console.log(showStars(stars));
    console.log(showGenres(genres));
}