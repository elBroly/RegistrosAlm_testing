

function guardarDatos(){

  db.collection("usuarios").add({
    nombre: document.getElementById("userId").value,
    apellido: document.getElementById("passId").value
})
.then((docRef) => {
   alert("Se registro correctamente");
})
.catch((error) => {
  alert("Error al almacenar registro");
});

}


function leerDatos(){

  db.collection("usuarios").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      document.getElementById("listadoDatos").innerHTML = `${doc.data().nombre}` + ' ' +  `${doc.data().apellido}`    
 
    });
});

}