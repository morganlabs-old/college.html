class Footer extends HTMLElement {
    connectedCallback() {
        let wholePath = window.location.pathname.split("/");
        wholePath.splice(wholePath.indexOf("src") + 1);
        const pathFromSrc = wholePath.join("/");


        this.innerHTML = `
            <link rel="stylesheet" href="${pathFromSrc}/css/footer.css">
            <footer class="footer">
                <img class="logo" src="${pathFromSrc}/assets/logos/submark_white.svg"></img>
                <a class="srccode" href="https://github.com/morganlabs-college/assignment2__venue_cymru">View the Source Code</a>
                <div class="socials">
                    <a href="https://twitter.com/venuecymru">X</a>
                    <a href="https://www.instagram.com/venuecymru/">Instagram</a>
                    <a href="https://www.youtube.com/user/VenueCymru01">YouTube</a>
                    <a href="https://uk.linkedin.com/company/venue-cymru">LinkedIn</a>
                </div>
            </footer>
        `;
    }

}

customElements.define("footer-component", Footer);

