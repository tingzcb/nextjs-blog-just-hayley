import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const users = await prisma.user.findMany();
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({
        messag: "Something went wrong during finding categories!"
      }),
      { status: 500 }
    );
  }
};
