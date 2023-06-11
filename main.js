
//CONTADOR PARA ADIVINANZA
let oportunidades = 3

//NUMERO AL AZAR Y FUNCIONES PARA LEER LA MENTE
let numeroAzar =  Math.floor(Math.random() * (11 - 1)) + 1;
console.log(`El programa esta pensando en el numero ${numeroAzar}`)
function pista (a) {
    if (a>numeroAzar){
        alert(`
        Te equivocaste, volve a intentar.
        Te quedan ${oportunidades}
        Pista: el numero es mas bajo
        `)
    } else if (a<numeroAzar){
        alert(`
        Te equivocaste, volve a intentar.
        Te quedan ${oportunidades}
        Pista: el numero es mas alto
        `)
    }
}
function adivina (a) {
    alert(`
                            PODES LEER LA MENTE!
                            Ganaste el juego
                            `)
                            alert(`
                            AHORA ME TOCA A MI.
                            Pensa en un numero, del 1 al 10
                            No lo ingreses.
                            Lo voy a adivinar.
                            `)
                            alert(`PENSALO`)
                            alert(`Estas pensando en el....${a}`)
                            alert(`Si no era el ${a} es que solo soy un proyecto de entrega. Lo siento`)
}


//TEMPLATES Y FUNCIONES DEL GENERADOR DE POEMAS.
//POEMA 1
//a nombre, b lugar, c animal, d pregunta
function poema1 (a,b,c,d){
alert(`
${a} salio de su casa ese dia como todos los dias,
nunca penso que de camino a ${b} le iba a ocurrir lo que le ocurrio,
de golpe vino un ${c} y le pregunto: ${d}? 
`)
}
//POEMA 2
function poema2(a,b,c,d){
alert(`
Nunca podre olvidarme de ${a}, siempre junto a su ${c},
tendria que haberme parecido raro desde el principio, 
pero sobre todo despues de lo que hicieron en ${b}.
De lo que mas me arrepiento, es de no haberle preguntado: ${d}?
`)
}
//POEMA 3
function poema3 (a,b,c,d){
alert(`
${d}?...no es acaso eso lo que todos nos preguntamos?
Tal vez no, pero desde que ${a} se convirtio en  ${c}
se lo pregunto todos los dias. Y cada dia quiso volver a ${b}
`)
}


//FUNCION PARA CONVERSOR DE DIVISAS

const pesoAdolar = (a,b) => {
   let conversion = a/490
   alert(`
   ${b}, la cantidad de pesos ingresada
   equivale en el dia de la fecha 
   a ${conversion} dolares
   `)
}
const dolarApeso = (a,b) => {
    let conversion = a*490
    alert(`
    ${b}, la cantidad de dolar ingresada
    equivale en el dia de la fecha 
    a ${conversion} pesos
    `)
 }

//COMIENZO DE EJECUCION

let edadUsuario = parseInt(prompt(`Por favor ingrese su edad`))
    if (Number.isInteger(edadUsuario)&&(edadUsuario<18)){
        alert(`Lo siento, este juego es exclusivo +18`);
    } else if (edadUsuario >=18){
        let nombreUsuario = prompt (`Excelente, como es tu nombre?`)
        alert(`Bienvenido ${nombreUsuario} , te voy a proponer tres actividades. Ingresa el numero asociado a la que elijas`)
        let actividad = prompt(`
        1.- Leer la mente
        2.- Generador de Poema.
        3.- Conversor de divisas (dolar/peso)
        `)
        alert(`Seleccionaste la actividad numero ${actividad}`)
        switch(actividad){
            //LEER LA MENTE
            case '1': 
                    alert(`LEER LA MENTE`)
                        let numeroUsuario = prompt(`Estoy pensando un numero del 1 al 10. Tenes 3 oportunidades para adivinarlo. Que numero estoy pensando?`)
                        let PrimerNumero = numeroUsuario
                        console.log (PrimerNumero)
                        while (numeroUsuario!=numeroAzar && (oportunidades>1)){
                            oportunidades--
                            pista(numeroUsuario)
                            numeroUsuario = prompt (`En que numero estoy pensando?`)
                        }
                        if (numeroUsuario == numeroAzar) {
                           adivina(PrimerNumero) 
                        } else {
                            alert(`
                            TE QUEDASTE SIN OPORTUNIDADES
                            Game Over
                            `)
                        }
                    break
            //GENERADOR DE POEMAS
            case '2': 
                    alert(`GENERADOR DE POEMAS`)
                    let nombrePoema = prompt (`
                    Ok empecemos.
                    Ingresa un nombre.
                    `)
                    let lugarPoema=  prompt(`
                    Ingresa un lugar
                    `)
                    let lowerLugarPoema = lugarPoema.toLowerCase()
                    let profesionPoema = prompt (`
                    Ingresa una profesion o un animal
                    `)
                    let lowerProfesionPoema = profesionPoema.toLowerCase()
                    let preguntaPoema= prompt (`
                    Ingresa una pregunta.
                    `)
                    let lowerPreguntaPoema = preguntaPoema.toLowerCase()
                    alert(`GENERANDO TU POEMA`)
            //UNA VEZ QUE EL USUARIO GENERA LOS PROMPTS PARA EL POEMA, SE GENERA UN NUMERO ALEATORIO PARA DEFINIR QUE TEMPLATE DE POEMA SERA LA SALIDA
                    let valorAleatorio = Math.floor(Math.random() * (4 - 1)) + 1;
                    console.log(valorAleatorio)
                    if (valorAleatorio==1){
                        poema1 (nombrePoema, lowerLugarPoema, lowerProfesionPoema, lowerPreguntaPoema)
                    }
                    if (valorAleatorio==2){
                        poema2 (nombrePoema, lowerLugarPoema, lowerProfesionPoema, lowerPreguntaPoema)
                    }
                    if (valorAleatorio==3){
                        poema3 (nombrePoema, lowerLugarPoema, lowerProfesionPoema, lowerPreguntaPoema)
                    }
                    break
            case `3`: 
                    alert(`CONVERSOR DE DIVISAS`)
                    let moneda = prompt (`
                    Ingrese 1 o 2 segun sea su eleccion
                    1.- Dolar a peso
                    2-  Peso a Dolar
                    `)
                    if (moneda =='1'){
                        let cantidadUsuario = prompt(`Cuantos dolares desea convertir en pesos?`)
                        dolarApeso(cantidadUsuario, nombreUsuario)
                        break
                    } else if (moneda =='2'){
                        let cantidadUsuario = prompt (`Cuantos pesos desea convertir a dolares?`)
                        pesoAdolar(cantidadUsuario,nombreUsuario)
                        break
                    } 
            default:    
                    alert(`Ingresaste un valor no valido`)
                    break
        }
    } 
    else{
        alert("Tiene que ingresar un valor numerico");
    }





alert(`FIN DEL PROGRAMA`)

