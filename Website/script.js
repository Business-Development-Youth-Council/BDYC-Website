const navbarHTML = `
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold d-flex align-items-center" href="index.html">
                <img src="Images/BDYC Icon.png" alt="BDYC" class="navbar-logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style="background-color: var(--gold); border: none;">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="competitions.html">Competitions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="results.html">Results</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="archive.html">Archive</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="join.html">Join</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

const footerHTML = `
    <footer class="footer py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4">
                    <h5 class="fw-bold mb-3">Business Development Youth Council</h5>
                    <p>Empowering the next generation of business leaders through competition, creativity, and collaboration.</p>
                </div>
                <div class="col-lg-4">
                    <h5 class="fw-bold mb-3">Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="competitions.html">Competitions</a></li>
                        <li><a href="results.html">Results</a></li>
                        <li><a href="join.html">Join</a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h5 class="fw-bold mb-3">Connect With Us</h5>
                    <div class="social-links">
                        <a href="https://www.instagram.com/thebdyc/" target="_blank" class="social-link me-3">
                            <i class="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://classroom.google.com/c/ODIzNTk2NTA0MTMx?cjc=7bi7wief" target="_blank" class="social-link">
                            <i class="fab fa-google fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/thebdyc/" target="_blank" class="social-link" style = "margin-left: 15px;">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12 text-center">
                    <hr style="border-color: rgba(255, 255, 255, 0.2);">
                    <p class="mb-1">&copy; 2025 Business Development Youth Council. All rights reserved.</p>
                    <p class="mb-0" style="font-size: 0.9rem;">
                        Website by <a href="https://www.linkedin.com/in/ishbir-singh/" target="_blank" style="color: var(--gold); text-decoration: none;">Ishbir Singh</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
`;

function loadNavbarAndFooter() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
        setActiveNavLink();
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Add defensive code if other scripts try to access navbar.style directly
// Provide a small helper to safely get the navbar element
function getNavbarElement() {
    return document.querySelector('.navbar');
}

// Export helper to window for legacy scripts (if any) to use safely
window.getNavbarElement = getNavbarElement;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbarAndFooter);
} else {
    loadNavbarAndFooter();
}
