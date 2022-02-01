/**
 * Autor: Sergio Matamoros Delgado
 */

'use strict';

//Nombre provincia
//let labels = [];

let datos = [];


let nombreProvincia = [];

let barsColors = [];

//cargar JSON
fetch("datos/histograma.json")
.then(respuesta => respuesta.json())
.then(e =>  {
    for(let indexes of e) {
        //console.log(indexes);

        //labels.push(indexes.Nombre);
        nombreProvincia.push(indexes.MetaData[2].Nombre)
        datos.push(indexes.Data[0].Valor)
        barsColors.push(getRandomColor());

    }
    crearChart();

});


let comAuto = [];
let datosCom = [];
fetch("datos/tarta.json")
.then(respuesta => respuesta.json())
.then(e =>  {
    for(let indexes of e) {
        //console.log(indexes);

        //labels.push(indexes.Nombre);
        comAuto.push(indexes.Resultados)
        datosCom.push(indexes.field2)
        barsColors.push(getRandomColor());

    }
    crearChart2();

});


//console.log(labels);
console.log(nombreProvincia);
console.log(datos);

//En el JSON solo se muestran las ciudades que tienen un código, si no tiene código
//no las utilizaremos.

function crearChart() {

    //Barras
    new Chart("bar-chart", {
        type: "bar",//pie
        data: {
            labels: nombreProvincia, //nombre provincias
            datasets: [{
                label: "Población",
                backgroundColor: barsColors,
                data: datos
            }]
        },
        options: {
            title: {
                display: true,
                text: "Tasa de paro"
            }
        }
    });
}

//ODS
function crearChart2() {
    new Chart("pie-chart", {
        type: "pie",//pie
        data: {
            labels: comAuto,//nombreProvincia, //nombre provincias
            datasets: [{
                label: "Población",
                backgroundColor: barsColors,
                data: datosCom
            }]
        },
        options: {
            title: {
                display: false,
                text: "Tasa de paro"
            }
        }
    });
}

/**
 * Devuelve un color aleatoriamente
 * @returns hex color
 */
function getRandomColor(moreColors = false) {
    let letters = '0123456789ABCDEF';
    let rndColors = ["47E5BC", "B23A48", "B23A48", "78A1BB", "283044", "F06449"]
    let color = '#';
    if(moreColors) {
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 13)];
        }
    } else {
        color += rndColors[Math.floor(Math.random()*rndColors.length)]
    }
    return color;
}
