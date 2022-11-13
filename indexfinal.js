//SISTEMA DE CARGA DE DATOS SOBRE PRESTAMOS/CREDITOS OTORGADOS

//Primer RENDER
window.addEventListener('DOMContentLoaded', dom);

Toastify({
    text: 'Bienvenido',
    duration: 2500,
    // gravity: 'bottom'
    destination: 'https://www.google.com',
}).showToast();

//=====================================
class Usuario {
    constructor(
        numUsuario,
        nombreCompleto,
        docIdentidad,
        sexo,
        montoCredito,
        cantidadCuotas,
        email,
        telefono,
        imagen
    ) {
        this.numUsuario = numUsuario;
        (this.nombreCompleto = nombreCompleto),
            (this.docIdentidad = docIdentidad),
            (this.sexo = sexo),
            (this.montoCredito = montoCredito),
            (this.cantidadCuotas = cantidadCuotas);
        this.emailContacto = email;
        this.telefonoContacto = telefono;
        this.imagen = imagen;
        this.mostrarDatos = function () {
            console.log(
                `${this.nombreCompleto}, con Documento de Identidad número ${this.docIdentidad}, ha solicitado un préstamo por un total de $ ${this.montoCredito} a pagar en ${this.cantidadCuotas} cuotas.`
            );
        };
        this.mensaje = function () {
            if (this.montoCredito > 200000) {
                console.log(
                    `Estimado usuario ${this.nombreCompleto}, el monto maximo a solicitar es de $200.000.- Intente solicitando un montor menor.`
                );
            }
        };
    }
}

let baseDatos = [];
const usuario0 = new Usuario(
    0,
    'Jose Morales',
    32323232,
    'masculino',
    50000,
    2,
    'josem@gmail.com',
    1122334455,
    'assets/imgUsuario1.png'
);
baseDatos.push(usuario0);

const usuario1 = new Usuario(
    1,
    'Mei Lopez',
    45454545,
    'femenino',
    20000,
    5,
    'meil@gmail.com',
    1166778899,
    'assets/imgUsuario2.png'
);
baseDatos.push(usuario1);

const usuario2 = new Usuario(
    2,
    'Lucas Maglieri',
    90909090,
    'masculino',
    70000,
    9,
    'lucas@gmail.com',
    112345678,
    'assets/imgUsuario3.png'
);
baseDatos.push(usuario2);

//=====================================

//guardo en storage el array baseDatos donde se fueron pusheando todos los nuevos usuarios
// localStorage.setItem("directorioUsuarios", baseDatos)
localStorage.setItem('arrayJSON', JSON.stringify(baseDatos));
let arrayParseado = JSON.parse(localStorage.getItem('arrayJSON'));

//=====================================
//function con inputs para crear perfil de nuevos usuarios
function nuevoUsuario() {
    let nombreCompletoInput = document.getElementById('nombreCompletoInput').value;
    let docIdentidadInput = document.getElementById('docIdentidadInput').value;
    let sexoInput = document.getElementById('sexoInput').value;
    let montoCreditoInput = document.getElementById('montoCreditoInput').value;
    let cantidadCuotasInput = document.getElementById('cantidadCuotasInput').value;
    let emailContactoInput = document.getElementById('emailContactoInput').value;
    let telefonoContactoInput = document.getElementById('telefonoContactoInput').value;
    let usuarioCreado = new Usuario(
        baseDatos.length,
        nombreCompletoInput,
        docIdentidadInput,
        sexoInput,
        montoCreditoInput,
        cantidadCuotasInput,
        emailContactoInput,
        telefonoContactoInput,
        'assets/logo-blanco.png'
    );
    baseDatos.push(usuarioCreado);
    localStorage.setItem('arrayJSON', JSON.stringify(baseDatos));
    arrayParseado = JSON.parse(localStorage.getItem('arrayJSON'));
    dom()
 /*    console.log(baseDatos) */
}

//capturo btn ingresarUsuarioBtn y le asigno evento para que envie los value a la function de nuevoUsuario
const ingresarUsuarioBtn = document.getElementById('guardarUsuario');
ingresarUsuarioBtn.addEventListener("click", nuevoUsuario);

//=====================================

//Agregar notificacion al agregar nuevoUsuario
function confirIngresoNuevoUsuario (){
    Toastify({
        text: "Cliente ingresado",
        duration: 2500,
        // gravity: 'bottom'
        // destination: 'https://www.google.com'
    }).showToast()
}

