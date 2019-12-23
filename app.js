//Creacion de clase producto
class Producto{

    //Constructor con parametros clase producto
    constructor(codigo,nombre,precio){
        this.codigo= codigo;
        this.nombre= nombre;
        this.precio= precio;
    }
}


class UI{ 
    //Metodos que interactuan con la interfaz

    //Metodo para añadir un div que liste productos ingresados en el formulario.
    addProducto(producto)
        {
            const listaProducto= document.getElementById("lista-productos");
            const div= document.createElement('div');
            div.innerHTML = `
            <div class="card ">
                <div class="row no-gutters">
                    <div class="col-md-6">
                        <div class="card-body text-center"> 
                            <strong>Codigo:</strong> ${producto.codigo}  <br>
                            <strong>Nombre del producto:</strong> ${producto.nombre}<br> 
                            <strong>Precio del producto:</strong> ${producto.precio}                    
                        </div>
                    </div>

                    <div class="col-md-2 py-1 pr-1 ml-auto my-1 ">
                        <a href="#" class="btn btn-success btn-sm d-block">Guardar</a>    
                        <a href="#" class="btn btn-primary btn-sm d-block">Modificar</a>
                        <a class="btn btn-danger btn-sm d-block text-white" name="del">Eliminar</a>
                    </div>
                </div>
            </div>`;
            
            listaProducto.appendChild(div);
            
        }
    
    //Metodo para dejar el formulario en blanco despues de añadir un producto a la lista.
    reseteoform(){
        document.getElementById('formulario-add').reset();
    }
    
    //Metodo para eliminar un producto de la lista.
    eliminarProducto(element){
        if(element.name === "del"){
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    //Metodo para mostrar mensaje de confirmacion apenas se realize una accion.
    mostrarMensaje(mensaje, cssClass){
        const div = document.createElement('div');
        div.id = "mensaje"
        div.className= `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));

        //Mostrar mensaje en el DOM
        const container= document.querySelector("#contenedor");
        const row = document.querySelector("#fila");
        container.insertBefore(div, row)
        setTimeout(function() {
            document.querySelector('#mensaje').remove();
        }, 2000)
    }
}

// Eventos DOM

//Creacion de una funcion apenas el formulario haga un submit. con addEventListener
document.getElementById('formulario-add')
    .addEventListener('submit', function(e){
       
        const codigo= document.getElementById('codigo').value
        const nombre= document.getElementById('nombre').value
        const precio= document.getElementById('precio').value

        const producto = new Producto(codigo, nombre , precio);
        const ui = new UI();
        e.preventDefault();
        if(codigo === '' || nombre === '' || precio === ''){
            return ui.mostrarMensaje("Favor completa todos los campos antes de continuar", 'danger')
        }
        ui.addProducto(producto);
        
        ui.reseteoform();
        ui.mostrarMensaje("Se a añadido el producto correctamente", 'success');
        
})

//Creacion de una funcion para eliminar un producto de la lista apenas se haga click en el boton eliminar
document.getElementById("lista-productos").addEventListener('click', function(e){
    const ui=new UI();
    ui.eliminarProducto(e.target);    
    ui.mostrarMensaje("El producto a sido eliminado satisfactoriamente", 'danger')  
})


