let profileHeader = document.querySelector(".profile__header");
let menu = document.querySelector(".menu");

profileHeader.onclick = () => {
    menu.classList.toggle('active')
}