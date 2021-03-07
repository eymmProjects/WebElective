const left = document.querySelector('.left');
const center = document.querySelector('.right');
const right = document.querySelector('.center');
const poemToggle = document.querySelector('.poem-toggler');
const poemContainer = document.getElementById('poem-container');
const btnContainer = document.getElementById('btn-container');


btnContainer.addEventListener('click', e => {
    // e.preventDefault();
    if (e.target.classList.contains('center') || e.target.classList.contains('bar-center')) {
        poemContainer.style.textAlign = "center";
        // console.log(e.target);
    } else if (e.target.classList.contains('left') || e.target.classList.contains('bar-left')) {
        poemContainer.style.textAlign = "left";
        // console.log(e.target);

    } else if (e.target.classList.contains('right') || e.target.classList.contains('bar-right')) {
        poemContainer.style.textAlign = "right";
        // console.log(e.target);
    }
});