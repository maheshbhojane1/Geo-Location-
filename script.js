const btn = document.querySelector('.geo-btn')
const details = document.querySelector('.showDetails')

btn.addEventListener('click', ()=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            
            (location)=>{
                const {latitude, longitude} = location.coords
                details.textContent = `Latitude ${latitude} &
                Longitude ${longitude}`
            },
            (error)=>{
                details.textContent = error.message
                console.log(error.message)
            })
    }
})