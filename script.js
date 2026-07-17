// ================================
// LOAD DATA
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // Page Title
    document.getElementById("title").textContent = award.title;

    // Trophy Image
    document.getElementById("awardImage").src = award.image;

    // Website (optional)
    if (award.website) {
        document.getElementById("website").textContent = award.website;
    }

    // Summary
    document.getElementById("summary").textContent = award.summary;

    // Award Details
    loadDetails();

});


// ================================
// CREATE DETAILS TABLE
// ================================

function loadDetails() {

    const detailsContainer = document.getElementById("details");

    detailsContainer.innerHTML = "";

    award.details.forEach(detail => {

        const row = document.createElement("div");
        row.className = "detail-row";

        row.innerHTML = `

            <div class="detail-label">
                ${detail.label}
            </div>

            <div class="detail-value">
                ${detail.value}
            </div>

        `;

        detailsContainer.appendChild(row);

    });

}


// ================================
// TEXT TO SPEECH
// ================================

const button = document.getElementById("listenBtn");

let speaking = false;

button.addEventListener("click", () => {

    // Stop if already speaking
    if (speechSynthesis.speaking) {

        speechSynthesis.cancel();

        speaking = false;

        button.innerHTML =
            `<i class="fa-solid fa-volume-high"></i> Listen Summary`;

        return;

    }

    const speech = new SpeechSynthesisUtterance();

    speech.text = award.summary;

    speech.lang = "en-IN";

    speech.rate = 0.9;

    speech.pitch = 1;

    speech.volume = 1;

    speaking = true;

    button.innerHTML =
        `<i class="fa-solid fa-stop"></i> Stop`;

    speech.onend = () => {

        speaking = false;

        button.innerHTML =
            `<i class="fa-solid fa-volume-high"></i> Listen Summary`;

    };

    speech.onerror = () => {

        speaking = false;

        button.innerHTML =
            `<i class="fa-solid fa-volume-high"></i> Listen Summary`;

    };

    speechSynthesis.speak(speech);

});


// ================================
// STOP SPEECH WHEN USER LEAVES PAGE
// ================================

window.addEventListener("beforeunload", () => {

    speechSynthesis.cancel();

});
