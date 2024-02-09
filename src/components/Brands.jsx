import React from 'react'

async function getData(){
    const res=await fetch('https://agency.teamrabbil.com/api/BrandList');
    return res.json();
}

const Brands = async () => {
    const data = await getData();
  return (
    <div>
        <section className='py-20'>
            <div className='max-w-container m-auto px-2 text-center'>
                <p className='mb-16 text-2xl'>Trusted by brands all over the world</p>
                <div className='flex -mx-2'>
                    {
                        data.map((item)=>{
                            return(
                                <div className='w-1/4 px-2'>
                                    <img src={item.image} alt=""  className='mx-auto' />
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

export default Brands