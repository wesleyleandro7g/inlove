'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SpousesName() {
  const [name, setName] = useState('')

  return (
    <div className='flex flex-1 flex-col justify-between p-4'>
      <div />
      <div className='flex flex-col gap-4'>
        <h4 className='text-xl font-inter text-text'>
          Qual o nome do seu namorado?
        </h4>
        <Input
          className='border-0 border-b-2 border-text/50 rounded-none focus:border-text focus:outline-none text-lg text-text uppercase'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Link href='/quiz/your-name'>
        <Button
          variant='secondary'
          disabled={name.length < 4}
          className='w-full'
        >
          Próximo
        </Button>
      </Link>
    </div>
  )
}
