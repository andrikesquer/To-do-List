let escribir = document.getElementById("escribir");

let lista = document.getElementById("lista");

function agregar(){
    if(escribir.value == ''){
        alert ("Debes agregar tareas")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = escribir.value;
        lista.appendChild(li);
        
        let eliminar = document.createElement("eliminar");
        eliminar.innerHTML = "\u00d7";
        li.appendChild(eliminar);
    }
    escribir.value = "";
    guardar();
}

lista.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("completada");
        guardar();
    }
    else if(e.target.tagName == "ELIMINAR"){
        e.target.parentElement.remove();
        guardar();
    }
}, false);

function guardar(){
    localStorage.setItem("informacion", lista.innerHTML);
}

function mostrarTareas(){
    lista.innerHTML = localStorage.getItem("informacion");
}

mostrarTareas();