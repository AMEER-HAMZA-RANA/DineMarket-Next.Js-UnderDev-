import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer>
      <div className="flex items-start justify-around gap-12 px-10 py-12 mt-96 text-gray-600">
        {/* first column */}
        <div className='max-w-xs'>
          <Image src='/Logo-dinemarket.webp' width='185' height='25' alt='logo'/>
          <p className='text-xl mt-6'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          <div className="flex gap-4 mt-6">
            <Link href='#' className='w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href='#' className='w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
            <Link href='#' className='w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </Link>
          </div>
        </div>

        {/* second column */}
        <div className="max-w-xs">
          <h5 className="text-2xl font-bold">
          Company
          </h5>
          <ul className='text-xl mt-3 flex flex-col gap-y-2'>
            <li><Link href='#'>About</Link></li>
            <li><Link href='#'>About</Link></li>
            <li><Link href='#'>About</Link></li>
            <li><Link href='#'>About</Link></li>
            <li><Link href='#'>About</Link></li>
          </ul>
        </div>
        {/* Third Column */}
        <div className="max-w-xs">
          <h5 className="text-2xl font-bold">
          Company
          </h5>
          <ul className='text-xl mt-3 flex flex-col gap-y-2'>
            <li><Link href='#'>About</Link></li>
            <li><Link href='#'>About</Link></li>
            <li><Link href='#'>About</Link></li>
          </ul>
        </div>
        {/* Fourth Column */}
        <div className="max-w-xs">
          <h5 className="text-2xl font-bold">
          Company
          </h5>
          <ul className='text-xl mt-3 flex flex-col gap-y-2'>
            <li><Link href='#'>About</Link></li>
            <li><Link href='#'>About</Link></li>
          </ul>
        </div>
        {/* Line */}
      </div>
        <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
        <div className="flex justify-around items-center px-6 py-5 text-md">
          <div className='text-gray-500 max-w-[12rem]'>Copyright © 2022 Dine Market</div>
          <div className='text-gray-500 max-w-[12rem]'>Design by. <span className='text-gray-700 font-bold'>Weird Design Studio</span></div>
          <div className='text-gray-500 max-w-[12rem]'>Code by. <span className='text-gray-700 font-bold'>Ameer Hamza Rana on github</span></div>
        </div>
    </footer>
  )
}

export default Footer