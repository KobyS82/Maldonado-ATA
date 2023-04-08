/* eslint-disable @next/next/no-html-link-for-pages */
// TODO import react icons
import {IoPerson} from 'react-icons/io5'
import {BsFillTelephoneFill} from 'react-icons/bs'


export default function Navbar() {
  return (
    <main>
      <div className="bg-slate-50 text-black">
        {/* Contact */}
        <div className="font-thin text-sm">
          <div className="flex border-b-2 x-auto justify-between">
            {/* left side */}
            <div className='flex m-2'>
              <h3 href="https://roundrockata.com" className="pr-2 border-r-2 hover:text-red-700">
                Maldonado ATA Martial Arts
              </h3>
              <h3 className="pl-2 text-gray-500 hidden lg:block">
                Karate for Kids and Self-Defense Classes Serving Round Rock,
                Hutto, and Pflugerville
              </h3>
            </div>
            {/* right side */}
            <div className='hidden m-2 justify-between sm:flex'>
              <a href="/login" className='flex px-2 hover:text-red-700'>
                <div>
                  <IoPerson className='mt-[3px] mr-[3px]'/>
                </div>
                <h3>
                  Login
                </h3>
              </a>
              <h3 className='justify-end hover:text-red-700'>
                <div className='inline-block'>
                  <BsFillTelephoneFill className='mt-[3px] mr-[5px] max-h-3 text-red-600'/>
                </div>
                <a href="tel:512-310-0131">512-310-0131</a>
              </h3>
            </div>
          </div>
        </div>
        {/* Navigation Bar */}
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/introductory-offer">Introductory Offer</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
