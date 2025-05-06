import mongoose from "mongoose";

const PodcastSchema = new mongoose.Schema({
    id: String,
    title: String,
    channel: String,
    image: String,
});

export default mongoose.models.Podcast || mongoose.model("Podcast", PodcastSchema);

