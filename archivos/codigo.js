// inicializar secciones
const sectionLogin = document.getElementById("login")
const sectionEjercicios = document.getElementById("ejercicios")
const divPreescrita = document.getElementById("preescrita")
const divArmada = document.getElementById("armada")
const sectionMetodosEIntensidad = document.getElementById("metodosEIntensidad")
const sectionRutinaFinal = document.getElementById("rutinaFinal")

// inicializar botone, checkboxs y listas
const btnIniciar = document.getElementById("submit")
const btnSgteEjs = document.getElementById("sigteEjercicios")
const checkPre = document.getElementById("rutinaPreescrita")
const checkPor = document.getElementById("rutinaPorGrupos")
const checkFullbody = document.getElementById("fullbody")
const listaFullbody = document.getElementById("listaFullbody")
const checkTrenSuperior = document.getElementById("trenSuperior")
const listaTrenSuperior = document.getElementById("listaTrenSuperior")
const checkTrenInferior = document.getElementById("trenInferior")
const listaTrenInferior = document.getElementById("listaTrenInferior")
const checkEspalda = document.getElementById("espalda")
const listaEspalda = document.getElementById("listaEspalda")
const checkPecho = document.getElementById("pecho")
const listaPecho = document.getElementById("listaPecho")
const checkCore = document.getElementById("core")
const listaCore = document.getElementById("listaCore")
const checkBiceps = document.getElementById("biceps")
const listaBiceps = document.getElementById("listaBiceps")
const checkTriceps = document.getElementById("triceps")
const listaTriceps = document.getElementById("listaTriceps")
const checkHombro = document.getElementById("hombro")
const listaHombro = document.getElementById("listaHombro")
const checkCuadriceps = document.getElementById("cuadriceps")
const listaCuadriceps = document.getElementById("listaCuadriceps")
const checkGluteo = document.getElementById("gluteo")
const listaGluteo = document.getElementById("listaGluteo")
const checkIsquios = document.getElementById("isquios")
const listaIsquios = document.getElementById("listaIsquios")
const checkPantorrilla = document.getElementById("pantorrilla")
const listaPantorrilla = document.getElementById("listaPantorrilla")
const checkAccesorios = document.getElementById("accesorios")
const listaAccesorios = document.getElementById("listaAccesorios")
const checkSerie3 = document.getElementById("serie3")
const checkSerie4 = document.getElementById("serie4")
const checkFuerza = document.getElementById("fuerza")
const checkFuerzaResistencia = document.getElementById("fuerzaResistencia")
const checkHipertrofia = document.getElementById("hipertrofia")
const checkAlta = document.getElementById("alta")
const checkModerada = document.getElementById("moderada")
const checkMedia = document.getElementById("media")
const btnSgteEst = document.getElementById("sigteEstructura")
const btnAleatorio = document.getElementById("aleat")
const btnReiniciar = document.getElementById("reiniciar")

// inicializar tabla
const tabla = document.getElementById("tabla");
const cuerpoTabla = tabla.getElementsByTagName("tbody")[0];

// inicializar arreglos
const espaldaArr = [
    {nombre: "Dominada", agarre: "Prono, Neutro, Supino", posicion: "Ancho, Normal, Angosto", variante: "Normal, Negativa, Lastre", objetivo: "Espalda"},
    {nombre: "Jalón polea alta", agarre: "Prono, Neutro, Supino", posicion: "Ancho, Normal, Angosto", variante: "Unilateral, Bilateral", objetivo: "Espalda"},
    {nombre: "Jalón polea horizontal", agarre: "Prono, Neutro, Supino", posicion: "Ancho, Normal, Angosto", variante: "Unilateral, Bilateral", objetivo: "Espalda"},
    {nombre: "Remo con barra", agarre: "Prono, Supino", posicion: "Ancho, Normal, Angosto", variante: "Libre, Smith", objetivo: "Espalda"},
    {nombre: "Remo con mancuerna", agarre: "Prono, Neutro, Supino", posicion: "Pecho en banco, Afirmado en rack", variante: "Unilateral, Bilateral", objetivo: "Espalda"},
    {nombre: "Jalón horizontal máquina", agarre: "Prono, Neutro, Supino", posicion: "Normal", variante: "Unilateral, Bilateral", objetivo: "Espalda"},
    {nombre: "Pullover en polea", agarre: "Prono, Supino", posicion: "Ancho, Normal, Angosto", variante: "Unilateral, Bilateral", objetivo: "Espalda"}
]

const pechoArr = [
    {nombre: "Press banco plano", agarre: "Prono", posicion: "Normal", variante: "Barra, Mancuerna", objetivo: "Pecho"},
    {nombre: "Press banco inclinado", agarre: "Prono", posicion: "Normal", variante: "Barra, Mancuerna", objetivo: "Pecho"},
    {nombre: "Press banco declinado", agarre: "Prono", posicion: "Normal", variante: "Barra, Mancuerna", objetivo: "Pecho"},
    {nombre: "Cross X polea", agarre: "Neutro", posicion: "Inclinado", variante: "Unilateral, Bilateral", objetivo: "Pecho"},
    {nombre: "Press en polea", agarre: "Prono, Neutro, Supino", posicion: "Normal, Inclinado", variante: "Unilateral, Bilateral", objetivo: "Pecho"},
    {nombre: "Vuelo con mancuerna", agarre: "Neutro", posicion: "Plano, Inclinado", variante: "Normal", objetivo: "Pecho"},
    {nombre: "Vuelo en polea", agarre: "Neutro, Prono", posicion: "Sentado, De pie", variante: "Normal", objetivo: "Pecho"},
    {nombre: "Fondos", agarre: "Neutro", posicion: "Normal, Amplio", variante: "Normal, Lastre", objetivo: "Pecho"},
    {nombre: "Empuje en polea direccional", agarre: "Neutro, Prono, Supino", posicion: "Normal, Inclinado", variante: "Hacia arriba, Hacia abajo", objetivo: "Pecho"},
    {nombre: "Flexiones", agarre: "Neutro, Prono, Supino", posicion: "Normal, Inclinado, Declinado", variante: "Suelo, Miniparalelas", objetivo: "Pecho"}
]

const coreArr = [
    {nombre: "Plancha isométrica", agarre: "Neutro, Supino", posicion: "Pies juntos, Pies separados", variante: "Normal, Alternado, Unilateral", objetivo: "Core"},
    {nombre: "Twist ruso", agarre: "Normal", posicion: "Normal, Declinado", variante: "Disco, Mancuerna, Kettle", objetivo: "Core"},
    {nombre: "Abdominales", agarre: "Normal", posicion: "Normal, Declinado", variante: "Disco, Mancuerna, Kettle", objetivo: "Core"},
    {nombre: "Extensiones lumbares", agarre: "Normal", posicion: "Boca abajo, Máquina", variante: "Disco, Mancuerna, Kettle", objetivo: "Core"},
    {nombre: "Abdominales máquina", agarre: "Normal", posicion: "Normal", variante: "Máquina c/rodilla, Máquina s/rodilla", objetivo: "Core"},
    {nombre: "Rodillas al pecho / Bicicleta", agarre: "Normal", posicion: "En suelo", variante: "Normal, Alternado", objetivo: "Core"},
    {nombre: "Dragon flag", agarre: "Normal", posicion: "Inclinado, En suelo", variante: "Estirado, C/flexión de cadera y rodilla", objetivo: "Core"},
    {nombre: "Elevación piernas", agarre: "Normal", posicion: "En suelo", variante: "Normal, Alternado", objetivo: "Core"},
    {nombre: "L sit", agarre: "Neutro, Prono, Supino", posicion: "L normal, L colgado", variante: "En suelo, Paralelas, Barra", objetivo: "Core"},
    {nombre: "Pies a la barra", agarre: "Neutro, Prono, Supino", posicion: "Colgado", variante: "Barra", objetivo: "Core"}
]

