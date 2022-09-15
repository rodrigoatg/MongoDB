use ecommerce

db.createCollection('productos')

db.createCollection('mensajes')


db.productos.insertMany([
    {
        nombre: "producto1",
        descripcion: "Descripcion del producto1",
        codigo: "123456",
        URL:"./fotos/producto1.jpg",
        precio: 100,
        stock: 10
    },
    {
        nombre: "producto2",
        descripcion: "Descripcion del producto2",
        codigo: "234567",
        URL:"./fotos/producto2.jpg",
        precio: 220,
        stock: 23
    },
    {
        nombre: "producto3",
        descripcion: "Descripcion del producto3",
        codigo: "345678",
        URL:"./fotos/producto3.jpg",
        precio: 303,
        stock: 33
    },
    {
        nombre: "producto4",
        descripcion: "Descripcion del producto4",
        codigo: "456789",
        URL:"./fotos/producto4.jpg",
        precio: 4444,
        stock: 47
    },
    {
        nombre: "producto5",
        descripcion: "Descripcion del producto5",
        codigo: "567890",
        URL:"./fotos/producto5.jpg",
        precio: 4999,
        stock: 458
    },
])

