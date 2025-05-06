// types/podcast.ts
import { z } from "zod";

export const podcastSchema = z.object({
    title: z.string(),
    channel: z.string(),
    image: z.string().url(),
});

export type Podcast = z.infer<typeof podcastSchema>;
