let mysql = require("mysql");

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sesamo",
  database: "usuarios",
});

conn.connect((err) => {
  if (err) console.log(err);
  else console.log("Conectado");
});

let insertar = new Promise((aceptado, rechazado) => {
  var sql = "INSERT INTO usuario (nombre, edad, sexo) VALUES (?,?,?)";
  conn.query(sql, ["Daniel", 21, "M"], function (error, resultado) {
    if (error) rechazado(error);
    aceptado(resultado);
  });
});

let borrar = new Promise((aceptado, rechazado) => {
  var sql = "DELETE FROM usuario WHERE 'nombre'=?";
  conn.query(sql, ["Daniel"], function (error, resultado) {
    if (error) rechazado(error);
    aceptado(resultado);
  });
});

let actualizar = new Promise((aceptado, rechazado) => {
  var sql = "UPDATE usuario SET edad = ? WHERE nombre = ?";
  conn.query(sql, [22, "Daniel"], function (error, resultado) {
    if (error) rechazado(error);
    aceptado(resultado);
  });
});

let consultar = new Promise((aceptado, rechazado) => {
  var sql = "SELECT * FROM persona WHERE nombre = ?";
  conn.query(sql, ["Daniel"], function (error, resultado) {
    if (error) rechazado(error);
    aceptado(resultado);
  });
});

insertar
  .then((mensaje) => {
    console.log("Registrado correctamente");
  })
  .catch((mensaje) => {
    console.log("Error al registrar");
  });

/*
    borrar.then((mensaje) => {
        console.log('Eliminado correctamente')
    }).catch((mensaje)=>{
        console.log('Error al borrar')
    })

    actualizar.then((mensaje) => {
        console.log('Actualizado correctamente')
    }).catch((mensaje)=>{
        console.log('Error al actualizar')
    })

    consultar.then((mensaje) => {
        console.log('Consulta exitosa')
    }).catch((mensaje)=>{
        console.log('Error al consultar')
    })
    */
