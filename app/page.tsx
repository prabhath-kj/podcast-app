'use client'
import { useState } from 'react'
import { PodcastCard } from '@/components/PodcastCard'
import { FloatingButton } from '@/components/FloatingButton'

const samplePodcasts = [
  {
    id: '1',
    title: 'The Vergecast',
    channel: 'The Verge',
    image: '/vergecast.jpg',
  },
  {
    id: '2',
    title: 'Decoder with Nilay Patel',
    channel: 'The Verge',
    image: '/vergecast.jpg',
  },
  {
    id: '3',
    title: 'The Daily',
    channel: 'The New York Times',
    image: '/vergecast.jpg',
  },
  {
    id: '4',
    title: 'Waveform: The MKBHD Podcast',
    channel: 'Vox Media',
    image: '/vergecast.jpg',
  },
  {
    id: '5',
    title: '99% Invisible',
    channel: 'Roman Mars',
    image: '/vergecast.jpg',
  },
  {
    id: '6',
    title: 'Accidental Tech Podcast',
    channel: 'Marco Arment',
    image: '/vergecast.jpg',
  },
]

export default function Home() {
  const [selected, setSelected] = useState<string[]>([])

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <main className="relative p-4 pb-20 h-svh bg-white overflow-y-auto">
      <h1 className="text-3xl font-bold mb-2">Add Podcasts</h1>
      <h2 className="text-lg font-semibold mb-4">Popular on Queue</h2>

      <div className="space-y-6">
        {samplePodcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            {...podcast}
            selected={selected.includes(podcast.id)}
            onSelect={() => toggleSelect(podcast.id)}
          />
        ))}
      </div>

      {selected.length > 0 && (
        <FloatingButton count={selected.length}  />
      )}

      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-50" />
    </main>
  )
}
