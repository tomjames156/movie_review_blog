const links = document.querySelectorAll("div.side-navigation > a");
const sideNav = document.querySelector("div.side-navigation");
const mainContent = document.querySelector("div.main-content");
const movies = document.querySelectorAll(".movie");

function closeMenu(){
    sideNav.style.width = "0";

    for(let link of links){
        link.style.display = "none";
    }

    mainContent.style.opacity = "100%";
}

function openMenu(){
    window.innerWidth <= 1024 ? sideNav.style.width = "50vw" : sideNav.style.width = "30vw";
    
    for(let link of links){
        link.style.display = "block";
    }

    mainContent.style.opacity = "70%";
}

function showGenres(arr){
    let output = "<ul class='genres'>";

    for(i = 0; i < arr.length; i++){
        output += `<li>${arr[i]}</li>`;
    }
    
    return output += "</ul>";
}

function showStars(stars){
    let rating = "";
    let current_stars = stars;
    let left_over = 5 - current_stars;
    left_over = Math.floor(left_over);

    for(let i = current_stars; i >= 0.5; i--){
        if(i == 0.5){
            rating += `<i class="fa-solid fa-star-half-stroke"></i>`;
        }else{
            rating += `<i class="fa-solid fa-star"></i>`;
        }
    }

    for(let i = 0; i < left_over; i++){
        rating += `<i class="fa-solid fa-star empty"></i>`;
    }

    return rating;
}

function aboutMovie(receiver, stars, genres){
    receiver.style.opacity = "70%";
    receiver.parentElement.children[1].innerHTML = showStars(stars) + showGenres(genres);
}

function retain(receiver, stars, genres){
    receiver.parentElement.children[1].innerHTML = showStars(stars) + showGenres(genres);
}

function reset(receiver){
    receiver.style.opacity = "100%";
    receiver.parentElement.children[1].innerHTML = "";
}

const movieObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

movies.forEach((movie) => {movieObserver.observe(movie)});