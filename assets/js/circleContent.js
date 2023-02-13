const pointHeadings = document.querySelectorAll("#point .point-heading");
const pointContents = document.querySelectorAll("#point .point-content-item");

pointHeadings.forEach((pointHeading, index) => {
  pointHeading.addEventListener("click", () => {
    document.querySelector(".point-heading.active").classList.remove("active");
    pointHeading.classList.add("active");
    document
      .querySelector(".point-content-item.active")
      .classList.remove("active");
    pointContents[index].classList.add("active");
  });
});
