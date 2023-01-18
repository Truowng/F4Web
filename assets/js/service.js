const serviceTagsPC = document.querySelectorAll("#service .service-tag-item");
const serviceCardsPC = document.querySelectorAll("#service .service-card-item");
const serviceTagsM = document.querySelectorAll("#m-service .service-tag-item");
const serviceCardsM = document.querySelectorAll(
  "#m-service .service-card-item"
);

serviceTagsPC.forEach((serviceTag, index) => {
  serviceTag.addEventListener("click", () => {
    document
      .querySelector("#service .service-tag-item.active")
      .classList.remove("active");
    serviceTag.classList.add("active");
    let title = serviceTag.querySelector("p").innerText.toLowerCase();
    serviceCardsPC.forEach((serviceCard) => {
      if (serviceCard.querySelector("h4").innerText.toLowerCase() == title) {
        if (index == 0) {
          serviceCard.style.left = "0%";
          document.querySelector(
            "#service .service-card-item:nth-child(2)"
          ).style.left = "85%";
          document.querySelector(
            "#service .service-card-item:nth-child(3)"
          ).style.left = "88%";
          document.querySelector(
            "#service .service-card-item:nth-child(4)"
          ).style.left = "91%";
          document.querySelector(
            "#service .service-card-item:nth-child(5)"
          ).style.left = "94%";
        } else if (index == 1) {
          serviceCard.style.left = "3%";
          document.querySelector(
            "#service .service-card-item:nth-child(1)"
          ).style.left = "0%";
          document.querySelector(
            "#service .service-card-item:nth-child(3)"
          ).style.left = "88%";
          document.querySelector(
            "#service .service-card-item:nth-child(4)"
          ).style.left = "91%";
          document.querySelector(
            "#service .service-card-item:nth-child(5)"
          ).style.left = "94%";
        } else if (index == 2) {
          serviceCard.style.left = "6%";
          document.querySelector(
            "#service .service-card-item:nth-child(1)"
          ).style.left = "0%";
          document.querySelector(
            "#service .service-card-item:nth-child(2)"
          ).style.left = "3%";
          document.querySelector(
            "#service .service-card-item:nth-child(4)"
          ).style.left = "91%";
          document.querySelector(
            "#service .service-card-item:nth-child(5)"
          ).style.left = "94%";
        } else if (index == 3) {
          serviceCard.style.left = "9%";
          document.querySelector(
            "#service .service-card-item:nth-child(1)"
          ).style.left = "0%";
          document.querySelector(
            "#service .service-card-item:nth-child(2)"
          ).style.left = "3%";
          document.querySelector(
            "#service .service-card-item:nth-child(3)"
          ).style.left = "6%";
          document.querySelector(
            "#service .service-card-item:nth-child(5)"
          ).style.left = "94%";
        } else if (index == 4) {
          serviceCard.style.left = "12%";
          document.querySelector(
            "#service .service-card-item:nth-child(1)"
          ).style.left = "0%";
          document.querySelector(
            "#service .service-card-item:nth-child(2)"
          ).style.left = "3%";
          document.querySelector(
            "#service .service-card-item:nth-child(3)"
          ).style.left = "6%";
          document.querySelector(
            "#service .service-card-item:nth-child(4)"
          ).style.left = "9%";
        }
      }
    });
  });
});

serviceTagsM.forEach((serviceTagM, index) => {
  serviceTagM.addEventListener("click", () => {
    document
      .querySelector("#m-service .service-tag-item.active")
      .classList.remove("active");
    serviceTagM.classList.add("active");
    let title = serviceTagM.querySelector("p").innerText.toLowerCase();
    serviceCardsM.forEach((serviceCardM) => {
      if (serviceCardM.querySelector("h4").innerText.toLowerCase() == title) {
        if (index == 0) {
          document
            .querySelector("#m-service .service-card-item.active")
            .classList.remove("active");
          serviceCardM.classList.add("active");

          document.querySelector(
            "#m-service .service-card-item:nth-child(2) "
          ).style.left = "0";
          document.querySelector(
            "#m-service .service-card-item:nth-child(2) "
          ).style.transform = "scale(0.95)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(2) "
          ).style.top = "calc(var(--top-dims) * 1)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(3) "
          ).style.left = "0";
          document.querySelector(
            "#m-service .service-card-item:nth-child(3) "
          ).style.transform = "scale(0.9)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(3) "
          ).style.top = "calc(var(--top-dims) * 2)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4) "
          ).style.left = "0";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4)"
          ).style.transform = "scale(0.85)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4)"
          ).style.top = "calc(var(--top-dims) * 3)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5) "
          ).style.left = "0";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5)"
          ).style.transform = "scale(0.8)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5)"
          ).style.top = "calc(var(--top-dims) * 4)";
        } else if (index == 1) {
          document
            .querySelector("#m-service .service-card-item.active")
            .classList.remove("active");
          serviceCardM.classList.add("active");
          document.querySelector(
            "#m-service .service-card-item:nth-child(1)"
          ).style.left = "150%";
          document.querySelector(
            "#m-service .service-card-item:nth-child(3) "
          ).style.left = "0";
          document.querySelector(
            "#m-service .service-card-item:nth-child(3) "
          ).style.transform = "scale(0.95)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(3) "
          ).style.top = "calc(var(--top-dims) * 1)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4) "
          ).style.left = "0";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4) "
          ).style.transform = "scale(0.9)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4) "
          ).style.top = "calc(var(--top-dims) * 2)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5) "
          ).style.left = "0";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5)"
          ).style.transform = "scale(0.85)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5)"
          ).style.top = "calc(var(--top-dims) * 3)";
        } else if (index == 2) {
          document
            .querySelector("#m-service .service-card-item.active")
            .classList.remove("active");
          serviceCardM.classList.add("active");
          document.querySelector(
            "#m-service .service-card-item:nth-child(1)"
          ).style.left = "150%";
          document.querySelector(
            "#m-service .service-card-item:nth-child(2)"
          ).style.left = "-150%";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4) "
          ).style.left = "0";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4) "
          ).style.transform = "scale(0.95)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4) "
          ).style.top = "calc(var(--top-dims) * 1)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5) "
          ).style.left = "0";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5) "
          ).style.transform = "scale(0.9)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5) "
          ).style.top = "calc(var(--top-dims) * 2)";
        } else if (index == 3) {
          document
            .querySelector("#m-service .service-card-item.active")
            .classList.remove("active");
          serviceCardM.classList.add("active");
          document.querySelector(
            "#m-service .service-card-item:nth-child(1)"
          ).style.left = "150%";
          document.querySelector(
            "#m-service .service-card-item:nth-child(2)"
          ).style.left = "-150%";
          document.querySelector(
            "#m-service .service-card-item:nth-child(3)"
          ).style.left = "150%";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5) "
          ).style.transform = "scale(0.95)";
          document.querySelector(
            "#m-service .service-card-item:nth-child(5) "
          ).style.top = "calc(var(--top-dims) * 1)";
        } else if (index == 4) {
          document
            .querySelector("#m-service .service-card-item.active")
            .classList.remove("active");
          serviceCardM.classList.add("active");
          document.querySelector(
            "#m-service .service-card-item:nth-child(1)"
          ).style.left = "150%";
          document.querySelector(
            "#m-service .service-card-item:nth-child(2)"
          ).style.left = "-150%";
          document.querySelector(
            "#m-service .service-card-item:nth-child(3)"
          ).style.left = "150%";
          document.querySelector(
            "#m-service .service-card-item:nth-child(4)"
          ).style.left = "-150%";
        }
      }
    });
  });
});
