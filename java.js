const btnEncrypt = document.querySelector("#btn-encrypt");
const btnDencrypt = document.querySelector("#btn-decrypt");
const btnCopy = document.querySelector("#resultado__botonCopia");
const printResult = document.querySelector("#result");

function encriptar(){
  let text = document.getElementById("encriptador__entrada").value.toLowerCase();
  if (text.length != 0) {
    untoggle();
    toggle();
    document.getElementById("result").innerHTML = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    document.getElementById("encriptador__entrada").value = "";
  } else {
    untoggle();
    alert("Porfavor ingresa un texto");
  }
  document.querySelector("textarea").focus();
}

function desencriptar(){
    var text = document.getElementById("encriptador__entrada").value.toLowerCase();
    if (text.length != 0) {
      untoggle();
      toggle();
      document.getElementById("result").innerHTML = text
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
      document.getElementById("encriptador__entrada").value = "";
    } else {
      untoggle();
      alert("Porfavor ingresa un texto");
    }
    document.querySelector("textarea").focus();
}

function toggle() {
    let ocultaImg = document.querySelector("#resultado__logo");
    ocultaImg.style.display = "none";
    let ocultaMsg = document.querySelector(".resultado__mensaje");
    ocultaMsg.style.display = "none";
    let ocultaIns = document.querySelector("#resultado__instruccion");
    ocultaIns.style.display = "none";
    let texto = document.getElementById("result");
    texto.style.visibility = "visible";
    let ocultaBtn = document.querySelector("#resultado__botonCopia");
    ocultaBtn.style.display = "flex";
}

function untoggle() {
    let ocultaImg = document.querySelector("#resultado__logo");
    ocultaImg.style.display = "flex";
    let ocultaMsg = document.querySelector(".resultado__mensaje");
    ocultaMsg.style.display = "flex";
    let ocultaIns = document.querySelector("#resultado__instruccion");
    ocultaIns.style.display = "flex";
    let ocultaBtn = document.querySelector("#resultado__botonCopia");
    ocultaBtn.style.display = "none";
    let texto = document.getElementById("result");
    texto.style.visibility = "hidden";
}

function copy() {
    var text = document.getElementById("result");
    text.select();
    navigator.clipboard
      .writeText(text.value)
      .then(() => {
        alert("El texto ha sido copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
    document.querySelector("textarea").focus();
}