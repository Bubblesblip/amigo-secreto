// Definición de las variables
let listaNombres = [];
let resultado = document.getElementById('resultado');
let listaFinal = document.getElementById('listaAmigos');

function limpiarBarra(){
    document.getElementById('amigo').value='';
}

function agregarNombresLista(){
    let nombres = document.getElementById('amigo').value;
        if(nombres == ""){
            alert('Escriba un nombre, por favor');
        } else if(listaNombres.includes(nombres)){
            alert('Este nombre ya se encuentra en la lista');
        } else {
            listaNombres.push(nombres)
            // esto pues mete el nombre que puse en la lista
            limpiarBarra();
            // y esto pues limpia ajá
            console.log(listaNombres);
            mostrarLista();
        }
}

function mostrarLista(){
    listaFinal.innerHTML="";
    for(let conteo = 0;conteo<listaNombres.length; conteo++){
        let elemento = listaNombres[conteo]
        let elementoLista = document.createElement("li");
        elementoLista.innerHTML = elemento;
        listaFinal.appendChild(elementoLista);
    }
}

function sorteo(){
    if(listaNombres[0] != null){
        let ganador =
    listaNombres[Math.floor(Math.random()*listaNombres.length)];
        let li = document.createElement("li");
        li.innerHTML = `Tu amigo secreto es ${ganador}`;
        resultado.innerHTML = "";
        resultado.appendChild(li);
        limpiarBarra;
    } else{
        alert('Debes ingresar al menos un nombre para realizar el sorteo')
    }
}

function reiniciar(){
    listaNombres=[];
    listaFinal.innerHTML="";
    resultado.innerHTML="";
}

// Que mas crees que le pueda añadir?
