import './globals.css';
import NavBar from "@/components/NavBar";

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
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
