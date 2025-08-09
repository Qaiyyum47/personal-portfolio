let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
});

document.addEventListener("DOMContentLoaded", function () {
    let isSubpage = window.location.pathname.includes("/pages/");
    let currentPage = window.location.pathname.split("/").pop() || "index.html"; 
    document.querySelector("header").innerHTML = `
        <nav>
            <div class="nav-logo">
                <a href="${isSubpage ? "../" : ""}index.html" aria-label="Home">Qk.</a>
            </div>

            <div class="nav-links">
                <a href="${isSubpage ? "../" : ""}index.html" class="nav-item ${currentPage === 'index.html' ? 'active' : ''}">Home</a>
                <a href="${isSubpage ? "" : "pages/"}projects.html" class="nav-item ${currentPage === 'projects.html' ? 'active' : ''}">Projects</a>
                <a href="${isSubpage ? "" : "pages/"}contact.html" class="nav-item ${currentPage === 'contact.html' ? 'active' : ''}">Contact</a>
            </div>

            <div class="nav-socials">
                <a href="mailto:qaiyyumkamal.work@gmail.com" aria-label="Email">
                    <img src="${isSubpage ? "../" : ""}assets/img/icon/gmail.png" alt="Email">
                </a>
                <a href="https://www.linkedin.com/in/qaiyyum-kamal/" target="_blank" aria-label="LinkedIn">
                    <img src="${isSubpage ? "../" : ""}assets/img/icon/linkedin.png" alt="LinkedIn">
                </a>
                <a href="https://github.com/Qaiyyum47" target="_blank" aria-label="GitHub">
                    <img src="${isSubpage ? "../" : ""}assets/img/icon/github.png" alt="GitHub">
                </a>
            </div>

            <p class="hamburger" onclick="toggleMenu()">☰</p>
        </nav>

        
        <div class="mobile-menu">
            <div class="hamburger-close" onclick="toggleMenu()">X</div>
            <a href="${isSubpage ? "../" : ""}index.html" class="nav-item ${currentPage === 'index.html' ? 'active' : ''}">Home</a>
            <a href="${isSubpage ? "" : "pages/"}projects.html" class="nav-item ${currentPage === 'projects.html' ? 'active' : ''}">Projects</a>
            <a href="${isSubpage ? "" : "pages/"}contact.html" class="nav-item ${currentPage === 'contact.html' ? 'active' : ''}">Contact</a>
            <div class="mobile-socials">
                <a href="mailto:qaiyyumkamal.work@gmail.com" aria-label="Email">
                    <img src="${isSubpage ? "../" : ""}assets/img/icon/gmail.png" alt="Email">
                </a>
                <a href="https://www.linkedin.com/in/qaiyyum-kamal/" target="_blank" aria-label="LinkedIn">
                    <img src="${isSubpage ? "../" : ""}assets/img/icon/linkedin.png" alt="LinkedIn">
                </a>
                <a href="https://github.com/Qaiyyum47" target="_blank" aria-label="GitHub">
                    <img src="${isSubpage ? "../" : ""}assets/img/icon/github.png" alt="GitHub">
                </a>
            </div>
        </div>
        <div class="mobile-overlay"></div>
    `;

    window.toggleMenu = function () {
        const mobileMenu = document.querySelector(".mobile-menu");
        const mobileOverlay = document.querySelector(".mobile-overlay");
        mobileMenu.classList.toggle("active");
        mobileOverlay.style.display = mobileMenu.classList.contains("active") ? "block" : "none";
    };

    document.querySelector('.mobile-overlay').addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.remove('active');
        this.style.display = 'none'; 
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    let isSubpage = window.location.pathname.includes("/pages/");

    document.querySelector("#contact").innerHTML = `
            <div class="contact-text">
                <a href="${isSubpage ? "" : "pages/"}contact.html" class="underline">Contact Me →<a>
            </div>
    `;
});


document.addEventListener("DOMContentLoaded", function () {
    let isSubpage = window.location.pathname.includes("/pages/");

    document.querySelector("footer").innerHTML = `
        <div class="footer">
            <p class="long-text">© 2025 Qaiyyum Kamal | Web Developer</p>
            <div class="short-text">
                <p>© 2025 Qaiyyum Kamal</p>
                <p>Web Developer</p>
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

const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('input', () => {
    submitBtn.disabled = !form.checkValidity();
});

form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault(); 
        alert("Please fill in all required fields.");
    }
});


