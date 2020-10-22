// Initialize and add the map
function initMap() {
    // The location of location
    const location = { lat: Number(localStorage.getItem('lat')), lng: Number(localStorage.getItem('lng')) };
    // The map, centered at location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        center: location,
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
};


function renderNav () {
    return `
    <input type="checkbox" id="check">
    <label for="check">
    <i class="far fa-hand-point-right" id="btn"></i>
    <i class="far fa-hand-point-left" id="cancel"></i>
    </label>
    <div class="sidebar">
    <header>Get Inked</header>
    <ul>
        <li><a href="#" onclick="initMap()"><i class="fas fa-map-marker-alt"></i>Location</a></li>
        <li><a href="#" onclick="initMap()"><i class="fas fa-camera-retro"></i>Pictures</a></li>
        <li><a href="#" onclick="renderForms()"><i class="far fa-comment"></i>Reviews</a></li>
        <li><a href="#" onclick="initMap()"><i class="far fa-address-card"></i>About Us</a></li>
        <li><a href="#" onclick="initMap()"><i class="far fa-copyright"></i>Legal Section</a></li>
        <li><a href="#" onclick="initMap()"><i class="far fa-envelope"></i>Contact</a></li>
        <li><a href="#"><i class="far fa-question-circle"></i>Coming Soon</a></li>
    </ul>
    </div>
    <section></section>
    `
}
                   
document.getElementById('sidebar').innerHTML = renderNav();

