

const navList = document.querySelector('.list-nav');
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

console.log(navList, menuBtn, closeBtn)

menuBtn.addEventListener('click', () => {
    navList.style.right = "0"
})

closeBtn.addEventListener('click', () => {
    navList.style.right = "-250px"
})

