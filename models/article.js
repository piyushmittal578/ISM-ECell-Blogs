const mongoose=require('mongoose');
const articleSchema=new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        about:{
            type:String
        },
        description:{
            type:String
        },
        createdAt:{
            type: Date,
            default:Date.now
        }, 
        createdTime:{
            type: Number,
            default:(new Date()).getTime()
        }
    })
    

module.exports = mongoose.model('Article',articleSchema);