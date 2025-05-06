'use client'

import { useState, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { client } from '@/lib/graphql/graphqlClient'
import { GET_PODCASTS } from '@/lib/graphql/queries'
import { useVirtualizer } from '@tanstack/react-virtual'

import { PodcastCard } from '@/components/PodcastCard'
import { FloatingButton } from '@/components/FloatingButton'
import { BottomDrawer } from '@/components/BottomDrawer'
import { SkeletonLoader } from '@/components/SkeletonLoader'


export default function Home() {
  const [selected, setSelected] = useState<string[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Fetch podcasts using GraphQL
  const { data, isLoading } = useQuery({
    queryKey: ['podcasts'],
    queryFn: async () => {
      const res = await client.request<{ podcasts: { _id: string; image: string; title: string; channel: string }[] }>(GET_PODCASTS)
      return res?.podcasts
    },
  })

  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: data?.length || 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 120,
    overscan: 5,
  })

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const selectedItems = data?.filter((p) => selected.includes(p._id))

  return (
    <main className="relative p-4 pb-20 h-dvh bg-white flex flex-col">
      <h1 className="text-3xl font-bold mb-2 shrink-0">Add Podcasts</h1>
      <h2 className="text-lg font-semibold mb-4 shrink-0">Popular on Queue</h2>

      {/* Loader when data is loading */}
      {isLoading ? (
        <div ref={parentRef} className="flex-1 overflow-y-auto pr-2 no-scrollbar relative">
          <div className="relative w-full" style={{ height: rowVirtualizer.getTotalSize() }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="absolute top-0 left-0 w-full"
                style={{
                  transform: `translateY(${index * 120}px)`,
                }}
              >
                <SkeletonLoader/>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Virtualized Scrollable Area */}
          <div
            ref={parentRef}
            className="flex-1 overflow-y-auto pr-2 no-scrollbar relative"
          >
            <div
              style={{ height: rowVirtualizer.getTotalSize() }}
              className="relative w-full"
            >
              {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const podcast = data?.[virtualRow.index]
                if (!podcast) return null

                return (
                  <div
                    key={podcast._id}
                    className="absolute top-0 left-0 w-full"
                    style={{
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <PodcastCard
                      {...podcast}
                      selected={selected.includes(podcast._id)}
                      onSelect={() => toggleSelect(podcast._id)}
                    />
                  </div>
                )
              })}
            </div>
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
        </>
      )}

      <div className="pointer-events-none fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-40" />
    </main>
  )
}
