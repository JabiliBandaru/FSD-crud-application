const mongoose=require('mongoose')
const bookschema=new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    purchased:{
        type:String,
        required:true,
        default:false
    },
}
)
module.exports=mongoose.model('book1',bookschema)