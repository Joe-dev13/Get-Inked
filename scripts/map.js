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