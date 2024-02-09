import React from 'react'

async function getData(){
    const res=await fetch("https://agency.teamrabbil.com/api/TestimonialList");
    return res.json();
}

const Testimonials = async () => {
    const data = await getData();
  return (
    <section className='py-20 bg-gray-50'>

        <div className='max-w-container m-auto px-2'>
            <div className='pb-16'>
                <div className='flex justify-center items-center text-center'>
                    <div>
                        <p className='text-green-600 font-bold'>Dolor sit amet consectutar</p>
                        <p className='text-5xl font-bold leading-normal'>Testimonials</p>
                    </div>
                </div>
            </div>

            <div className='sm:flex sm:flex-wrap px-2'>
                {
                    data.map((item)=>{
                        return(
                            <div className='mb-4 sm:w-1/3 px-3'>
                                <div className='p-8 bg-white rounded shadow text-center'>
                                    <p className='mb-8 text-gray-500 leading-loose'>{item.msg}</p>
                                    <img src={item.image} alt="" className='mb-2 mx-auto w-12 h-12 rounded-full object-cover' />
                                    <p className='mb-1 text-2xl font-bold leading-normal'>{item.name}</p>
                                    <p className='text-gray-500'>{item.designation}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            </div>

        </section>
  )
}

export default Testimonials