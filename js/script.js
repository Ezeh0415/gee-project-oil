const baropen = document.getElementById('bar-open');
const barclose = document.getElementById('bar-close');
const navContainer = document.getElementById('navlinks');
const navlinks = document.getElementById('navlinks');


if(baropen.style.display = "block"){
    barclose.style.display = "none"
}

baropen.addEventListener('click', ()=>{
    navlinks.style.display = "block";
    setTimeout(() => {
      navContainer.style.right = "0";
      baropen.style.display = "none";
      barclose.style.display = "block";
    }, 20);
})

barclose.addEventListener("click", () => {
  navContainer.style.right = "-300px";
  baropen.style.display = "block";
  barclose.style.display = "none";
  setTimeout(()=>{navlinks.style.display = "none";}, 1000)
 
});





