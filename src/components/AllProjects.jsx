import React from 'react'

async function getData(){
    const res=await fetch("https://agency.teamrabbil.com/api/AllProject");
    return res.json();
}

const AllProjects = async () => {
    const data = await getData();
  return (
    <section className='py-20 bg-gray-50'>
        <div className='max-w-container m-auto px-2.5'>

            <div className='mb-16 flex justify-center items-center'>
                <div className='text-center'>
                    <p className='text-green-600 font-bold'>Dolor sit amet consectutar</p>
                    <p className='text-5xl font-bold leading-normal'>Our Projects</p>
                </div>
            </div>

            <div className='sm:flex sm:flex-wrap -mx-4 mb-4'>
                {
                    data.map((item)=>{
                        return(
                            <div className='sm:w-1/3 mb-8 px-4'>
                                <img src={item.image} alt="" className='h-80 object-cover rounded' />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default AllProjects