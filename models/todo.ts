import mongoose ,{Schema,models} from "mongoose";
const TodoSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
    },
    {
        timestamps:true,
    }
);
const Todo=models.Todo||mongoose.model("Todo",TodoSchema);
export default Todo;