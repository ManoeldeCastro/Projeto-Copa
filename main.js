function createGame(player1, hour, player2) {
  return `
      <li>
      <img src="img/icon-${player1}.svg" alt="Logo ${player1}"   title="${player1}"/>
      <strong>${hour}</strong>
      <img src="img/icon-${player2}.svg" alt="Logo ${player2}" title="${player2}"/>
    </li>
  `
}

let delay = -0.4

function createCard(date, day, games) {
  delay += 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
`
}

document.querySelector("main#cards").innerHTML +=
  createCard("20/11", "domingo", 
  createGame("catar", "13:00", "equador")) +
  createCard("21/11", "segunda", 
    createGame("inglaterra", "10:00", "irã") + 
    createGame("senegal", "13:00", "holanda") + 
    createGame('estados unidos', "16:00", "gales"))+ 
  createCard("22/11", "terça", 
    createGame("argentina", "07:00", "arábia saudita") + 
    createGame("dinamarca", "10:00", "tunísia") + 
    createGame("méxico", "13:00", "polônia") + 
    createGame("frança", "16:00", "austrália")) +
  createCard("23/11","quarta",
    createGame("marrocos", "07:00", "croácia") + 
    createGame("alemanha", "10:00", "japão") + 
    createGame("espanha", "13:00", "costarica") + 
    createGame("bélgica", "16:00", "canadá")) +
  createCard("24/11", "quinta", 
    createGame("suíça", "07:00", "camarões") + 
    createGame("uruguai", "10:00", "coreia do sul") + 
    createGame("portugal", "13:00", "gana") +
    createGame("brasil", "16:00", "sérvia")) +
  createCard("25/11", "sexta", 
    createGame("gales", "07:00", "irã") + 
    createGame("catar", "10:00", "senegal") + 
    createGame("holanda", "13:00", "equador") +
    createGame("inglaterra", "16:00", "estados unidos")) +
  createCard("26/11", "sábado", 
    createGame("tunísia", "07:00", "austrália") + 
    createGame("polônia", "10:00", "arábia saudita") + 
    createGame("frança", "13:00", "dinamarca") +
    createGame("argentina", "16:00", "méxico")) +
  createCard("27/11", "domingo", 
    createGame("japão", "07:00", "costarica") + 
    createGame("bélgica", "10:00", "marrocos") + 
    createGame("croácia", "13:00", "canadá") +
    createGame("espanha", "16:00", "alemanha")) +
  createCard("28/11","segunda",
    createGame("camarões", "07:00", "sérvia") +
    createGame("coreia do sul", "10:00", "gana") +
    createGame("brasil", "13:00", "suíça") +
    createGame("portugal", "16:00", "uruguai")) +
  createCard("29/11","terça",
    createGame("equador", "12:00", "senegal") +
    createGame("holanda", "12:00", "catar") +
    createGame("irã", "16:00", "estados unidos") +
    createGame("gales", "16:00", "inglaterra")) +
  createCard("30/11","quarta",
    createGame("tunísia", "12:00", "frança") +
    createGame("austrália", "12:00", "dinamarca") +
    createGame("polônia", "16:00", "argentina") +
    createGame("arábia saudita", "16:00", "méxico")) +
  createCard("01/12","quinta",
    createGame("croácia", "12:00", "bélgica") +
    createGame("canadá", "12:00", "marrocos") +
    createGame("japão", "16:00", "espanha") +
    createGame("costarica", "16:00", "alemanha")) +
  createCard("02/12","sexta",
    createGame("coreia do sul", "12:00", "portugal") +
    createGame("gana", "12:00", "uruguai") +
    createGame("sérvia", "16:00", "suíça") +
    createGame("camarões", "16:00", "brasil"))
