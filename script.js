document.getElementById("cloudGate").addEventListener("click", function() {
    // Thunder sound (replace with your own if necessary)
    let thunderSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
    thunderSound.play();

    // Hide the gate and show sky scene after transition
    let gate = document.getElementById("cloudGate");
    let skyScene = document.getElementById("skyScene");

    gate.style.transition = "opacity 2s";
    gate.style.opacity = "0"; // Fade out the gate

    setTimeout(() => {
        gate.style.display = "none"; // Hide the gate completely
        skyScene.classList.remove("hidden"); // Show the sky scene
    }, 2000);
});
