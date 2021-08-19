const head=document.querySelector(".header__head");
const menu=document.querySelector(".header__menu");
const navbar = document.querySelector(".header__right--img");
const headerCross=document.querySelector(".header__item--cross");


navbar.addEventListener("click",()=>{
    head.classList.add("header__head--active");
    menu.classList.add("header__menu--active");
})

headerCross.addEventListener("click",()=>{
    head.classList.remove("header__head--active");
    menu.classList.remove("header__menu--active");
})




const images = document.querySelectorAll(".gallery__img");
const modal = document.querySelector(".gallery__modal");
const caption =document.querySelector(".gallery__modal--caption");
const imageContent = document.querySelector(".gallery__modal--img");

const cross = document.querySelector(".gallery__modal--cross");

images.forEach(image => {
    image.addEventListener("click",()=>{
        modal.style.display="block";
        caption.innerHTML = image.alt;
        imageContent.src=image.src;
    })

    
})

cross.addEventListener('click',()=>{
    modal.style.display="none";
})