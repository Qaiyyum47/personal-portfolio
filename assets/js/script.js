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

document.addEventListener("DOMContentLoaded", function () {
    let isSubpage = window.location.pathname.includes("/pages/");
    let currentPage = window.location.pathname.split("/").pop(); // Get the current page file name

    document.querySelector("header").innerHTML = `
        <nav>
            <a href="${isSubpage ? "../" : ""}index.html" aria-label="Home" class="${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}">Home</a>
            <a href="${isSubpage ? "" : "pages/"}about.html" aria-label="About" class="${currentPage === 'about.html' ? 'active' : ''}">About</a>
            <a href="${isSubpage ? "" : "pages/"}projects.html" aria-label="Projects" class="${currentPage === 'projects.html' ? 'active' : ''}">Projects</a>
            <a href="${isSubpage ? "" : "pages/"}contact.html" aria-label="Contact" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a>
        </nav>
    `;

    // Add CSS for active link (if not already in your styles)
    const style = document.createElement("style");
    style.innerHTML = `
        nav a.active {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);
});


document.addEventListener("DOMContentLoaded", function () {
    let isSubpage = window.location.pathname.includes("/pages/");

    document.querySelector("#contact").innerHTML = `
        <div class="projects-container">
            <div class="projects-text">
                <h2 class="projects-contact-title">Let's Connect! 🤝</h2>
                <p class="projects-contact-description">
                    I’m always open to collaborations, freelance opportunities, and tech discussions 💬. 
                    Feel free to reach out 📩 if you’d like to work together or just chat about web development!
                </p>
                <a id="contact-link" href="${isSubpage ? "" : "pages/"}contact.html" aria-label="Contact me">Contact Me</a>
            </div>
        </div>
    `;
});


document.addEventListener("DOMContentLoaded", function () {
    let isSubpage = window.location.pathname.includes("/pages/");

    document.querySelector("footer").innerHTML = `
        <div class="footer-container">
            <!-- Social Icons -->
            <div class="social-links">
                <a href="https://github.com/Qaiyyum47" target="_blank" aria-label="GitHub">
                    <img src="${isSubpage ? "../" : ""}assets/img/icon/github.png" alt="GitHub">
                </a>
                <a href="https://www.linkedin.com/in/qaiyyum-kamal/" target="_blank" aria-label="LinkedIn">
                    <img src="${isSubpage ? "../" : ""}assets/img/icon/linkedin.png" alt="LinkedIn">
                </a>
                <a href="mailto:qaiyyumkamal.work@gmail.com" aria-label="Email">
                    <img src="${isSubpage ? "../" : ""}assets/img/icon/gmail.png" alt="Email">
                </a>
            </div>

            <!-- Navigation Links -->
            <div class="footer-nav">
                <a href="${isSubpage ? "../" : ""}index.html" aria-label="Home">Home</a>
                <a href="${isSubpage ? "" : "pages/"}about.html" aria-label="About">About</a>
                <a href="${isSubpage ? "" : "pages/"}projects.html" aria-label="Projects">Projects</a>
                <a href="${isSubpage ? "" : "pages/"}contact.html" aria-label="Contact">Contact</a>
            </div>
        </div>
    `;
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        let content = this.nextElementSibling;
        let isActive = this.classList.contains('active');

        if (isActive) {

            this.classList.remove('active');
            content.style.maxHeight = '0';
        } else {
            this.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});



