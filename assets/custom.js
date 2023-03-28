function step_1(event) {
    const step_1_section = document.querySelector(".step_1");
    step_1_section.style.display = "none";
    event.preventDefault()
    
  }
const step_1_btn = document.querySelector(".button_image-text");
step_1_btn.addEventListener("click",step_1, false);