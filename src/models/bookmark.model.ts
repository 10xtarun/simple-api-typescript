import mongoose from 'mongoose';

const BookmarkSchema = new mongoose.Schema({
    name: String,
    url: String,
})

//export the model
export const Bookmark = mongoose.model("Bookmark", BookmarkSchema)