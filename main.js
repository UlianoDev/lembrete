const form = document.getElementById("novoItem");
const lista = document.querySelector(".lista");
const lembretes = JSON.parse(localStorage.getItem("Lembretes")) || [];
let id = lembretes.length > 0 ? lembretes[lembretes.length - 1].id + 1 : 0;


lembretes.forEach(element => {
  adicionaLista(element)
});

function adicionaLista(memoriaLocal) {
  //const nome = evento.target.elements.nome.value;
  //const quantidade = evento.target.elements.quantidade.value;
  //<li class="item"><strong>7</strong>Camisas</li>

  const li = document.createElement("li");
  const strong = document.createElement("strong");

  //li.innerHTML = `<strong>${quantidade}</strong>${nome}`;
  li.classList.add("item");
  li.appendChild(strong);
  strong.innerHTML += memoriaLocal.quantidade;
  strong.dataset.id = memoriaLocal.id
  li.innerHTML += memoriaLocal.nome;

  lista.appendChild(li);

  
}
function adicionaStorage(memoriaLocal) {

  lembretes.push(memoriaLocal);
  //localStorage.setItem("Lembretes", JSON.stringify(lembretes));
  //lembretes.push(JSON.stringify(memoriaLocal));
  //localStorage.setItem("Lembretes", lembretes);
}
function atualizaLista(idExistente, quantidadeAtual) {
  /*let quantidadeIdExistente = parseFloat(
    document.querySelector(`[data-id='${idExistente}']`).innerHTML
  );
  console.log(quantidadeIdExistente);
  quantidadeAtual = parseInt(quantidadeAtual);

 quantidadeIdExistente += quantidadeAtual;*/
 document.querySelector(`[data-id='${idExistente}']`).innerHTML = quantidadeAtual

}
/*function atualizaStorage(idExistente, quantidadeAtual) {
  let objetoExistente = parseInt(lembretes.find((elemento)=> elemento.id === idExistente).quantidade)
  //const objetoExistenteArray = lembretes.find((elemento)=> elemento.id === idExistente)
  //localStorage.setItem("Lembretes", JSON.stringify(objetoExistenteArray));
     objetoExistente = quantidadeAtual
    let quantidadeIdExistente = document.querySelector(
      `[data-id='${idExistente}']`
    ).innerText;
    quantidadeIdExistente = objetoExistente;

    console.log(objetoExistente)
     console.log(typeof quantidadeIdExistente);

    //localStorage.setItem('Lembretes', JSON.stringify()}*/
  

  
   

form.addEventListener("submit", (evento) => {

    evento.preventDefault();
  let nome = evento.target.elements.nome.value;
  let quantidade = evento.target.elements.quantidade.value;
    let memoriaLocal = {
      nome: nome,
      quantidade: quantidade,
      id: id
    };
  
    const existe = lembretes.find(element => {
      return element.nome === memoriaLocal.nome})




      if(existe){
        let idExistente = existe.id 
        let quantidadeAtual = memoriaLocal.quantidade
        memoriaLocal.id = existe.id
        //console.log(quantidadeAtual);
        //let quantidadeIdExistente = parseInt(document.querySelector(
        //  `[data-id='${idExistente}']`
        //).innerText)
        //atualizaLista(idExistente, quantidadeAtual);
       // quantidadeAtual = 
       atualizaLista(idExistente, quantidadeAtual);
        //console.log(quantidadeAtual)
        //atualizaStorage(idExistente, quantidadeAtual);

       //atualizaStorage(idExistente, quantidadeAtual);
                //console.log(quantidadeIdExistente);
                console.log(memoriaLocal)
                console.log(lembretes[idExistente])
                 lembretes[idExistente] = memoriaLocal
                console.log(lembretes[idExistente]);
      
      }else{  
      adicionaLista(memoriaLocal);
      adicionaStorage(memoriaLocal);
          id = id + 1;
        }

          localStorage.setItem("Lembretes", JSON.stringify(lembretes));


});
