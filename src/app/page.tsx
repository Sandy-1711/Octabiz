import Image from 'next/image'
import Navbar from './(components)/Navbar'

export default function Home() {
  return (<>
    <Navbar />
    <div className='-z-10 bg-center h-max bg-[url("/background.webp")] bg-no-repeat bg-cover min-h-screen w-screen bg-opacity-[0.6] fixed top-0 left-0 right-0 bottom-0'> </div>
  </>
  )
}
