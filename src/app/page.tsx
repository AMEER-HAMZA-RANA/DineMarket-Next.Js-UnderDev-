import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Product from "@/components/Product";

export default async function Home() {

  // const data:IProduct[] = await getData()
  // console.log(data)

  return (
    <main className="px-24 my-20">
      {/* Hero Section */}
      <div className="flex items-start justify-center">
        {/* Left Section */}
        <div className="max-w-lg ">
          <p className="text-lg px-3 py-2 bg-blue-100 text-blue-600 rounded-lg font-bold max-w-[7rem] text-center">Sale 70%</p>
          <h1 className="text-[4.3rem] text-gray-900 font-bold mt-6 max-w-md leading-[69px]">An Industrial Take on Streetwear</h1>
          <p className="text-xl text-gray-500 max-w-xs mt-12 leading-[25px]">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>
          <button className="bg-gray-900 text-white text-xl p-5 flex items-center justify-center gap-2 font-semibold mt-14">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart w-6"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          <p>Start Shopping</p>
          </button>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex items-start justify-end">
          <div className="p-72 bg-pink-200 rounded-full shrink-0 -mt-8 relative">
            <Image src='/girl.webp' width={2000} height={100} alt='girl'className="absolute -top-10 left-[0.001px] !min-w-[650px]" />
          </div>
        </div>
      </div>
      


      {/* Promotions Section */}
      <div className="flex flex-col items-center justify-center my-32">
        <p className="text-sm text-blue-600 tracking-widest font-bold">PROMOTIONS</p>
        <h3 className="text-gray-900 text-[2.5rem] font-bold mt-3">Our Promtion Events</h3>

        {/* Products */}
        <div className="flex justify-center gap-5 mt-14">

          <div className="flex flex-col items-center justify-center gap-5">
          <Link href='#' className=" bg-[#D6D6D8] pl-10 pt-4 flex items-start justify-center">
            <div className="max-w-[12rem]">
            <h6 className=" text-4xl font-bold ">GET UP TO 60%</h6>
            <p className="text-gray-900 mt-1 text-2xl leading-7">For the summer season</p>
            </div>
            <div className="">
              <Image src='/promo-1.webp' alt='' width={300} height={300} />
            </div>
          </Link>
          
          <Link href='#' className=" bg-[#D6D6D8] pl-10 pt-4 flex items-start justify-center">
            <div className="max-w-[12rem]">
            <h6 className=" text-4xl font-bold ">GET UP TO 60%</h6>
            <p className="text-gray-900 mt-1 text-2xl leading-7">For the summer season</p>
            </div>
            <div className="">
              <Image src='/promo-1.webp' alt='' width={300} height={300} />
            </div>
          </Link>
          </div>


          <Link href='#' className="flex flex-col gap-4 items-center bg-[#EFE1C7] pt-4">
            <h6 className="text-xl pl-4 self-start font-semibold">Flex Sweatshirt</h6>
            <span className="text-2xl pl-4  self-start">
              <span className="line-through">$100.00</span>
            <span className="font-bold ml-2 text-xl">$75.00</span>
            </span>
            <Image src={'/event2.webp'} alt="promo" width={300} height={280} className="mt-7" />
          </Link>

          <Link href='#' className="flex flex-col gap-4 items-center bg-[#EFE1C7] pt-4">
            <h6 className="text-xl pl-4 self-start font-semibold">Flex Sweatshirt</h6>
            <span className="text-2xl pl-4  self-start">
              <span className="line-through">$100.00</span>
            <span className="font-bold ml-2 text-xl">$75.00</span>
            </span>
            <Image src={'/event3.webp'} alt="promo" width={300} height={280} className="mt-6" />
          </Link>
        </div>
      </div>


{/* Products Section */}
<div className="flex flex-col items-center justify-center my-32">
<p className="text-sm text-blue-600 tracking-widest font-bold">PRODUCTS</p>
        <h3 className="text-gray-900 text-[2.5rem] font-bold mt-3">Check What We Have</h3>


{/* Fetching Sanity Data */}
      <Product/ >
      </div>
    </main>
  )
}
