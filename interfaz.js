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





function agregarDatosUsuario (opcionSelec,nacimiento,nombre,apellido,email,direccion,opcionSelecPais,opcionSelecDep,opcionSelecCiu,comentarios) { 

    var idNuevo = (usuarios.length + 1);
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


    };
    console.log(nuevoRegistro);
    usuarios.push(nuevoRegistro);
}

function obtenerListaUsuarios() {
    return usuarios;
}