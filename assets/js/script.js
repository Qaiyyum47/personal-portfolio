let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down, hide header
        header.classList.add("hidden");
    } else {
        // Scrolling up, show header
        header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
});