const bicepsArr = [
    {nombre: "Curl supino con mancuerna", agarre: "Supino", posicion: "Sentado, Inclinado, De pie", variante: "Unilateral, Bilateral", objetivo: "Bíceps"},
    {nombre: "Curl neutro con mancuerna", agarre: "Neutro", posicion: "Sentado, Inclinado, De pie", variante: "Unilateral, Bilateral", objetivo: "Bíceps"},
    {nombre: "Curl prono con mancuerna", agarre: "Prono", posicion: "Sentado, Inclinado, De pie", variante: "Unilateral, Bilateral", objetivo: "Bíceps"},
    {nombre: "Curl banco scott", agarre: "Supino", posicion: "Sentado", variante: "Mancuerna, Barra z", objetivo: "Bíceps"},
    {nombre: "Curl supino con barra", agarre: "Supino", posicion: "De pie", variante: "Barra, Barra z", objetivo: "Bíceps"},
    {nombre: "Curl prono con barra", agarre: "Prono", posicion: "De pie", variante: "Barra", objetivo: "Bíceps"},
    {nombre: "Curl neutro con barra", agarre: "Neutro", posicion: "De pie", variante: "Barra neutra", objetivo: "Bíceps"},
    {nombre: "Curl en máquina", agarre: "Prono", posicion: "Sentado", variante: "Unilateral, Bilateral", objetivo: "Bíceps"},
    {nombre: "Curl en polea", agarre: "Prono, Neutro, Supino", posicion: "De pie", variante: "Unilateral, Bilateral", objetivo: "Bíceps"},
    {nombre: "Curl alternado con mancuerna", agarre: "Prono, Neutro, Supino", posicion: "Sentado, Inclinado, De pie", variante: "Normal, Cruzado", objetivo: "Bíceps"},
    {nombre: "Curl con giro", agarre: "Prono a supino", posicion: "Sentado, Inclinado, De pie", variante: "Unilateral, Bilateral", objetivo: "Bíceps"}
]

const tricepsArr = [
    {nombre: "Extensión polea prono", agarre: "Prono", posicion: "De pie", variante: "Unilateral, Bilateral", objetivo: "Tríceps"},
    {nombre: "Extensión polea neutro", agarre: "Neutro", posicion: "De pie", variante: "Unilateral, Bilateral", objetivo: "Tríceps"},
    {nombre: "Extensión polea supino", agarre: "Supino", posicion: "De pie", variante: "Unilateral, Bilateral", objetivo: "Tríceps"},
    {nombre: "Patada en polea", agarre: "Neutro", posicion: "De pie", variante: "Normal", objetivo: "Tríceps"},
    {nombre: "Máquina tríceps", agarre: "Neutro", posicion: "Sentado", variante: "Unilateral, Bilateral", objetivo: "Tríceps"},
    {nombre: "Rompe cráneo con barra", agarre: "Prono, Neutro", posicion: "Banco plano", variante: "Barra, Barra neutra", objetivo: "Tríceps"},
    {nombre: "Rompe cráneo mancuerna", agarre: "Prono, Neutro, Giro", posicion: "Banco plano", variante: "Unilateral, Bilateral", objetivo: "Tríceps"},
    {nombre: "Extensión polea cruzada", agarre: "Prono", posicion: "De pie", variante: "Unilateral, Bilateral", objetivo: "Tríceps"},
    {nombre: "Extensión polea con implemento", agarre: "Cuerda, V", posicion: "De pie", variante: "Normal", objetivo: "Tríceps"}
]

const hombroArr = [
    {nombre: "Press militar", agarre: "Prono", posicion: "Sentado, Inclinado, De pie", variante: "Mancuerna, Barra, Smith", objetivo: "Hombro"},
    {nombre: "Press rango completo", agarre: "Prono, Neutro, Supino", posicion: "Sentado, Inclinado, De pie", variante: "Mancuerna, Barra, Smith", objetivo: "Hombro"},
    {nombre: "Arnold press", agarre: "Supino a prono", posicion: "Sentado, Inclinado, De pie", variante: "Mancuerna", objetivo: "Hombro"},
    {nombre: "Vuelo frontal", agarre: "Prono, Neutro, Supino", posicion: "Sentado, De pie", variante: "Mancuerna, Barra, Barra z", objetivo: "Hombro"},
    {nombre: "Máquina press de hombro", agarre: "Prono, Neutro", posicion: "Sentado", variante: "Apoyo espalda, Apoyo pecho", objetivo: "Hombro"},
    {nombre: "Vuelo lateral con mancuerna", agarre: "Prono", posicion: "De pie, Inclinado, Sentado", variante: "Unilateral, Bilateral", objetivo: "Hombro"},
    {nombre: "Vuelo lateral en polea", agarre: "Prono", posicion: "De pie, Inclinado", variante: "Unilateral, Bilateral", objetivo: "Hombro"},
    {nombre: "Press hombro en polea", agarre: "Prono, Neutro, Supino", posicion: "Sentado, De pie", variante: "Unilateral, Bilateral", objetivo: "Hombro"},
    {nombre: "Facepull en polea con cuerda", agarre: "Prono", posicion: "Sentado, De pie", variante: "Bilateral", objetivo: "Hombro"},
    {nombre: "Vuelo posterior con mancuerna", agarre: "Prono, Neutro", posicion: "Sentado pecho en rodilla", variante: "Bilateral", objetivo: "Hombro"}
]

const cuadricepsArr = [
    {nombre: "Prensa", agarre: "No aplica", posicion: "Pies juntos, Normal, Sumo", variante: "Unilateral, Bilateral", objetivo: "Cuádriceps"},
    {nombre: "Hack squat", agarre: "No aplica", posicion: "Pies juntos, Normal", variante: "Unilateral, Bilateral", objetivo: "Cuádriceps"},
    {nombre: "Sentadilla libre", agarre: "Normal, C/déficit", posicion: "Pies juntos, Normal, Sumo", variante: "Tras nuca, Frontal", objetivo: "Cuádriceps"},
    {nombre: "Sentadilla smith", agarre: "Normal, C/déficit", posicion: "Pies juntos, Normal, Sumo", variante: "Tras nuca, Frontal", objetivo: "Cuádriceps"},
    {nombre: "Estocada caminando x pierna", agarre: "Normal", posicion: "De pie", variante: "Mancuerna, Barra tras nuca", objetivo: "Cuádriceps"},
    {nombre: "Estocada estática x pierna", agarre: "Normal, C/déficit", posicion: "De pie", variante: "Libre, Smith", objetivo: "Cuádriceps"},
    {nombre: "Extensión cuádriceps máquina", agarre: "Normal", posicion: "Sentado", variante: "Unilateral, Bilateral", objetivo: "Cuádriceps"},
    {nombre: "Sissy squat", agarre: "Normal", posicion: "De pie", variante: "Máquina sissy, Banda elástica, Libre", objetivo: "Cuádriceps"},
    {nombre: "Pistol squat", agarre: "Normal", posicion: "De pie", variante: "Libre, TRX, Banda elástica", objetivo: "Cuádriceps"}
]

