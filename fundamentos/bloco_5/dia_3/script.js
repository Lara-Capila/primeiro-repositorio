function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
//   Exercício - 1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function criaDias() {
    let listaDias = document.querySelector ('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let dias = dezDaysList[index];
        let itemLista = document.createElement('li');

        switch (true) {
            case (dias === 24 || dias === 31):
                itemLista.className = 'day holiday';
                itemLista.innerHTML = dias;
                listaDias.appendChild(itemLista);
            break;
            case (dias === 4 || dias === 11 || dias === 18):
                itemLista.className = 'day friday';
                itemLista.innerHTML = dias;
                listaDias.appendChild(itemLista);
            break;
            case (dias === 25):
                itemLista.className = 'day holiday friday';
                itemLista.innerHTML = dias;
                listaDias.appendChild(itemLista);
            break;
            default:
                itemLista.innerHTML = dias;
                itemLista.className = 'day';
                listaDias.appendChild(itemLista);
        }
    };
};
criaDias ();

// Execício - 2

function criaBotãoFeriados (nome) {
    let container = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    let idbotao = 'btn-holiday';

    botao.innerHTML = nome;
    botao.id = idbotao;
    container.appendChild(botao);
};
criaBotãoFeriados ('Feriados');

// Execício - 3

function mudaCorFeriados () {
    let corClick = 'green';
    let clickCor = 'rgb(238,238,238)';
    let pegaIdBotao = document.querySelector('#btn-holiday');
    let pegaFeriados = document.querySelectorAll('.holiday');

    pegaIdBotao.addEventListener('click', function(){
        for (let index = 0; index < pegaFeriados.length; index += 1){
            if (pegaFeriados[index].style.backgroundColor == corClick) {
                pegaFeriados[index].style.backgroundColor = clickCor;
            } else {
                pegaFeriados[index].style.backgroundColor = corClick;
            }
        }
    })
};
mudaCorFeriados ();

// Execício - 4

function criaBotãoSexta (nome) {
    let container = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    let idbotao = 'btn-friday';

    botao.innerHTML = nome;
    botao.id = idbotao;
    container.appendChild(botao);
};
criaBotãoSexta ('Sexta-Feira');

//  Exercício - 5

function mudaTextoSexta (arraySexta) {
    let newText = 'Sextou 🍷';
    let pegaIdBotao = document.querySelector('#btn-friday');
    let pegaSextas = document.querySelectorAll('.friday');

    pegaIdBotao.addEventListener('click', function() {
        for (let index = 0; index < pegaSextas.length; index += 1){
            if (pegaSextas[index].innerHTML !== newText) {
                pegaSextas[index].innerHTML = newText;
            } else {
                pegaSextas[index].innerHTML = arraySexta[index];
            }
        };
    })
};
let dezFridays = [ 4, 11, 18, 25 ];
mudaTextoSexta (dezFridays);

// Exercício - 6
// let pegaDias = document.querySelectorAll('.day');
// function passaMouse(evt) {
//     // evt.target.style.fontSize = '30px';
//     // evt.target.style.fontWeght = '600';
//     evt.target.style.backgroundColor = 'green'
//     console.log('oiiiiii');
// };
// pegaDias.addEventListener('mouseover', passaMouse);

// function tiraMouse(evt) {
//     // evt.target.style.fontWeght = '200';
//     // evt.target.style.fontsize = '10px';
//     evt.target.style.backgroundColor = 'yellow'
//     console.log('oiiiiii2');
// };
// pegaDias.addEventListener('mouseout', tiraMouse); 

function dayMouseOver () {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut () {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver ();
  dayMouseOut ();

//   Exercício - 7

function tarefa (string) {
    let container = document.querySelector('.my-tasks');
    let criaSpan = document. createElement('span');

    criaSpan.innerHTML = string;
    container.appendChild(criaSpan);
};
tarefa ('Fazer Atividades');

// Exercício - 8

function legendaCor (cor) {
    let container = document.querySelector('.my-tasks');
    let criaDiv = document.createElement('div');

    criaDiv.className = 'task';
    criaDiv.style.backgroundColor = cor;
    container.appendChild(criaDiv);
};
legendaCor ('purple');

// Exercício - 9

function eventoDiv () {
    let taskSelected = document.getElementsByClassName('task selected');
    let pegaDiv = document.querySelector('.task');

    pegaDiv.addEventListener('click', function(event){
        if (taskSelected.length === 0) {
            event.target.className = 'task selected';
        } else {
            event.target.className = 'task';
        }
    });
};
eventoDiv ();

// Exercício - 10

function colocaCorDia() {
    let selectedTask = document.getElementsByClassName('task selected');
    let dias = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    dias.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
};
colocaCorDia();