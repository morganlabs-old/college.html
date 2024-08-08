class MailingListPopup extends HTMLElement {
    connectedCallback() {
        let wholePath = window.location.pathname.split("/");
        wholePath.splice(wholePath.indexOf("src") + 1);
        const pathFromSrc = wholePath.join("/");

        this.innerHTML = `
            <link rel="stylesheet" href="${pathFromSrc}/css/modal.css">
            <dialog class="email-modal">
                <span class="h4">Want to subscribe to our newsletter?</span>
                <span class="kicker">Stay up-to-date on all of our latest shows and events!</span>
                <div class="email-area">
                    <input class="input" type="email" placeholder="Enter your email address" />
                    <button class="primary submit" id="submit">Subscribe</button>
                </div>
                <button class="close" id="close" autofocus>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5355 12.4645C36.1548 13.0839 36.1548 14.0882 35.5355 14.7075L26.243 24L35.5355 33.2925C36.1549 33.9118 36.1549 34.9161 35.5355 35.5355C34.9161 36.1548 33.9119 36.1548 33.2925 35.5355L24 26.243L14.7075 35.5355C14.0882 36.1548 13.0839 36.1548 12.4645 35.5355C11.8452 34.9161 11.8452 33.9118 12.4645 33.2925L21.757 24L12.4645 14.7075C11.8452 14.0882 11.8452 13.0839 12.4646 12.4645C13.0839 11.8452 14.0882 11.8452 14.7076 12.4645L24 21.757L33.2925 12.4645C33.9118 11.8452 34.9161 11.8452 35.5355 12.4645Z" fill="black"/>
                    </svg>
                </button>
            </dialog>
        `;

        const submit = document.getElementById("submit");
        const emailRegexp = /(.+)@(.+){2,}\.(.+){2,}/;
        submit.addEventListener("click", () => {
            const email = document.querySelector(".email-area input").value;

            if (!emailRegexp.test(email)) {
                return alert("Please enter a valid email address!");
            }

            document.getElementById("close").click();
            return alert("Thanks for subscribing to our newsletter!");
        })
    }
}

customElements.define("mailing-list-popup", MailingListPopup);

