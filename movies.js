const links = document.querySelectorAll("div.side-navigation > a");
const sideNav = document.querySelector("div.side-navigation");
const mainContent = document.querySelector("div.main-content");
const movieImages = document.querySelectorAll("img.movie-img");
const aboutSpace = document.querySelectorAll("div.about-movie");
const starSpace = document.getElementById("stars");

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

function listItems(arr){
    let output = "<ul>";

    for(i = 0; i < arr.length; i++){
        output += `<li>${arr[i]}</li>`;
    }
    
    return output += "</ul>";
}

function addGenres(genres){
    for(let image of movieImages){
        image.addEventListener("click", function(){
            image.parentElement.children[1].innerHTML = showGenres(genres);
        });
    }
}

function showStars(stars){
    let rating = "";
    let current_stars = stars;
    let left_over = 5 - current_stars;
    left_over = Math.floor(left_over);

    for(let i = current_stars; i >= 0.5; i--){
        if(i == 0.5){
            rating += `<i class="fa-solid fa-star-half"></i>`;
        }else{
            rating += `<i class="fa-solid fa-star"></i>`;
        }
    }

    for(let i = 0; i < left_over; i++){
        rating += `<i class="fa-solid fa-star empty"></i>`;
    }

    return rating;
}

movieImages[0].click();

function aboutMovie(){
    let stars = 0;
    let genres = [];
    for(let i = 0; i < movieImages.length; i++){
        movieImages[i].addEventListener("click", function(){
            let val = i;
            switch(val){
                case 0:
                    stars = 4.5;
                    genres = ['Sci-Fi', 'Horror'];
                    console.log(genres);
                    movieImages[i].style.border = "solid 1px red";
                    break;
                case 1:
                    stars = 4.5;
                    genres = ['Horror', 'Murder Mystery'];
                    movieImages[i].parentElement.children[1].innerHTML= listItems(genres);
                    break;
                case 2:
                    stars = 3.5;
                    genres = ['Sitcom'];
                    break;
                case 3:
                    stars = 5;
                    genres = ['Sci-Fi', 'Horror', 'Comedy', 'Action'];
                    break;
                case 4:
                    stars = 4;
                    genres = ['Murder Mystery'];
                    break;
                case 5:
                    stars = 4;
                    genres = ['Murder Mystery'];
                    break;
                case 6:
                    stars = 4.5;
                    genres = ['Sci-Fi', 'Comedy', 'Animation'];
                    break;
                case 7:
                    stars = 5;
                    genres = ['Murder Mystery', 'Comedy'];
                    break;
            }
        })
    }
}