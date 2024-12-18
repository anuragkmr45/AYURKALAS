import {getSession} from '@/lib/manageSession';
import { navBarList } from "@/constants";
import Link from "next/link";

const BottomNavigation = async () => {

    const session = await getSession();

  return (
    <div className='rounded-t-md py-6 bg-gradient-to-b from-slate-100 to-white flex justify-around'>
         {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              {item?.title}
            </Link>
          ))}
          {session?.user?.email === process.env.ADMIN_EMAIL && (
            <Link
              href={"/studio"}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              Studio
            </Link>
          )}
          {session?.user && (
            <Link
              href={"/orders"}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              Orders
            </Link>
          )}
    </div>
  )
}

export default BottomNavigation