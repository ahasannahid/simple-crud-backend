const productsModel = require('../models/ProductsModel');

// create product
exports.createProducts = async (req, res) => {

    /* let reqBody= req.body;
         ProductsModel.create(reqBody,(err,data)=>{
             if(err){
                 res.status(400).json({status:"fail",data:err})
             }
             else{
                 res.status(200).json({status:"success",data:data})
             }
         })
        */




    try {
        const reqBody = req.body;
        const result = await productsModel.create(reqBody);
        res.status(200).json({ status: "success", data: result })
    }
    catch (error) {
        res.status(200).json({ status: "failed", data: error.toString() })
    }
};

// read all product
exports.readProduct=async (req,res)=>{

    /*
    productsModel.find((err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
     */

    try {
        let result=await productsModel.find();
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

// R=Read By ID
exports.readProductByID=async (req,res)=>{
    /*
    let id= req.params.id;
    let Query={_id:id};
    productsModel.find(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
    */

    try {
        let id= req.params.id;
        let result=await productsModel.find({_id:id});
        res.status(200).json({status:"success",data:result})

    }catch (err) {
        res.status(200).json({status:"fail",data:err.toString()})
    }

}

// D=Delete
exports.deleteProduct=async (req,res)=>{


   /* let id= req.params.id;
    let Query={_id:id};
    productsModel.remove(Query,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
    */


    try {
        let id= req.params.id;
        let result=await productsModel.deleteOne({_id:id})
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }

}

// U=Update

exports.updateProduct=async (req,res)=>{

    /*let id= req.params.id;
   let Query={_id:id};
   let reqBody=req.body;
   productsModel.updateOne(Query,reqBody,(err,data)=>{
       if(err){
           res.status(400).json({status:"fail",data:err})
       }
       else{
           res.status(200).json({status:"success",data:data})
       }
   })

     */


    try {
        let id= req.params.id;
        let reqBody=req.body;
        let result=await productsModel.updateOne({_id:id},reqBody)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }




}