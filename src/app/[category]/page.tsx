import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {client} from "@/lib/sanityClient"
import imageUrlBuilder from '@sanity/image-url'
import { data } from '@/components/Product'

const builder = imageUrlBuilder(client)

function urlFor(source:any) {
  return builder.image(source)
}

function Category({params}: {params: {category: string}}) {
  let filteredProds = data.filter((product) => product.category.name.toLowerCase() === params.category)
  if(params.category.toLowerCase() == 'allproducts') {
    filteredProds = data;
  }
  return (
    
        <div className='flex flex-row items-center justify-center mt-12 gap-x-8 px-24 py-20'>
      {filteredProds.length > 0 ? filteredProds.map((item) => (
        <div key={item._id} className='flex flex-col items-center justify-center'>
          <Link href={`/product/${item._id}`} className='block max-w-[300px]'>
            <div className="flex flex-col">
              <div className="">
                {/* <Image src="/event3.webp" alt="promo" width={300} height={280} className="mt-6" /> */}
                <Image alt='product-image' className='!max-h-[300px] object-cover object-top' width={500} height={350} src={urlFor(item.image).width(500).url()} />
              </div>

              <div className="text-center">
              <p className="bg-blue-100 text-blue-500 rounded-lg w-min mt-4 py-1 text-center px-3 mx-auto text-sm">
                    {item.category.name}
                  </p>
                  <p className='mt-2 text-xl font-semibold'>{item.title}</p>
                <span className="text-2xl pl-4 self-start block my-3">
                  <span className="line-through text-sm">${ item.price + 50}</span>
                  <span className="font-extrabold ml-6 text-xl">${item.price}</span>
                </span>
                <p className="text-center max-w-[250px] mx-auto">{item.description}</p>
              </div>
            </div>
          </Link>
        </div>
      )) : '404 NOT FOUND'}
    </div>
  )
}

export default Category