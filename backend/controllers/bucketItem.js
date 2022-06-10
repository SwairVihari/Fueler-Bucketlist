const catchAsyncError = require("../middleware/catchAsyncError");
const bucketModel = require("../models/bucketModel");


exports.createBucket=catchAsyncError( async (req,res,next)=>{
    console.log(req.body)
    const bucket=await bucketModel.create({bucketitems:[...req.body]});
    // console.log(bucket)
    res.status(201).json({
        success:true,
        bucket
    })
});

exports.getBuckets = catchAsyncError(async(req,res,next)=>{
    const buckets = await bucketModel.find()

    res.status(201).json({
        success:true,
        buckets
    })
})