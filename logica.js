const paisElement = document.querySelector('#pais');
paisElement.addEventListener('change',(e)=>{
    var pais = document.getElementById('pais');
    var indicePais = pais.selectedIndex;
    var valorSelePais = pais.options[indicePais].value
    console.log(valorSelePais);

    if (valorSelePais !== "col"){
        const dept = document.querySelector('#departamento-contenedor').classList.add('oculto');
    }else{
        const dept = document.querySelector('#departamento-contenedor').classList.remove('oculto');
    }
    
})


const nac = document.querySelector('#nacimiento');
nac.addEventListener('change',(e)=>{
    var today = new Date();
    var year = today.getFullYear();
    var nacimiento = document.getElementById('nacimiento').value;
    var fecha = nacimiento.split('-');
    var yearNac = fecha[0];
    // console.log(fecha);



    if(year - yearNac < 18 ){
        alert("No es posible enviar el formulario por ser menor de edad")
        location.reload();
    }
})
document.querySelector('#enviar-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bandera = document.querySelector('#nombre').value;
    if(bandera){
        guardarDatosUsuario()
    }else{
        alert('Faltan datos en el formulario')
    }
    
    
} );
// imprimirTabla();

function guardarDatosUsuario () { 
    

    var sexo = document.getElementById('sexo');
    var indiceSexo = sexo.selectedIndex;
    var opcionSelec = sexo.options[indiceSexo].text
    var valorSele = sexo.options[indiceSexo].value
    // console.log(valorSele);

    var nacimiento = document.getElementById('nacimiento').value;
   

    var nombre = document.getElementById('nombre').value;
    // console.log(nombre);

    var apellido = document.getElementById('apellido').value;
    // console.log(apellido);

    var email = document.getElementById('email').value;
    // console.log(email);

    var direccion = document.getElementById('direccion').value;
    // console.log(direccion);

    var apto = document.getElementById('apto').value;
    // console.log(apto);

    var pais = document.getElementById('pais');
    var indicePais = pais.selectedIndex;
    var opcionSelecPais = pais.options[indicePais].text
    var valorSelePais = pais.options[indicePais].value
    // console.log(valorSelePais);



    var departamento = document.getElementById('departamento');
    var indiceDepartamento = departamento.selectedIndex;
    var opcionSelecDep = departamento.options[indiceDepartamento].text
    var valorSeleDep = departamento.options[indiceDepartamento].value
    // console.log(valorSeleDep);

    var ciudad = document.getElementById('ciudad');
    var indiceCiudad = ciudad.selectedIndex;
    var opcionSelecCiu = ciudad.options[indiceCiudad].text
    var valorSeleCiu = ciudad.options[indiceCiudad].value
    // console.log(valorSeleCiu);

    var comentarios = document.getElementById('comentarios').value;
    // console.log(comentarios);

    agregarDatosUsuario (opcionSelec,nacimiento,nombre,apellido,email,direccion,opcionSelecPais,opcionSelecDep,opcionSelecCiu,comentarios);
    imprimirTabla();

}


function imprimirTabla() {
    document.querySelector('.tabla').classList.remove('oculto')
    var lista = obtenerListaUsuarios(),
    tbody = document.querySelector('#tablaUsuarios tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < lista.length; i++) {
        var row = tbody.insertRow(i),
        nombreCel = row.insertCell(0),
        apellidoCel = row.insertCell(1);
        nacimientoCel = row.insertCell(2);
        sexoCel = row.insertCell(3);
        correoCel = row.insertCell(4);
        paisCel = row.insertCell(5);
        deptCel = row.insertCell(6);

        ciudadCel = row.insertCell(7);
        direccionCel = row.insertCell(8);
        comentariosCel = row.insertCell(9);

        
        nombreCel.innerHTML = lista[i].name;
        apellidoCel.innerHTML = lista[i].last_name;
        nacimientoCel.innerHTML = lista[i].date_birthday;
        sexoCel.innerHTML = lista[i].sex;
        correoCel.innerHTML = lista[i].email;
        paisCel.innerHTML = lista[i].country;
        deptCel.innerHTML = lista[i].Deparment;
        ciudadCel.innerHTML = lista[i].City;
        direccionCel.innerHTML = lista[i].addres;
        comentariosCel.innerHTML = lista[i].comment;



        tbody.appendChild(row);
    }

    limpiarDatos();
}

function limpiarDatos() {
   document.querySelector('#formu').reset()

}