//=====================================

//RECORREMOS EL ARRAY USUARIO E INDICAMOS QUE SE IMPRIMA EN CONSOLA LA INFO QUE CONTENGA
baseDatos.forEach((usuario)=>console.table(usuario))

//=====================================

//RECORREMOS EL ARRAY Y LLAMAMOS LAS FUNCIONES
baseDatos.forEach((usuario)=>usuario.mostrarDatos() + usuario.mensaje())

//=====================================
//ACUMULADOR DE LA CANTIDAD DE PESOS/DOLARES DADOS EN PRESTAMO/CREDITO
let btnMontoCedido = document.getElementById('acumulador');
function acumCedido() {
    let acumulador = 0;
    baseDatos.forEach(elem => {
        acumulador += elem.montoCredito;
    });
    let totalCredSolicitados = acumulador;
    console.log(totalCredSolicitados);
    /* alert(`El total cedido en prestamo es de $${totalCredSolicitados}`) */
    Swal.fire({
        title: `El total cedido en prestamo es de $${totalCredSolicitados}`,
        text: false,
        icon: 'info',
        confirmButtonText: 'OK',
        showConfirmButton: false,
    });
}
btnMontoCedido.addEventListener('click', acumCedido);

//=====================================
//DEFINO INTERES SEGUN CANTIDAD DE CUOTAS SELECCIONADAS POR EL CLIENTE
function interes() {
    let interes = 0;
    baseDatos.forEach(elem => {
        if (elem.cantidadCuotas >= 1 && elem.cantidadCuotas <= 3) {
            interes = 1.1;
        }
        if (elem.cantidadCuotas > 3 && elem.cantidadCuotas <= 6) {
            interes = 1.15;
        }
        if (elem.cantidadCuotas > 6 && elem.cantidadCuotas <= 12) {
            interes = 1.2;
        } else if (elem.cantidadCuotas > 12 && elem.cantidadCuotas < 0) {
            alert('Las cuotas maximas disponibles son 12!');
        }
    });
    return interes;
}

//IMPRIMO EL SALDO FINAL CON INTERESES
function saldoInteres(interesSobreCredito) {
    const totalCredCobrar = baseDatos.map(elem => elem.montoCredito * interesSobreCredito);
    return totalCredCobrar;
}
//console.table(totalCredCobrar);

//=====================================
//DEFINIR EL VALOR DE CADA CUOTA A PAGAR POR EL CLIENTE (CAPITAL PRESTAMO + INTERESES)
//pendiente
// let valorCuota = 0

//=====================================
function dom() {
    let interesSobreCredito = interes();
    let totalCredCobrar = saldoInteres(interesSobreCredito);

    //DOM y PLANTILLAS
    let divUsuarios = document.getElementsByClassName('usuarios')[0];
    // divUsuarios.setAttribute("class", "cardsUsuarios")
    divUsuarios.innerHTML = '';
    baseDatos.forEach(usuario => {
        let nuevosUsuarios = document.createElement('div');
        nuevosUsuarios.innerHTML = `<article id="${usuario.numUsuario}" class="card">
                                    <img class="imgUsuario" width="30%" src="${usuario.imagen}" alt="">
                                    <hr>
                                    <div class="contentCard">
                                        <p class="nombre-cliente">
                                            Cliente: <br> ${usuario.nombreCompleto}
                                        </p>
                                        <p class="dniCliente">
                                            Documento Identidad: <br> ${usuario.docIdentidad}
                                        </p>
                                        <p class="sexoCliente">
                                            Sexo: <br> ${usuario.sexo}
                                        </p>
                                        <p class="montoCreditoCliente">
                                            Credito solicitado: <br> $${usuario.montoCredito}
                                        </p>
                                        <p class="cantidadCuotasCliente">
                                            Cantidad de cuotas: <br> ${usuario.cantidadCuotas}
                                        </p>
                                        <p class="emailContact">
                                            Correo: <br> ${usuario.emailContacto}
                                        </p>
                                        <p class="telContact">
                                            Teléfono: <br> ${usuario.telefonoContacto}
                                        </p>
                                        <button id="interesesInfo${usuario.numUsuario}">Intereses Generados</button>
                                    </div>
                                    </article>`;
        //capturo btn y asigno evento
        divUsuarios.appendChild(nuevosUsuarios);

        let interesesInfoBtn = document.getElementById(`interesesInfo${usuario.numUsuario}`);
        interesesInfoBtn.addEventListener('click', () => {
/*             console.log(totalCredCobrar);
            console.log(usuario.numUsuario); */
            console.log(
                `El usuario ${usuario.nombreCompleto}, tiene una deuda total de $${
                    totalCredCobrar[usuario.numUsuario]
                }`
            );
            /* alert(`El usuario ${usuario.nombreCompleto}, tiene una deuda total de $${totalCredCobrar[usuario.numUsuario]}`) */
            Swal.fire({
                title: `El usuario ${usuario.nombreCompleto}, tiene una deuda total de $${
                    totalCredCobrar[usuario.numUsuario]
                }`,
                text: false,
                icon: 'info',
                confirmButtonText: 'OK',
                showConfirmButton: false,
            });
        });
    });
}

