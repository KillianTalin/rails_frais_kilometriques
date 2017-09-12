const newRideForm = document.querySelector("#new_ride");
newRideForm.addEventListener("click", (event) => {
  event.preventDefault();
  const kmNumber = document.getElementById("km_number");
  kmNumber.innerText = "";
  const origins = document.getElementById("ride_start_place");
  const originsValue = origins.value;
  const destinations = document.getElementById("ride_end_place");
  const destinationsValue = destinations.value;
  fetch("https://cors-anywhere.herokuapp.com/" + `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${originsValue}&destinations=${destinationsValue}&language=fr-FR&key=AIzaSyDrZS9hR90JvI1Rj_0xQmvtQxu0FIaBvKQ`)
  .then(response => response.json())
    .then((data) => {
      const distance_between = data.rows[0].elements[0].distance.value;
      console.log(distance_between);
      const newRideForm = document.querySelector("#new_ride");
      newRideForm.insertAdjacentHTML("beforeend", `<p id="km_number"> ${distance_between} </p>`);
    });
});
