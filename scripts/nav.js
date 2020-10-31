function renderNav () {
    return `
        <div class="sidebar">
        <ul>
            <li class="menu-item"><a href="#" onclick="initialize();renderLocations()"><i class="fas fa-map-marker-alt"></i>Location</a></li>
            <li class="menu-item"><a href="#" onclick="renderPictures()"><i class="fas fa-camera-retro"></i>Pictures</a></li>
            <li class="menu-item"><a href="#" onclick="renderForms();renderReviews()"><i class="far fa-comment"></i>Reviews</a></li>       
            <li class="menu-item"><a href="#" onclick="renderContact()"><i class="far fa-envelope"></i>Contact</a></li>
            <li class="menu-item"><a href="#" onclick="renderAboutUs()"><i class="far fa-address-card"></i>About Us</a></li>
        </ul>
        </div>
    `
}
                   
document.getElementById('sidebar').innerHTML = renderNav();

function renderLocations() {
    document.getElementById("shops").style.display = "flex";
    document.getElementById("map").style.display = "block";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("review").style.display = "none";
    document.getElementById("about").style.display = "none";
}

function renderPictures() {
    document.getElementById("shops").style.display = "flex";
    document.getElementById("map").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("review").style.display = "none";
    document.getElementById("about").style.display = "none";
}

function renderReviews() {
    document.getElementById("shops").style.display = "flex";
    document.getElementById("map").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("review").style.display = "block";
    document.getElementById("about").style.display = "none";
}

function renderContact() {
    document.getElementById("shops").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("review").style.display = "none";
    document.getElementById("about").style.display = "none";
}

function renderAboutUs() {
    document.getElementById("shops").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("review").style.display = "none";
    document.getElementById("about").style.display = "block";
}