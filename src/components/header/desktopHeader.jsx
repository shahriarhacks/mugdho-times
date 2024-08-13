import { IoTimeSharp } from "react-icons/io5";
import HeaderSearch from "./headerSearch";
import Link from "next/link";
import { ModeToggle } from "../widgets/modeToggle";

export const logo = (
  <div className="flex-start w-[150px]">
    <h2 className="">
      <IoTimeSharp size={40} color="blue" className="p-0" />
    </h2>
  </div>
);

export default function DesktopHeader() {
  return (
    <div className="bg-white dark:bg-[#0d131b]">
      <div className="container ">
        <div className="h-16 flex justify-between items-center">
          <div className="logo cursor-pointer">{logo}</div>
          <HeaderSearch />
          <nav className="mr-[20px]">
            <ul className="flex-center space-x-5">
              <li>
                <Link href={"/account"}>Account</Link>
              </li>
              <li>
                <Link href={"/posts"}>Posts</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
