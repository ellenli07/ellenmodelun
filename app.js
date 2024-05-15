//sets a variable for hamMenu
const hamMenu = document.querySelector('.ham-menu');

//sets a variable for the offScreenMenu
const offScreenMenu = document.querySelector('.off-screen-menu');

//when the user clicks the hamburger menu, the active class is toggled for both the hamMenu and the offScreenMenu
hamMenu.addEventListener('click',() =>{
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
});