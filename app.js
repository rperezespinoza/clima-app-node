//const { require } = require('yargs');

const args = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {

        try {
            const vLugar = await lugar.getLugarLatLng(args.direccion);
            const vClima = await clima.getClima(vLugar.lat, vLugar.lng);
            return `El clima de ${direccion} es de ${vClima}°.`
        } catch (error) {
            return `No se pudo determinar el clima de ${direccion}`;
        }

    }
    /*
    lugar.getLugarLatLng(args.direccion)
        .then(console.log)
        .catch(console.log);
    */

getInfo(args.direccion)
    .then(console.log)
    .catch(console.log);

//console.log(args.direccion);