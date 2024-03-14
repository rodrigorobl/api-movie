import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        requered: true,
    },
    type: {
        type: String,
        requered: true,
    },
    createAt: {
        type: String,
        default: Date.now(),
    },
});

export default mongoose.model("Category", categorySchema);