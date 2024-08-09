let toggle_btn = document.getElementById("toggle_btn");
let toggle_btn_1 = document.querySelector(".toggle_btn");
let ul = document.querySelector("ul");
toggle_btn.addEventListener('click', () => {
    toggle_btn.classList.toggle("fa-bars")
    toggle_btn.classList.toggle("fa-x");
    toggle_btn_1.classList.toggle("rotate");
    ul.classList.toggle("active_ul");

})
