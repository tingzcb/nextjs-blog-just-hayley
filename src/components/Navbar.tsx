import Link from "next/link";
import ScrollingText from "./ScrollingText";
import PageLayout from "./pageLayout";
import ModeToggle from "./modeToggle";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-18 border-b border-zinc-300  py-2  ">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}

        <div className="flex items-center justify-between h-full gap-1 px-1 mx-0 max-w-7xl">
          <img
            className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
            src="/facebook.png"
            alt="facebook image"
          />
          <img
            className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
            src="/instagram.png"
            alt="instagram image"
          />
          <img
            className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
            src="tiktok.png"
            alt="tiktok image"
          />

          <img
            className="h-[2.2rem] w-[2.2rem] rounded-full object-cover object-center"
            src="youtube.png"
            alt="youtube image"
          />
        </div>

        <Link href={"/"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Just Hayley
          </p>
        </Link>

        <Link href={"/merchandise"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            商品 merchandise
          </p>
        </Link>

        <Link href={"/myBlog"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            my blog for life
          </p>
        </Link>

        <Link href={"/aboutMe"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            about me
          </p>
        </Link>

        <Link href={"/mailchimp"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            订阅 mailchimp
          </p>
        </Link>

        <Link href={"/login"} className="flex items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            登录 login
          </p>
        </Link>

        <ModeToggle />

        {/* <div className="flex items-center">
          <ThemeToggle className="mr-4" />
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
        </div> */}
      </div>
      {/* <ScrollingText></ScrollingText> */}
      {/* <PageLayout></PageLayout> */}
    </div>
  );
};

export default Navbar;
