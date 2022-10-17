//SIMULADOR PRESTAMOS CON INTERESES SEGUN CUOTAS ELEGIDAS POR EL USUARIO.
//Asigno tipos de perfiles para en un futuro poder segmentarlos.

let usuario = prompt("Ingrese el nombre completo de la persona solicitante del prestamo")
if (usuario != "") {
    let dniUsuario = prompt("Ingrese su Documento de Identidad sin puntos ni espacios")
    let montoSolicitado = parseFloat(prompt("Ingrese el monto del credito que desee tomar"))
    if (montoSolicitado != ""){
        let perfil = 0
        if (montoSolicitado >= 0 && montoSolicitado < 50000){
            perfil = 1
        }
        if (montoSolicitado >= 50000 && montoSolicitado < 100000){
            perfil = 2
        }
        if (montoSolicitado >= 100000 && montoSolicitado < 150000){
            perfil = 3
        }
        if (montoSolicitado >= 150000 && montoSolicitado < 200000){
            perfil = 4
        }
        if (montoSolicitado > 200000){
            perfil = 99
            alert("El monto maximo a solicitar es de $200.000.-")
        }
        }
    else if (montoSolicitado == ""){
        alert("Debe ingresar el monto por el cual solicita el prestamo.")
        console.log("Debe ingresar el monto por el cual solicita el prestamo.")
    }

    let cuotasSolicitadas = prompt("Ingrese la cantidad de cuotas en la que desea saldar el credito")
    let interes = 0
    if (cuotasSolicitadas != ""){
        if (cuotasSolicitadas >= 1 && cuotasSolicitadas <= 3){
            interes = 1.1
        }
        if (cuotasSolicitadas > 3 && cuotasSolicitadas <= 6){
            interes = 1.15
        }
        if (cuotasSolicitadas > 6 && cuotasSolicitadas <= 12){
            interes = 1.2
        }
        }
    else if ((cuotasSolicitadas >12) && (cuotasSolicitadas <0)){
        alert("Las cuotas maximas disponibles son 12!")
        console.log("Las cuotas maximas disponibles son 12!")
    }

    let montoCobrar = montoSolicitado * interes
    alert(`El monto total a saldar en ${cuotasSolicitadas} cuotas segun el prestamo solicitado sería de $${montoCobrar.toFixed(2)}`)
    console.log(`El monto total a saldar en ${cuotasSolicitadas} cuotas segun el prestamo solicitado sería de $${montoCobrar.toFixed(2)}`)
    confirm(`${usuario}, con Documento de Identidad Num. ${dniUsuario}, desea confirmar la solicitud del prestamo ingresado?`)
    }

else if (usuario == "") {
    alert("Debe ingresar el nombre completo del solicitante.")
    console.log("Debe ingresar el nombre completo del solicitante.")
}



