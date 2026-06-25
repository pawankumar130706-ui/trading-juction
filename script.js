// Career Result - script.js

// Search Function
function searchJobs() {
    let input = document.getElementById("searchInput");
    if (!input) return;

    let filter = input.value.toUpperCase();
    let cards = document.getElementsByClassName("job-card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0];

        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Current Date
window.onload = function () {

    let today = new Date();

    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    let dateBox = document.getElementById("todayDate");

    if (dateBox) {
        dateBox.innerHTML = today.toLocaleDateString("en-IN", options);
    }

};

// Scroll To Top Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (!topBtn) return;

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

function topFunction() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

// Dark Mode

function darkMode() {

    document.body.classList.toggle("dark-mode");

}

// Alert

console.log("Career Result Loaded Successfully");
