const serviceTags = document.querySelectorAll(".service-tag-item");
const serviceCards = document.querySelectorAll(".service-card-item");

serviceTags.forEach((serviceTag, index) => {
  serviceTag.addEventListener("click", () => {
    document
      .querySelector(".service-tag-item.active")
      .classList.remove("active");
    serviceTag.classList.add("active");
    let title = serviceTag.querySelector("p").innerText.toLowerCase();
    serviceCards.forEach((serviceCard) => {
      if (serviceCard.querySelector("h4").innerText.toLowerCase() == title) {
        if (index == 0) {
          serviceCard.style.left = "0%";
          document.querySelector(".service-card-item:nth-child(2)").style.left =
            "85%";
          document.querySelector(".service-card-item:nth-child(3)").style.left =
            "88%";
          document.querySelector(".service-card-item:nth-child(4)").style.left =
            "91%";
          document.querySelector(".service-card-item:nth-child(5)").style.left =
            "94%";
        } else if (index == 1) {
          serviceCard.style.left = "3%";
          document.querySelector(".service-card-item:nth-child(1)").style.left =
            "0%";
          document.querySelector(".service-card-item:nth-child(3)").style.left =
            "88%";
          document.querySelector(".service-card-item:nth-child(4)").style.left =
            "91%";
          document.querySelector(".service-card-item:nth-child(5)").style.left =
            "94%";
        } else if (index == 2) {
          serviceCard.style.left = "6%";
          document.querySelector(".service-card-item:nth-child(1)").style.left =
            "0%";
          document.querySelector(".service-card-item:nth-child(2)").style.left =
            "3%";
          document.querySelector(".service-card-item:nth-child(4)").style.left =
            "91%";
          document.querySelector(".service-card-item:nth-child(5)").style.left =
            "94%";
        } else if (index == 3) {
          serviceCard.style.left = "9%";
          document.querySelector(".service-card-item:nth-child(1)").style.left =
            "0%";
          document.querySelector(".service-card-item:nth-child(2)").style.left =
            "3%";
          document.querySelector(".service-card-item:nth-child(3)").style.left =
            "6%";
          document.querySelector(".service-card-item:nth-child(5)").style.left =
            "94%";
        } else if (index == 4) {
          serviceCard.style.left = "12%";
          document.querySelector(".service-card-item:nth-child(1)").style.left =
            "0%";
          document.querySelector(".service-card-item:nth-child(2)").style.left =
            "3%";
          document.querySelector(".service-card-item:nth-child(3)").style.left =
            "6%";
          document.querySelector(".service-card-item:nth-child(4)").style.left =
            "9%";
        }
      }
    });
  });
});
