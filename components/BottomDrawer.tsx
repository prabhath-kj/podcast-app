'use client'

import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { PodcastCard } from './PodcastCard'

type Podcast = {
  _id: string
  title: string
  image: string
  channel: string
}

type BottomDrawerProps = {
  items: Podcast[]
  onClose: () => void
  onRemove: (id: string) => void
  onSave: () => void
}

export function BottomDrawer({ items, onClose, onRemove, onSave }: BottomDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-40 z-40"
      />

      {/* Drawer */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '20%' }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-2xl flex flex-col h-[80vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b no-scrollbar">
          <h2 className="text-lg font-bold">Selected Podcasts</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable List with fixed height */}
        <div className="overflow-y-auto px-4 space-y-3" style={{ height: 'calc(80vh - 300px)' }}>
          {items.length > 0 ? (
            items.map((p) => (
              <PodcastCard
                key={p._id}
                {...p}
                selected={true}
                onSelect={() => onRemove(p._id)}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">
              No podcasts selected.
            </div>
          )}
        </div>

        {/* Save Button Footer */}
        <div className="p-4 border-t">
          <button
            className="w-full rounded-full bg-gray-200 text-black text-sm font-semibold h-14 shadow-md"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </motion.div>
    </>
  )
}
