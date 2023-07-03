import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Image as IImage} from 'sanity'
import {client} from "@/lib/sanityClient"
import imageUrlBuilder from '@sanity/image-url'
import { data } from '@/components/Product'
import CartBtn from '@/components/CartBtn'


const builder = imageUrlBuilder(client)

function urlFor(source:any) {
  return builder.image(source)
}

function Page({params}:{params:{id:string}}) {
  let product = data.filter(prod => prod._id === params.id)
  return (
    <div className='flex flex-row items-center justify-center mt-12 gap-x-8 '>
      {product.map((item) => (
        <div key={item._id} className=''>
          {/* <Link href={`/product/${item._id}`} > */}
          <div>
            <div className="flex flex-row gap-5">
              <div className="">
                {/* <Image src="/event3.webp" alt="promo" width={300} height={280} className="mt-6" /> */}
                <Image alt='product-image' className='max-w-[450px] object-cover object-top' width={500} height={500} src={urlFor(item.image).width(500).url()} />
              </div>

              <div className="text-center">
                  <p className='mt-2 text-3xl font-semibold'>{item.title}</p>
                  <p className="bg-blue-100 text-blue-500 rounded-lg w-min mt-4 py-1 text-center px-3 mx-auto text-sm">
                    {item.category.name}
                  </p>

                  <CartBtn item={item}/>
                <span className="text-2xl pl-4 self-start block my-3">
                  {/* <span className="line-through text-sm">${ item.price + 50}</span>
                  <span className="font-extrabold ml-6 text-xl">${item.price}</span> */}
                </span>

                {/* <p className="text-center max-w-[250px] mx-auto">{item.description}</p> */}
              </div>
            </div>
            </div>
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default Page