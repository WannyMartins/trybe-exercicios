
let estados = document.getElementById('estado');
estados.addEventListener('click', criarOptionEstado)

function criarOptionEstado(){

     let estados = document.getElementById('estado');

     let estadoOpitions= ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let key = 0; key < estadoOpitions.length; key += 1) {
       let option = document.createElement('option');
       option.innerText = estadoOpitions[key];
       option.value = estadoOpitions[key];
       estados.appendChild(option);       
    }
 }

function validaNome(){
    let name=document.querySelector('[name=nome]');
    


    if(name.value.length > 40 || name.value.length === 0){
        alert('Nome Inválido!')
    }

}

function validaCpf(){
    let name=document.querySelector('[name=cpf]');
   


    if(name.value.length != 11  || name.value.length === 0){
        alert('CPF Inválido!')
    }else if(name.value != Number)
    alert('CPF deve ser um numero!')

}
function validaEmail(inicio,fim){
    let name=document.querySelector('[name=e-mail]');
   


    if(n){
        alert('e-mail Inválido!')
    }

}


function validarDados(){
    validaNome();
    validaEmail();
    validaCpf();

 }

function evitaSubmit(event){
    event.preventDefault();
    validarDados();
  
}

window.onload = function (){
    criarOptionEstado();

    const submit = document.getElementById('submit')
    submit.addEventListener('click', evitaSubmit);
}


 
/*  
const dataInicio=document.querySelector('#data-inicio');
let dataInicioInput = dataInicio.Value;
function dataI(dd, mm, aaaa){
    dataInicioInput.value = [dd, mm, aaaa]
    if(dd <=0 || dd >31){
        window.alert('dia inválido!')
    }
    if(mm<=0 || mm>12){
        window.alert('mês inválido!')
    }
    if(aaaa<=0 || aaaa>2022 ){
        window.alert('ano inválido!')
    }
} */ 