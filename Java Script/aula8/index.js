//Estrutura condicionais

// var car = 80

// if(car>100){
//     console.log('Você foi multado!')
// }

// var nota = 4 

// //Estrutura simples

// if(nota>6){
//     console.log('Aprovado')
// }
// else{
//     console.log('Reprovado')
// }

// //Estrutura condicional aninhada

// var nota1 = 5

// if(nota1>7){
//     console.log('Aprovado')
// }
// else if(nota1> 5){
//     console.log('Exame')
// }
// else{
//     console.log('Reprovado')

function calcular(){
    var t1 = Number(document.getElementById('num1').value)
    var t2 = Number(document.getElementById('num2').value)
    var res = document.getElementById('res')

    if(t1=='' & t2==''){
        alert('DIGITE UM NUMERO PRIMEIRO')
    }
    else if(t1>t2){
        res.innerHTML = 'O time 1 foi o vencedor!'
    }
    else if (t2>t1){
        res.innerHTML = 'O time 2 foi o vencedor!'
    }
    else{    
        res.innerHTML = 'Os dois times empataram.'
    }
}