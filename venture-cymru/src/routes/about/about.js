const yearsSinceCreation = document.getElementById("years-since-origin");
const originYear = 1894;
const difference = new Date().getFullYear() - originYear;

yearsSinceCreation.innerText = difference;
