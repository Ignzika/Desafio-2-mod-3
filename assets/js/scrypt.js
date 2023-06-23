//js parte 1

let ampolleta = document.querySelector("#bulb");
let border = (ampolleta.style.border = "");

ampolleta.addEventListener("click", () => {
  border = !border; //sin esto no funciona u.u
  if (border) {
    ampolleta.style.border = "1px solid red";
    ampolleta.src = "assets/image/bulbon.png";
    ampolleta.style.filter =
      "drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)";
  } else {
    ampolleta.style.border = "";
    ampolleta.src = "assets/image/bulboff.png";
    ampolleta.style.filter = "";
  }
});

//js parte 2

let bttn = document.querySelector("#buttonBuy");

bttn.addEventListener("click", () => {
  let stik1 = document.querySelector("#amount1").value;
  let stik2 = document.querySelector("#amount2").value;
  let stik3 = document.querySelector("#amount3").value;
  let stik4 = document.querySelector("#amount4").value;
  let amount = +stik1 + +stik2 + +stik3 + +stik4;
  let missing = 10 - +amount;
  amount = parseInt(amount);
  document.querySelector("#totalstickers").innerHTML = amount;
  if (amount > 10) {
    alert("te pasaste wey");
    document.querySelector("#avisoAlerta").innerHTML =
      "¡llevas demasiados stickers!";
  }
  if (amount < 10) {
    document.querySelector("#avisoAlerta").innerHTML =
      "¡llevas " +
      amount +
      " stickers!" +
      " Aún necesitas " +
      missing +
      " stickers";
  }
  if (amount == 10) {
    document.querySelector("#avisoAlerta").innerHTML =
      "¡llevas exactamente 10 stickers!";
  }
  if (amount == 0) {
    document.querySelector("#avisoAlerta").innerHTML =
      "¡No has seleccionado ninguna cantidad de stickers!";
  }
  if (amount == undefined || amount == null || amount == "") {
    document.querySelector("#avisoAlerta").innerHTML =
      "これを表示させるために何をしましたか??";
  } else {
    document.querySelector("#avisoAlerta").innerHTML =
      "¿Que hiciste para que apareciera esto?";
  }
});

//js parte 3

let pswConfirm = document.querySelector("#psswConfirm");

pswConfirm.addEventListener("click", () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  let num3 = document.querySelector("#num3").value;

  if (num1 === "9" && num2 === "1" && num3 === "1") {
    document.querySelector("#msj").innerHTML = "Password 1 correcto";
  } else if (num1 === "7" && num2 === "1" && num3 === "4") {
    document.querySelector("#msj").innerHTML = "Password 2 correcto";
  } else if (num1 === "" && num2 === "" && num3 === "") {
    document.querySelector("#msj").innerHTML =
      "Por Favor ingrese contraseña utilizando las flechas";
  } else {
    document.querySelector("#msj").innerHTML = "Esa no es tu contraseña";
  }
});
