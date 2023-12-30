import React from 'react'

async function getData(){
    const res=await fetch('https://agency.teamrabbil.com/api/WorkList');
    return res.json();
}

const HowWorks = async () => {
    const data = await getData();
  return (
    <div>
        <section className='bg-gray-50 py-20'>
            <div className='max-w-container m-auto px-2.5'>

                <div className='mb-16 max-w-md text-center mx-auto '>
                    <p className='text-green-600 font-bold'>Dolor sit amet consectutar</p>
                    <p className='text-5xl font-bold leading-[72px]'>Build & Launch without problems</p>
                </div>

                <div className='sm:flex -mx-4'>
                    {
                        data.map((item)=>{
                            return (
                                <div className='mb-8 px-4 text-center'>
                                    <div className='mb-10 flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-green-600 text-white text-2xl'><span>{item.step}</span></div>
                                    <p className='mb-4 text-2xl font-bold'>{item.title}</p>
                                    <p className='text-gray-500 leading-loose'>{item.des}</p>
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

export default HowWorks