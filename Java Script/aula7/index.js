function addInput(){
    const ul = document.getElementById('inputs')

    const NovaLista = document.createElement('li')
    NovaLista.className = 'item-lista'
    NovaLista.innerText='Novo input '

    const novoInput = document.createElement('input')
    novoInput.type='text'

    NovaLista.appendChild(novoInput)
    ul.appendChild(NovaLista)
}

function Remove(){
   const ul = document.getElementById('inputs')
   const item = document.getElementsByTagName('li')
   const input = document.getElementsByTagName('input')

   ul.removeChild(item[item.length-1])
}