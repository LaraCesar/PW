
const batman = document.querySelector(".batman");
const cactu = document.querySelector(".cactu");

const jump = () => {
    batman.classList.add('jump')

    setTimeout(() => {
        batman.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const cactuPosition = cactu.offsetLeft;
    const batmanPosition = Number(window.getComputedStyle(batman).
    bottom.replace('px',''));

    if(cactuPosition <= 120 &&
        cactuPosition > 0 &&
        batmanPosition < 80) {
            
            cactu.style.animation = 'none';
            cactu.style.left = `${cactuPosition}px`;

            batman.style.animation = 'none';
            batman.style.bottom = ` ${batmanPosition}px`;

            batman.src = "./img/game-over.png";
            batman.style.width = `75px`;
            batman.style.marginLeft = `50px`;

        }

}, 10);

document.addEventListener('keydown', (e) => {
    if (e.key == 'j') {
    batman.classList.add('jump')

    setTimeout( () => {
            batman.classList.remove('jump')
    }, 500)
 }
}  
);