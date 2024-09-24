'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function Relationship() {
  const router = useRouter()
  const [relationType, setRelationType] = useState('')

  const options = [
    {
      id: 'rolinho',
      label: 'Rolinho',
    },
    {
      id: 'namorados',
      label: 'Namorados',
    },
    {
      id: 'noivos',
      label: 'Noivos',
    },
    {
      id: 'casados',
      label: 'Casados',
    },
  ]

  useEffect(() => {
    if (!relationType) return

    setTimeout(() => {
      console.log(relationType)
      router.push('/quiz/spouses-name')
    }, 900)
  }, [relationType])

  return (
    <div className='flex flex-1 flex-col justify-center p-4'>
      <div className='flex flex-col gap-4'>
        <h4 className='text-xl font-inter text-text'>
          Qual o tipo de relacionamento?
        </h4>
        <RadioGroup defaultValue=''>
          <div className='grid grid-cols-2 gap-2 place-items-center'>
            {options.map((option) => (
              <RadioGroupItem
                key={option.id}
                value={option.id}
                id={option.id}
                onClick={() => setRelationType(option.id)}
                className='w-full h-[60px] border-primary border border-b-4 data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-0 data-[state=checked]:border-b-4 data-[state=checked]:border-text'
              >
                <Label htmlFor={option.id} className='uppercase'>
                  {option.label}
                </Label>
              </RadioGroupItem>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
