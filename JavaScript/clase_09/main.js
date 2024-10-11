let productos = [
    {
      id: 1,
      marca: "Apple",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 25,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "iPhone 14 Pro Max",
      precio: 1499,
      ubicacion: "Buenos Aires",
      condicion: "Nuevo"
    },
    {
      id: 2,
      marca: "Samsung",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 40,
      envioGratis: true,
      envioInmediato: false,
      cuotas: true,
      nombre: "Samsung Galaxy S23 Ultra",
      precio: 1399,
      ubicacion: "Córdoba",
      condicion: "Nuevo"
    },
    {
      id: 3,
      marca: "Dell",
      categoria: "Computadoras",
      subcategoria: "Laptops",
      stock: 15,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "Dell XPS 13",
      precio: 1899,
      ubicacion: "Santa Fe",
      condicion: "Nuevo"
    },
    {
      id: 4,
      marca: "Huawei",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 30,
      envioGratis: false,
      envioInmediato: false,
      cuotas: true,
      nombre: "Huawei P60 Pro",
      precio: 1199,
      ubicacion: "Mendoza",
      condicion: "Nuevo"
    },
    {
      id: 5,
      marca: "HP",
      categoria: "Computadoras",
      subcategoria: "Laptops",
      stock: 10,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "HP Spectre x360",
      precio: 1599,
      ubicacion: "Buenos Aires",
      condicion: "Nuevo"
    },
    {
      id: 6,
      marca: "Xiaomi",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 50,
      envioGratis: false,
      envioInmediato: false,
      cuotas: true,
      nombre: "Xiaomi Redmi Note 12",
      precio: 549,
      ubicacion: "Tierra del Fuego",
      condicion: "Nuevo"
    },
    {
      id: 7,
      marca: "Lenovo",
      categoria: "Computadoras",
      subcategoria: "Laptops",
      stock: 20,
      envioGratis: false,
      envioInmediato: true,
      cuotas: false,
      nombre: "Lenovo ThinkPad X1",
      precio: 1399,
      ubicacion: "CABA",
      condicion: "Nuevo"
    },
    {
      id: 8,
      marca: "Sony",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 12,
      envioGratis: false,
      envioInmediato: false,
      cuotas: false,
      nombre: "Sony Xperia 5 IV",
      precio: 999,
      ubicacion: "Salta",
      condicion: "Nuevo"
    },
    {
      id: 9,
      marca: "Motorola",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 50,
      envioGratis: false,
      envioInmediato: true,
      cuotas: true,
      nombre: "Motorola Edge 40 Pro",
      precio: 799,
      ubicacion: "Neuquén",
      condicion: "Nuevo"
    },
    {
      id: 10,
      marca: "Asus",
      categoria: "Computadoras",
      subcategoria: "Laptops",
      stock: 18,
      envioGratis: true,
      envioInmediato: false,
      cuotas: true,
      nombre: "Asus ZenBook 14",
      precio: 1299,
      ubicacion: "Corrientes",
      condicion: "Nuevo"
    },
      {
      id: 11,
      marca: "Apple",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 5,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "iPhone 12",
      precio: 799,
      ubicacion: "Buenos Aires",
      condicion: "Usado"
    },
    {
      id: 12,
      marca: "Samsung",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 40,
      envioGratis: false,
      envioInmediato: false,
      cuotas: true,
      nombre: "Samsung Galaxy A54",
      precio: 649,
      ubicacion: "Catamarca",
      condicion: "Nuevo"
    },
    {
      id: 13,
      marca: "Realme",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 60,
      envioGratis: false,
      envioInmediato: false,
      cuotas: false,
      nombre: "Realme GT 3",
      precio: 699,
      ubicacion: "Misiones",
      condicion: "Nuevo"
    },
    {
      id: 14,
      marca: "Nokia",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 15,
      envioGratis: false,
      envioInmediato: false,
      cuotas: false,
      nombre: "Nokia G60 5G",
      precio: 499,
      ubicacion: "La Pampa",
      condicion: "Nuevo"
    },
    {
      id: 15,
      marca: "Xiaomi",
      categoria: "Celulares",
      subcategoria: "Smartphones",
      stock: 45,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "Xiaomi Poco F5",
      precio: 549,
      ubicacion: "Córdoba",
      condicion: "Nuevo"
    },
    {
      id: 16,
      marca: "Logitech",
      categoria: "Periféricos",
      subcategoria: "Mouse",
      stock: 35,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "Logitech MX Master 3",
      precio: 99,
      ubicacion: "Buenos Aires",
      condicion: "Nuevo"
    },
    {
      id: 17,
      marca: "Razer",
      categoria: "Periféricos",
      subcategoria: "Teclados",
      stock: 25,
      envioGratis: false,
      envioInmediato: false,
      cuotas: true,
      nombre: "Razer BlackWidow V3",
      precio: 149,
      ubicacion: "CABA",
      condicion: "Nuevo"
    },
    {
      id: 18,
      marca: "Acer",
      categoria: "Monitores",
      subcategoria: "Monitores",
      stock: 20,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "Acer R240HY",
      precio: 199,
      ubicacion: "Santa Fe",
      condicion: "Nuevo"
    },
    {
      id: 19,
      marca: "BenQ",
      categoria: "Monitores",
      subcategoria: "Monitores",
      stock: 15,
      envioGratis: false,
      envioInmediato: true,
      cuotas: true,
      nombre: "BenQ GW2480",
      precio: 179,
      ubicacion: "Mendoza",
      condicion: "Nuevo"
    },
    {
      id: 20,
      marca: "Anker",
      categoria: "Accesorios",
      subcategoria: "Cargadores",
      stock: 60,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "Anker PowerPort III Nano",
      precio: 29,
      ubicacion: "Tierra del Fuego",
      condicion: "Nuevo"
    },
    {
      id: 21,
      marca: "Samsung",
      categoria: "Accesorios",
      subcategoria: "Cargadores",
      stock: 50,
      envioGratis: false,
      envioInmediato: false,
      cuotas: true,
      nombre: "Samsung Super Fast Charger",
      precio: 39,
      ubicacion: "Catamarca",
      condicion: "Nuevo"
    },
    {
      id: 22,
      marca: "Dell",
      categoria: "Accesorios",
      subcategoria: "Cargadores",
      stock: 30,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "Dell 65W USB-C Power Adapter",
      precio: 49,
      ubicacion: "Corrientes",
      condicion: "Nuevo"
    },
    {
      id: 23,
      marca: "Logitech",
      categoria: "Periféricos",
      subcategoria: "Mouse",
      stock: 40,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "Logitech G502",
      precio: 79,
      ubicacion: "Buenos Aires",
      condicion: "Nuevo"
    },
    {
      id: 24,
      marca: "Corsair",
      categoria: "Periféricos",
      subcategoria: "Teclados",
      stock: 30,
      envioGratis: false,
      envioInmediato: false,
      cuotas: true,
      nombre: "Corsair K55 RGB",
      precio: 109,
      ubicacion: "CABA",
      condicion: "Nuevo"
    },
    {
      id: 25,
      marca: "LG",
      categoria: "Monitores",
      subcategoria: "Monitores",
      stock: 10,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "LG 27UL500-W",
      precio: 299,
      ubicacion: "Santa Fe",
      condicion: "Nuevo"
    },
    {
      id: 26,
      marca: "TP-Link",
      categoria: "Accesorios",
      subcategoria: "Cargadores",
      stock: 55,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "TP-Link 18W Fast Charger",
      precio: 19,
      ubicacion: "Mendoza",
      condicion: "Nuevo"
    },
    {
      id: 27,
      marca: "Microsoft",
      categoria: "Periféricos",
      subcategoria: "Teclados",
      stock: 20,
      envioGratis: false,
      envioInmediato: true,
      cuotas: true,
      nombre: "Microsoft Sculpt Ergonomic Keyboard",
      precio: 129,
      ubicacion: "CABA",
      condicion: "Nuevo"
    },
    {
      id: 28,
      marca: "ASUS",
      categoria: "Periféricos",
      subcategoria: "Monitores",
      stock: 15,
      envioGratis: true,
      envioInmediato: false,
      cuotas: true,
      nombre: "ASUS ProArt PA248QV",
      precio: 289,
      ubicacion: "Corrientes",
      condicion: "Nuevo"
    },
    {
      id: 29,
      marca: "ZOTAC",
      categoria: "Accesorios",
      subcategoria: "Cargadores",
      stock: 40,
      envioGratis: false,
      envioInmediato: true,
      cuotas: true,
      nombre: "ZOTAC USB-C Charger",
      precio: 59,
      ubicacion: "Tierra del Fuego",
      condicion: "Nuevo"
    },
    {
      id: 30,
      marca: "SteelSeries",
      categoria: "Periféricos",
      subcategoria: "Mouse",
      stock: 22,
      envioGratis: true,
      envioInmediato: true,
      cuotas: true,
      nombre: "SteelSeries Rival 600",
      precio: 99,
      ubicacion: "Buenos Aires",
      condicion: "Nuevo"
    }
];

