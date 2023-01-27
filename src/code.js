var map = L.map('map').setView([37.97, 23.73], 16); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// to do - call the function based on the btn id
// case 1: id syntagma --> go to syntagma
// case 2: id overview --> go to overview

function goto() {
    map.setView([37.975549176902845, 23.734859823506152], 20)
}



