const productsController = require('../products/controller.products')
const usersController = require('../apiproductos/controller.products')
const principal = require('../main/main')

const router = (app)=>{
    app.use('/realtimeproducts',productsController)
    app.use('/api/products',usersController)
    app.use('/',principal)
}

module.exports = router