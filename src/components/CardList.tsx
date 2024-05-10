import Cards from "./Card";
import Pagination from "./Pagination";

const getData = async (page: number, cat: any) => {
  const res = await fetch(
    `http:localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store"
    }
  );

  if (!res.ok) {
    throw new Error("Failed fetch posts");
  }

  return res.json();
};

type Props = { page: number; cat: any };
const CardList = async ({ page, cat }: Props) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;
  // const hasPre = POST_PER_PAGE * (page - 1) > 0;
  const hasPre = page > 1;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="container ">
      <h1 className="title py-4 text-2xl font-semibold font-mono">
        Recent Posts
      </h1>
      <div className="posts ">
        {posts?.map((item: any) => (
          <Cards item={item} key={item._id}></Cards>
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPre={hasPre}></Pagination>
    </div>
  );
};

export default CardList;
