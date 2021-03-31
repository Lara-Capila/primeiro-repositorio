// PARTE 1

// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada. Modifique a estrutura da função para que ela seja uma arrow function. Modifique as concatenações para template literals.

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);

// 2. Faça uma função que retorne o array oddsAndEvens em ordem crescente. Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arraySort = (array) => {
  const oddsAndEvensSort = array.sort((a, b) => a - b);
  return oddsAndEvensSort;
}

const arraySorted = arraySort(oddsAndEvens);
console.log(`os números ${arraySorted} se encontram ordenados de forma crescente!`);
