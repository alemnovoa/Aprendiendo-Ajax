document.getElementById('cargar').addEventListener('click',cargarDatos);


function cargarDatos(){
     // Crear el objeto xmlhttprequest ( 0 )
     const xhr = new XMLHttpRequest();

     // Abrir una conexion   **ENVIAR DATOS (POST) ACTUALIZAR (PUT) ELIMINAR (DELETE) **  ( 1 )
     xhr.open('GET', 'datos.txt', true);

     xhr.onreadystatechange = function(){

          console.log(`Estado ${this.readyState}`);

          if(this.readyState === 4 && this.status === 200){
               //console.log(this.responseText);
          }
     }

     // ready status
     /*
     0 - no inicializado
     1 - conexixon establecida
     2 - recibido
     3 - procesado
     4 - Respuesta lista
     */


     //Enviar el request
     xhr.send();
}
