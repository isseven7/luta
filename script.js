function placeBet() {
    // Pegar dados da aposta do Jogo 1
    let team1 = document.getElementById("team1").value;
    let amount1 = document.getElementById("amount1").value;

    // Pegar dados da aposta do Jogo 2
    let team2 = document.getElementById("team2").value;
    let amount2 = document.getElementById("amount2").value;

    // Verificar se os valores de aposta são válidos
    if (amount1 <= 0 || isNaN(amount1)) {
        alert("Por favor, insira um valor de aposta válido para a primeira luta.");
        return;
    }
    if (amount2 <= 0 || isNaN(amount2)) {
        alert("Por favor, insira um valor de aposta válido para a segunda luta.");
        return;
    }

    // Adicionar as apostas à lista de resultados
    let betList = document.getElementById("bet-list");

    // Aposta no Jogo 1
    let betItem1 = document.createElement("li");
    betItem1.textContent = `Você apostou R$ ${amount1} no ${team1 === 'team1A' ? 'Rhuan' : 'Vitão'} na Primeira Luta.`;
    betList.appendChild(betItem1);

    // Aposta no Jogo 2
    let betItem2 = document.createElement("li");
    betItem2.textContent = `Você apostou R$ ${amount2} no ${team2 === 'team2A' ? 'Franzo' : 'Bertolo'} na Segunda Luta.`;
    betList.appendChild(betItem2);

    // Limpar os campos de valor de aposta
    document.getElementById("amount1").value = '';
    document.getElementById("amount2").value = '';
}