const gluteoArr = [
    {nombre: "Hipthrust libre", agarre: "Normal", posicion: "Máquina, Banco", variante: "Unilateral, Bilateral", objetivo: "Glúteo"},
    {nombre: "Patada en polea", agarre: "Normal", posicion: "De pie", variante: "Diagonal", objetivo: "Glúteo"},
    {nombre: "Patada en máquina", agarre: "Normal", posicion: "Cuadrupedia", variante: "Normal", objetivo: "Glúteo"},
    {nombre: "Patada con banda", agarre: "Normal", posicion: "Cuadrupedia", variante: "Estirada, C/flexión rodilla", objetivo: "Glúteo"},
    {nombre: "Booty builder", agarre: "Normal", posicion: "Normal", variante: "Normal", objetivo: "Glúteo"},
    {nombre: "Pull polea", agarre: "Normal", posicion: "De pie", variante: "Normal", objetivo: "Glúteo"},
    {nombre: "Good morning", agarre: "Normal", posicion: "De pie", variante: "Barra tras nuca, Mancuerna en pecho", objetivo: "Glúteo"}
]

const isquiosArr = [
    {nombre: "Peso muerto libre", agarre: "Mixto, Prono", posicion: "Pies juntos, Normal, Sumo", variante: "Unilateral, Bilateral", objetivo: "Isquiotibial"},
    {nombre: "Peso muerto smith", agarre: "Mixto, Prono", posicion: "Pies juntos, Normal, Sumo", variante: "Unilateral, Bilateral", objetivo: "Isquiotibial"},
    {nombre: "Curl isquio máquina", agarre: "Normal", posicion: "Boca abajo, Sentado", variante: "Unilateral, Bilateral", objetivo: "Isquiotibial"},
    {nombre: "Búlgara", agarre: "Normal", posicion: "De pie", variante: "Máquina, Banco, TRX", objetivo: "Isquiotibial"},
    {nombre: "Curl nórdico", agarre: "Normal", posicion: "De rodillas", variante: "Completo, Negativa, Con banda", objetivo: "Isquiotibial"},
    {nombre: "Jefferson curl", agarre: "Normal, Neutro", posicion: "Pies juntos", variante: "En step, En piso", objetivo: "Isquiotibial"},
    {nombre: "Curl isquio en polea", agarre: "Normal", posicion: "De pie, Boca abajo", variante: "Unilateral", objetivo: "Isquiotibial"}
]

const pantorrillaArr = [
    {nombre: "Máquina sóleo", agarre: "Normal", posicion: "Sentado", variante: "Unilateral, Bilateral", objetivo: "Pantorrilla"},
    {nombre: "Calf raises", agarre: "En step", posicion: "Libre, Smith", variante: "Unilateral, Bilateral", objetivo: "Pantorrilla"}
]

const accesoriosArr = [
    {nombre: "Tibial anterior", agarre: "Talón en máquina", posicion: "Dorsiflexión", variante: "Máquina sóleo, Banda", objetivo: "Tibial anterior"},
    {nombre: "Abducción de cadera", agarre: "Normal", posicion: "Sentado, De pie", variante: "Máquina, Polea, Banda", objetivo: "Abductores"},
    {nombre: "Aducción de cadera", agarre: "Normal", posicion: "Sentado, De pie", variante: "Máquina, Polea, Banda", objetivo: "Aductores"}
]

// inicializar los valores en cero de las listas
let valorFullbody = 0
let valorTrenSuperior = 0
let valorTrenInferior = 0
let valorEspalda = 0
let valorPecho = 0
let valorCore = 0
let valorBiceps = 0
let valorTriceps = 0
let valorHombro = 0
let valorCuadriceps = 0
let valorGluteo = 0
let valorIsquios = 0
let valorPantorrilla = 0
let valorAccesorios = 0

// crear el arreglo de rutina en cero
let rutina = []

// cargar el juego
cargarJuego()

function cargarJuego(){
    sectionEjercicios.style.display="none"
    sectionMetodosEIntensidad.style.display="none"
    sectionRutinaFinal.style.display="none" 
    checkPre.checked = false
    checkPor.checked = false
    checkFullbody.checked = false
    checkTrenSuperior.checked = false
    checkTrenInferior.checked = false
    checkEspalda.checked = false
    checkPecho.checked = false
    checkCore.checked = false
    checkBiceps.checked = false
    checkTriceps.checked = false
    checkHombro.checked = false
    checkCuadriceps.checked = false
    checkGluteo.checked = false
    checkIsquios.checked = false
    checkPantorrilla.checked = false
    checkAccesorios.checked = false
    checkSerie3.checked = false 
    checkSerie4.checked = false 
    checkFuerza.checked = false 
    checkFuerzaResistencia.checked = false 
    checkHipertrofia.checked = false 
    checkAlta.checked = false 
    checkModerada.checked = false 
    checkMedia.checked = false 
}

btnIniciar.addEventListener("click", function() {
    // Obtener los valores de los campos de entrada
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Validar los campos de entrada
    if (username != admin) {
        alert("El nombre de usuario no es correcto");
    } else if (password != admin) {
        alert("La contraseña no es correcta");
    } else {
        // Permitir que el formulario se envíe
        sectionLogin.style.display="none"
        sectionEjercicios.style.display="block"
        divArmada.style.display="none"
        divPreescrita.style.display="none"
        checkPor.checked = false
        checkPre.checked = false
        listaFullbody.style.display = "none"
        listaTrenSuperior.style.display = "none"
        listaTrenInferior.style.display = "none"
        listaEspalda.style.display = "none"
        listaPecho.style.display = "none"
        listaCore.style.display = "none"
        listaBiceps.style.display = "none"
        listaTriceps.style.display = "none"
        listaHombro.style.display = "none"
        listaCuadriceps.style.display = "none"
        listaGluteo.style.display = "none"
        listaIsquios.style.display = "none"
        listaPantorrilla.style.display = "none"
        listaAccesorios.style.display = "none"
    }
})

checkPre.addEventListener("click", function(){
    divPreescrita.style.display = "block"
    divArmada.style.display = "none"
    checkPor.checked = false
    checkEspalda.checked = false
    listaEspalda.selectedIndex = 0;
    listaEspalda.style.display = 'none';
    checkPecho.checked = false
    listaPecho.selectedIndex = 0;
    listaPecho.style.display = 'none';
    checkCore.checked = false
    listaCore.selectedIndex = 0;
    listaCore.style.display = 'none';
    checkBiceps.checked = false
    listaBiceps.selectedIndex = 0;
    listaBiceps.style.display = 'none';
    checkTriceps.checked = false
    listaTriceps.selectedIndex = 0;
    listaTriceps.style.display = 'none';
    checkHombro.checked = false
    listaHombro.selectedIndex = 0;
    listaHombro.style.display = 'none';
    checkCuadriceps.checked = false
    listaCuadriceps.selectedIndex = 0;
    listaCuadriceps.style.display = 'none';
    checkGluteo.checked = false
    listaGluteo.selectedIndex = 0;
    listaGluteo.style.display = 'none';
    checkIsquios.checked = false
    listaIsquios.selectedIndex = 0;
    listaIsquios.style.display = 'none';
    checkPantorrilla.checked = false
    listaPantorrilla.selectedIndex = 0;
    listaPantorrilla.style.display = 'none';
    checkAccesorios.checked = false
    listaAccesorios.selectedIndex = 0;
    listaAccesorios.style.display = 'none';
})

