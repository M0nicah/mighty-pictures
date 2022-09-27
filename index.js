import jump from 'jump.js'
const btn = document.getElementById("btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");

})

jump('.pricing',{
  duration: 1000,
  offset: 0,
  callback: undefined,
  easing: easeInOutQuad,
  a11y: false
})


const node = document.querySelector('.target')

jump(node)

// passing a CSS selector
// the element referenced by the selector is determined using document.querySelector

jump('.target')