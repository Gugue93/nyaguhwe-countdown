/* =================================
   NYAGUHWE COUNTDOWN 2026
   CHITUNGWIZA CITADEL
================================= */


/* =================================
   1. EVENT DATE SETTINGS
================================= */

// Zimbabwe time is UTC + 2

const eventDate = new Date(
    "2026-12-11T06:00:00+02:00"
).getTime();

// Countdown starting date for progress bar
const startDate = new Date(
    "2026-11-06T00:00:00+02:00"
).getTime();


/* =================================
   2. GET HTML ELEMENTS
================================= */

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const messageElement = document.getElementById("message");

const progressFill = document.getElementById("progress-fill");
const progressPercent = document.getElementById("progress-percent");


/* =================================
   3. COUNTDOWN MESSAGES
================================= */

function getMessage(days) {

    if (days > 20) {
        return "The excitement is building! 🔥";
    }

    if (days > 14) {
        return "The adventure is getting closer! 🌴";
    }

    if (days > 7) {
        return "One week is almost here! 😎";
    }

    if (days > 3) {
        return "Start getting those outfits ready! 👕";
    }

    if (days > 1) {
        return "ALMOST TIME TO MAKE MEMORIES! 🎉";
    }

    if (days > 0) {
        return "TOMORROW WE MAKE HISTORY! 🚀";
    }

    return "THE DAY HAS ARRIVED! 🎊";
}


/* =================================
   4. UPDATE COUNTDOWN
================================= */

function updateCountdown() {

    const currentTime = Date.now();

    const remaining = eventDate - currentTime;

    // Event has arrived
    if (remaining <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        messageElement.textContent =
            "THE DAY HAS ARRIVED! 🎉";

        progressFill.style.width = "100%";
        progressPercent.textContent = "100%";

        return;
    }


    // Calculate time
    const days = Math.floor(
        remaining / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (remaining / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (remaining / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (remaining / 1000) % 60
    );


    // Display countdown
    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");


    // Change motivational message
    messageElement.textContent =
        getMessage(days);


    // Calculate progress
    const totalTime = eventDate - startDate;

    const elapsedTime = currentTime - startDate;

    let progress =
        (elapsedTime / totalTime) * 100;

    progress = Math.max(
        0,
        Math.min(100, progress)
    );

    progressFill.style.width =
        progress.toFixed(1) + "%";

    progressPercent.textContent =
        Math.floor(progress) + "%";

}


/* =================================
   5. WHATSAPP SHARE FUNCTION
================================= */

const shareButton =
    document.getElementById("share-button");

shareButton.addEventListener("click", function() {

    const websiteLink = window.location.href;

    const message =
        "🔥 NYAGUHWE OUTING 2026 🔥\n\n" +

        "CHITUNGWIZA CITADEL\n\n" +

        "The countdown is officially ON! 😎\n\n" +

        "🌴 Destination: Nyaguhwe Resort\n" +

        "📅 Date: 2 December 2026\n\n" +

        "Watch the live countdown here:\n" +

        websiteLink + "\n\n" +

        "Don't miss the excitement! 🎉";


    const whatsappLink =
        "https://wa.me/?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappLink,
        "_blank",
        "noopener,noreferrer"
    );

});


/* =================================
   6. CONFETTI ANIMATION
================================= */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    const colors = [
        "#ffd43b",
        "#e63946",
        "#ffffff",
        "#25d366",
        "#3288df"
    ];

    for (let i = 0; i < 35; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(
                Math.random() * colors.length
            )];

        piece.style.width =
            (Math.random() * 8 + 5) + "px";

        piece.style.height =
            (Math.random() * 12 + 5) + "px";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.animationDuration =
            (Math.random() * 2 + 3) + "s";

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);

    }

}


/* =================================
   7. START THE WEBSITE
================================= */

// Run countdown immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// Celebration when page opens
createConfetti();