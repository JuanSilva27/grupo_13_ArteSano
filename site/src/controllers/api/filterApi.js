const db = require('../../database/models')

module.exports={
    productosFiltrados:
    async (req,res)=>{
        try{
            let data = await db.Productos.findAll({
                include: [
                    {association: "productosIm"}
                  ],
                where: {id_categoria:req.query.categoria},
                order: [['precio', 'DESC']]
            })
            let response={
                status:200,
                message:"ok",
                data
            }
            res.status(201).json(response)
        }catch (error){
            return res.status(400).json({
                status : 400,
                message : error
            })
        }
    }
}