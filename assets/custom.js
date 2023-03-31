function step_0(event) {
  
  const step_0_section_image = document.querySelector("#step0");
  const step_0_section_title = document.querySelector("#step0_title");
  const step_0_btn = document.querySelector("#step0_btn");
  const step_1 = document.querySelector("#step_1");
  step_0_btn.style.display = "none"; 
  step_0_section_image.style.display = "none";  
  step_0_section_title.style.display = "none"; 
  step_1.style.display = "block"; 
  event.preventDefault() 

}

function step_1(event) {
  
    const step_1_section = document.querySelector("#step_1");
    step_1_section.style.display = "none";
    event.preventDefault()
  }

  // Step 0 
const step_0_btn = document.querySelector(".button_image-text");
step_0_btn.addEventListener("click",step_0);

// Add selected class
const column_link = document.querySelector(".column-link");
column_link.addEventListener('click', function (event) {
  console.log("s")
column_link.classList.add("selected")

	// Don't follow the link
	event.preventDefault();

}, false);