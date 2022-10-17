let nota = 0
let acum = 0
let alumno = prompt("Ingrese su Apellido registrado en oficina alumnos")
if (alumno =="") {
    alert("ERROR. Ingresa tu apellido para poder conocer el estado de tu cursada!")
    console.log("ERROR. Ingresa tu apellido para poder conocer el estado de tu cursada!")
} 
else if (alumno != "") {
    let cantNotas = prompt("Ingrese la cantidad de notas obtenias durante la cursada. (Trabajos prácticos, informes, parciales y finales.")
    for (let i=0; i<cantNotas; i++) {
        nota = parseInt(prompt(`Ingrese la nota ${i+1}`))
        acum = acum + nota
        console.log("acumulador parcial" + acum)
        console.log("La suma total es " + acum)
        if ( nota >= 0 && nota < 4) {
            alert("Reprobado")
            console.log("Reprobado")
        }
        if ( nota >= 4 && nota < 7) {
            alert("Aprobado")
            console.log("Aprobado")
        }
        if ( nota >= 7 && nota <9) {
            alert("Muy bien!")
            console.log("Muy bien!")
        }
        if ( nota >= 9 && nota <=10) {
            alert("Excelente!")
            console.log("Excelente!")
        }
        else if (nota < 0 || nota > 10) {
            alert("La nota es invalida")
            console.log("La nota es invalida")
        }
    }

let prom = acum / cantNotas
console.log("El promedio es " + prom)

if (prom < 4){
    alert("Reprobado. Tu promedio de cursada es "+prom+". Solicitar nueva fecha de examen con tu profesor.")
    console.log("Reprobado. Tu promedio de cursada es "+prom+". Solicitar nueva fecha de examen con tu profesor.")
}
if (prom >= 4 && prom < 7){
    alert("Aprobado. Tu promedio de cursada es "+prom+". Éxitos en el siguiente curso!")
    console.log("Aprobado. Tu promedio de cursada es "+prom+". Éxitos en el siguiente curso!")
}
if (prom >= 7 && prom < 9){
    alert("Muy buena cursada! Tu promedio de cursada es "+prom+". Éxitos en el siguiente curso")
    console.log("Muy buena cursada! Tu promedio de cursada es "+prom+". Éxitos en el siguiente curso")
}
if (prom >= 9 && prom <= 10){
    alert("Excelente cursada! Tu promedio de cursada es "+prom+". Tus examenes fueron extraordinarios. Éxitos en el siguiente curso!")
    console.log("Excelente cursada! Tu promedio de cursada es "+prom+". Tus examenes fueron extraordinarios. Éxitos en el siguiente curso!")
    confirm("Te gustaría ser tutor en el siguiente curso?")
}
}