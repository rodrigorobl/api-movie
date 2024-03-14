import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        requered: true,
    },
    description: {
        type: String,
        requered: true,
    },
    imageSmall: {
        type: String,
        requered: true,
    },
    imageBanner: {
        type: String,
        requered: true,
    },
    linkVideo: {
        type: String,
        requered: true,
    },
    category: {
        type: String,
        requered: true,
    },
    createAt: {
        type: String,
        default: Date.now(),
    },
});

export default mongoose.model("Movie", movieSchema);