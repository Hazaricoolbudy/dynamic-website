// const async = require("hbs/lib/async");
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const datahide = document.querySelector('.middle_layer')

const submitbtn = document.getElementById('submitbtn');
const temp = document.getElementById('temp')
const temp_status = document.getElementById('temp_status')
datahide.classList.add('data_hide')

const getinfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    // let api_key=`907753d4f8f292bbc061ef14f0e10aa3`;
    if (cityVal === '') {
        city_name.innerText = `Please write the city name before search`;
    }
    else {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=15f67010928ce31c6eec9a492fc91433`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]
            temp.innerText = Math.round((arrData[0].main.temp - 273.15), 2);
            // temp_status.innerText=arrData[0].weather[0].main;
            city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
            const tempMod = arrData[0].weather[0].main;
            // condition to check sunny r cloudy or rainy
            if (tempMod == 'Clear') {
                temp_status.innerHTML = "<i class='fas fa-sun style='color:#eccc68;'><i>"
            }
            else if (tempMod == 'Clouds') {
                temp_status.innerHTML = "<i class='fas fa-cloud style='color:#1ff2f6;'><i>"

            }
            else if (tempMod == 'Rain') {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain style='color:#a4b0be;'><i>"
                
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain style='color:#f1f2f6;'><i>"
                

            }
            datahide.classList.remove('data_hide')

        }
        catch {
            city_name.innerText = `Please write the city name properly`;
            datahide.classList.add('data_hide')
        }
    }
}

submitbtn.addEventListener('click', getinfo);