const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

    });
}
navSlide();


// window.addEventListener('resize', function (resize) {
//     const glightbox = document.querySelector('.glightbox');
//     if (window.innerWidth < 700) resize.classList.remove("glightbox");
// });


const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 300) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});






const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot


        window.scrollTo({
            left: 0,
            top: 0,
        });
        // close
        linksContainer.style.height = 0;
    });
});