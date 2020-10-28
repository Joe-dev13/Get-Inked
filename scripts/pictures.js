var galleryImage = document.querySelector(".gallery");

fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJew3ocLvDQIYRnfTHmx92KnM&key=AIzaSyDKyAduEhiDy4sefp1ViZ1Ztq7LoEguVt0")
.then(response => response.json())
.then(data => {
    var photos = data.result.photos;
    var imageHtml = photos.map(photo => 
        `<div id="card-wrapper">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=AIzaSyDKyAduEhiDy4sefp1ViZ1Ztq7LoEguVt0"></img>
                </div>
            </div>
        </div>`
    ).join("");
    galleryImage.innerHTML = imageHtml;
});

// fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photo.photo_reference + "&key=AIzaSyDKyAduEhiDy4sefp1ViZ1Ztq7LoEguVt0")