//1. imprimir en consola todos los productos con idPar, El mensaje debe ser entendio por el usuario.

const productosIdPar = () =>{
    productos.forEach((producto) => {
        if(producto.id % 2 === 0){
            console.log(`producto '${producto.nombre}' tien id par, ${producto.id}`);
        }
    })
}

// productosIdPar()

//2. guardar en un array nuevo e imprimir en pantalla los productos que tengan que tengan envio gratis, el mensaje debe ser descriptivo

const productosConEnvioGratis = () => {
    const productosFiltrados = productos.filter((producto) => { 
        return producto.envioGratis
    })

    productosFiltrados.forEach((producto) => {
        console.log(`${producto.nombre} tiene envio gratis: ${producto.envioGratis}`);
    })
}

// productosConEnvioGratis()

//3. necesitamos un array con productos segun una categoria y subcategoria dada.

const productByCategories = (categoriaFilter, subcategoriaFilter) => {

    const categoriaSanitizada = categoriaFilter.toLowerCase()
    const subCategoriaSanitizada = subcategoriaFilter.toLowerCase()

    const productosFiltrados = productos.filter((producto) => {

        const {categoria, subcategoria} = producto //destructuración

        return categoriaSanitizada === categoria.toLowerCase() && subCategoriaSanitizada === subcategoria.toLowerCase()
    })

    productosFiltrados.length === 0 ?
        console.log('No hay productos con tu criterio de busqueda') :
        productosFiltrados.forEach((producto) => console.log(producto.nombre))
}


