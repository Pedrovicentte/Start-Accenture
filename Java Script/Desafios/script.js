        function calcular(){
            var n1 = Number(document.getElementById('num1').value)
            var n2 = Number(document.getElementById('num2').value)
            var soma = (n1+n2) 
            var res = document.getElementById('res')
            
            res.innerHTML = `A soma dos dois números é ${soma}`
        }

