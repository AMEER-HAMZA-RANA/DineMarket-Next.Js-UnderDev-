'use client'
import React from 'react'
import { useState } from 'react'

// interface Item {
//   item: {
//     _id: string
//   }
// }

const CartBtn: React.FC<{item: {_id: string}}> = ({item}) => {
  // let btn = 
  const handleCartBtn = async() => {
    const res = await fetch("/api/cart/23", {
      method: "DELETE",
      body: JSON.stringify({
        product_id: item._id
      })
    })
    const result = await res.json()
    console.log(result)
  }
  return (
    <div>
      <button onClick={handleCartBtn} className='bg-gray-500 px-4 py-2 rounded-md text-white hover:bg-gray-700 text-lg my-3'>Add to Cart</button>
    </div>
  )
}

export default CartBtn