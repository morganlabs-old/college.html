class CastMember extends HTMLElement {
    static get observedAttributes() {
        return ["name", "character_name", "image"];
    }

    connectedCallback() {
        let wholePath = window.location.pathname.split("/");
        wholePath.splice(wholePath.indexOf("src") + 1);
        const pathFromSrc = wholePath.join("/");

        const name = this.getAttribute("name");
        const character_name = this.getAttribute("character_name");
        const image = `${pathFromSrc}/` + this.getAttribute("image");

        this.innerHTML = `
            <div class="cast-member">
                <img class="member-image" src="${image}" alt="${name}, who plays ${character_name}.">
                <span class="member-name">${name}</span>
                <span class="character-name">${character_name}</span>
            </div>
            `
    }
}

customElements.define("cast-member", CastMember);

