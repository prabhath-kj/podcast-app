import { connectToDatabase } from '.'
import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import podcastModel from './model/podcast.model'
import { samplePodcasts } from '../data'
loadEnvConfig(cwd())

const main = async () => {
    try {
        await connectToDatabase(process.env.MONGODB_URI!)

        const createdPodcasts = await podcastModel.insertMany(samplePodcasts)

        console.log({
            createdPodcasts,
            message: 'Seeded podcast database successfully',
        })
        process.exit(0)
    } catch (error) {
        console.error(error)
        throw new Error('Failed to seed podcast database')
    }
}

main()
