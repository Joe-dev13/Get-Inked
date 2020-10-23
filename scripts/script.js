var map;
var service;
var infowindow;
var shop = [];
var shopHTML;

function initialize() {
  shopHTML = document.getElementById('shops');
  infowindow = new google.maps.InfoWindow();
  var houston = new google.maps.LatLng(29.749907,-95.3584216);

  map = new google.maps.Map(document.getElementById('map'), {
      center: houston,
      zoom: 15
    });

  var request = {
    location: houston,
    radius: '500',
    query: 'tattoo shops'
  };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function saveLocation(lat,lng){
    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var shops = results.map(function(currentShop){
      var place = currentShop;
      createMarker(currentShop);
      
      return `<div id="card-wrapper">
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${place.name}</h5>
                    <p class="card-text">${place.formatted_address}</p>
                    <p class="card-text">${place.user_ratings_total}</p>
                    <a href="#" onclick="saveLocation(${place.geometry.location.lat},${place.geometry.location.lng});initMap()"class="btn btn-dark">Shop Details</a>
                  </div>
                </div>
              </div>`
      })
    map.setCenter(results[0].geometry.location);
    shopHTML.innerHTML = shops.join('');
  }
}

function createMarker(place) {
    const marker = new google.maps.Marker({map,position: place.geometry.location,});
    google.maps.event.addListener(marker, "click", () => {
      infowindow.setContent(place.name);
      infowindow.open(map, marker);
    });
  }
