import { NextResponse, NextRequest } from "next/server";
import {db, cartTable} from "@/lib/drizzle"
import {v4 as uuid} from "uuid"
import { cookies } from "next/dist/client/components/headers";
import {eq} from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const res = await db.select().from(cartTable)
    return NextResponse.json({res})
  } catch(err) {
    return NextResponse.json({message: 'Something went wrong'})
  }
} 

export const POST = async(request: NextRequest) => {
  console.log(request.method)
  const req = await request.json()
  const uid = uuid()
  const myCookies = cookies()

  const userID_inCookies = cookies().get("user_id")

  if(!userID_inCookies) {
    myCookies.set("user_id", uid)
  }
}

//   export const DELETE = async(request: NextRequest) => {
//     // console.log(request.headers)
//     // console.log(request.json())
//     const req = await request.json()
//     // const reqs = await request
//     console.log(req.body.product_id)
//     // console.log('abc')
//     return NextResponse.json({message: req.body.product_id})

// }

export async function DELETE(request: NextRequest) {
  const url = request.nextUrl;
  if (url.searchParams.has('user_id')) {
    const user_id = url.searchParams.get('user_id') as string;
    try {
      const response = await db
        .delete(cartTable)
        .where(eq(cartTable.user_id, user_id));
      return NextResponse.json({ deleted: true }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ deleted: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ deleted: false }, { status: 500 });
  }
}