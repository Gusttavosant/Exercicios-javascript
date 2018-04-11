let frase = 'O github e uma otima plataforma'
let letraProcurada = 'a';
let contador = 0;

for(letra of frase){
    if(letra == letraProcurada){
        contador++
    };

}

console.log(`foram encontrados ${contador} ocorrencias da letra "${letraProcurada}" na frase "${frase}"`);