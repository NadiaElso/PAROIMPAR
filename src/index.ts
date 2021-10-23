let numeroingresado = Number(prompt("Ingrese un nùmero"));

while (numeroingresado <= 0) {
  let numeroingresado = Number(prompt("ingrese un número positivo"));
}

if (numeroingresado % 2 == 0) {
  console.log("El nùmero ingresado es par");
} else {
  console.log("El número ingreado es impar");
}
