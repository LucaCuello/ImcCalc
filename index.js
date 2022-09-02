// IMC CALC

function calculadoraIMC(peso, altura) {
  imc = peso / Math.pow(altura, 2);
  if (Math.round(imc) <= 1) {
    return (result.innerHTML = `❌Por favor, ingresá un dato válido.`);
  }
  if (Math.round(imc) <= 18) {
    return (result.innerHTML = `✅Tu IMC es ${Math.round(
      imc
    )}, por debajo del normal`);
  }
  if (Math.round(imc) >= 19 && Math.round(imc) <= 24) {
    return (result.innerHTML = `✅Tu IMC es ${Math.round(imc)}, normal`);
  }
  if (Math.round(imc) >= 25 && Math.round(imc) <= 29) {
    return (result.innerHTML = `✅Tu IMC es ${Math.round(
      imc
    )}, superior al normal`);
  }
  if (Math.round(imc) >= 30) {
    return (result.innerHTML = `✅Tu IMC es ${Math.round(imc)}, obesidad`);
  }

  if (!peso || !altura) {
    return (result.innerHTML = `❌Por favor, ingresá un dato válido.`);
  }
}

let contenedor = document.getElementsByClassName("imc-container"),
  boton = document.getElementById("send"),
  result = document.getElementById("result");

boton.addEventListener("click", function () {
  let pesoInformado = document.getElementById("peso").value,
    alturaInformada = document.getElementById("altura").value;
  calculadoraIMC(pesoInformado, alturaInformada);
});

// Dark mode / light mode

let moonIcon = document.getElementById("iconMoon"),
  sunIcon = document.getElementById("iconSun"),
  background = document.getElementById("background"),
  container = document.getElementById("imcContainer"),
  tr = document.getElementById("tr");

moonIcon.addEventListener("click", function () {
  moonIcon.style.display = "none";
  sunIcon.style.display = "block";
  document.body.style.backgroundImage =
    "linear-gradient(to top, #30cfd0 0%, #330867 100%)";
  container.style.color = "white";
  container.style.backgroundColor = "#25324a";
  document.getElementById("altura").style.backgroundColor = "#7488a1";
  document.getElementById("peso").style.backgroundColor = "#7488a1";
  tr.style.backgroundColor = "#7488a1";
  tr.style.color = "white";
  document.getElementById("send").classList.remove("lightHover");
});
sunIcon.addEventListener("click", function () {
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";

  document.body.style.backgroundImage =
    "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)";
  container.style.color = "black";
  container.style.backgroundColor = "#FFFFFF";
  document.getElementById("altura").style.backgroundColor = "#ec8989";
  document.getElementById("peso").style.backgroundColor = "#ec8989";
  tr.style.backgroundColor = "#e66e6e";
  tr.style.color = "black";
  document.getElementById("send").classList.add("lightHover");
});
