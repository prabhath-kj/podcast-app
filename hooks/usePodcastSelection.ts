'use client'

import { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'
import { client } from '@/lib/graphql/graphqlClient'
import { GET_USER_SELECTION } from '@/lib/graphql/queries'
import { SAVE_SELECTION } from '@/lib/graphql/mutations'
import { GetUserSelectionResponse, Podcast } from '@/types'


export function usePodcastSelection() {
  const [userId, setUserId] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  console.log(selected);

  // Generate or load userId from localStorage
  useEffect(() => {
    const existing = localStorage.getItem('userId')
    if (existing) {
      setUserId(existing)
    } else {
      const newId = uuidv4()
      localStorage.setItem('userId', newId)
      setUserId(newId)
    }
  }, [])

  // Fetch saved selection from server
  const { data, isLoading } = useQuery({
    queryKey: ['userSelection', userId],
    queryFn: async () => {
      const res = await client.request<GetUserSelectionResponse>(GET_USER_SELECTION, { userId })
      return res.userSelection.map((p) => p._id)
    },
    enabled: !!userId,

  })



  // Save selection to server
  const saveMutation = useMutation({
    mutationFn: async () => {
      await client.request(SAVE_SELECTION, {
        userId,
        selectedPodcastIds: selected,
      })
    },
  })

  useEffect(() => {
    if (data) {
      setSelected(data);
    }
  }, [data]);

  // Toggle selection
  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const removeSelected = (id: string) => {
    setSelected((prev) => prev.filter((x) => x !== id))
  }

  return {
    selected,
    toggleSelect,
    removeSelected,
    save: saveMutation.mutate,
    isSaving: saveMutation.isPending,
    isLoading,
    userId,
  }
}
