import Link from 'next/link'
import React from 'react'

async function getData(){
    const res=await fetch('https://agency.teamrabbil.com/api/FeaturedProject');
    return res.json();
}

const Projects = async () => {
    const data = await getData();
  return (
    <div>
        <section className='bg-gray-50 py-20'>
            <div className='max-w-container m-auto px-2.5'>

                <div className='mb-16 flex justify-between items-center'>
                    <div>
                        <p className='text-green-600 font-bold leading-normal'>Dolor sit amet consectutar</p>
                        <p className='text-5xl font-bold leading-normal'>Featured Projects</p>
                    </div>
                    <Link className='py-3 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold  duration-200 ease-in-out' href='/projects'>View More Projects</Link>
                </div>

                <div className='sm:flex sm:flex-wrap -mx-4 mb-4'>
                    {
                        data.map((item)=>{
                            return(
                               <div className='sm:w-1/3 mb-8 px-4'>
                                  <img src={item.image} alt="" className='h-80 object-cover rounded cursor-pointer' />
                               </div>
                            );
                        })
                    }
                </div>

            </div>
        </section>
    </div>
  )
}

export default Projects