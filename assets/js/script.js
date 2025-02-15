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
    let currentPage = window.location.pathname.split("/").pop() || "index.html"; // Default to index if empty

    document.querySelector("header").innerHTML = `
        <nav>
            <div class="nav-logo">
                <a href="${isSubpage ? "../" : ""}index.html" aria-label="Home">Qk.</a>
            </div>

            <div class="nav-links">
                <a href="${isSubpage ? "../" : ""}index.html" class="nav-item ${currentPage === 'index.html' ? 'active' : ''}">Home</a>
                <a href="${isSubpage ? "" : "pages/"}about.html" class="nav-item ${currentPage === 'about.html' ? 'active' : ''}">About</a>
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
        </nav>
    `;
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
            <p>© 2025 Qaiyyum Kamal | Web Developer</p>
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
        event.preventDefault(); // Prevent form submission
        alert("Please fill in all required fields.");
    }
});



