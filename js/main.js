// Initialize and add the map
function initMap () {
  //Your location
  const loc = { lat: 24.451330, lng: 89.700638 };
  // Centered map on location
  const map = new google.Map(document.querySelector('.map')
  , {
    zoom: 14,
    center: loc
  });
  // The marker, position at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}