document.getElementById('celebrate-button').addEventListener('click', function() {
    const message = document.getElementById('congratulation-message');
    message.textContent = "🎉🎉 Hooray! You did it MadamJI! happy ayio??? 🎉🎉";
    message.style.color = "#ff6347";
    message.style.fontSize = "1.5em";
    message.style.transition = "all 0.5s ease";

    // Trigger confetti effect
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Add a glowing effect to the heading
    const heading = document.getElementById('congrats-heading');
    heading.style.animation = 'glow 1.5s infinite alternate';

    // Add a background animation
    document.body.style.background = "linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb, #a6c1ee, #fbc2eb)";
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradientBG 10s ease infinite";

    // Add a fun sound effect (optional)
    const audio = new Audio('://assets.mixkit.co/active_storage/sfx/3003/3003-preview.mp3');
    audio.play();
});

// Add CSS for glowing effect
const style = document.createElement('style');
style.innerHTML = `
    @keyframes glow {
        0% {
            text-shadow: 0 0 5px #28a745, 0 0 10px #28a745, 0 0 20px #28a745;
        }
        100% {
            text-shadow: 0 0 10px #28a745, 0 0 20px #28a745, 0 0 40px #28a745;
        }
    }

    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;
document.head.appendChild(style);