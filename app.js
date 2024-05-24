//sets a variable for hamMenu
const hamMenu = document.querySelector('.ham-menu');

//sets a variable for the offScreenMenu
const offScreenMenu = document.querySelector('.off-screen-menu');

//when the user clicks the hamburger menu, the active class is toggled for both the hamMenu and the offScreenMenu
hamMenu.addEventListener('click',() =>{
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
});

//image slider
//selects all images in the slider
const slides=document.querySelectorAll(".slides img");
//sets the first sldide index to 0 (the first slide)
let slideIndex = 0;
//the interval id set to null
let intervalId=null;

//calls the function immediately once the DOM content loads
document.addEventListener("DOMContentLoaded", initializeSlider);

//Populates browser with first image
function initializeSlider(){
	//Code wrapped will only occur if there are slides to show
	if(slides.length>0){
		//Adds the class displaySlide, so that the slide displays. 
		slides[slideIndex].classList.add("displaySlide");
		//shows the next slide after 5 seconds
		intervalId = setInterval(nextSlide, 5000);
	}
	
}
//A function that shows a slide, with the index of the desired slide as a parameter
function showSlide(index){
	//if the index is equal to or larger than the number of slides 
	if(index>=[slides.length]){
		//resets the index to the beginning
		slideIndex=0;
	}
	//if the index is smaller than 0 
	else if(index<0){
		//sets the index to the last sllide
		slideIndex=slides.length-1;
	}
	
	//Removes displaySlide class so that the slide does not display anymore
	slides.forEach(slide => {
		slide.classList.remove("displaySlide");
	});
	//Displays the next slide
	slides[slideIndex].classList.add("displaySlide");
}
//function is called when the back button is pressed
function prevSlide(){
	//increment the index by -1
	slideIndex--;
	showSlide(slideIndex);
}
//functin is called when the forward button is pressed
function nextSlide(){
	//increases the index of the slide by 1
	slideIndex++;
	//calls the showSlide function with the new, incremented index
	showSlide(slideIndex);
}