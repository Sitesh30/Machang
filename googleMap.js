function initMap() {
  const oneGalleFaceMall = { lat: 6.922149, lng: 79.844826 };

  const map = new google.maps.Map(document.getElementById("googleMap"), {
    center: oneGalleFaceMall,
    zoom: 15,
    mapId: 'YOUR_CUSTOM_MAP_ID' // Optional: if you have a styled map ID from Google Cloud Console
  });

  const marker = new google.maps.Marker({
    position: oneGalleFaceMall,
    map: map,
    title: "One Galle Face Mall",
    animation: google.maps.Animation.DROP
  });
}

