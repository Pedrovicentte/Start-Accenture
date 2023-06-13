let jogadores = ['Pedro', 'Laissa','Luiz']

area.innerHTML = jogadores+'<br><br>'

jogadores[1]='Shay'

area.innerHTML+=jogadores+'<br><br>'//area = area+1

jogadores.push('Pablo')//Insere no último lugar

area.innerHTML+=jogadores+'<br><br>'

jogadores.splice(2,0,'Luan')//(Lugar que ele vai ser adicionado, quantos ele vai substituir e dado que será adicionado)

area.innerHTML+=jogadores+'<br><br>'

area.innerHTML+= `Temos agora ${jogadores.length} jogadores.`

area.innerHTML+= `<br><br> ${jogadores.sort()}<br>`

for(let cont in jogadores){
    area.innerHTML += `Na posição ${cont} temos ${jogadores[cont]}.<br>`
}