checkPor.addEventListener("click", function (){
    divArmada.style.display = "block"
    divPreescrita.style.display = "none"
    checkPre.checked = false
    checkFullbody.checked = false
    listaFullbody.selectedIndex = 0;
    listaFullbody.style.display = 'none';
    checkTrenSuperior.checked = false
    listaTrenSuperior.selectedIndex = 0;
    listaTrenSuperior.style.display = 'none';
    checkTrenInferior.checked = false
    listaTrenInferior.selectedIndex = 0;
    listaTrenInferior.style.display = 'none';
})

// eventos de checkbox con listas
checkFullbody.addEventListener('click', function() {
    if (checkFullbody.checked) {
        checkTrenSuperior.checked = false
        checkTrenInferior.checked = false
        listaFullbody.selectedIndex = 0;
        listaFullbody.style.display = 'block';
    } else {
        listaFullbody.style.display = 'none';
    }
});

checkTrenSuperior.addEventListener('click', function() {
    if (checkTrenSuperior.checked) {
        checkFullbody.checked = false
        checkTrenInferior.checked = false
        listaTrenSuperior.selectedIndex = 0;
        listaTrenSuperior.style.display = 'block';
    } else {
        listaTrenSuperior.style.display = 'none';
    }
});

checkTrenInferior.addEventListener('click', function() {
    if (checkTrenInferior.checked) {
        checkTrenSuperior.checked = false
        checkFullbody.checked = false
        listaTrenInferior.selectedIndex = 0;
        listaTrenInferior.style.display = 'block';
    } else {
        listaTrenInferior.style.display = 'none';
    }
});

checkEspalda.addEventListener('click', function() {
    if (checkEspalda.checked) {
        listaEspalda.selectedIndex = 0;
        listaEspalda.style.display = 'block';
    } else {
        listaEspalda.style.display = 'none';
    }
});

checkPecho.addEventListener('click', function() {
    if (checkPecho.checked) {
        listaPecho.selectedIndex = 0;
        listaPecho.style.display = 'block';
    } else {
        listaPecho.style.display = 'none';
    }
});

checkCore.addEventListener('click', function() {
    if (checkCore.checked) {
        listaCore.selectedIndex = 0;
        listaCore.style.display = 'block';
    } else {
        listaCore.style.display = 'none';
    }
});

checkBiceps.addEventListener('click', function() {
    if (checkBiceps.checked) {
        listaBiceps.selectedIndex = 0;
        listaBiceps.style.display = 'block';
    } else {
        listaBiceps.style.display = 'none';
    }
});

checkTriceps.addEventListener('click', function() {
    if (checkTriceps.checked) {
        listaTriceps.selectedIndex = 0;
        listaTriceps.style.display = 'block';
    } else {
        listaTriceps.style.display = 'none';
    }
});

checkHombro.addEventListener('click', function() {
    if (checkHombro.checked) {
        listaHombro.selectedIndex = 0;
        listaHombro.style.display = 'block';
    } else {
        listaHombro.style.display = 'none';
    }
});

checkCuadriceps.addEventListener('click', function() {
    if (checkCuadriceps.checked) {
        listaCuadriceps.selectedIndex = 0;
        listaCuadriceps.style.display = 'block';
    } else {
        listaCuadriceps.style.display = 'none';
    }
});

checkGluteo.addEventListener('click', function() {
    if (checkGluteo.checked) {
        listaGluteo.selectedIndex = 0;
        listaGluteo.style.display = 'block';
    } else {
        listaGluteo.style.display = 'none';
    }
});

checkIsquios.addEventListener('click', function() {
    if (checkIsquios.checked) {
        listaIsquios.selectedIndex = 0;
        listaIsquios.style.display = 'block';
    } else {
        listaIsquios.style.display = 'none';
    }
});

checkPantorrilla.addEventListener('click', function() {
    if (checkPantorrilla.checked) {
        listaPantorrilla.selectedIndex = 0;
        listaPantorrilla.style.display = 'block';
    } else {
        listaPantorrilla.style.display = 'none';
    }
});

checkAccesorios.addEventListener('click', function() {
    if (checkAccesorios.checked) {
        listaAccesorios.selectedIndex = 0;
        listaAccesorios.style.display = 'block';
    } else {
        listaAccesorios.style.display = 'none';
    }
});

// pasar a los metodos y verificar los ejercicios
btnSgteEjs.addEventListener("click", function (){

    if (checkPre.checked){
        if (checkFullbody.checked == false && checkTrenSuperior.checked == false && checkTrenInferior.checked == false){
            alert("Debes elegir uno")
        }
        else {
            if (checkFullbody.checked){
                valorFullbody = parseInt(listaFullbody.value)
                valorTrenSuperior = 0
                valorTrenInferior = 0
            }

            if (checkTrenSuperior.checked){
                valorTrenSuperior = parseInt(listaTrenSuperior.value)
                valorFullbody = 0
                valorTrenInferior = 0
            }

            if (checkTrenInferior.checked){
                valorTrenInferior = parseInt(listaTrenInferior.value)
                valorTrenSuperior = 0
                valorFullbody = 0
            }
            sectionEjercicios.style.display = "none"
            divArmada.style.display = "none"
            divPreescrita.style.display = "none"
            sectionMetodosEIntensidad.style.display = "block"
        }
    } else if (checkPor.checked){
        let suma = conocerValores()
        if (suma <= 12 && suma != 0){
            sectionEjercicios.style.display = "none"
            divArmada.style.display = "none"
            divPreescrita.style.display = "none"
            sectionMetodosEIntensidad.style.display = "block"
        }
        else {
            alert("No pueden ser más de 12 ejercicios en total y debes elegir mínimo uno")
        }
    } else {
        alert("Debes elegir una opción para continuar")
    }
})

// funcion para conocer los valores de lista de los grupos musculares
function conocerValores (){
    valorEspalda = 0
    valorPecho = 0
    valorCore = 0
    valorBiceps = 0
    valorTriceps = 0
    valorHombro = 0
    valorCuadriceps = 0
    valorGluteo = 0
    valorIsquios = 0
    valorPantorrilla = 0
    valorAccesorios = 0
    let sumaValores = 0
    if (checkEspalda.checked){
        valorEspalda = parseInt(listaEspalda.value)
        sumaValores += valorEspalda
    }
    if (checkPecho.checked){
        valorPecho = parseInt(listaPecho.value)
        sumaValores += valorPecho
    }
    if (checkCore.checked){
        valorCore = parseInt(listaCore.value)
        sumaValores += valorCore
    }
    if (checkBiceps.checked){
        valorBiceps = parseInt(listaBiceps.value)
        sumaValores += valorBiceps
    }
    if (checkTriceps.checked){
        valorTriceps = parseInt(listaTriceps.value)
        sumaValores += valorTriceps
    }
    if (checkHombro.checked){
        valorHombro = parseInt(listaHombro.value)
        sumaValores += valorHombro
    }
    if (checkCuadriceps.checked){
        valorCuadriceps = parseInt(listaCuadriceps.value)
        sumaValores += valorCuadriceps
    }
    if (checkGluteo.checked){
        valorGluteo = parseInt(listaGluteo.value)
        sumaValores += valorGluteo
    }
    if (checkIsquios.checked){
        valorIsquios = parseInt(listaIsquios.value)
        sumaValores += valorIsquios
    }
    if (checkPantorrilla.checked){
        valorPantorrilla = parseInt(listaPantorrilla.value)
        sumaValores += valorPantorrilla
    }
    if (checkAccesorios.checked){
        valorAccesorios = parseInt(listaAccesorios.value)
        sumaValores += valorAccesorios
    }
    return sumaValores
}

