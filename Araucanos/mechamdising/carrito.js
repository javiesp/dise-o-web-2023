const stockProd = [
    {
        id: 1,
        nombre: "Calendario",
        cantidad:4,
        descripccion:"Calendario logo araucanos awante colo-colo",
        precio:1000,
        img: "img/mercancia/calendario.jpg"
    },
    {
        id: 2,
        nombre: "Carcasa",
        cantidad:7,
        descripccion:"Carcasa logo araucanos awante colo-colo",
        precio:5000,
        img: "img/mercancia/case.jpg"
    },
    {
        id: 3,
        nombre: "Totebag",
        cantidad:4,
        descripccion:"Totebag logo araucanos awante colo-colo",
        precio:2000,
        img: "img/mercancia/totebag.jpg"
    },
    {
        id: 4,
        nombre: "Polera",
        cantidad:4,
        descripccion:"Polera logo araucanos awante colo-colo",
        precio:5000,
        img: "img/mercancia/tshirt.jpg"
    }
]
let cart = []

const contenedorproductos = document.querySelector('#contenedorproductos')


stockProd.forEach((prod) => {
    const {id,nombre,cantidad,descripccion,precio,img} = prod
    contenedorproductos.innerHTML += `
    <div class="row justify-content-center p-5">
        <div class="row justify-content">
            <div class="card m-1 p-1" style="width: 15rem; height: 25rem;">
                <img src="${img}" class="card-img-top img-fluid" alt="..." style="height: 40%;">
                <div class="card-body">
                <h6 class="fw-bold text-left">${id}</h6>
                <h5 class="card-title text-center">${nombre}</h5>
                <p class="card-text text-center">${descripccion}</p>
                <h6 class="fw-bold text-center">${precio}</h6>
                <h6 class="fw-bold text-center">${cantidad}</h6>
                <div class="d-grid gap-2" id="cardbtn">
                    <button onclick="addProd(${id})" class="btn btn-sm" type="button">
                        <a class="text-white">Agregar al carrito</a>
                        <i class="fa-solid fa-cart-plus" style="color: #878787;"></i>
                    </button>
                </div>
                
                </div>
            </div>

        </div>
    </div>
    `
})


function addProd(id){
    const item = stockProd.find((prod) => prod.id == id);
    cart.push(item);
    console.log(item)
    mostrarCarrito()
}



const mostrarCarrito = () => {
    const modalBody = document.querySelector('#contenedoritem');
    modalBody.innerHTML = '';
    
    cart.forEach((prod) => {
        const {id,nombre,cantidad,descripccion,precio,img} = prod
        modalBody.innerHTML += `
            <div class="p-1" id="modalproducto">
                <div>
                    <img class="img-fluid w-100" src="${img}" style="height: 40vh;" />
                </div>
                <div>
                    <p>Producto: ${nombre}</p>
                    <p>Precio: ${precio}</p>
                    <p>Cantidad: ${cantidad}</p>
                    <p>Id de producto: ${id}</p>
                </div>
                <button class="btn eliminar-producto" data-id="${id}" ii="btnpropiedad">Eliminar producto</button>
            </div>
        `;
    });

    // Agregar evento de click al botón "Eliminar producto"
    const btnsEliminar = document.querySelectorAll('.eliminar-producto');
    btnsEliminar.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const index = carrito.findIndex((prod) => prod.id === id);
            carrito.splice(index, 1);
            mostrarCarrito();
        });
    });
};



//SOLUCION MODAL GRAYOUT
$('#exampleModal').on('show.bs.modal', function (e) {
    $('body').addClass("example-open");
}).on('hide.bs.modal', function (e) {
    $('body').removeClass("example-open");
})