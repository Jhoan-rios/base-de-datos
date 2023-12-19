var allPersons = [];

function guardarUsuario(){
    let nombres = document.getElementById('nombres').value;
    document.getElementById('nombres').value = '';
    document.getElementById('nombres').classList.add('is-valid');

    let apellidos = document.getElementById('apellidos').value;
    document.getElementById('apellidos').value = '';
    document.getElementById('apellidos').classList.add('is-valid');

    let correo = document.getElementById('correo').value;
    document.getElementById('correo').value = '';
    document.getElementById('correo').classList.add('is-valid');

    if(nombres != "" && apellidos != "" && correo != ""){
        console.log("Es valido")
    }
    else{
        if(nombres == ''){
            document.getElementById('nombres').focus()
            document.getElementById('nombres').classList.add('is-invalid')
        }
        else if(apellidos == ''){
            document.getElementById('apellidos').focus()
            document.getElementById('apellidos').classList.add('is-invalid')
        }
        else if(correo == ''){
            document.getElementById('correo').focus()
            document.getElementById('correo').classList.add('is-invalid')
        }
    }
    
    let persona = {
        nombres : nombres,
        apellidos : apellidos,
        correo : correo
    }
    
        var fila = document.createElement('tr');

            var celda1 = document.createElement('td')
            var celda2 = document.createElement('td')
            var celda3 = document.createElement('td')
            var boton = document.createElement('td')


            celda1.innerHTML = persona.nombres
            celda2.innerHTML = persona.apellidos
            celda3.innerHTML = persona.correo
            boton.innerHTML = `<a href="" class="btn btn-danger">Eliminar</a>`
            /* boton.innerHTML = "<a>Error</a>" */

            fila.appendChild(celda1)
            fila.appendChild(celda2)
            fila.appendChild(celda3)
            fila.appendChild(boton)


            allPersons.push(persona); 

                thead.appendChild(fila)


    console.log(allPersons);
        
    





/*     var nuevoObjeto = document.createElement('td');
    var nuevoObjeto1 = document.createElement('td');
    var nuevoObjeto2 = document.createElement('td');

    nuevoObjeto.innerHTML = persona.nombres;
    nuevoObjeto1.innerHTML = persona.apellidos;
    nuevoObjeto2.innerHTML = persona.correo;

     */

    
    


    
/*         usuario.appendChild(nuevoObjeto);
        usuario.appendChild(nuevoObjeto1);
        usuario.appendChild(nuevoObjeto2); */

    

};
    /* allPersons.forEach(function(persona){

    })
 */
