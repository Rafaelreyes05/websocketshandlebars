const socket = io()

socket.on('productos', function (productos) {
    let data = ''
    for(let i=0;i<productos.length;i++){
        data+=`    
        <div class="producto">
            <p>Id: ${productos[i].id}</p>
            <p>Tittle: ${productos[i].title}</p>
            <p>Price: ${productos[i].price}</p>
            <p>Code: ${productos[i].code}</p>
            <p>Stock: ${productos[i].stock}</p>
            <p>Category: ${productos[i].category}</p>
        </div>`
    }
    const infoContainer = document.getElementById('productos');
    infoContainer.innerHTML = data
  });

  let formulario = document.getElementById('formulario')

  formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('Clic')
    let datos = new FormData(formulario)
    const data = Object.fromEntries(datos.entries());
    
    //detectando cada campo del form
    //console.log(datos.get('edad'))
    //alternativa generando el objeto
    /*let data = {
      title:datos.get('title'),
      price:datos.get('price'),
      imagen:Number(datos.get('imagen'))
    }*/
    console.log(data)
  
    fetch("/api/products", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(function(response) {
          console.log(response)
          return response.json();
        })
        .then(function(data) {
          console.log("Datos del servidor:", data);
        })
        .catch(function(error) {
          console.error("Error al enviar formulario:", error);
        });
    });