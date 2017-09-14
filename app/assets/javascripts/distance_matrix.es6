// const addressFrom = document.querySelector("#ride_start_place");
// addressFrom.addEventListener("mouseout", (event) => {
//   event.preventDefault();
//   const kmNumber = document.getElementById("km_number");
//   kmNumber.innerText = "";
//   const origins = document.getElementById("ride_start_place");
//   const originsValue = origins.value;
//   const destinations = document.getElementById("ride_end_place");
//   const destinationsValue = destinations.value;
//   fetch("https://cors-anywhere.herokuapp.com/" + `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${originsValue}&destinations=${destinationsValue}&language=fr-FR&key=AIzaSyDrZS9hR90JvI1Rj_0xQmvtQxu0FIaBvKQ`)
//   .then(response => response.json())
//     .then((data) => {
//       const distance_between = (data.rows[0].elements[0].distance.value)/1000;
//       console.log(distance_between);
//       const buttonSave = document.querySelector(".btn-enregistrer");
//       buttonSave.insertAdjacentHTML("beforebegin", `<p id="km_number"> ${distance_between} km </p>`);
//     });
// });

// // Not dry - But did not manage to dry it for the moment
// const addressTo = document.querySelector("#ride_end_place");
// addressTo.addEventListener("mouseout", (event) => {
//   event.preventDefault();
//   const kmNumber = document.getElementById("km_number");
//   kmNumber.innerText = "";
//   const origins = document.getElementById("ride_start_place");
//   const originsValue = origins.value;
//   const destinations = document.getElementById("ride_end_place");
//   const destinationsValue = destinations.value;
//   fetch("https://cors-anywhere.herokuapp.com/" + `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${originsValue}&destinations=${destinationsValue}&language=fr-FR&key=AIzaSyDrZS9hR90JvI1Rj_0xQmvtQxu0FIaBvKQ`)
//   .then(response => response.json())
//     .then((data) => {
//       const distance_between = (data.rows[0].elements[0].distance.value)/1000;
//       console.log(distance_between);
//       const buttonSave = document.querySelector(".btn-enregistrer");
//       buttonSave.insertAdjacentHTML("beforebegin", `<p id="km_number"> ${distance_between} km </p>`);
//     });
// });
