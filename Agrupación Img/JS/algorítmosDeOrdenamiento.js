/* FUncion para generar números aleatorios */
function rand(n){
    //creamos un numero al azar entre 1 y 6  
    return(Math.floor(Math.random() * n + 1 ));
} 

/* Creación de los arrays */
let grupoFamilia = new Array();
let futbolClub = new Array();
let basquetClub = new Array();
let inicial = 0;

/* Se asigna un valor random a la
posicion [0] del array */
grupoFamilia[inicial] = rand(6);
futbolClub[inicial] = rand(6);
basquetClub[inicial] = rand(6);

/* Se asignan valores random para
 las posiciones de las imágenes y se
 verifica que no se repitan */
for(let i=0; i<6; i++){
    grupoFamilia[i] = rand(6);
    for(let j=0; j<i; j++){
        if(grupoFamilia[i] == grupoFamilia[j]){
            i--;
        }
    }
}

for(let i=0; i<6; i++){
    futbolClub[i] = rand(6);
    for(let j=0; j<i; j++){
        if(futbolClub[i] == futbolClub[j]){
            i--;
        }
    }
}

for(let i=0; i<6; i++){
    basquetClub[i] = rand(6);
    for(let j=0; j<i; j++){
        if(basquetClub[i] == basquetClub[j]){
            i--;
        }
    }
}

