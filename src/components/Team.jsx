import React from 'react'

async function getData(){
    const res=await fetch('https://agency.teamrabbil.com/api/TeamList');
    return res.json();
}

const Team = async () => {
    const data = await getData();
  return (
    <section className='py-20 bg-gray-50'>
        <div className='max-w-container mx-auto px-4'>
            <div className='max-w-xl mx-auto text-center mb-16'>
                <p className='text-green-600 font-bold'>Dolor sit amet consectutar</p>
                <p className='text-5xl font-bold leading-normal'>Check our awesome team members</p>
            </div>

            <div className='flex flex-wrap -mx-4'>
                {
                    data.map((item)=>{
                        return (
                            <div className='mb-6 w-1/2 px-4'>
                                <div className='flex flex-wrap items-center bg-white rounded shadow'>
                                    <div className='w-1/3'>
                                        <img src={item.image} alt="" className='h-80 object-cover' />
                                    </div>
                                    <div className='w-2/3 pl-6 p-4'>
                                        <p className='mb-2 text-2xl font-bold'>{item.name}</p>
                                        <p className='mb-4 text-gray-500 leading-loose'>{item.bio}</p>
                                        <div className='flex'>
                                            <img src="/fb.svg" alt=""  className='mr-3'/>
                                            <img src="/twi.svg" alt="" className='mr-3'/>
                                            <img src="/insta.svg" alt="" />
                                        </div>
                                    </div>
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

export default Team