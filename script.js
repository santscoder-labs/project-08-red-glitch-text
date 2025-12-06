const glitch = document.getElementById("glitch")

function randomGlitch() {
    const before = glitch.querySelector("::before");
}

setInterval(() => {
    const before = glitch.style;
    const after = glitch.style;

    const random1 = Math.random() * 20 - 10;
    const random2 = Math.random() * 20 - 10;

    glitch.style.transform = `skew(${random1}deg) translateX(${random2}px)`;

    glitch.style.clipPath = `inset(${Math.random() * 20}px 0 ${Math.random() * 20}px 0)`;

    setTimeout(() => {
        glitch.style.transform = "none";
        glitch.style.clipPath = "inset(0 0 0)";
    }, 120);
}, 250);