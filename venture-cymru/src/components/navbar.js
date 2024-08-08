class Navbar extends HTMLElement {
    static get observedAttributes() {
        return ["active-page-title"]
    }

    connectedCallback() {
        // Get the path from the src/ directory
        // This is so that we can use this variable no matter where in the file
        // structure we are, we can get to the src directory
        let wholePath = window.location.pathname.split("/");
        wholePath.splice(wholePath.indexOf("src") + 1);
        const pathFromSrc = wholePath.join("/");

        const pages = this.parsePages([
            // All of these are RELATIVE from the src/ directory
            { title: "Home", href: "./index.html" },
            { title: "About", href: "./about/index.html" },
            { title: "What's On", href: "./whats-on/index.html" },
            { title: "What's Available", href: "./whats-available/index.html" },
        ], pathFromSrc + "/routes");

        this.innerHTML = `
            <link rel="stylesheet" href="${pathFromSrc}/css/navbar.css">
            <nav class="nav" id="nav">
                <div class="logos">
                    <!-- Here, we are using ${pathFromSrc} so that we can --> 
                    <!-- the svg images absolutely from the src directory! -->
                    <img src="${pathFromSrc}/assets/logos/submark.svg" class="mobile"></img>
                    <img src="${pathFromSrc}/assets/logos/wordmark.svg" class="desktop"></img>
                </div>
                <button id="hamburger" class="mobile hamburger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
                <ul class="links">
                    <!-- All of the pages from the array are here -->
                    ${pages}
                </ul>
                <button class="secondary newsletter" id="show-email-modal">Subscribe to our newsletter</button>
            </nav>
        `;

        // Add functionality to the hamburger menu
        const nav = document.getElementById("nav");
        const hamburgerMenu = document.getElementById("hamburger");

        hamburgerMenu.addEventListener("click", () => {
            nav.classList.toggle("open");
        });

        window.addEventListener("resize", (_) => {
            // Auto-close navbar if inner side fits desktop size
            if (window.innerWidth > 1278) nav.classList.remove("open");
        })
    }

    parsePages(pages, pathFromSrc) {
        let parsed = [];

        const manualPageTitle = this.getAttribute("active-page-title");

        function isPageActive(title, absoluteHref) {
            // If an active page is specified manually, that takes priority
            if (manualPageTitle) return manualPageTitle === title
            return window.location.pathname === absoluteHref;
        }

        for (const { title, href } of pages) {
            // Concatenate the absolute path from `src/` with the page href 
            // location, and remove "./" if applicable
            const absoluteHref = `${pathFromSrc}${href.replace("./", "/")}`;

            // Add the formatted HTML to the array
            // If the page is active, it has the primary class
            // else it has the secondary class
            parsed.push(`
                    <a href="${absoluteHref}" class="cmp-btn ${isPageActive(title, absoluteHref) ? "primary" : "secondary"}">${title}</a>
            `)
        }

        return parsed.join("\n");
    }
}

customElements.define("nav-bar", Navbar);

