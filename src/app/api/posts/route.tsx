import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const POST_PER_PAGE = 2;
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1)
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count()
    ]);

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong during get posts" }),
      { status: 500 }
    );
  }
};