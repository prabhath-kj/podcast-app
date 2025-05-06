'use client'

import { useState } from 'react'
import { PodcastCard } from '@/components/PodcastCard'
import { FloatingButton } from '@/components/FloatingButton'
import { BottomDrawer } from '@/components/BottomDrawer'

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
  {
    id: '7',
    title: 'Accidental Tech Podcast',
    channel: 'Marco Arment',
    image: '/vergecast.jpg',
  },
  {
    id: '9',
    title: 'Accidental Tech Podcast',
    channel: 'Marco Arment',
    image: '/vergecast.jpg',
  },
  {
    id: '10',
    title: 'Accidental Tech Podcast',
    channel: 'Marco Arment',
    image: '/vergecast.jpg',
  },
]

export default function Home() {
  const [selected, setSelected] = useState<string[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const selectedItems = samplePodcasts.filter((p) => selected.includes(p.id))

  return (
    <main className="relative p-4 pb-20 h-dvh bg-white flex flex-col">
      <h1 className="text-3xl font-bold mb-2 shrink-0">Add Podcasts</h1>
      <h2 className="text-lg font-semibold mb-4 shrink-0">Popular on Queue</h2>

      {/* Scrollable area for podcast cards */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-2 no-scrollbar">
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
        <FloatingButton count={selected.length} onClick={() => setDrawerOpen(true)} />
      )}

      {drawerOpen && (
        <BottomDrawer
          items={selectedItems}
          onClose={() => setDrawerOpen(false)}
          onRemove={(id) => setSelected((prev) => prev.filter((x) => x !== id))}
          onSave={() => {
            setDrawerOpen(false)
            alert('Saved!')
          }}
        />
      )}

      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-40" />
    </main>

  )
}
