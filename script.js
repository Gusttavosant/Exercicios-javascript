let lista = [10, 20, 30, 40, 50];

let ultimoValor = 0;
let estaOrdenado = true;

for( item of lista){
    if( item < ultimoValor){
        estaOrdenado = false;
    } 
    ultimoValor = item;}

    if(estaOrdenado){
        console.log('O vetor esta ordenado');
        
    }else{
        console.log('O vetor não esta ordenado');
        
    }

