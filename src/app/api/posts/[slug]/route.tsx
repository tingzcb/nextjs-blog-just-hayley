import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//Get Single Post
export const GET = async (req: any, { params }: any) => {
  const { slug } = params;

  try {
    // const post = await prisma.post.findUnique({
    //   where: { slug: slug },
    //   include: { user: true }
    // });

    const post = await prisma.post.update({
      where: { slug: slug },
      data: { views: { increment: 1 } },
      include: { user: true }
    });

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong during get posts" }),
      { status: 500 }
    );
  }
};
