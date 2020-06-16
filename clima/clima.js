const axios = require('axios').default;

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2db54ca7c6c973e071e22ea781687311&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}