import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//Get All Comments Of A Post
export const GET = async (req: any) => {
  const { searchParams } = new URL(req.url);
  //get postSlug id from request url's searchParams
  const postSlug = searchParams.get("postSlug");

  //pass the postSlug as a query, and search for the comments.
  try {
    // await function
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug })
      },
      include: { user: true }
    });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

//create a comment
export const POST = async (req: any) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "You must be logged in." }),
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    // await function
    //console.log(body);
    const comment = await prisma.comment.create({
      data: {
        ...body,
        userEmail: session.user?.email
      }
    });
    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
