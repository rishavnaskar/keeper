import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: new Date()
    }
})

let NoteModel = mongoose.model("NoteModel", noteSchema);
export default NoteModel;