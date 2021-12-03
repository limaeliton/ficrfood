//Chamar Graçom Btn
const garcomBtn = document.getElementById("garcomBtn")

garcomBtn.addEventListener("click", function(){
  const promptMesa = window.prompt("Qual o número de sua mesa?")
  let mesa = Number(promptMesa)
  if(mesa > 0){
    var promptPedido = window.prompt(`Mesa ${mesa} - Deseja realizar algum pedido?`)
    promptPedido
  }
  else{
    alert("Mesa inválida")
    return; //Para de prosseguir com os prompts
  }
  if(promptPedido == ""){
    alert("Aguarde, o garçom está a caminho")
  }
  else{
    alert("Aguarde, o garçom está a caminho")
  }
})

//Reserva form
const telefone = document.getElementById("telefone")
const cpf = document.getElementById("cpf")
const ambiente = document.getElementById("ambiente")
const nCadeiras = document.getElementById("nCadeiras")
const nome = document.getElementById("nome")
const data = document.getElementById("data")
const reservaBtn = document.getElementById("reservarBtn")

reservaBtn.addEventListener("click", function(){
  if(telefone.value == ""){
    alert("Insira um número de telefone")
  }
  else if(cpf.value == ""){
    alert("Insira um cpf")
  }
  else if(ambiente.value == ""){
    alert("Selecione um ambiente")
  }
  else if(nCadeiras.value == ""){
    alert("Selecione um número de cadeiras")
  }
  else if(nome.value == ""){
    alert("Insira um nome")
  }
  else if(data.value == ""){
    alert("Insira uma data")
  }
  else{
    alert("Reserva concluída com sucesso!")
  }
})

//Comanda

const finalizarPedido = document.getElementById("finalizarPedidoBtn")
const listaPedidos = document.getElementById("listaPedidos")
let pedidos = []
let comanda = {
  mesa:"",
  itens: []
}

finalizarPedido.addEventListener("click", function(){
  const contadores = [Number(document.getElementById("contadorMaminha").value), Number(document.getElementById("contadorAlcatra").value), Number(document.getElementById("contadorPicanha").value), Number(document.getElementById("contadorBatata").value), Number(document.getElementById("contadorHamburguer").value), Number(document.getElementById("contadorCoxinha").value), Number(document.getElementById("contadorMousse").value), Number(document.getElementById("contadorSorvete").value), Number(document.getElementById("contadorCoca").value), Number(document.getElementById("contadorSprite").value), Number(document.getElementById("contadorMilk").value)]
  const nMesa = Number(document.getElementById("nMesa").value)

  console.log(contadores[0])

  const h3 = document.createElement("H3")
  listaPedidos.appendChild(h3)
  h3.innerHTML = "Mesa " + nMesa
  comanda.mesa = h3.innerHTML

  const nPedido = pedidos.length + 1
  const h5 = document.createElement("H5")
  listaPedidos.appendChild(h5)
  h5.innerHTML = "Pedido " + nPedido

  if(contadores[0] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Maminha x" + contadores[0]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[1] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Alcatra x" + contadores[1]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[2] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Picanha x" + contadores[2]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[3] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Batata Frita x" + contadores[3]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[4] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Hamburguer x" + contadores[4]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[5] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Coxinha x" + contadores[5]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[6] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Mousse x" + contadores[6]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[7] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Sorvete x" + contadores[7]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[8] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Coca-cola x" + contadores[8]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[9] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Sprite x" + contadores[9]
    comanda.itens.push(li.innerHTML)
  }
  else{} if(contadores[10] != 0){
    const li = document.createElement("LI")
    listaPedidos.appendChild(li)
    li.innerHTML = "Milk Shake x" + contadores[10]
    comanda.itens.push(li.innerHTML)
  }
  pedidos.push(comanda)
  window.localStorage.Pedidos = JSON.stringify(pedidos)
})