function responsiveMenuToggle() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("responsive");
    document.body.style.overflow = menu.classList.contains("responsive")? "hidden":"";
  }