'use strict';

window.onload = iniciar;

function iniciar() {

    //Inicio de la librería
    MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']]
        },
        svg: {
          fontCache: 'global'
        }
    };
}