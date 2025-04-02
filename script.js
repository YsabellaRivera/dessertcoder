let cakeLayers = [];
let currentOrder = [];

function addLayer(type) {
  const cake = document.getElementById("cake");
  const layer = document.createElement("div");
  layer.className = `layer ${type}`;
  cake.appendChild(layer);
  cakeLayers.push(type);
  document.getElementById("addSound").play();
}

function clearCake() {
  document.getElementById("cake").innerHTML = "";
  cakeLayers = [];
  document.getElementById("resultMessage").textContent = "";
}

function runCode() {
  const input = document.getElementById("codeInput").value;
  try {
    eval(input);
  } catch (error) {
    alert("There was an error in your code!");
  }
}

function getRandomOrder() {
  const orders = [
    ["sponge", "ganache", "cream"],
    ["cream", "sponge", "ganache"],
    ["ganache", "cream"]
  ];
  return orders[Math.floor(Math.random() * orders.length)];
}

function showOrder(order) {
  const text = order.map(layer => layer.charAt(0).toUpperCase() + layer.slice(1)).join(" → ");
  document.getElementById("customerOrder").textContent = text;
}

function checkCake() {
  if (cakeLayers.length !== currentOrder.length) {
    document.getElementById("resultMessage").textContent = "Wrong cake! Try again.";
    return;
  }

  for (let i = 0; i < cakeLayers.length; i++) {
    if (cakeLayers[i] !== currentOrder[i]) {
      document.getElementById("resultMessage").textContent = "Wrong cake! Try again.";
      return;
    }
  }

  document.getElementById("resultMessage").textContent = "Success! The customer is happy!";
  document.getElementById("successSound").play();
}

function selectDessert(dessert) {
  const opera = document.getElementById("operaSection");
  const dalgona = document.getElementById("dalgonaSection");
  if (dessert === "opera") {
    opera.style.display = "block";
    dalgona.style.display = "none";
    clearCake();
    currentOrder = getRandomOrder();
    showOrder(currentOrder);
  } else {
    opera.style.display = "none";
    dalgona.style.display = "block";
    document.getElementById("resultMessage").textContent = "";
  }
}

window.onload = function() {
  currentOrder = getRandomOrder();
  showOrder(currentOrder);
};