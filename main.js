const form = document.getElementById("novoItem");
const lista = document.querySelector(".lista");
const lembretes = localStorage.getItem("Lembretes") || [];
console.log(JSON.parse(lembretes));

function adicionaLista(evento, nome, quantidade) {
  //const nome = evento.target.elements.nome.value;
  //const quantidade = evento.target.elements.quantidade.value;
  //<li class="item"><strong>7</strong>Camisas</li>
  evento.preventDefault();
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  //li.innerHTML = `<strong>${quantidade}</strong>${nome}`;
  li.classList.add("item");
  li.appendChild(strong);
  strong.innerHTML += quantidade;
  li.innerHTML += nome;

  lista.appendChild(li);

  adicionaStorage(nome, quantidade);
}
function adicionaStorage(nome, quantidade) {
  let memoriaLocal = {
    nome: nome,
    quantidade: quantidade,
  };

  lembretes.push(memoriaLocal);
  localStorage.setItem("Lembretes", JSON.stringify(lembretes));
  //lembretes.push(JSON.stringify(memoriaLocal));
  //localStorage.setItem("Lembretes", lembretes);
}
form.addEventListener("submit", (evento) => {
  let nome = evento.target.elements.nome.value;
  let quantidade = evento.target.elements.quantidade.value;
  adicionaLista(evento, nome, quantidade);
  console.log(lembretes);
});
