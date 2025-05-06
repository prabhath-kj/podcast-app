import mongoose from "mongoose";

const UserSelectionSchema = new mongoose.Schema({
    userId: String,
    selectedPodcastIds: [String],
});

export default mongoose.models.UserSelection || mongoose.model("UserSelection", UserSelectionSchema);