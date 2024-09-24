'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

export default function YourName() {
  const [name, setName] = useState('')

  return (
    <div className='flex flex-1 flex-col justify-center p-4'>
      <div className='flex flex-col gap-4'>
        <h4 className='text-xl font-inter text-text'>Qual o seu nome?</h4>
        <div className='relative'>
          <Input
            autoFocus
            className='border-0 border-b-2 border-text/50 rounded-none focus:border-text focus:outline-none text-lg text-text uppercase'
            onChange={(e) => setName(e.target.value)}
          />
          {name.length > 3 && (
            <Link href='/quiz/choose' className='cursor-pointer'>
              <div className='absolute right-0 top-0 bg-primary rounded-full  flex items-center h-8 py-1 pl-3 pr-1.5'>
                <span className='text-text text-xs'>Próximo</span>
                <ArrowRight className='w-full h-full text-text' />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
