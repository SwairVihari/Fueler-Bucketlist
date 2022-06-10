const mongoose=require("mongoose");
const bucketSchema=new mongoose.Schema({

    bucketitems:[{
    bucketitem:String
    }]
});
module.exports=mongoose.model("bucket",bucketSchema);