//=====================================
//capturo btn info y le asigno evento
let classInfo = document.getElementsByClassName('info')[0];
function respuestaClick() {
/*     console.log("Más info en Google")
    alert("Más info en Google") */
    Swal.fire({
        title: 'Acá no!',
        text: `Buscá en Google vago`,
        icon: 'info',
        confirmButtonText: 'OK',
        showConfirmButton: false,
    });
}
classInfo.addEventListener('click', respuestaClick);

//=====================================
//FILTRO X DNI
function filtroXDNI (/* baseDatos */){
    let dniIngresado = document.getElementById('DNIinput').value;
    let filtrado = baseDatos.find(
        (usuario)=>usuario.docIdentidad == dniIngresado)
    if(filtrado == undefined){
        console.log(`El Documento de Identidad N. ${dniIngresado} no se encuentra registrado`)
    }else{
        console.log(filtrado)
    }    
}
/* filtroXDNI(baseDatos) */

let btnFiltroDNI = document.getElementById('filtrar')
btnFiltroDNI.addEventListener('click', filtroXDNI)

//=====================================
//BOTON PARA FILTRAR POR SEXO MASCULINO: EN PROCESO
let btnFiltroSexoM = document.getElementById('filtroSexoM');

//console.log(clickFiltroSexoM)

btnFiltroSexoM.addEventListener('click', e => {
    e.preventDefault();
    let dataFiltrada = baseDatos.filter(el => el.sexo == 'masculino');
    console.log(dataFiltrada);
/*     alert(dataFiltrada) */
});

//BOTON PARA FILTRAR POR SEXO FEMENINO
let btnFiltroSexoF = document.getElementById('filtroSexoF');

//console.log(clickFiltroSexoF)
btnFiltroSexoF.addEventListener('click', e => {
    e.preventDefault();
    let censoSexoF = baseDatos.filter(el => el.sexo == 'femenino');
    console.log(censoSexoF);
});

//=====================================

//Dark and Light mode
//localStorage ponemos misma clave para que se pise y siempre sea UNO U OTRO
let btnDarkMode = document.getElementById('botonDarkMode');
let btnLightMode = document.getElementById('botonLightMode');
//Operador logico OR
let darkMode = localStorage.getItem('darkMode') || localStorage.setItem('darkMode', 'dark');

if (darkMode == 'light') {
    document.body.classList.add('lightMode');
}

btnDarkMode.addEventListener('click', () => {
    //Retiro la clase antigua
    document.body.classList.remove('lightMode');
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'dark');
});

btnLightMode.addEventListener('click', () => {
    //Retiro la clase antigua
    document.body.classList.remove('darkMode');
    document.body.classList.add('lightMode');
    localStorage.setItem('darkMode', 'light');
});

let btnEliminarTheme = document.getElementById('eliminar');
btnEliminarTheme.addEventListener('click', () => {
    localStorage.removeItem('darkMode');
});

//cambiar logo si usuario elije lightMode
//Funciona OK pero tengo que actualizar la pagina para que cambie el logo..
//tengo que bajar con JSON el template (light o black Mode) que tenga guardado el usuario para evalular contra eso o esta ok evalular directamente darkMode == "light"?
if (darkMode == 'light') {
    document.getElementById('logoSakura').setAttribute('src', './assets/logo-negro.png');
} else {
    document.getElementById('logoSakura').setAttribute('src', './assets/logo-blanco.png');
}


//=====================================
//PENDIENTES A INCLUIR EN EL PROYECTO
/* 
guardarUsuarioBtn.forEach((usuarioBtn)=>{
    usuarioBtn.addEventListener("click", ()=>{console.log(`El usuario ${nombreCompleto} ha sido agregado a la base de datos.`)})
 }) */


