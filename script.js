let tankLevel = 75;
const tankCapacity = 10000;
let leakageDetected = false;


function changeTank(amount) {

    tankLevel += amount;

    if (tankLevel > 100) {
        tankLevel = 100;
    }

    if (tankLevel < 0) {
        tankLevel = 0;
    }

    updateTank();
}


function updateTank() {

    const progressBar = document.getElementById("progressBar");
    const percentage = document.getElementById("percentage");
    const tankInfo = document.getElementById("tankInfo");
    const tankStatusText = document.getElementById("tankStatusText");
    const tankDot = document.getElementById("tankDot");

    const waterAmount = Math.round(
        (tankLevel / 100) * tankCapacity
    );

    progressBar.style.width = tankLevel + "%";

    percentage.textContent = tankLevel + "%";

    tankInfo.textContent =
        waterAmount.toLocaleString() +
        " L stored out of " +
        tankCapacity.toLocaleString() +
        " L";


    if (tankLevel >= 90) {

        tankStatusText.textContent =
            "Warning: Tank is almost full";

        tankDot.className = "status-dot yellow";

    } else if (tankLevel <= 20) {

        tankStatusText.textContent =
            "Warning: Tank level is low";

        tankDot.className = "status-dot red";

    } else {

        tankStatusText.textContent =
            "Water level is normal";

        tankDot.className = "status-dot green";
    }
}


function testLeakage() {

    const leakStatus =
        document.getElementById("leakStatus");

    const leakMessage =
        document.getElementById("leakMessage");

    const leakDescription =
        document.getElementById("leakDescription");

    const leakStatusText =
        document.getElementById("leakStatusText");

    const leakDot =
        document.getElementById("leakDot");


    leakageDetected = !leakageDetected;


    if (leakageDetected) {

        leakStatus.className =
            "leak-status warning";

        leakStatus.innerHTML =
            "<span></span> Possible Leakage";

        leakMessage.textContent =
            "Possible water leakage detected";

        leakDescription.textContent =
            "Unusual water flow detected. Inspection is recommended.";

        leakStatusText.textContent =
            "Possible leakage detected";

        leakDot.className =
            "status-dot red";

    } else {

        leakStatus.className =
            "leak-status normal";

        leakStatus.innerHTML =
            "<span></span> No Leakage";

        leakMessage.textContent =
            "Water flow is operating normally";

        leakDescription.textContent =
            "No unusual water flow has been detected.";

        leakStatusText.textContent =
            "No leakage detected";

        leakDot.className =
            "status-dot green";
    }
}