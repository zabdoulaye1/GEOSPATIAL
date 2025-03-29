// Initialiser la carte Leaflet centrée sur le Lac Tchad
const map = L.map('map').setView([13.0, 14.0], 7); // Latitude, longitude, zoom

// Ajouter une couche OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Fonctions Zoom
function zoomIn() {
  map.zoomIn();
}

function zoomOut() {
  map.zoomOut();
}

// Placeholder pour 2D / 3D
function set2D() {
  alert("Vue 2D activée !");
}

function set3D() {
  alert("Vue 3D simulée (prototype à venir)");
}

// Simuler filtres
function filterLayer(type) {
  alert(`Filtre activé : ${type}`);
}

// Bascule fictive 3D
function toggle3D() {
  alert("Mode 3D encore en construction !");
}
const validUser = { username: "admin", password: "geospatial2024" };

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === validUser.username && pass === validUser.password) {
    document.getElementById("login").style.display = "none";
    document.getElementById("accueil").style.display = "flex";
  } else {
    document.getElementById("login-error").style.display = "block";
  }
}

// Afficher le login par défaut au chargement
window.onload = function () {
  document.getElementById("login").style.display = "flex";
  document.getElementById("accueil").style.display = "none";
  document.getElementById("app").style.display = "none";
};
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("loginError");

  if (user === "admin" && pass === "geospatial2024") {
    document.getElementById("login").style.display = "none";
    document.getElementById("accueil").style.display = "flex";
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

// Initialisation à l’ouverture
window.onload = () => {
  document.getElementById("login").style.display = "flex";
  document.getElementById("accueil").style.display = "none";
  document.getElementById("app").style.display = "none";
};
