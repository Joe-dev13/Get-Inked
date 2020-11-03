var map;
var service;
var infowindow;
var shop = [];
var shopHTML;
var geocoder;
var shopsData = [];

function initialize() {
	shopHTML = document.getElementById("shops");
	infowindow = new google.maps.InfoWindow();

	axios
		.post(
			"https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDKyAduEhiDy4sefp1ViZ1Ztq7LoEguVt0"
		)
		.then(function (response) {
			var geolocation = new google.maps.LatLng(
				response.data.location.lat,
				response.data.location.lng
			);
			map = new google.maps.Map(document.getElementById("map"), {
				center: geolocation,
				zoom: 13,
			});
			var request = {
				location: geolocation,
				radius: "500",
				query: "tattoo shops",
			};
			service = new google.maps.places.PlacesService(map);
			service.textSearch(request, callback);
		})
		.catch(function () {
			const us = {center: {lat: 37.1, lng: -95.7}, zoom: 3};
			map = new google.maps.Map(document.getElementById("map"), {
				zoom: us.zoom,
				center: us.center,
			});
			swal(
				"Sorry",
				"Unable to retrieve your location. Please type your address!",
				"error"
			);
		});
	typeAddress();
}

function typeAddress() {
	const geocoder = new google.maps.Geocoder();
	document.getElementById("location").addEventListener("click", () => {
		geocodeAddress(geocoder, map);
	});
	var input = document.getElementById("address");
	var options = {
		types: ["address"],
	};

	autocomplete = new google.maps.places.Autocomplete(input, options);

	function geocodeAddress(geocoder, resultsMap) {
		var address = document.getElementById("address").value;

		geocoder.geocode({address: address}, function (results, status) {
			if (status == "OK") {
				axios
					.get(
						`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${results[0].place_id}&key=AIzaSyDKyAduEhiDy4sefp1ViZ1Ztq7LoEguVt0`
					)
					.then(function (response) {
						var geolocation = new google.maps.LatLng(
							response.data.result.geometry.location.lat,
							response.data.result.geometry.location.lng
						);
						map = new google.maps.Map(
							document.getElementById("map"),
							{
								center: geolocation,
								zoom: 15,
							}
						);

						var request = {
							location: geolocation,
							radius: "500",
							query: "tattoo shops",
						};
						service = new google.maps.places.PlacesService(map);
						service.textSearch(request, callback);
					});
			} else {
				alert(
					"Geocode was not successful for the following reason: " +
						status
				);
			}
		});
	}
}

function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		var shops = results.map(function (currentShop, index) {
			var place = currentShop;
			createMarker(currentShop);

			return `<div id="card-wrapper">
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${place.name}</h5>
                    <p class="card-text">${place.formatted_address}</p>
                    <p class="card-text">Ratings: ${place.user_ratings_total}</p>
                    <div class="card-btns">
                      <a href="#" onclick="renderLocations();locate(shopsData[${index}])" class="btn btn-dark">Locate</a>
                      <a href="#" onclick="renderPictures();getPhotos(shopsData[${index}])" class="btn btn-dark">Photos</a>
                      <a href="#" onclick="renderReviews();renderForms()" class="btn btn-dark" id="reviewButton">Leave a Review</a>
                    </div>
                  </div>
                </div>
              </div>`;
		});
		map.setCenter(results[0].geometry.location);
		shopHTML.innerHTML = shops.join("");

		shopsData = results;
	}
}

function createMarker(place) {
	var iconBase = "images/marker.png";
	let marker = new google.maps.Marker({
		map,
		position: place.geometry.location,
		animation: google.maps.Animation.DROP,
		icon: iconBase,
		// icon: 'https://img.icons8.com/color/48/000000/tattoo-machine.png'
	});

	google.maps.event.addListener(marker, "click", () => {
		infowindow.setContent(place.name);
		infowindow.open(map, marker);
	});
}

function locate(shop) {
	map.setCenter(shop.geometry.location);
}
