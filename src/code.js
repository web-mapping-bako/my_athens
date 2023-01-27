// Positioning the map in the beginnign
var map = L.map('map').setView([37.97, 23.73], 16); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const btn_syntagma = document.getElementById("syntagma");
const btn_overview = document.getElementById("overview");

// Event listeners for the buttons
btn_syntagma.addEventListener("click", function() {
    map.setView([37.975549176902845, 23.734859823506152], 20)
});

btn_overview.addEventListener("click", function() {
    map.setView([37.97, 23.73], 16)
});



