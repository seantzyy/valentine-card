let currentPage = 1;

function nextPage() {
    if (currentPage < 4) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage++;
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
}

function confirmDate() {
    // Create celebration effect
    const button = event.target;
    button.innerHTML = 'Planning Complete! 🥰';
    button.style.background = 'linear-gradient(135deg, #32cd32, #90ee90)';

    // Add celebration hearts
    for (let i = 0; i < 20; i++) {
        createCelebrationHeart();
    }

    // Show final message
    setTimeout(() => {
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="font-size: 24px; margin-bottom: 15px;">🎉 Our Date is Set! 🎉</div>
            <div>JUST BRING YOURSELF BABY!</div>
            <div style="margin-top: 15px; font-size: 18px;">💕 Can't wait to see you! 💕</div>
        `;
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #d4af8c, #c9a876);
            color: white;
            padding: 30px 40px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
            box-shadow: 0 15px 40px rgba(212, 175, 140, 0.6);
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
            text-align: center;
            max-width: 400px;
        `;

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 4000);
    }, 800);
}

function createCelebrationHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = ['💖', '💕', '💗', '💝', '👑', '✨'][Math.floor(Math.random() * 6)];
    heart.style.cssText = `
        position: fixed;
        font-size: ${20 + Math.random() * 20}px;
        pointer-events: none;
        z-index: 1000;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        animation: celebrationFloat ${3 + Math.random() * 2}s ease-out forwards;
    `;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Add celebration animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes celebrationFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-120vh) rotate(${Math.random() * 720}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
