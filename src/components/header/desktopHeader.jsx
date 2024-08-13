"use client";
import React, { useEffect } from "react";
import { IoTimeSharp } from "react-icons/io5";
import HeaderSearch from "./headerSearch";
import Link from "next/link";
import { ModeToggle } from "../widgets/modeToggle";

import AccountDropdown from "./accountDropdown";

export const logo = (
  <div className="flex-start w-[150px]">
    <h2 className="">
      <IoTimeSharp size={40} color="blue" className="p-0" />
    </h2>
  </div>
);

export default function DesktopHeader() {
  const [scrollPage, setScrollPage] = React.useState(false);

  useEffect(() => {
    const fixNavbar = () => {
      if (typeof window !== "undefined" && window.scrollY > 50) {
        setScrollPage(true);
      } else {
        setScrollPage(false);
      }
    };

    // Adding event listener inside useEffect ensures it runs on the client side
    window.addEventListener("scroll", fixNavbar);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", fixNavbar);
    };
  }, []);

  return (
    <div
      className={
        scrollPage
          ? "fixed top-0 transition-all duration-500 ease-in-out z-50 w-full"
          : null
      }
    >
      <div className="bg-white dark:bg-[#0d131b] container ">
        <div className="h-16 flex justify-between items-center">
          <div className="logo cursor-pointer">
            <Link href={"/"}>{logo}</Link>
          </div>
          <HeaderSearch />
          <nav className="mr-[20px]">
            <ul className="flex-center space-x-5">
              <li>
                <AccountDropdown />
                {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="top">
                      Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      Right
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu> */}
              </li>
              <li>
                <Link href={"/posts"} className="dark:text-yellow-300">
                  Posts
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className="dark:text-yellow-300">
                  Contact
                </Link>
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