// funcion del boton para mostrar la rutina y chequear que todos tengan los campos llenos
checkSerie3.addEventListener("click", function (){
    if (checkSerie3.checked){
        checkSerie4.checked = false
    }
})

checkSerie4.addEventListener("click", function (){
    if (checkSerie4.checked){
        checkSerie3.checked = false
    }
})

checkFuerza.addEventListener("click", function (){
    if (checkFuerza.checked){
        checkFuerzaResistencia.checked = false
        checkHipertrofia.checked = false
    }
})

checkFuerzaResistencia.addEventListener("click", function (){
    if (checkFuerzaResistencia.checked){
        checkFuerza.checked = false
        checkHipertrofia.checked = false
    }
})

checkHipertrofia.addEventListener("click", function (){
    if (checkHipertrofia.checked){
        checkFuerzaResistencia.checked = false
        checkFuerza.checked = false
    }
})

checkMedia.addEventListener("click", function (){
    if (checkMedia.checked){
        checkAlta.checked = false
        checkModerada.checked = false
    }
})

checkModerada.addEventListener("click", function (){
    if (checkModerada.checked){
        checkAlta.checked = false
        checkMedia.checked = false
    }
})

checkAlta.addEventListener("click", function (){
    if (checkAlta.checked){
        checkMedia.checked = false
        checkModerada.checked = false
    }
})

btnSgteEst.addEventListener("click", function (){
    if ((checkSerie3.checked == false && checkSerie4.checked == false) || (checkFuerza.checked == false && checkFuerzaResistencia.checked == false && checkHipertrofia.checked == false) || (checkAlta.checked == false && checkModerada.checked == false && checkMedia.checked == false)){
        alert("Debes elegir uno de cada sección")
    }
    else {
        sectionMetodosEIntensidad.style.display = "none"
        sectionRutinaFinal.style.display = "block" 
        crearRutina()
    }
})

function crearRutina (){
    rutina = []
    if (checkPre.checked){
        if (checkFullbody.checked){
            crearFullbody()
        }
        else if(checkTrenSuperior.checked){
            crearTrenSuperior()
        }
        else {
            crearTrenInferior()
        }
    } else if (checkPor.checked){
        crearPorGrupo()
    }
    crearSerie()
    crearMetodo()
    crearIntensidad()
    mostrarRutina()
}

btnAleatorio.addEventListener("click", function (){
    while (cuerpoTabla.firstChild) {
        cuerpoTabla.removeChild(cuerpoTabla.firstChild);
    }
    crearRutina()
})

btnReiniciar.addEventListener("click", function (){
    location.reload()
})
    
function crearFullbody (){
    if (valorFullbody == 8){
        rutina.push(espaldaArr[aleatorio(0, espaldaArr.length-1)])
        rutina.push(pechoArr[aleatorio(0, pechoArr.length-1)])
        rutina.push(bicepsArr[aleatorio(0, bicepsArr.length-1)])
        rutina.push(tricepsArr[aleatorio(0, tricepsArr.length-1)])
        rutina.push(cuadricepsArr[aleatorio(0, cuadricepsArr.length-1)])
        rutina.push(gluteoArr[aleatorio(0, gluteoArr.length-1)])
        rutina.push(isquiosArr[aleatorio(0, isquiosArr.length-1)])
        rutina.push(pantorrillaArr[aleatorio(0, pantorrillaArr.length-1)])
    }
    else if (valorFullbody == 9){
        rutina.push(espaldaArr[aleatorio(0, espaldaArr.length-1)])
        rutina.push(pechoArr[aleatorio(0, pechoArr.length-1)])
        rutina.push(bicepsArr[aleatorio(0, bicepsArr.length-1)])
        rutina.push(tricepsArr[aleatorio(0, tricepsArr.length-1)])
        rutina.push(hombroArr[aleatorio(0, hombroArr.length-1)])
        rutina.push(cuadricepsArr[aleatorio(0, cuadricepsArr.length-1)])
        rutina.push(gluteoArr[aleatorio(0, gluteoArr.length-1)])
        rutina.push(isquiosArr[aleatorio(0, isquiosArr.length-1)])
        rutina.push(pantorrillaArr[aleatorio(0, pantorrillaArr.length-1)])
    }
    else if (valorFullbody == 10){
        rutina.push(espaldaArr[aleatorio(0, espaldaArr.length-1)])
        rutina.push(pechoArr[aleatorio(0, pechoArr.length-1)])
        rutina.push(bicepsArr[aleatorio(0, bicepsArr.length-1)])
        rutina.push(tricepsArr[aleatorio(0, tricepsArr.length-1)])
        rutina.push(hombroArr[aleatorio(0, hombroArr.length-1)])
        rutina.push(cuadricepsArr[aleatorio(0, cuadricepsArr.length-1)])
        rutina.push(gluteoArr[aleatorio(0, gluteoArr.length-1)])
        rutina.push(isquiosArr[aleatorio(0, isquiosArr.length-1)])
        rutina.push(pantorrillaArr[aleatorio(0, pantorrillaArr.length-1)])
        rutina.push(accesoriosArr[aleatorio(0, accesoriosArr.length-1)])
    }
    else if (valorFullbody == 11){
        rutina.push(espaldaArr[aleatorio(0, espaldaArr.length-1)])
        rutina.push(pechoArr[aleatorio(0, pechoArr.length-1)])
        rutina.push(coreArr[aleatorio(0, coreArr.length-1)])
        rutina.push(bicepsArr[aleatorio(0, bicepsArr.length-1)])
        rutina.push(tricepsArr[aleatorio(0, tricepsArr.length-1)])
        rutina.push(hombroArr[aleatorio(0, hombroArr.length-1)])
        rutina.push(cuadricepsArr[aleatorio(0, cuadricepsArr.length-1)])
        rutina.push(gluteoArr[aleatorio(0, gluteoArr.length-1)])
        rutina.push(isquiosArr[aleatorio(0, isquiosArr.length-1)])
        rutina.push(pantorrillaArr[aleatorio(0, pantorrillaArr.length-1)])
        rutina.push(accesoriosArr[aleatorio(0, accesoriosArr.length-1)])
    }
    else if (valorFullbody == 12){
        rutina.push(espaldaArr[aleatorio(0, espaldaArr.length-1)])
        rutina.push(pechoArr[aleatorio(0, pechoArr.length-1)])
        rutina.push(coreArr[aleatorio(0, coreArr.length-1)])
        rutina.push(bicepsArr[aleatorio(0, bicepsArr.length-1)])
        rutina.push(tricepsArr[aleatorio(0, tricepsArr.length-1)])
        rutina.push(hombroArr[aleatorio(0, hombroArr.length-1)])
        let cuad1 = 0
        let cuad2 = 0
        while (cuad1 == cuad2) {
            cuad1 = aleatorio(0, cuadricepsArr.length-1)
            cuad2 = aleatorio(0, cuadricepsArr.length-1)
        }
        rutina.push(cuadricepsArr[cuad1])
        rutina.push(cuadricepsArr[cuad2])
        rutina.push(gluteoArr[aleatorio(0, gluteoArr.length-1)])
        rutina.push(isquiosArr[aleatorio(0, isquiosArr.length-1)])
        rutina.push(pantorrillaArr[aleatorio(0, pantorrillaArr.length-1)])
        rutina.push(accesoriosArr[aleatorio(0, accesoriosArr.length-1)])
    }
}

