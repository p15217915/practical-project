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

function initMap() {
  var uluru = {lat: 29.750760, lng: -95.3621};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
	center: uluru
  });
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
  }