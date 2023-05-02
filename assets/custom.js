

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
    const selectedButton = document.querySelector(".column-item.selected");
    if (!selectedButton) {
      alert("Por favor, selecciona un botón antes de continuar");
      event.preventDefault()
      return false;
    }
    
    step_1_section.style.display = "none";
    step_2.style.display = "block"; 

    const productName1 = localStorage.getItem('product1');
    if (productName1) {
      const elementsToHide = document.querySelectorAll(`[data-product="${productName1}"]`); // Seleccionar los elementos HTML con el atributo data-text que coincide con el nombre del producto
      elementsToHide.forEach(function(element) {
        element.style.display = "block"; // Ocultar los elementos seleccionados
      });
    }
    event.preventDefault()
  }

  function step_2(event) {
    const step_2_section = document.querySelector("#step_2");
    const step_3 = document.querySelector("#step_3");
    step_2_section.style.display = "none";
    step_3.style.display = "block"; 
    const productName2 = localStorage.getItem('product2');
    if (productName2) {
      const elementsToHide = document.querySelectorAll(`[data-product="${productName2}"]`); // Seleccionar los elementos HTML con el atributo data-text que coincide con el nombre del producto
      elementsToHide.forEach(function(element) {
        element.style.display = "block"; // Ocultar los elementos seleccionados
      });
    }
    event.preventDefault()
  }

  function step_3(event) {

    const step_3_section = document.querySelector("#step_3");
    const step_4 = document.querySelector("#step_4");
    step_3_section.style.display = "none";
    step_4.style.display = "block"; 
    const productName3 = localStorage.getItem('product3');
    if (productName3) {
      const elementsToHide = document.querySelectorAll(`[data-product="${productName3}"]`); // Seleccionar los elementos HTML con el atributo data-text que coincide con el nombre del producto
      elementsToHide.forEach(function(element) {
        element.style.display = "block"; // Ocultar los elementos seleccionados
      });
    }
    event.preventDefault()
  }

  function step_4(event) {
    const step_4_section = document.querySelector("#step_4");
    const step_5 = document.querySelector("#step_5");
    step_4_section.style.display = "none";
    step_5.style.display = "block"; 
    const productName4 = localStorage.getItem('product4');
    if (productName4) {
      const elementsToHide = document.querySelectorAll(`[data-product="${productName4}"]`); // Seleccionar los elementos HTML con el atributo data-text que coincide con el nombre del producto
      elementsToHide.forEach(function(element) {
        element.style.display = "block"; // Ocultar los elementos seleccionados
      });
    }
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

// Step 4
const step_4_btn = document.querySelector(".button_step_4");
step_4_btn.addEventListener("click",step_4);

// Add selected class
// Get references to the button and the div
const collink = document.querySelectorAll(".column-link");
const colitem = document.querySelectorAll(".column-item");



// Add a click event listener to the button

const botones = document.querySelectorAll('.column-item');
let selectedButton = null;

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Si ya hay un botón seleccionado, lo deseleccionamos
    if (selectedButton) {
      selectedButton.classList.remove('selected');
    }
    // Marcamos el botón actual
    boton.classList.add('selected');
    selectedButton = boton;
    
    const product1 = boton.dataset.product1; 
    const product2 = boton.dataset.product2; 
    const product3 = boton.dataset.product3; 
    const product4 = boton.dataset.product4; 
    if (product1) {
      localStorage.setItem('product1', product1);
    }
    if (product2) {
      localStorage.setItem('product2', product2);
    }

    if (product3) {
      localStorage.setItem('product3', product3);
    }

    if (product4) {
      localStorage.setItem('product4', product4);
    }
  });
});










