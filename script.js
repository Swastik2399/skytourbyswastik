document.getElementById("cloudGate").addEventListener("click", function() {
    // Create thunder effect
    document.body.style.background = '#000'; // Darken the screen
    let thunderSound = new Audio('https://www.soundjay.com/button/beep-07.wav'); // Example sound
    thunderSound.play();

    // Trigger cloud gate animation
    let gate = document.getElementById("cloudGate");
    let skyScene = document.getElementById("skyScene");

    gate.style.transition = "opacity 2s";
    gate.style.opacity = "0";

    setTimeout(() => {
        gate.style.display = "none"; // Hide the gate
        skyScene.classList.remove("hidden"); // Show the sky scene
    }, 2000);
});
