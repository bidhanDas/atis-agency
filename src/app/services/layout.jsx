import React from 'react'

export async function generateMetadata(){
    const res=await fetch("https://agency.teamrabbil.com/api/SiteMeta/services");
    const JSON=await res.json();
    return{
        title:JSON[0].title,
        description:JSON[0].description,
        keywords:JSON[0].keywords,
        openGraph: {
            images: JSON[0].image,
        },
        icons: {
          icon:'/favicon.ico?v=4',
        },
    }
  }

const layout = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout