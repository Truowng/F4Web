const menuModal = document.querySelector("#header .m-menu .m-menu-modal");

const openMenu = () => {
  menuModal.style.transform = "translateX(0)";
};

const closeMenu = () => {
  menuModal.style.transform = "translateX(100%)";
};
