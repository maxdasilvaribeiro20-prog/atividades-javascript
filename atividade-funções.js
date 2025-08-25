//essa função vai verificar se um número qualquer é par ou ímpar
function parOuImpar(numero){

 if (numero % 2 === 0) {
        return 'O número é par';
    } else {
        return 'O número é ímpar';
    }

}
// essa função calcula o fatorial de qualquer número
function fatorialWhile(numero){

    if(numero <0){
        return 'Não é possível calcular o fatorial de um número negativo';
    }

    let fatorial = 1;
    let i = 1;

    while (1<= numero){
        fatorial *= i;
        i++;
    }

    return `O fatorial de ${numero} é ${fatorial}`;
}
    
// essa função vai dizer qual é o maior número dentro do array
function encontrarMaiorNumero(array) {
    if (array.length === 0) {
        return 'O array está vazio';
    }

    let maior = array[0]; // Começa assumindo que o primeiro número é o maior

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]; // Atualiza o maior valor
        }
    }

    return `O maior número é ${maior}`;
}

