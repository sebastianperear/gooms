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
    const step_2 = document.querySelector("#step_2");
    step_1_section.style.display = "none";
    step_2.style.display = "block"; 
    event.preventDefault()
  }

  function step_2(event) {
    const step_2_section = document.querySelector("#step_2");
    const step_3 = document.querySelector("#step_3");
    step_2_section.style.display = "none";
    step_3.style.display = "block"; 
    event.preventDefault()
  }

  function step_3(event) {
    const step_3_section = document.querySelector("#step_3");
    const step_4 = document.querySelector("#step_4");
    step_3_section.style.display = "none";
    step_4.style.display = "block"; 
    event.preventDefault()
  }

  // Step 0 
const step_0_btn = document.querySelector(".button_image-text");
step_0_btn.addEventListener("click",step_0);

// Step 1
const step_1_btn = document.querySelector(".button_step_1");
step_1_btn.addEventListener("click",step_1);

// Step 2
const step_2_btn = document.querySelector(".button_step_2");
step_2_btn.addEventListener("click",step_2);
// Step 3
const step_3_btn = document.querySelector(".button_step_3");
step_3_btn.addEventListener("click",step_3);

// Add selected class
// Get references to the button and the div
const collink = document.querySelectorAll(".column-link");
const colitem = document.querySelectorAll(".column-item");



// Add a click event listener to the button
for (let i = 0; i < collink.length; i++) {
  collink[i].addEventListener("click", function(event) {
    colitem[i].classList.toggle("selected");
    event.preventDefault();
  });
}