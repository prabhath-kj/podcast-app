'use client'

import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { PodcastCard } from './PodcastCard'

type Podcast = {
  id: string
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
        className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-2xl flex flex-col p-4 h-[80vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Selected Podcasts</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 space-y-3 overflow-y-auto pb-4">
          {items.map((p) => (
            <PodcastCard
              key={p.id}
              {...p}
              selected={true}
              onSelect={() => onRemove(p.id)}
            />
          ))}
        </div>

        {/* Save Button Footer */}
        <div className="mt-4">
          <button
            className="w-full bg-black text-white py-3 rounded-xl text-sm font-semibold"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </motion.div>
    </>
  )
}
