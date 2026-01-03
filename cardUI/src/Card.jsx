import React from 'react'
import { Bookmark } from 'lucide-react';


const Card = () => {
  return (
    <div className='parent min-h-screen w-full bg-black flex flex-wrap p-5'>
        <div className="card py-5 px-8 flex flex-col bg-white  h-full w-100 rounded-2xl mt-10 justify-between hover:translate-y-5 hover:shadow-2xl transition-all duration-300"> 
            <div className="top flex items-start justify-between mb-10">
                <img
                 src="https://s3-alpha.figma.com/hub/file/2729744958/2a5758d6-4edb-4047-87bb-e6b94dbbbab0-cover.png" 
                 alt="logo" 
                 className='logo w-10 h-10 p-1 border border-gray-300  rounded-full object-cover '/>

                 <button className='border flex gap-1 border-transparent bg-gray-200 px-3 py-1 rounded '>saved <Bookmark size={18}/> </button>
            </div>

            <div className="center  mb-15">
                <h4 className='font-medium text-xl  mt-2'>Google <span className='text-sm font-medium text-gray-400'> 30 days ago</span></h4>
                <h2 className='font-medium mt-1 mb-2 text-[28px]'>Graphic Designer</h2>
                <div className="btn flex  gap-3 mt-2 mb-8">
                    <button className="fulltime bg-gray-300 px-4 py-2 rounded">Full-time</button>
                    <button className="flexible bg-gray-300 px-5 py-2 rounded">Flexible-Schedule</button>
                </div>
            </div>
            <div className="footer flex justify-between border-t  border-gray-200 mt-5 p-3 ">
                <div>
                    <h2 className='font-medium text-xl '>$150-220</h2>
                    <h4 className='text-sm text-gray-300 font-medium '> Mountain View, CA</h4>
                </div>
                <button className='bg-black text-white border border-transparent px-3 py-1 rounded-xl'>Apply Now</button>
            </div>
        </div>

    </div>
  )
}

export default Card