/* ---------------------Burbuja--------------------- */
function burbujaAscendente(){
    let selectorGrupo = document.getElementById("selector_grupo").value;
    
    if(selectorGrupo === "1"){
        let aux;
        for (let i=1; i<grupoFamilia.length; i++) {
            for (let j = 0; j<(grupoFamilia.length - i); j++) {
                if (grupoFamilia[j] > grupoFamilia[j + 1]) {
                    aux = grupoFamilia[j];
                    grupoFamilia[j] = grupoFamilia[j + 1];
                    grupoFamilia[j + 1] = aux;
                }
            }
        }       
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if(selectorGrupo === "2"){
        let auxFutbol;
        for (let i=1; i<futbolClub.length; i++) {
            for (let j = 0; j<(futbolClub.length - i); j++) {
                if (futbolClub[j] > futbolClub[j + 1]) {
                    auxFutbol = futbolClub[j];
                    futbolClub[j] = futbolClub[j + 1];
                    futbolClub[j + 1] = auxFutbol;
                }
            }
        }       
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if(selectorGrupo === "3"){
        let auxBasquet;
        for (let i=1; i<basquetClub.length; i++) {
            for (let j = 0; j<(basquetClub.length - i); j++) {
                if (basquetClub[j] > basquetClub[j + 1]) {
                    auxBasquet = basquetClub[j];
                    basquetClub[j] = basquetClub[j + 1];
                    basquetClub[j + 1] = auxBasquet;
                }
            }
        }       
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }
}

function burbujaDescendente(){
    let selectorGrupo = document.getElementById("selector_grupo").value;
    
    if(selectorGrupo === "1"){
        let aux;
        for (let i=1; i<grupoFamilia.length; i++) {
            for (let j = 0; j<(grupoFamilia.length - i); j++) {
                if (grupoFamilia[j] < grupoFamilia[j + 1]) {
                    aux = grupoFamilia[j];
                    grupoFamilia[j] = grupoFamilia[j + 1];
                    grupoFamilia[j + 1] = aux;
                }
            }
        }       
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if(selectorGrupo === "2"){
        let auxFutbol;
        for (let i=1; i<futbolClub.length; i++) {
            for (let j = 0; j<(futbolClub.length - i); j++) {
                if (futbolClub[j] < futbolClub[j + 1]) {
                    auxFutbol = futbolClub[j];
                    futbolClub[j] = futbolClub[j + 1];
                    futbolClub[j + 1] = auxFutbol;
                }
            }
        }       
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if(selectorGrupo === "3"){
        let auxBasquet;
        for (let i=1; i<basquetClub.length; i++) {
            for (let j = 0; j<(basquetClub.length - i); j++) {
                if (basquetClub[j] < basquetClub[j + 1]) {
                    auxBasquet = basquetClub[j];
                    basquetClub[j] = basquetClub[j + 1];
                    basquetClub[j + 1] = auxBasquet;
                }
            }
        }       
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }
}

/* ---------------------Inserción--------------------- */
function insercionAscendente(){
    let selectorGrupo = document.getElementById("selector_grupo").value;
    
    if(selectorGrupo === "1"){
        let auxFamilia = 0;
        for(let i=1; i<grupoFamilia.length; i++){
            auxFamilia = grupoFamilia[i];
            let j = i-1;
            while((j>=0) && (grupoFamilia[j]>auxFamilia)){
                grupoFamilia[j+1] = grupoFamilia[j];
                j--;
            }
            grupoFamilia[j+1] = auxFamilia;
        }       
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if(selectorGrupo === "2"){
        let auxFutbol = 0;
        for(let i=1; i<futbolClub.length; i++){
            auxFutbol = futbolClub[i];
            let j = i-1;
            while((j>=0) && (futbolClub[j]>auxFutbol)){
                futbolClub[j+1] = futbolClub[j];
                j--;
            }
            futbolClub[j+1] = auxFutbol;
        }
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if(selectorGrupo === "3"){
        let auxBasquet = 0;
        for(let i=1; i<basquetClub.length; i++){
            auxBasquet = basquetClub[i];
            let j = i-1;
            while((j>=0) && (basquetClub[j]>auxBasquet)){
                basquetClub[j+1] = basquetClub[j];
                j--;
            }
            basquetClub[j+1] = auxBasquet;
        }
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }

}
/* ---------------------Inserción--------------------- */
function insercionDescendente(){
    let selectorGrupo = document.getElementById("selector_grupo").value;
    
    if(selectorGrupo === "1"){
        let auxFamilia = 0;
        for(let i=1; i<grupoFamilia.length; i++){
            auxFamilia = grupoFamilia[i];
            let j = i-1;
            while((j>=0) && (grupoFamilia[j]<auxFamilia)){
                grupoFamilia[j+1] = grupoFamilia[j];
                j--;
            }
            grupoFamilia[j+1] = auxFamilia;
        }       
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if(selectorGrupo === "2"){
        let auxFutbol = 0;
        for(let i=1; i<futbolClub.length; i++){
            auxFutbol = futbolClub[i];
            let j = i-1;
            while((j>=0) && (futbolClub[j]<auxFutbol)){
                futbolClub[j+1] = futbolClub[j];
                j--;
            }
            futbolClub[j+1] = auxFutbol;
        }
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if(selectorGrupo === "3"){
        let auxBasquet = 0;
        for(let i=1; i<basquetClub.length; i++){
            auxBasquet = basquetClub[i];
            let j = i-1;
            while((j>=0) && (basquetClub[j] < auxBasquet)){
                basquetClub[j+1] = basquetClub[j];
                j--;
            }
            basquetClub[j+1] = auxBasquet;
        }
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }
}

/* ---------------------Selección--------------------- */
function seleccionAscendente(){
    let selectorGrupo = document.getElementById("selector_grupo").value;

    if(selectorGrupo === "1"){
        for(let i=0; i<grupoFamilia.length -1; i++) {
            for(let j=i+1; j<grupoFamilia.length; j++){
                if(grupoFamilia[j] < grupoFamilia[i]) {
                   let auxFamilia = grupoFamilia[i];
                   grupoFamilia[i] = grupoFamilia[j];
                   grupoFamilia[j] = auxFamilia;
                }
            }
        }
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if(selectorGrupo === "2"){
        for(let i=0; i<futbolClub.length -1; i++) {
            for(let j=i+1; j<futbolClub.length; j++){
                if(futbolClub[j] < futbolClub[i]) {
                   let auxFutbol = futbolClub[i];
                   futbolClub[i] = futbolClub[j];
                   futbolClub[j] = auxFutbol;
                }
            }
        }
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if(selectorGrupo === "3"){
        for(let i=0; i<basquetClub.length -1; i++) {
            for(let j=i+1; j<basquetClub.length; j++){
                if(basquetClub[j] < basquetClub[i]) {
                   let auxBasquet = basquetClub[i];
                   basquetClub[i] = basquetClub[j];
                   basquetClub[j] = auxBasquet;
                }
            }
        }
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }

    }

}
/* ---------------------Selección--------------------- */
function seleccionDescendente(){
    let selectorGrupo = document.getElementById("selector_grupo").value;

    if(selectorGrupo === "1"){
        for(let i=0; i<grupoFamilia.length -1; i++) {
            for(let j=i+1; j<grupoFamilia.length; j++){
                if(grupoFamilia[j] > grupoFamilia[i]) {
                   let auxFamilia = grupoFamilia[i];
                   grupoFamilia[i] = grupoFamilia[j];
                   grupoFamilia[j] = auxFamilia;
                }
            }
        }
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if(selectorGrupo === "2"){
        for(let i=0; i<futbolClub.length -1; i++) {
            for(let j=i+1; j<futbolClub.length; j++){
                if(futbolClub[j] > futbolClub[i]) {
                   let auxFutbol = futbolClub[i];
                   futbolClub[i] = futbolClub[j];
                   futbolClub[j] = auxFutbol;
                }
            }
        }
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if(selectorGrupo === "3"){
        for(let i=0; i<basquetClub.length -1; i++) {
            for(let j=i+1; j<basquetClub.length; j++){
                if(basquetClub[j] > basquetClub[i]) {
                   let auxBasquet = basquetClub[i];
                   basquetClub[i] = basquetClub[j];
                   basquetClub[j] = auxBasquet;
                }
            }
        }
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }

    }

}

/* Se selecciona el grupo de imágenes
para pasarle sus posiciones random */
function ordenarImagen(){
    let selectorGrupo = document.getElementById("selector_grupo").value;

    if(selectorGrupo === "1"){
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if(selectorGrupo === "2"){
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if(selectorGrupo === "3"){
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }
}

function showSelected() {
    /* Captura Valor de la lista despegable de los algoritmos /
    / Validar seleccion de la lista desplegable y el checkbox*/
    let seleccion = document.getElementById('algoritmoSeleccionado').value;
    if ((seleccion === "1") && (document.getElementById("ascendente").checked)) {
        burbujaAscendente();
    }else if ((seleccion === "1") && (document.getElementById("descendente").checked)) {
        burbujaDescendente();
    }else if ((seleccion === "2") && (document.getElementById("ascendente").checked)) {
        insercionAscendente();
    }else if ((seleccion === "2") && (document.getElementById("descendente").checked)) {
        insercionDescendente();
    }else if ((seleccion === "3") && (document.getElementById("ascendente").checked)) {
        seleccionAscendente();
    }else if ((seleccion === "3") && (document.getElementById("descendente").checked)) {
        seleccionDescendente();
    }

}

