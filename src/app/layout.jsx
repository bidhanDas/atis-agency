import Footer from '@/components/Footer';
import './globals.css';
import NavBar from "@/components/NavBar";
// import NextTopLoader from 'nextjs-toploader';

export async function generateMetadata(){

  const res=await fetch("https://agency.teamrabbil.com/api/SiteMeta/home");
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



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>

        {/* <title></title> */}

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap" rel="stylesheet"/>

      </head>

      <body>
        {/* <NextTopLoader color="#E60000" height={2} speed={400}></NextTopLoader>  */}
        {/*search nextjs-toploader, documentation, NPMJS*/}
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
