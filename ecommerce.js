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
    {
        nombre: "producto6",
        descripcion: "Descripcion del producto6",
        codigo: "654521",
        URL:"./fotos/producto6.jpg",
        precio: 3652,
        stock: 16
    },
    {
        nombre: "producto7",
        descripcion: "Descripcion del producto7",
        codigo: "774581",
        URL:"./fotos/producto7.jpg",
        precio: 2770,
        stock: 76
    },
    {
        nombre: "producto8",
        descripcion: "Descripcion del producto8",
        codigo: "874563",
        URL:"./fotos/producto8.jpg",
        precio: 808,
        stock: 88
    },
    {
        nombre: "producto9",
        descripcion: "Descripcion del producto9",
        codigo: "987654",
        URL:"./fotos/producto4.jpg",
        precio: 640,
        stock: 64
    },
    {
        nombre: "producto10",
        descripcion: "Descripcion del producto10",
        codigo: "102345",
        URL:"./fotos/producto10.jpg",
        precio: 4987,
        stock: 100
    }
])

db.mensajes.insertMany([
    {author: "Rodrigo", email: "rt@mail.com",text:"Hola, que tal?"},
    {author: "Adrian", email: "at@mail.com",text:"Muy bien, en que podemos ayudarte?"},
    {author: "Rodrigo", email: "rt@mail.com",text:"Quisiera comprar unos productos."},
    {author: "Adrian", email: "at@mail.com",text:"Excelente! Que productos querías adquirir?"},
    {author: "Rodrigo", email: "rt@mail.com",text:"3 producto1"},
    {author: "Rodrigo", email: "rt@mail.com",text:"5 producto2"},
    {author: "Rodrigo", email: "rt@mail.com",text:"y 10 producto6"},
    {author: "Adrian", email: "at@mail.com",text:"Perfecto, que medio de pago utilizarías?"},
    {author: "Rodrigo", email: "rt@mail.com",text:"Tarjeta de crédito"},
    {author: "Adrian", email: "at@mail.com",text:"Genial, ahora te pido los datos de la misma para terminar la compra."}
])

db.productos.find()
db.mensajes.find()

db.productos.countDocuments()
db.mensajes.countDocuments()
// console.log(`Cantidad de productos: ${db.productos.countDocuments()}`);
// console.log(`Cantidad de mensajes: ${db.mensajes.countDocuments()}`);

//5
    //a
db.productos.insertOne({nombre: "producto11",descripcion: "Descripcion del producto11", codigo: "111213",URL:"./fotos/producto11.jpg", precio: 3121,stock: 100})
    //b
db.productos.find({precio:{$lt:1000}})
db.productos.find({$and:[{precio:{$gte:1000}},{precio:{$lte:3000}}]})
db.productos.find({precio:{$gt:3000}})
// db.productos.find({},{"nombre" : 1, "descripcion":0, "codigo":0, "URL":0 ,"precio" :0, "stock":0, "_id" :0}).sort("precio": 1).skip(3).limit(1)
db.productos.find({},{"nombre" : 1, "_id" :0}).sort({"precio": 1}).skip(3).limit(1)

    //c
db.productos.update({}, {$set: {stock: 100}})
    //d
db.productos.update({precio:{gte: 4000}}, {$set: {stock: 0}})
    //e
db.productos.deleteMany({precio:{lt: 1000}})
//6
db.createUser({user:"pepe",pwd:"asd456",roles:[{role: "read", db:"ecommerce"}]})