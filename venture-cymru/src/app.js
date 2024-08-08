document.body.style.visibility = "hidden";

// Wait for styles to load before showing content
window.addEventListener("load", function() {
    document.body.style.visibility = "visible";
});


const dialog = document.querySelector("dialog");
const showButton = document.getElementById("show-email-modal");
const closeButton = document.getElementById("close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});
