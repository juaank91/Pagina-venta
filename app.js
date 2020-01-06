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
                        <a class="btn btn-danger btn-sm d-block" id="delete">Eliminar</a>
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
        if(element.id === "delete"){
            var opcion = confirm("Estas seguro que deseas elminar este producto");
            if(opcion == true){
                element.parentElement.parentElement.parentElement.remove();
                this.mostrarMensaje("Elemento eliminado satisfactorimente", "danger");
            }
        }
    }

    modificarProducto(producto){

    }

    validacionForm(producto){
       
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
        ui.validacionForm(producto);
        /*if(codigo === '' || nombre === '' || precio === ''){
            return ui.mostrarMensaje("Favor completa todos los campos antes de continuar", 'danger')
        }
        */
        //se añade producto a la lista para desplegar los productos ingresados. 
        ui.addProducto(producto);
        //Resetea el formulario con el metodo reseteoform() de la clase ui.
        ui.reseteoform();
        //llama al metodo mostrar mensaje de la clases ui para mostrar mensaje en pantalla.
        ui.mostrarMensaje("Se a añadido el producto correctamente", 'success');
        ui.validacionForm(producto);
})

//Creacion de una funcion para eliminar un producto de la lista apenas se haga click en el boton eliminar
document.getElementById("lista-productos")
    .addEventListener('click', function(e){
        const ui=new UI();
        //llama al metodo eliminar de la clase ui y verifica el evento con e.target para asignar el elemento a eliminar.
        ui.eliminarProducto(e.target);
        //llama al metodo modificar de la clase ui.
        ui.modificarProducto();
    
})
var codi = document.getElementById("codigo"). 
    addEventListener('blur', ()=>{
        var cod = document.getElementById("codigo").value;
        console.log(cod);
        if(cod == "null" || cod == "" ){
            console.log(cod);
            const span= document.createElement('span');
            span.id = "error_codigo";
            span.className="alert alert-danger d-block mb-1";
            span.append(document.createTextNode("Debe ingresar un codigo correcto"))

            console.log(span);

            const tarjeta = document.getElementById("tarjeta");
            const formulario = document.getElementById("formulario-add");
            tarjeta.insertBefore(span,formulario);
            setTimeout(() =>{
                document.getElementById("error_codigo").remove();
            },2000)
    }
})