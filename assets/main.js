//Snack 1:
//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

var zucchina = [
    zucchina1={varietà: 'nera di milano', peso: 80, lunghezza:10},
    zucchina2={varietà: 'alberello', peso: 50, lunghezza:8},
    zucchina3={varietà: 'tonda di nizza', peso: 70, lunghezza:9},
    zucchina4={varietà: 'fiorentina', peso: 100, lunghezza:12},
    zucchina5={varietà: 'golden', peso: 62, lunghezza:15},
    zucchina6={varietà: 'alberello', peso: 50, lunghezza:8},
    zucchina7={varietà: 'trombetta', peso: 90, lunghezza:7},
    zucchina8={varietà: 'faenza', peso:95 , lunghezza:14},
    zucchina9={varietà: 'siciliana', peso: 110, lunghezza:10},
    zucchina10={varietà: 'napoli', peso: 120, lunghezza:13}            
];

//Calcola quanto pesano tutte le zucchine.
var pesoTotale = 0;
for (var i= 0; i < zucchina.length; i++)  {
pesoTotale += zucchina[i].peso;
}
console.log(pesoTotale);