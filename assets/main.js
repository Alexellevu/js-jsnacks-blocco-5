//Snack 1:
//Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

var zucchina = [
    zucchina1={varietà: 'nera di milano', peso: 80, lunghezza:20},
    zucchina2={varietà: 'alberello', peso: 50, lunghezza:18},
    zucchina3={varietà: 'tonda di nizza', peso: 70, lunghezza:9},
    zucchina4={varietà: 'fiorentina', peso: 100, lunghezza:12},
    zucchina5={varietà: 'golden', peso: 62, lunghezza:16},
    zucchina6={varietà: 'alberello', peso: 50, lunghezza:18},
    zucchina7={varietà: 'trombetta', peso: 90, lunghezza:7},
    zucchina8={varietà: 'faenza', peso:95 , lunghezza:14},
    zucchina9={varietà: 'siciliana', peso: 110, lunghezza:10},
    zucchina10={varietà: 'napoli', peso: 120, lunghezza:19}            
];

//Calcola quanto pesano tutte le zucchine.
var pesoTotale = 0;
for (var i= 0; i < zucchina.length; i++)  {
pesoTotale += zucchina[i].peso;
}
console.log(pesoTotale);

//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var arrayLunghe = [];
var arrayCorte = [];
var pesoCorte = 0;
var pesoLunghe = 0;
for (var i= 0; i < zucchina.length; i++){
    if(zucchina[i].lunghezza < 15){
        arrayCorte.push(zucchina[i]);
        pesoCorte += zucchina[i].peso;

    }else{
        arrayLunghe.push(zucchina[i]);
        pesoLunghe += zucchina[i].peso;
    }
}

console.log(arrayLunghe);
console.log(arrayCorte);
console.log(pesoCorte);
console.log(pesoLunghe);
