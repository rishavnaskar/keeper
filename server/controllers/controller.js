import NoteModel from "../models/keeperModel.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await NoteModel.find();
        console.log(notes);

        res.status(200).json(notes);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createNote = async (req, res) => {
    const {title, content} = req.body;
    const newNote = new NoteModel({title, content});

    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}