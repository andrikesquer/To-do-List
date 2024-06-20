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

lista.addEventListener("click", function(a){
    if(a.target.tagName == "LI"){
        a.target.classList.toggle("completada");
        guardar();
    }
    else if(a.target.tagName == "ELIMINAR"){
        a.target.parentElement.remove();
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