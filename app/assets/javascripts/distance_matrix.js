// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const info = document.getElementById("info");
//   info.innerText = "";
//   const address = document.getElementById("your-address");
//   const value = address.value;
//   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}`)
//     .then(response => response.json())
//     .then((data) => {
//       const lat = data.results[0].geometry.location.lat;
//       const lng = data.results[0].geometry.location.lng;
//       const form = document.querySelector("#form");
//       form.insertAdjacentHTML("afterend", `<p id="info"> ${lat} || ${lng} </p>`);

//       var map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: lat, lng: lng},
//         zoom: 13  // Change this value from 0 to 18
//       });
//       var marker = new google.maps.Marker({
//         map: map,
//         position:  { lat: lat, lng: lng}
//       });

//     });
// });

const newRideForm = document.querySelector("#new_ride");
newRideForm.addEventListener("click", (event) => {
  console.log("Success");
  event.preventDefault();
  const kmNumber = document.getElementById("km_number");
  kmNumber.innerText = "";
  const origins = document.getElementById("ride_start_place");
  const originsValue = origins.value;
  const destinations = document.getElementById("ride_end_place");
  const destinationsValue = destinations.value;
  fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${originsValue}&destinations=${destinationsValue}&language=fr-FR&key=AIzaSyDrZS9hR90JvI1Rj_0xQmvtQxu0FIaBvKQ`)
    .then(response => response.json())
    .then((data) => {
      const distance_between = data.rows[0].elements[0].distance.value;
      const newRideForm = document.querySelector("#new_ride");
      newRideForm.insertAdjacentHTML("beforeend", `<p id="km_number"> ${distance_between} </p>`);
    });
});
