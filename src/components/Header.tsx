import Link from "next/link";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
import { getSession } from "@/lib/manageSession";
import { navBarList } from "@/constants";
import LoginButton from "./LoginButton";

const Header = async () => {
  const session = await getSession();

  return (
    <header className="w-full h-20 bg-white border-b-[1px] border-lightText/20 sticky top-0 z-50">
      <div className="h-full max-w-screen-xl mx-auto px-4 flex items-center justify-between gap-5 lg:gap-10">
        <Logo className="text-black" />
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-7">
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              {item?.title}
            </Link>
          ))}
          {session ? (
            <Link
              href={"/dashboard"}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              Dashboard
            </Link>
          ) : (
            <LoginButton />
          )}
        </div>
          <div className="block md:hidden">
            {session?.user?.email === process.env.ADMIN_EMAIL && (
              <Link
                href={"/studio"}
                className="text-base font-semibold hover:text-darkOrange duration-300"
              >
                Studio
              </Link>
            )}
            {session ? (
              <Link
                href={"/dashboard"}
                className="text-base text-black font-semibold hover:text-darkOrange duration-300"
              >
                Dashboard
              </Link>
            ) : (
              <LoginButton />
            )}
          </div>
      </div>
    </header>
  );
};

export default Header;