function crearTrenSuperior(){
    if (valorTrenSuperior == 8){
        let esp1 = 0
        let esp2 = 0
        while (esp1 == esp2) {
            esp1 = aleatorio(0, espaldaArr.length-1)
            esp2 = aleatorio(0, espaldaArr.length-1)
        }
        rutina.push(espaldaArr[esp1])
        rutina.push(espaldaArr[esp2])
        let pec1 = 0
        let pec2 = 0
        while (pec1 == pec2) {
            pec1 = aleatorio(0, pechoArr.length-1)
            pec2 = aleatorio(0, pechoArr.length-1)
        }
        rutina.push(pechoArr[pec1])
        rutina.push(pechoArr[pec2])
        rutina.push(coreArr[aleatorio(0, coreArr.length-1)])
        rutina.push(bicepsArr[aleatorio(0, bicepsArr.length-1)])
        rutina.push(tricepsArr[aleatorio(0, tricepsArr.length-1)])
        rutina.push(hombroArr[aleatorio(0, hombroArr.length-1)])
    } else if (valorTrenSuperior == 9){
        let esp1 = 0
        let esp2 = 0
        while (esp1 == esp2) {
            esp1 = aleatorio(0, espaldaArr.length-1)
            esp2 = aleatorio(0, espaldaArr.length-1)
        }
        rutina.push(espaldaArr[esp1])
        rutina.push(espaldaArr[esp2])
        let pec1 = 0
        let pec2 = 0
        while (pec1 == pec2) {
            pec1 = aleatorio(0, pechoArr.length-1)
            pec2 = aleatorio(0, pechoArr.length-1)
        }
        rutina.push(pechoArr[pec1])
        rutina.push(pechoArr[pec2])
        let cor1 = 0
        let cor2 = 0
        while (cor1 == cor2) {
            cor1 = aleatorio(0, coreArr.length-1)
            cor2 = aleatorio(0, coreArr.length-1)
        }
        rutina.push(coreArr[cor1])
        rutina.push(coreArr[cor2])
        rutina.push(bicepsArr[aleatorio(0, bicepsArr.length-1)])
        rutina.push(tricepsArr[aleatorio(0, tricepsArr.length-1)])
        rutina.push(hombroArr[aleatorio(0, hombroArr.length-1)])
    } else if (valorTrenSuperior == 10){
        let esp1 = 0
        let esp2 = 0
        while (esp1 == esp2) {
            esp1 = aleatorio(0, espaldaArr.length-1)
            esp2 = aleatorio(0, espaldaArr.length-1)
        }
        rutina.push(espaldaArr[esp1])
        rutina.push(espaldaArr[esp2])
        let pec1 = 0
        let pec2 = 0
        while (pec1 == pec2) {
            pec1 = aleatorio(0, pechoArr.length-1)
            pec2 = aleatorio(0, pechoArr.length-1)
        }
        rutina.push(pechoArr[pec1])
        rutina.push(pechoArr[pec2])
        let bic1 = 0
        let bic2 = 0
        while (bic1 == bic2) {
            bic1 = aleatorio(0, bicepsArr.length-1)
            bic2 = aleatorio(0, bicepsArr.length-1)
        }
        rutina.push(bicepsArr[bic1])
        rutina.push(bicepsArr[bic2])
        let tri1 = 0
        let tri2 = 0
        while (tri1 == tri2) {
            tri1 = aleatorio(0, tricepsArr.length-1)
            tri2 = aleatorio(0, tricepsArr.length-1)
        }
        rutina.push(tricepsArr[tri1])
        rutina.push(tricepsArr[tri2])
        rutina.push(coreArr[aleatorio(0, coreArr.length-1)])
        rutina.push(hombroArr[aleatorio(0, hombroArr.length-1)])
    } else if (valorTrenSuperior == 11){
        let esp1 = 0
        let esp2 = 0
        while (esp1 == esp2) {
            esp1 = aleatorio(0, espaldaArr.length-1)
            esp2 = aleatorio(0, espaldaArr.length-1)
        }
        rutina.push(espaldaArr[esp1])
        rutina.push(espaldaArr[esp2])
        let pec1 = 0
        let pec2 = 0
        while (pec1 == pec2) {
            pec1 = aleatorio(0, pechoArr.length-1)
            pec2 = aleatorio(0, pechoArr.length-1)
        }
        rutina.push(pechoArr[pec1])
        rutina.push(pechoArr[pec2])
        let bic1 = 0
        let bic2 = 0
        while (bic1 == bic2) {
            bic1 = aleatorio(0, bicepsArr.length-1)
            bic2 = aleatorio(0, bicepsArr.length-1)
        }
        rutina.push(bicepsArr[bic1])
        rutina.push(bicepsArr[bic2])
        let tri1 = 0
        let tri2 = 0
        while (tri1 == tri2) {
            tri1 = aleatorio(0, tricepsArr.length-1)
            tri2 = aleatorio(0, tricepsArr.length-1)
        }
        rutina.push(tricepsArr[tri1])
        rutina.push(tricepsArr[tri2])
        let cor1 = 0
        let cor2 = 0
        while (cor1 == cor2) {
            cor1 = aleatorio(0, coreArr.length-1)
            cor2 = aleatorio(0, coreArr.length-1)
        }
        rutina.push(coreArr[cor1])
        rutina.push(coreArr[cor2])
        rutina.push(hombroArr[aleatorio(0, hombroArr.length-1)])
    } else if (valorTrenSuperior == 12){
        let esp1 = 0
        let esp2 = 0
        while (esp1 == esp2) {
            esp1 = aleatorio(0, espaldaArr.length-1)
            esp2 = aleatorio(0, espaldaArr.length-1)
        }
        rutina.push(espaldaArr[esp1])
        rutina.push(espaldaArr[esp2])
        let pec1 = 0
        let pec2 = 0
        while (pec1 == pec2) {
            pec1 = aleatorio(0, pechoArr.length-1)
            pec2 = aleatorio(0, pechoArr.length-1)
        }
        rutina.push(pechoArr[pec1])
        rutina.push(pechoArr[pec2])
        let bic1 = 0
        let bic2 = 0
        while (bic1 == bic2) {
            bic1 = aleatorio(0, bicepsArr.length-1)
            bic2 = aleatorio(0, bicepsArr.length-1)
        }
        rutina.push(bicepsArr[bic1])
        rutina.push(bicepsArr[bic2])
        let tri1 = 0
        let tri2 = 0
        while (tri1 == tri2) {
            tri1 = aleatorio(0, tricepsArr.length-1)
            tri2 = aleatorio(0, tricepsArr.length-1)
        }
        rutina.push(tricepsArr[tri1])
        rutina.push(tricepsArr[tri2])
        let cor1 = 0
        let cor2 = 0
        while (cor1 == cor2) {
            cor1 = aleatorio(0, coreArr.length-1)
            cor2 = aleatorio(0, coreArr.length-1)
        }
        rutina.push(coreArr[cor1])
        rutina.push(coreArr[cor2])
        let hom1 = 0
        let hom2 = 0
        while (hom1 == hom2) {
            hom1 = aleatorio(0, hombroArr.length-1)
            hom2 = aleatorio(0, hombroArr.length-1)
        }
        rutina.push(hombroArr[hom1])
        rutina.push(hombroArr[hom2])    
    }
}

