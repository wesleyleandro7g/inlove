'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function Gender() {
  const router = useRouter()
  const [genderSelected, setGenderSelected] = useState('')

  const options = [
    {
      id: 'man',
      label: 'Homem',
    },
    {
      id: 'woman',
      label: 'Mulher',
    },
  ]

  useEffect(() => {
    if (!genderSelected) return

    setTimeout(() => {
      console.log(genderSelected)
      router.push('/quiz/relationship-type')
    }, 500)
  }, [genderSelected])

  return (
    <div className='flex flex-1 flex-col justify-center p-4'>
      <div className='flex flex-col gap-4'>
        <h4 className='text-xl font-inter text-text'>O seu par é...</h4>
        <RadioGroup defaultValue=''>
          <div className='grid grid-cols-2 gap-2 place-items-center'>
            {options.map((option) => (
              <RadioGroupItem
                key={option.id}
                value={option.id}
                id={option.id}
                onClick={() => setGenderSelected(option.id)}
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
