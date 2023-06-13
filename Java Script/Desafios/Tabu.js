function gerar(){
    let n1 = Number(document.getElementById('num1').value)
    let res = document.getElementById('res')
    let n2 = 1

    if (n1 == ''){
        alert('ERRO! DIGITE UM NÚMERO PRIMEIRO!')
    }
    else{
        res.innerHTML = ''
    }
    

    while(n2<=10){
        res.innerText += `${n1} x ${n2} = ${n1*n2} \n`
        n2++
    }
}