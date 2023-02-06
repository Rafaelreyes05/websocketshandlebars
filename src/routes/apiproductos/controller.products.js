const {Router}= require('express')
let archivo = require('../../data/ProductManager')

const router = Router()

//Todos los productos
router.get('/',(req,res) => {
    let {limit} = req.query
    if(limit){
        let productos = archivo.getProductslimit(Number(limit))
        res.json(productos)
    }
    else{
        let productos = archivo.getProducts()
        res.json(productos)
    }
})

//Productos por id
router.get('/:id',(req,res)=>{
    console.log('Buscar elemento por ID:')
    let { id } = req.params
    let producto = archivo.getProductBYId(Number(id))
    producto!=undefined?res.json(producto):res.json({message:'El id no existe'})
})

//Post Producto
router.post('/',(req,res)=>{
    console.log('Ingresando a post api')
    let producto = req.body
    console.log(producto)
    archivo.addProduct(producto)
    res.json(archivo.getProducts())
})

//Actualizar producto
router.put('/:id',(req,res)=>{
    let { id } = req.params
    let producto = req.body
    archivo.updateProduct(Number(id),producto)
    res.json(archivo.getProducts())
})

//Eliminar producto
router.delete('/:id',(req,res)=>{
    let { id } = req.params
    archivo.deleteProduct(Number(id))
    res.json(archivo.getProducts())
})

module.exports = router