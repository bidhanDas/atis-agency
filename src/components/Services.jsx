import React from 'react'

async function getData(){
    const res=await fetch("https://agency.teamrabbil.com/api/AllService");
    return res.json();
}

const Services = async () => {
    const data = await getData();
  return (
    <section>
        {
            data.map((item)=>{
                return(
                    <div className='py-20 bg-gray-50'>
                        <div className='max-w-container mx-auto px-4'>
                            <div className='flex flex-wrap items-center -mx-4'>

                                <div className='w-1/2 px-4'>
                                    <div className='max-w-md'>
                                        <p className='text-green-600 font-bold'>{item.tag}</p>
                                        <p className='mb-6 text-5xl font-bold leading-normal'>{item.title}</p>
                                        <div className='mb-6 max-w-sm'>
                                            <p className='text-gray-500 leading-loose'>{item.des}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-1/2'>
                                    <div className='mb-4 flex flex-wrap items-end'>
                                        <div className='w-2/3 px-3'>
                                            <img src={item.image1} alt="" className='w-full h-48 object-cover rounded' />
                                        </div>
                                        <div className='w-1/3 px-3'>
                                            <img src={item.image2} alt="" className='w-full h-32 object-cover rounded' />
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap items-start'>
                                        <div className='w-1/3 px-3'>
                                            <img src={item.image3} alt="" className='w-full h-32 object-cover rounded' />
                                        </div>
                                        <div className='w-2/3 px-3'>
                                            <img src={item.image4} alt="" className='w-full h-48 object-cover rounded' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })
        }
    </section>
  )
}

export default Services