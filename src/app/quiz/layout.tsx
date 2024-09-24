import { ProgressComponent } from '@/components/progress'

export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='flex flex-col w-full min-h-dvh'>
      <ProgressComponent />
      {children}
    </main>
  )
}
