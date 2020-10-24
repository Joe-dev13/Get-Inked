function renderNav () {
    return `
        <div class="sidebar">
        <ul>
            <li class="menu-item"><a href="#" onclick="initialize();renderLocations()"><i class="fas fa-map-marker-alt"></i>Location</a></li>
            <li class="menu-item"><a href="#" onclick="renderPictures()"><i class="fas fa-camera-retro"></i>Pictures</a></li>
            <li class="menu-item"><a href="#" onclick="renderForms();renderReviews()"><i class="far fa-comment"></i>Reviews</a></li>       
            <li class="menu-item"><a href="#" onclick="renderContact()"><i class="far fa-envelope"></i>Contact</a></li>
            <li class="menu-item"><a href="#" onclick="initMap()"><i class="far fa-address-card"></i>About Us</a></li>
        </ul>
        <div class="legal">
            &copy; 2020 by Get Inked. All rights reserved.
        </div>
        </div>
    `
}
                   
document.getElementById('sidebar').innerHTML = renderNav();

function renderLocations() {
    document.getElementById("map").style.display = "block";
    document.getElementById("gallery").style.display = "none";
}

function renderPictures() {
    document.getElementById("map").style.display = "none";
    document.getElementById("gallery").style.display = "block";
}

function renderReviews() {
    document.getElementById("contact").style.display = "none";
    document.getElementById("review").style.display = "block";
}

function renderContact() {
    document.getElementById("review").style.display = "none";
    document.getElementById("contact").style.display = "block";
}

function renderAboutUs() {

}