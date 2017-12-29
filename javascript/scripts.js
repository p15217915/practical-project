(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false;
  function toggleMenu(){
    if (toggle) { 
      navMenu.classList.remove("drop-down"),
      toggle = false
    }
    else { 
      navMenu.classList.add("drop-down"),
      toggle = true
    }
  }

})();