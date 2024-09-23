import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Start() {
  return (
    <div className='flex flex-col justify-between relative min-h-dvh overflow-hidden'>
      <div className='space-y-3 p-6 z-30'>
        <h1 className='text-3xl font-inter text-text'>
          Crie um quiz para o seu par e teste a afinidade do casal
        </h1>
      </div>

      <div className='relative bottom-0 w-full h-[400px]'>
        <div className='absolute w-full px-8 z-30 bottom-[10vh]'>
          <Button variant='primary'>Começar</Button>
        </div>
        <div className='absolute bottom-0 w-full h-[200px] z-20'>
          <Image
            src='/wave.svg'
            fill
            alt='wave'
            objectFit='cover'
            objectPosition='top'
          />
        </div>
        <div className='absolute bottom-40 w-full h-[50vh] z-10'>
          <Image
            src='/couples.png'
            fill
            style={{ objectFit: 'contain' }}
            alt='couple'
            className='scale-110'
          />
        </div>
      </div>
    </div>
  )
}
