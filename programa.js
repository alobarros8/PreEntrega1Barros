let nombre_alumno = prompt("ingresa tu nombre");

function promedios(nota_uno, nota_dos, nota_tres) {
  if (
    typeof nota_uno == "number" &&
    typeof nota_dos == "number" &&
    typeof nota_tres == "number"
  ) {
    let suma = nota_uno + nota_dos + nota_tres;
    let promedio = suma / 3;

    if (promedio >= 7 && promedio <= 10) {
      console.log(
        nombre_alumno,
        ".",
        "Tu nota final es:",
        promedio,
        ".Felicidades estas aprobado!"
      );
    } else if (promedio >= 4 && promedio < 7) {
      console.log(
        nombre_alumno,
        ".",
        "Tu nota final es:",
        promedio,
        ".Tenes recuperatorio el dia 5/02"
      );
    } else if (promedio <= 3) {
      console.log(
        nombre_alumno,
        ".",
        "Tu nota final es:",
        promedio,
        "Tendras que recursar"
      );
    } else if (promedio >= 11) {
      console.log("Haz ingresado mal un/los valor/es");
    }
  } else console.log("Solo se aceptan numeros");
}

promedios(
  parseInt(prompt("Ingresa nota 1")),
  parseInt(prompt("Ingresa nota 2")),
  parseInt(prompt("ingresa nota 3"))
);
