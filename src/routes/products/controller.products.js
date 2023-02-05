const {Router} = require ('express')

const router = Router()

router.get('/',(req,res)=>{
    res.render('realconection.handlebars')
})

module.exports = router