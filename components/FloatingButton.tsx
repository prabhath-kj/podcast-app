// components/FloatingButton.tsx
'use client'
import { Button } from '@heroui/button'
import { motion } from 'framer-motion'

type Props = {
  count: number
}

export function FloatingButton({ count }: Props) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2"
    >
      <Button color="primary" className="rounded-full px-6 py-2 shadow-lg">
        Show Added ({count})
      </Button>
    </motion.div>
  )
}
