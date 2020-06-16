const axios = require('axios').default;

const getLugarLatLng = async(lugar) => {

    const encodedDir = encodeURI(lugar);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedDir}&appid=2db54ca7c6c973e071e22ea781687311`);

    if (resp.data.cod === "404") {
        //throw new Error(resp.data.message);
        console.log(resp.data);
        return resp.data;
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}