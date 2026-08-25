function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const nextPage = document.getElementById(pageId);

    if (nextPage) {
        nextPage.classList.add("active");
        window.scrollTo(0, 0);
    }
}


function yesClicked() {

    showPage("page2");

}


function noClicked() {

    const message = document.getElementById("noMessage");

    message.innerHTML =
        "HOW DARE YOU ARE?! 😤😂<br><br>" +
        "<button onclick=\"showPage('page2')\">" +
        "Okay okay... I'll explore 😭" +
        "</button>";

}


function checkTreasure() {

    const answer =
        document.getElementById("treasureAnswer").value.trim();

    const message =
        document.getElementById("treasureMessage");

    /*
       LATER:
       Replace "youranswer" with the actual answer.
    */

    if (answer.toLowerCase() === "youranswer") {

        message.innerHTML =
            "Correct! 🔓✨";

        setTimeout(function() {
            showPage("memories");
        }, 1000);

    } else {

        message.innerHTML =
            "Hmm... that's not the secret answer 😭 Try again!";

    }

}


function photoMessage(number) {

    const message =
        document.getElementById("photoMessage");

    let text = "";

    if (number === 1) {

        text =
            "PHOTO 1 MESSAGE GOES HERE ❤️";

    }

    if (number === 2) {

        text =
            "PHOTO 2 MESSAGE GOES HERE 🥹";

    }

    if (number === 3) {

        text =
            "PHOTO 3 MESSAGE GOES HERE ✨";

    }

    message.innerHTML = text;

    message.style.display = "block";

}


function openTreasure() {

    const finalMessage =
        document.getElementById("finalMessage");

    finalMessage.classList.remove("hidden");

}