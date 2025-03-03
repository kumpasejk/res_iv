document.addEventListener("DOMContentLoaded", function () {
    const signs = [
        { letter: "A", image: "images/signs/A.png", description: "Make a fist with your thumb resting on the side of your fingers." },
        { letter: "B", image: "images/signs/B.png", description: "Extend your fingers straight up while keeping your thumb against your palm." },
        { letter: "C", image: "images/signs/C.png", description: "Curve your fingers and thumb to form a 'C' shape." },
        { letter: "D", image: "images/signs/D.png", description: "Point your index finger straight up while touching your thumb to your middle finger." },
        { letter: "E", image: "images/signs/E.png", description: "Curl all your fingers towards your palm, with your thumb resting on top." },
        { letter: "F", image: "images/signs/F.png", description: "Touch the tip of your thumb and index finger to form a small circle." },
        { letter: "G", image: "images/signs/G.png", description: "Hold your index finger and thumb parallel, pointing sideways." },
        { letter: "H", image: "images/signs/H.png", description: "Extend your index and middle fingers while keeping the others folded." },
        { letter: "I", image: "images/signs/I.png", description: "Raise your pinky while keeping the other fingers folded." },
        { letter: "J", image: "images/signs/J.png", description: "Move your pinky in a 'J' shape in the air." },
        { letter: "K", image: "images/signs/K.png", description: "Extend your index and middle fingers in a 'V' shape, with your thumb touching the base." },
        { letter: "L", image: "images/signs/L.png", description: "Extend your index finger and thumb to form an 'L' shape." },
        { letter: "M", image: "images/signs/M.png", description: "Place your thumb under your first three fingers." },
        { letter: "N", image: "images/signs/N.png", description: "Place your thumb under your first two fingers." },
        { letter: "O", image: "images/signs/O.png", description: "Curve all fingers and thumb into an 'O' shape." },
        { letter: "P", image: "images/signs/P.png", description: "Form a 'K' shape but tilt your hand downward." },
        { letter: "Q", image: "images/signs/Q.png", description: "Form a 'G' shape but tilt your hand downward." },
        { letter: "R", image: "images/signs/R.png", description: "Cross your index and middle fingers." },
        { letter: "S", image: "images/signs/S.png", description: "Make a fist with your thumb crossing in front of your fingers." },
        { letter: "T", image: "images/signs/T.png", description: "Tuck your thumb between your index and middle fingers." },
        { letter: "U", image: "images/signs/U.png", description: "Extend your index and middle fingers together, keeping the others folded." },
        { letter: "V", image: "images/signs/V.png", description: "Extend your index and middle fingers in a 'V' shape." },
        { letter: "W", image: "images/signs/W.png", description: "Extend your index, middle, and ring fingers." },
        { letter: "X", image: "images/signs/X.png", description: "Curl your index finger like a hook." },
        { letter: "Y", image: "images/signs/Y.png", description: "Extend your thumb and pinky, keeping the other fingers folded." },
        { letter: "Z", image: "images/signs/Z.png", description: "Move your index finger to draw a 'Z' in the air." },
        { letter: "HELLO", image: "images/signs/HELLO!.png", description: "Move your index finger to draw a 'Z' in the air." },
        { letter: "ILY", image: "images/signs/ILY.png", description: "Move your index finger to draw a 'Z' in the air." },
    ];

    let currentIndex = 0;

    const signImage = document.getElementById("sign-image");
    const signTitle = document.getElementById("sign-title");
    const signDescription = document.getElementById("sign-description");

    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function updateSign(index) {
        signImage.src = signs[index].image;
        signTitle.textContent = signs[index].letter;
        signDescription.textContent = signs[index].description;
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSign(currentIndex);
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < signs.length - 1) {
            currentIndex++;
            updateSign(currentIndex);
        }
    });

    // Initialize first sign
    updateSign(currentIndex);
});
