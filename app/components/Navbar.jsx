import React from 'react'

const Navbar = () => {
  return (
    //wrapper div
    <div className=''>

        <div className='bg-[#bbb7b7] font-bold uppecase py-6 px-16 pb-6 border-b-[3px] border-[#222222]'>
            <ul className='text-purple-600 text-center text-2xl'>
              <button className='group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow'>
                <div className='absolute inset-0 w-3 bg-purple-400 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
                  <li className='relative text-black group-hover:text-white'>
                  Make a note
                </li> 
                </button>
            </ul>
        </div>

    </div>
  )
}

export default Navbar