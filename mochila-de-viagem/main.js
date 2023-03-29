const form = document.getElementById("novoItem");
const lista = document.querySelector('.lista');

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  let nome = e.target.elements.nome.value;
  let quantidade = e.target.elements.quantidade.value;
  //<li class="item"><strong>7</strong>Camisas</li>
  console.log(e);
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  li.classList.add("item");
  //li.innerHTML = `<strong>${quantidade}</strong>${nome}`;
  strong.innerHTML += quantidade;
  li.appendChild(strong);
  li.innerHTML += nome;
  lista.appendChild(li);

  console.log(li);
})
