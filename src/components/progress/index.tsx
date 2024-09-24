'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import { Progress } from '@/components/ui/progress'

export function ProgressComponent() {
  const router = useRouter()
  const path = usePathname()

  const paths = [
    '/quiz/gender',
    '/quiz/relationship-type',
    '/quiz/spouses-name',
    '/quiz/your-name',
    '/quiz/choose',
    '/quiz/share',
  ]

  function goBack() {
    router.back()
  }

  function calculateProgress() {
    const index = paths.indexOf(path)
    return ((index + 1) / paths.length) * 100
  }

  function calculatePage() {
    const index = paths.indexOf(path)

    return `${index + 1}/${paths.length}`
  }

  return (
    <div className='flex items-center justify-between gap-4 w-full p-4'>
      <ChevronLeft className='text-text size-8' onClick={goBack} />
      <Progress
        value={calculateProgress()}
        className='w-full h-3 rounded-full'
      />
      <span className='text-sm font-inter font-normal text-text'>
        {calculatePage()}
      </span>
    </div>
  )
}
