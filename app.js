var usuarios =  [
    {
        "id": 1,
        "sex": "Hombre",
        "date_birthday": "1989-01-15",
        "name": "Juan",
        "last_name": "Perez",
        "email": "tes1@tes.com",
        "addres": "Calle falsa 123 apto 201",
        "country": "Colombia",
        "Deparment": "Cundinamarca",
        "City": "Bogota",
        "comment": "Comentario de prueba",
    },
    {
        "id": 2,
        "sex": "Mujer",
        "date_birthday": "2000-01-15",
        "name": "Andre",
        "last_name": "lopez",
        "email": "tes2@tes.com",
        "addres": "Calle falsa 123 apto 202",
        "country": "Colombia",
        "Deparment": "Valle",
        "City": "Cali",
        "comment": "Comentario de prueba 2",
    },
    {
        "id": 3,
        "sex": "Hombre",
        "date_birthday": "1980-01-15",
        "name": "Carlo",
        "last_name": "Rodriguez",
        "email": "tes2@tes.com",
        "addres": "Calle falsa 123 apto 203",
        "country": "Colombia",
        "Deparment": "Caldas",
        "City": "Manizales",
        "comment": "Comentario de prueba 3",
    },
    {
        "id": 4,
        "sex": "Mujer",
        "date_birthday": "1989-01-15",
        "name": "Maria",
        "last_name": "Vargas",
        "email": "tes4@tes.com",
        "addres": "Calle falsa 123 apto 204",
        "country": "Colombia",
        "Deparment": "Cundinamarca",
        "City": "Bogota",
        "comment": "Comentario de prueba 4",
    },
    {
        "id": 5,
        "sex": "Mujer",
        "date_birthday": "1985-01-15",
        "name": "Alejandra",
        "last_name": "Mesa",
        "email": "tes5@tes.com",
        "addres": "Calle falsa 123 apto 205",
        "country": "Colombia",
        "Deparment": "Cundinamarca",
        "City": "Bogota",
        "comment": "Comentario de prueba",
    }
];

// console.log(usuarios);


let enviar = document.querySelector('#enviar-btn');
enviar.addEventListener('click',function(){
    // console.log(usuarios);
    guardarRegistro();
    
})

function guardarRegistro(){

    var today = new Date();
    var year = today.getFullYear();

    var sexo = document.getElementById('sexo');
    var indiceSexo = sexo.selectedIndex;
    var opcionSelec = sexo.options[indiceSexo].text
    var valorSele = sexo.options[indiceSexo].value
    // console.log(valorSele);

    var nacimiento = document.getElementById('nacimiento').value;
    var fecha = nacimiento.split('-');
    var yearNac = fecha[0];
    // console.log(fecha);



    if(year - yearNac < 18 ){
        alert("No es posible enviar el formulario por ser menor de edad")
        location.reload();
    }

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

    if (valorSelePais !== "col"){
        document.getElementById('departamento-contenedor').classList.add('oculto')
    }

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

    var idNuevo = usuarios.length + 1
    var nuevoRegistro = {
        id:idNuevo,
        sex:opcionSelec,
        date_birthday: nacimiento,
        name: nombre,
        last_name: apellido,
        email: email,
        addres: direccion,
        country: opcionSelecPais,
        Deparment: opcionSelecDep,
        City: opcionSelecCiu,
        comment:comentarios,


    }

    usuarios.push(nuevoRegistro);
    console.log(usuarios);



    // agregarRegistro(opcionSelec,fecha,nombre,apellido,email,direccion);
}
