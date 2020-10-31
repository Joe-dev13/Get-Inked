var galleryImage = document.querySelector(".gallery");

function getPictures(shop) {
    fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=" + shop.place_id + "&key=AIzaSyDKyAduEhiDy4sefp1ViZ1Ztq7LoEguVt0")
    .then(response => response.json())
    .then(data => {
        var photos = data.result.photos;
        var imageHtml = photos.map(photo => 
            `<div id="card-wrapper">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <img class="shop-picture" src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=${photo.photo_reference}&key=AIzaSyDKyAduEhiDy4sefp1ViZ1Ztq7LoEguVt0"></img>
                    </div>
                </div>
            </div>`
          ).join("");
        galleryImage.innerHTML = imageHtml;
    });
};

axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6a71588541dfa4d70b6c0c888cb79f94&text=tattoo+ideas&tags=tattoo+ideas&max_upload_date=2020-08-01&format=json&nojsoncallback=1')
.then(function(response){
    console.log(response);
    var photos = response.data.photos.photo;
    var imageHtml = photos.map(function(currentPhoto){
      return `<div id="card-wrapper">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <img class="shop-picture" src="https://live.staticflickr.com/${currentPhoto.server}/${currentPhoto.id}_${currentPhoto.secret}.jpg"></img>
                    </div>
                </div>
              </div>`
     }).join("");
     galleryImage.innerHTML = imageHtml;
});



