export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className='flex w-full min-h-dvh'>{children}</main>
}
