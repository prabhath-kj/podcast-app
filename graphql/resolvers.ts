import podcastModel from "@/lib/db/model/podcast.model";
import userSelectionModel from "@/lib/db/model/userSelection.model";

export const resolvers = {
    Query: {
        podcasts: async () => await podcastModel.find({}),
        userSelection: async (_: any, { userId }: any) => {
            const user = await userSelectionModel.findOne({ userId });
            
            if (!user) return [];
            const podcasts = await podcastModel.find({ _id: { $in: user.selectedPodcastIds } });
            return podcasts;
        },
    },
    Mutation: {
        saveSelection: async (_: any, { userId, selectedPodcastIds }: any) => {
            await userSelectionModel.findOneAndUpdate(
                { userId },
                { selectedPodcastIds },
                { upsert: true }
            );
            return true;
        },
    },
};
