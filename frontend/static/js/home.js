async function carregarTorneios(){
    try {
        const resposta = await fetch('/torneios')
        const listaTorneios = await resposta.json()

        const containerEmAndamento = document.getElementById('lista-em-andamento')
        const containerConcluidos = document.getElementById('lista-concluidos')
        containerEmAndamento.textContent = ''

        listaTorneios.forEach(torneio => {
            if (torneio.tournament.state === 'pending' || 
                torneio.tournament.state === 'underway') {
                    containerEmAndamento.innerHTML += 
                    `<a href='/torneio/${torneio.tournament.id}'>
                        <h3>${torneio.tournament.name}</h3>
                    </a>`
            }
        })

    } catch (error) {
        console.error('Erro ao carregar torneios:', error)
    }
}

carregarTorneios()