function crearTrenInferior(){
    if (valorTrenInferior == 8){
        let cuad1 = 0
        let cuad2 = 0
        while (cuad1 == cuad2) {
            cuad1 = aleatorio(0, cuadricepsArr.length-1)
            cuad2 = aleatorio(0, cuadricepsArr.length-1)
        }
        rutina.push(cuadricepsArr[cuad1])
        rutina.push(cuadricepsArr[cuad2])
        let glu1 = 0
        let glu2 = 0
        while (glu1 == glu2) {
            glu1 = aleatorio(0, gluteoArr.length-1)
            glu2 = aleatorio(0, gluteoArr.length-1)
        }
        rutina.push(gluteoArr[glu1])
        rutina.push(gluteoArr[glu2])
        let isq1 = 0
        let isq2 = 0
        while (isq1 == isq2) {
            isq1 = aleatorio(0, isquiosArr.length-1)
            isq2 = aleatorio(0, isquiosArr.length-1)
        }
        rutina.push(isquiosArr[isq1])
        rutina.push(isquiosArr[isq2])
        rutina.push(pantorrillaArr[aleatorio(0, pantorrillaArr.length-1)])
        rutina.push(accesoriosArr[aleatorio(0, accesoriosArr.length-1)])
    } else if (valorTrenInferior == 9){
        let cuad1 = 0
        let cuad2 = 0
        while (cuad1 == cuad2) {
            cuad1 = aleatorio(0, cuadricepsArr.length-1)
            cuad2 = aleatorio(0, cuadricepsArr.length-1)
        }
        rutina.push(cuadricepsArr[cuad1])
        rutina.push(cuadricepsArr[cuad2])
        let glu1 = 0
        let glu2 = 0
        while (glu1 == glu2) {
            glu1 = aleatorio(0, gluteoArr.length-1)
            glu2 = aleatorio(0, gluteoArr.length-1)
        }
        rutina.push(gluteoArr[glu1])
        rutina.push(gluteoArr[glu2])
        let isq1 = 0
        let isq2 = 0
        while (isq1 == isq2) {
            isq1 = aleatorio(0, isquiosArr.length-1)
            isq2 = aleatorio(0, isquiosArr.length-1)
        }
        rutina.push(isquiosArr[isq1])
        rutina.push(isquiosArr[isq2])
        rutina.push(pantorrillaArr[aleatorio(0, pantorrillaArr.length-1)])
        let acc1 = 0
        let acc2 = 0
        while (acc1 == acc2) {
            acc1 = aleatorio(0, accesoriosArr.length-1)
            acc2 = aleatorio(0, accesoriosArr.length-1)
        }
        rutina.push(accesoriosArr[acc1])
        rutina.push(accesoriosArr[acc2])
    } else if (valorTrenInferior == 10){
        let cuad1 = 0
        let cuad2 = 0
        while (cuad1 == cuad2) {
            cuad1 = aleatorio(0, cuadricepsArr.length-1)
            cuad2 = aleatorio(0, cuadricepsArr.length-1)
        }
        rutina.push(cuadricepsArr[cuad1])
        rutina.push(cuadricepsArr[cuad2])
        let glu1 = 0
        let glu2 = 0
        while (glu1 == glu2) {
            glu1 = aleatorio(0, gluteoArr.length-1)
            glu2 = aleatorio(0, gluteoArr.length-1)
        }
        rutina.push(gluteoArr[glu1])
        rutina.push(gluteoArr[glu2])
        let isq1 = 0
        let isq2 = 0
        while (isq1 == isq2) {
            isq1 = aleatorio(0, isquiosArr.length-1)
            isq2 = aleatorio(0, isquiosArr.length-1)
        }
        rutina.push(isquiosArr[isq1])
        rutina.push(isquiosArr[isq2])
        let pan1 = 0
        let pan2 = 0
        while (pan1 == pan2) {
            pan1 = aleatorio(0, pantorrillaArr.length-1)
            pan2 = aleatorio(0, pantorrillaArr.length-1)
        }
        rutina.push(pantorrillaArr[pan1])
        rutina.push(pantorrillaArr[pan2])
        let acc1 = 0
        let acc2 = 0
        while (acc1 == acc2) {
            acc1 = aleatorio(0, accesoriosArr.length-1)
            acc2 = aleatorio(0, accesoriosArr.length-1)
        }
        rutina.push(accesoriosArr[acc1])
        rutina.push(accesoriosArr[acc2])
    } else if (valorTrenInferior == 11){
        let cuad1 = 0
        let cuad2 = 0
        let cuad3 = 0
        while ((cuad1 == cuad2) || (cuad1 == cuad3) || (cuad2 == cuad3)) {
            cuad1 = aleatorio(0, cuadricepsArr.length-1)
            cuad2 = aleatorio(0, cuadricepsArr.length-1)
            cuad3 = aleatorio(0, cuadricepsArr.length-1)
        }
        rutina.push(cuadricepsArr[cuad1])
        rutina.push(cuadricepsArr[cuad2])
        rutina.push(cuadricepsArr[cuad3])
        let glu1 = 0
        let glu2 = 0
        while (glu1 == glu2) {
            glu1 = aleatorio(0, gluteoArr.length-1)
            glu2 = aleatorio(0, gluteoArr.length-1)
        }
        rutina.push(gluteoArr[glu1])
        rutina.push(gluteoArr[glu2])
        let isq1 = 0
        let isq2 = 0
        while (isq1 == isq2) {
            isq1 = aleatorio(0, isquiosArr.length-1)
            isq2 = aleatorio(0, isquiosArr.length-1)
        }
        rutina.push(isquiosArr[isq1])
        rutina.push(isquiosArr[isq2])
        let pan1 = 0
        let pan2 = 0
        while (pan1 == pan2) {
            pan1 = aleatorio(0, pantorrillaArr.length-1)
            pan2 = aleatorio(0, pantorrillaArr.length-1)
        }
        rutina.push(pantorrillaArr[pan1])
        rutina.push(pantorrillaArr[pan2])
        let acc1 = 0
        let acc2 = 0
        while (acc1 == acc2) {
            acc1 = aleatorio(0, accesoriosArr.length-1)
            acc2 = aleatorio(0, accesoriosArr.length-1)
        }
        rutina.push(accesoriosArr[acc1])
        rutina.push(accesoriosArr[acc2])
    } else if (valorTrenInferior == 12){
        let cuad1 = 0
        let cuad2 = 0
        let cuad3 = 0
        while ((cuad1 == cuad2) || (cuad1 == cuad3) || (cuad2 == cuad3)) {
            cuad1 = aleatorio(0, cuadricepsArr.length-1)
            cuad2 = aleatorio(0, cuadricepsArr.length-1)
            cuad3 = aleatorio(0, cuadricepsArr.length-1)
        }
        rutina.push(cuadricepsArr[cuad1])
        rutina.push(cuadricepsArr[cuad2])
        rutina.push(cuadricepsArr[cuad3])
        let glu1 = 0
        let glu2 = 0
        while (glu1 == glu2) {
            glu1 = aleatorio(0, gluteoArr.length-1)
            glu2 = aleatorio(0, gluteoArr.length-1)
        }
        rutina.push(gluteoArr[glu1])
        rutina.push(gluteoArr[glu2])
        let isq1 = 0
        let isq2 = 0
        let isq3 = 0
        while ((isq1 == isq2) || (isq1 == isq3) || (isq2 == isq3)) {
            isq1 = aleatorio(0, isquiosArr.length-1)
            isq2 = aleatorio(0, isquiosArr.length-1)
            isq3 = aleatorio(0, isquiosArr.length-1)
        }
        rutina.push(isquiosArr[isq1])
        rutina.push(isquiosArr[isq2])
        rutina.push(isquiosArr[isq3])
        let pan1 = 0
        let pan2 = 0
        while (pan1 == pan2) {
            pan1 = aleatorio(0, pantorrillaArr.length-1)
            pan2 = aleatorio(0, pantorrillaArr.length-1)
        }
        rutina.push(pantorrillaArr[pan1])
        rutina.push(pantorrillaArr[pan2])
        let acc1 = 0
        let acc2 = 0
        while (acc1 == acc2) {
            acc1 = aleatorio(0, accesoriosArr.length-1)
            acc2 = aleatorio(0, accesoriosArr.length-1)
        }
        rutina.push(accesoriosArr[acc1])
        rutina.push(accesoriosArr[acc2])
    }
}

