import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="w-full h-5/6 overflow-hidden bg-black">    
        <div className="absolute z-negative mt-5 w-full h-full">
        <iframe width="100%" height="90%" src="https://www.youtube.com/embed/Ti_o4fv2Ta0?autoplay=1&mute=1&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <nav className="w-full z-20 flex items-center h-16 justify-between flex-wrap bg-gradient-to-black from-gray-600 p-3">
            <div className="flex items-center flex-shink-0 text-white mr-10 ml-2">
                <svg className="fill-current h-12 w-32 top-0" xmlns="http://www.w3.org/2000/svg" height="800" width="1200" viewBox="-153.6 -69.1855 1331.2 415.113"><path fill="#d81f26" d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"/></svg>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border-2 rounded text-gray-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current text-white h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-100 mr-4">
                    Home
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-100 mr-4">
                    Tv Shows
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-100 mr-4">
                    Movies
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-100 mr-4">
                    New & Popular
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-100">
                    My List
                </a>
                </div>
            </div>
            <div className="inline-flex self-center">
                <input type="search" name="q" className="py-2 text-sm text-white rounded-md pl-10 bg-black focus:outline-none focus:bg-gray-900 focus:text-gray-300" placeholder="Search..." autoComplete="off" />
                <div className="mt-2 peer-hover:visible">
                    <svg fill="black" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
            </div>
        </nav>
    </header>
    <div className="flex justify-center -mx-2 mt-96 bg-gray-900">
        <div className="h-32 w-32 mx-3 my-5 hover:scale-100">
            <motion.div whileHover={{ scale: 1.3 }}>
                <Image
                    className="object-cover"
                    src="/1.jpg"
                    alt="Picture of the author"
                    width={400}
                    height={400}
                />
            </motion.div>
        </div>
        <div className="h-32 w-32 mx-3 my-5 hover:scale-100">
            <motion.div whileHover={{ scale: 1.3 }}>
                <Image
                    className="object-cover"
                    src="/6.jpg"
                    alt="Picture of the author"
                    width={400}
                    height={400}
                />
            </motion.div>
        </div>
        <div className="h-32 w-32 mx-3 my-5 hover:scale-100">
            <motion.div whileHover={{ scale: 1.3 }}>
                <Image
                    className="object-cover"
                    src="/2.jpg"
                    alt="Picture of the author"
                    width={400}
                    height={400}
                />
            </motion.div>
        </div>
        <div className="h-32 w-32 mx-3 my-5 hover:scale-100">
            <motion.div whileHover={{ scale: 1.3 }}>
                <Image
                    className="object-cover"
                    src="/3.jpg"
                    alt="Picture of the author"
                    width={400}
                    height={400}
                />
            </motion.div>
        </div>
        <div className="h-32 w-32 mx-3 my-5 hover:scale-100">
            <motion.div whileHover={{ scale: 1.3 }}>
                <Image
                    className="object-cover"
                    src="/4.jpg"
                    alt="Picture of the author"
                    width={400}
                    height={400}
                />
            </motion.div>
        </div>
        <div className="h-32 w-32 mx-3 my-5 hover:scale-100">
            <motion.div whileHover={{ scale: 1.3 }}>
                <Image
                    className="object-cover"
                    src="/5.jpg"
                    alt="Picture of the author"
                    width={400}
                    height={400}
                />
            </motion.div>
        </div>
    </div>
    </div>
  )
}
