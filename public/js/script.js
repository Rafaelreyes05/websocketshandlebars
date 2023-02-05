const socket = io()

socket.on('productos', function (productos) {
    console.log('Received data: ' + productos);
    let data = ''
    for(let i=0;i<productos.length;i++){
        data+=`    
        <div class="producto">
            <p>Id: ${productos[i].id}</p>
            <p>Tittle: ${productos[i].title}</p>
            <p>Price: ${productos[i].price}</p>
            <p>Code: ${productos[i].code}</p>
            <p>Stock: ${productos[i].stock}</p>
            <p>Tittle: ${productos[i].title}</p>
            <p>Category: ${productos[i].category}</p>
        </div>`
    }
    const infoContainer = document.getElementById('productos');
    infoContainer.innerHTML = data
  });