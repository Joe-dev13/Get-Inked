var map;
var service;
var infowindow;
var shop = [];
var shopHTML;

function initialize() {
  shopHTML = document.getElementById('shops');
  infowindow = new google.maps.InfoWindow();
  const locationButton = document.getElementById('location');
  
  const res = axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDKyAduEhiDy4sefp1ViZ1Ztq7LoEguVt0')
    .then(function(response){
      var geolocation = new google.maps.LatLng(response.data.location.lat,response.data.location.lng);
            map = new google.maps.Map(document.getElementById('map'), {
        center: geolocation,
        zoom: 15
      });
    
      var request = {
        location: geolocation,
        radius: '500',
        query: 'tattoo shops'
      };
      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);
    }).catch(function(error){
      console.log(error);
    });
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    var shops = results.map(function(currentShop){
      var place = currentShop;
      createMarker(currentShop);
      
      return `
            <div id="card-wrapper">
                <div class="card card-style">
                  <div class="card-body">
                    <h5 class="card-title">${place.name}</h5>
                    <p class="card-text">${place.formatted_address}</p>
                    <p class="card-text">${place.user_ratings_total}</p>
                    <a href="#" onclick="saveLocation(${place.geometry.location.lat},${place.geometry.location.lng});initMap()"class="btn btn-dark">Shop Details</a>
                  </div>
                </div>
              </div>
        `
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
