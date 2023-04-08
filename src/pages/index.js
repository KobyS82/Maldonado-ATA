import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center ">
        <div className='flex justify-center w-3/4 h-3/4 fill rounded-lg p-20 bg-slate-600'>
          Hello World!
        </div>
      </div>
    </main>
  )
}
