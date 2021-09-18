var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (window.innerWidth <= 768) {
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
    } else {
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "flex";
        }
    }
}

window.addEventListener('resize', function() {
    showSlides(slideIndex);
});

var modal = document.getElementById('myTopNav');
var open = document.getElementsByClassName("icon-open")[0];
var close = document.getElementsByClassName("icon-close")[0];



open.onclick = function(x) {


    modal.style.display = "flex";
    open.style.display = "none";
    close.style.display = "block";
}

close.onclick = function(x) {


    modal.style.display = "none";
    open.style.display = "block";
    close.style.display = "none";
}