 function calcular(){
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    let op = document.getElementById('operacao').value
    let resultado = document.getElementById('res')

//     let res = 0

//     switch(op){
//          case '+':
//             res = n1+n2
//             break
//         case '-':
//             res = n1-n2
//             break 
//         case '/':
//             res = n1/n2
//             break 
//         case '*':
//             res = n1*n2
//     }
//     res1.innerText = res
// }

if(operacao === '+'){
    res = n1+n2
}
else if(operacao === '-'){
    res = n1-n2
}
else if(operacao === '/'){
    res = n1/n2
}
else{
    res = n1*n2
}

    resultado.innerText = res
 }