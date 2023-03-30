const form = document.getElementById("novoItem");
const lista = document.querySelector(".lista");
const lembretes = JSON.parse(localStorage.getItem("Lembretes")) || [];

lembretes.forEach((elemento) => {
  adicionaLista(elemento);
});

function adicionaLista(memoriaLocal) {
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  //li.innerHTML = `<strong>${quantidade}</strong>${nome}`;

  li.classList.add("item");
  li.appendChild(strong);
  strong.innerHTML += memoriaLocal.quantidade;
  strong.dataset.id = memoriaLocal.id;
  li.innerHTML += memoriaLocal.nome;
  lista.appendChild(li);
}
function adicionaStorage(memoriaLocal) {
  lembretes.push(memoriaLocal);

  localStorage.setItem("Lembretes", JSON.stringify(lembretes));
  //lembretes.push(JSON.stringify(memoriaLocal));
  //localStorage.setItem("Lembretes", lembretes);
}
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let nome = evento.target.elements.nome.value;
  let quantidade = evento.target.elements.quantidade.value;
  let id = lembretes.length;
  let memoriaLocal = {
    nome: nome,
    quantidade: quantidade,
    id: id,
  };
  const existe = lembretes.find((elementoAtual) => {
    return elementoAtual.nome === nome;
  });

  if (existe) {
    existe.id = memoriaLocal.id;
  } else {
    //memoriaLocal.id = id;

    adicionaLista(memoriaLocal);
    adicionaStorage(memoriaLocal);
  }
});