function crearPorGrupo(){
    if (checkEspalda.checked){
        crearEspalda()
    } 
    if (checkPecho.checked){
        crearPecho()
    } 
    if (checkCore.checked){
        crearCore()
    } 
    if (checkBiceps.checked){
        crearBiceps()
    } 
    if (checkTriceps.checked){
        crearTriceps()
    } 
    if (checkHombro.checked){
        crearHombro()
    } 
    if (checkCuadriceps.checked){
        crearCuadriceps()
    } 
    if (checkGluteo.checked){
        crearGluteo()
    } 
    if (checkIsquios.checked){
        crearIsquios()
    } 
    if (checkPantorrilla.checked){
        crearPantorrilla()
    } 
    if (checkAccesorios.checked){
        crearAccesorios()
    }
}

function crearEspalda(){
    let i=0
    while (i != valorEspalda) {
        let valorNuevo = aleatorio(0, espaldaArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(espaldaArr[valorNuevo])
            i++
        }   
    }
}

function crearPecho(){
    let i=0
    while (i != valorPecho) {
        let valorNuevo = aleatorio(0, pechoArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(pechoArr[valorNuevo])
            i++
        }   
    }
}

function crearCore(){
    let i=0
    while (i != valorCore) {
        let valorNuevo = aleatorio(0, coreArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(coreArr[valorNuevo])
            i++
        }   
    }
}

function crearBiceps(){
    let i=0
    while (i != valorBiceps) {
        let valorNuevo = aleatorio(0, bicepsArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(bicepsArr[valorNuevo])
            i++
        }   
    }
}

function crearTriceps(){
    let i=0
    while (i != valorTriceps) {
        let valorNuevo = aleatorio(0, tricepsArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(tricepsArr[valorNuevo])
            i++
        }   
    }
}

function crearHombro(){
    let i=0
    while (i != valorHombro) {
        let valorNuevo = aleatorio(0, hombroArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(hombroArr[valorNuevo])
            i++
        }   
    }
}

function crearCuadriceps(){
    let i=0
    while (i != valorCuadriceps) {
        let valorNuevo = aleatorio(0, cuadricepsArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(cuadricepsArr[valorNuevo])
            i++
        }   
    }
}

function crearGluteo(){
    let i=0
    while (i != valorGluteo) {
        let valorNuevo = aleatorio(0, gluteoArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(gluteoArr[valorNuevo])
            i++
        }   
    }
}

function crearIsquios(){
    let i=0
    while (i != valorIsquios) {
        let valorNuevo = aleatorio(0, isquiosArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(isquiosArr[valorNuevo])
            i++
        }   
    }
}

function crearPantorrilla(){
    let i=0
    while (i != valorPantorrilla) {
        let valorNuevo = aleatorio(0, pantorrillaArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(pantorrillaArr[valorNuevo])
            i++
        }   
    }
}

function crearAccesorios(){
    let i=0
    while (i != valorAccesorios) {
        let valorNuevo = aleatorio(0, accesoriosArr.length-1)
        if (!rutina.includes(valorNuevo)){
            rutina.push(accesoriosArr[valorNuevo])
            i++
        }   
    }
}

function crearSerie(){
    if (checkSerie3.checked){
        for (let i = 0; i < rutina.length; i++) {
            rutina[i]["series"] = 3   
        }
    }
    else {
        for (let i = 0; i < rutina.length; i++) {
            rutina[i]["series"] = 4   
        }
    }   
}

function crearMetodo(){
    if (checkFuerza.checked){
        for (let i = 0; i < rutina.length; i++) {
            rutina[i]["repeticiones"] = "4 - 6"
            rutina[i]["pausa"] = "2,5 a 4 min"   
        }
    } else if (checkFuerzaResistencia.checked){
        for (let i = 0; i < rutina.length; i++) {
            rutina[i]["repeticiones"] = "7 - 10"
            rutina[i]["pausa"] = "2 a 3,5 min"   
        }
    } else {
        for (let i = 0; i < rutina.length; i++) {
            rutina[i]["repeticiones"] = "11 - 14"
            rutina[i]["pausa"] = "1,5 a 3 min"   
        }
    }
}

function crearIntensidad(){
    if (checkAlta.checked){
        for (let i = 0; i < rutina.length; i++) {
            rutina[i]["intensidad"] = "RIR (0 - 1)"  
        }
    }
    else if (checkModerada.checked){
        for (let i = 0; i < rutina.length; i++) {
            rutina[i]["intensidad"] = "RIR (1 - 2)"  
        }
    } else {
        for (let i = 0; i < rutina.length; i++) {
            rutina[i]["intensidad"] = "RIR (2 - 3)"  
        }
    }
}

function mostrarRutina(){
    rutina.forEach((rutin) => {
        // Crear una nueva fila y sus celdas
        const fila = document.createElement("tr");
        const celdaNombre = document.createElement("td");
        const celdaAgarre = document.createElement("td");
        const celdaPosicion = document.createElement("td");
        const celdaVariante = document.createElement("td");
        const celdaObjetivo = document.createElement("td");
        const celdaSeries = document.createElement("td");
        const celdaRepeticiones = document.createElement("td");
        const celdaPausa = document.createElement("td");
        const celdaIntensidad = document.createElement("td");
      
        // Asignar el contenido a las celdas
        celdaNombre.textContent = rutin.nombre;
        celdaAgarre.textContent = rutin.agarre;
        celdaPosicion.textContent = rutin.posicion;
        celdaVariante.textContent = rutin.variante;
        celdaObjetivo.textContent = rutin.objetivo;
        celdaSeries.textContent = rutin.series;
        celdaRepeticiones.textContent = rutin.repeticiones;
        celdaPausa.textContent = rutin.pausa;
        celdaIntensidad.textContent = rutin.intensidad;
      
        // Agregar las celdas a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaAgarre);
        fila.appendChild(celdaPosicion);
        fila.appendChild(celdaVariante);
        fila.appendChild(celdaObjetivo);
        fila.appendChild(celdaSeries);
        fila.appendChild(celdaRepeticiones);
        fila.appendChild(celdaPausa);
        fila.appendChild(celdaIntensidad);
      
        // Agregar la fila al cuerpo de la tabla
        cuerpoTabla.appendChild(fila);
    })
}

function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}