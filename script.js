document.addEventListener("DOMContentLoaded", function () {
  const colorContainer = document.querySelector(".co-container");
  const addColorButton = document.getElementById("add-color");
  const generateButton = document.getElementById("generate");
  const angleControl = document.querySelector(".angle-control");

  const gradientStyleSelect = document.getElementById("gradient-style");

  const gradientPreview = document.getElementById("gradient-preview");

  addColorButton.addEventListener("click", addColorPicker);
  generateButton.addEventListener("click", generateGradient);
  gradientStyleSelect.addEventListener("change", updateControls);


  function updateControls() {
    const selectedGradientStyle = gradientStyleSelect.value;
    console.log(selectedGradientStyle);
    if (selectedGradientStyle === "conic") {
      angleControl.style.display = "block";
    } else {
      angleControl.style.display = "none";
    }
  }

  function addColorPicker() {
    const newColorInput = document.createElement("input");
    newColorInput.type = "color";
    newColorInput.classList.add("color-input");
    // colorContainer.insertBefore(newColorInput, addColorButton);
    colorContainer.appendChild(newColorInput);
  }

  function generateGradient() {
    const colorInputs = document.querySelectorAll(".color-input");
    const colorValues = Array.from(colorInputs).map(input => input.value);
    const selectedGradientStyle = gradientStyleSelect.value;

    let gradientStyle;
    if (selectedGradientStyle === "linear") {
      gradientStyle = `linear-gradient(to right, ${colorValues.join(", ")})`;
    } else if (selectedGradientStyle === "radial") {
      gradientStyle = `radial-gradient(circle, ${colorValues.join(", ")})`;
    } else if (selectedGradientStyle === "conic") {
      const angle = document.getElementById("angle").value;
      gradientStyle = `conic-gradient(from ${angle}deg , ${colorValues.join(", ")})`;
    }

    // const gradientStyle = `linear-gradient(to right, ${colorValues.join(", ")})`;
    console.log(gradientStyle);
    gradientPreview.style.background = gradientStyle;

    // Set the generated CSS code in the textarea
    const cssCodeTextarea = document.getElementById("css-code-textarea");
    cssCodeTextarea.value = `background: ${gradientStyle};`;
  }
});
