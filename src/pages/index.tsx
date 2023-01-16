import Head from 'next/head'
import { Inter } from '@next/font/google'
import { TopSection } from '@/components/TopSection'
import BottomSection from '@/components/BottomSection'
import Navbar from '@/components/Navbar'
import Loading from '@/components/Loading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`w-full h-[790px] relative`}>
        {/* Background Image */}
        <div>
          <img
            className="w-full h-[100vh] object-cover absolute
             top-0 left-0 opacity-80 z-[-1]"
            src={
              'https://images.pexels.com/photos/1253748/pexels-photo-1253748.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
            alt="bgimg"
          />
        </div>

        {/* Main Top Div */}
        <Loading />
        <Navbar />
        <TopSection />
        <BottomSection />
      </main>
    </>
  )
}