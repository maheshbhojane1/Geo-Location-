const btn = document.querySelector(".geo-btn");
const details = document.querySelector(".showDetails");
const fullAdress = document.querySelector(".fullAddress");

let apiEndpoint = "https://api.opencagedata.com/geocode/v1/json"
let apiKey = "40f15dac841b4f388aaea6f32a81ec59"

const getCurrentAdress = async (latitude,longitude)=>{
    let queary = `${latitude}, ${longitude}`
    let apiUrl = `${apiEndpoint}?key=${apiKey}&q=${queary}&pretty=1`
    
    try {
        let  responce = await fetch(apiUrl)
        let data = await responce.json()

        const {city, state, postcode, country} = data.results[0].components;

        fullAdress.textContent = `User Adress: ${city}, ${postcode}, ${state}, ${country}`
    } catch (error) {
        alert(error)
    }
}

btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        details.textContent = `the latitude ${latitude} and longitude
        ${longitude}`

        getCurrentAdress(latitude, longitude)
      },
      (error) => {
        details.textContent = error.message;
      }
    );
  }
});