// productByCategories('Periféricos', 'mouse')

//4. obtener un arraglo con los productos ordenados de menor a mayor en stock

const productoSegunStock = () => {

    productos.sort((productoA, productoB) => {
        return productoA.stock - productoB.stock //a - b || b - a
    })
    
    // stockA - stockB
        //resultado negativo => a < b (queda igual)
        //resultado positivo => a > b (se intercambia la posición)
        //de cero => a = b (queda igual)

    productos.forEach((producto) => console.log(`${producto.nombre} tiene: ${producto.stock}`))
}

// productoSegunStock()

//5. crear un array con los mismos productos pero con su precio aumentado un 100%

const aumentarPrecio = () => {

    const productosInflados = productos.map( (producto) => {
        return {
            ...producto, //spred operator
            precio: producto.precio * 2,
        }
    })

    productosInflados.forEach((producto) => {
        console.log(`${producto.nombre} con precio nuevo: ${producto.precio}`);
    })
}

// aumentarPrecio()

//5. Imprimir en consola si existe (booleano) un producto cuyo precio es mayor a un precio dado, mensaje descriptivo 'Existe un producto con precio mayor a $....'

const existeProductoConPrecioMayorA = (precio) => {

    const isExist = productos.some((producto) => {
        return producto.precio > precio
    })

    isExist ? 
        console.log(`Existe un producto con precio mayor a $${precio}`) :
        console.log(`No Existe un producto con precio mayor a $${precio}`)
}


// existeProductoConPrecioMayorA(1600)


//6. se necesita que todos los productos pasen a ser 'Usados'

const productoAUsado = () => {

    productos = productos.map((producto) => {
        return{
            ...producto,
            condicion: 'Usado'
        }
    })
    console.log(productos);
}

// productoAUsado()

//8. Necesitamos saber el monto total en pesos si vendemos todo el stock de nuestra tienda.

const totalPriceProducts = () => {

    const total = productos.reduce((acumulador, producto) => {        
        return acumulador + producto.precio * producto.stock
    }, 0)

    console.log(`vas a ganar $${total}`);
}

// totalPriceProducts()

//9. si los productos tienen envió gratis se debe de inflar el precio un 20%.

const productoInfladosConEnvioGratis = () => {

    const productosFiltrados = productos.filter((productos) => productos.envioGratis)

    return productosFiltrados.map((producto) => {
        return {
            ...producto,
            precio: producto.precio + producto.precio * 0.2 
        }
    })
}

// console.log(productoInfladosConEnvioGratis());


// 10. Calcular el promedio de las notas de un alumno

let calificaciones = [5,10,6,8,9,4,1,10,5]
let calificaciones2 = [2, 1]
let alumno = 'Pepito'

const calcularPromedio = (nombre, ...calificaciones) => {
    const total = calificaciones[0].reduce((acc, nota) => {return acc + nota}, 0)

    console.log(`${nombre} tiene promedio ${total/calificaciones[0].length}`);
}


calcularPromedio(alumno, [...calificaciones, ...calificaciones2])