"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Mail, User, LayoutDashboard, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function AccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Link href={""} className="flex-center gap-1 dark:text-yellow-300">
          <FaRegUser size={20} />
          <span>Account</span>
          <MdKeyboardArrowDown size={20} />
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem className="dark:text-yellow-300 ">
          <Button className="w-full">
            <Link href={"/login"} className="flex-center  text-white">
              <Mail className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/profile"} className="dark:text-yellow-300 flex-center">
            <User className="mr-2 h-4 w-4" /> My Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={"/dashboard"}
            className="dark:text-yellow-300 flex-center"
          >
            <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="dark:text-yellow-300 ">
          <Button variant="destructive" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
