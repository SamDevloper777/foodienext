import { IoList } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { HiBeaker } from "react-icons/hi2";
import { FaBookOpen } from "react-icons/fa6";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='w-1/12 h-screen flex flex-col gap-8 items-center justify-center bg-slate-200'>
         <Link href="/insert-recipe" title="insert new dish">
            <IoList size="1.2em" />
         </Link>
          <Link href="/insert-category" title="insert new category">
            <FaHeart size="1.2em" />
          </Link>
          <Link  href="/" title="home">
            <IoHomeOutline size="1.2em" />
          </Link>
          <Link href="/manage-recipe" title="Manage Category">
            <HiBeaker size="1.2em" />
          </Link>
          <Link href="" title="Manage Dish">
          <FaBookOpen size="1.2em" />
          </Link>
        </div>
  )
}

export default Sidebar