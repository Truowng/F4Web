const toggleContainer = document.querySelector(".toggle-container h4");
const toggleEl = document.querySelector(".toggle");

toggleContainer.addEventListener("click", () => {
  toggleEl.style.display == "block"
    ? (toggleEl.style.display = "none")
    : (toggleEl.style.display = "block");
});
