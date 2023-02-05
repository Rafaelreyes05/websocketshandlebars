const productsController = require('../products/controller.products')
const principal = require('../main/main')

const router = (app)=>{
    app.use('/realtimeproducts',productsController)
    app.use('/',principal)
}

module.exports = router