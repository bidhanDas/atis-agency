import Link from 'next/link';
import React from 'react'

async function getData(){
    const res=await fetch('https://agency.teamrabbil.com/api/HeroList');
    return res.json();
}

const Hero = async () => {
    const x = await getData();
  return (
    <div>
        <section className='bg-gray-50 py-24'>
            <div className='max-w-container mx-auto'>
                <div className='flex'> 
                    <div className='w-1/2 flex items-center'>
                        <div> {/* column wise */}
                            <div className='w-[448px]'>
                                <p className='mb-3 text-5xl font-bold leading-[72px]'>{x.title}<span className='text-green-600'>problems</span></p>
                            </div>
                            <div className='w-96'>
                                <p className='text-gray-400 leading-loose mb-6'>{x.description}</p>
                                <Link className='inline-block py-3 px-6  bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl duration-200' href='#'>Get Started</Link>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/2 px-4'>
                        <div className='flex mb-4 ml-6'>
                            <img className='w-1/3 h-64 p-2 rounded-[28px] rounded-br-none object-cover' src={x.image1} alt=''/>
                            <img className='w-2/3 h-64 p-2 rounded-[28px] rounded-bl-none object-cover' src={x.image2} alt=''/>
                        </div>
                        <div className='flex mr-6'>
                            <img className='w-2/3 h-64 p-2 rounded-[28px] rounded-br-none object-cover' src={x.image3} alt=''/>
                            <img className='w-1/3 h-64 p-2 rounded-[28px] rounded-bl-none object-cover' src={x.image4} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero