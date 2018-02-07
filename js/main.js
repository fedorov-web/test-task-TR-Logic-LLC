var elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);

function classToggleLeft() {
    var elementL = document.getElementById("l-aside");
    elementL.classList.toggle("aside_visible");
}
function classToggleRight() {
    var elementR = document.getElementById("r-aside");
    elementR.classList.toggle("aside_visible");
}
document.querySelector('#left-a').addEventListener('click', classToggleLeft);
document.querySelector('#right-a').addEventListener('click', classToggleRight);