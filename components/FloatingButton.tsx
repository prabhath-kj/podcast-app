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
      className="fixed bottom-4 inset-x-0 z-30 px-4"
    >
      <Button
        fullWidth
        className="w-full rounded-full bg-gray-200 text-black text-sm font-semibold h-14 shadow-md"
      >
        Show Added ({count})
      </Button>
    </motion.div>
  )
}
