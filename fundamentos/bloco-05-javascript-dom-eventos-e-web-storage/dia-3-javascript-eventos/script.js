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
 let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function criaDiasNoMes() {

          let diasNoMes = document.querySelector('#days')

      for (let i=0; i< dezDaysList.length; i += 1) {

        let day = dezDaysList[i]
        let listDay = document.createElement('li')
        
        if(day === 24 || day === 31 ) {
          listDay.className = 'day holiday'
          listDay.innerHTML = day
          diasNoMes.appendChild(listDay)

        }else if (day === 4 || day === 11 || day === 18 ){
          listDay.className = 'day friday';
          listDay.innerHTML = day;
          diasNoMes.appendChild(listDay);

        }else if (day === 25) {
          listDay.className = 'day holiday friday';
          listDay.innerHTML = day;
          diasNoMes.appendChild(listDay);

        }else{
          listDay.innerHTML = day;
          listDay.className = 'day';
          diasNoMes.appendChild(listDay);
        }
      };
  };
  criaDiasNoMes();


  function criandoBotaoFeriado(nomeBotao){
    let buttonsContainer = document.querySelector('.buttons-container');

    let botaoFeriado= document.createElement('button');
    let botaoFeriadoId = 'btn-holiday';
    botaoFeriado.innerHTML = nomeBotao;
    botaoFeriado.id=botaoFeriadoId;
    buttonsContainer.appendChild(botaoFeriado)
  }
  
  criandoBotaoFeriado('Feriados');

  function clickFeriados(){
    let botaoHoliday = document.querySelector('#btn-holiday');
    let holidayClick = document.querySelectorAll('.holiday');
    let corBackground ='rgb(238,238,238)';
    let voltaCor='white';

    botaoHoliday.addEventListener('click', function(){
      
     for(i in holidayClick){
      if(holidayClick[i].style.backgroundColor === voltaCor){
        holidayClick[i].style.backgroundColor = corBackground;
       }else{
        holidayClick[i].style.backgroundColor=voltaCor
       }
       
     }
    })
  }

  clickFeriados();


   function criandoBotaoSexta(nome){
    let buttonContainer = document.querySelector('.buttons-container');

    let botaoSexta= document.createElement('button');
    let botaoSextaId = 'btn-friday';
    botaoSexta.innerHTML = nome;
    botaoSexta.id=botaoSextaId;
    buttonContainer.appendChild(botaoSexta)
  }
  criandoBotaoSexta('Sexta-feira')

function clickSexta(arrayDias){
    let botaoFriday = document.querySelector('#btn-friday');
    let fridayClick = document.getElementsByClassName('friday');
    let texto ='SEXTOU'

    botaoFriday.addEventListener('click', function(){
      
     for(let i=0; i < fridayClick.length; i += 1){
      if(fridayClick[i].innerHTML !== texto){
         fridayClick[i].innerHTML = texto;
       }else {
        fridayClick[i].innerHTML = arrayDias[i];

        }
      
      }
    })
  }
    let sextasDez =[4, 11, 18, 25];
  clickSexta(sextasDez);

