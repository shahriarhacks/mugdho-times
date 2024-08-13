"use client";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";

export default function HeaderSearch() {
  const [search, setSearch] = React.useState("");
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="">
        <span className="relative">
          <IoMdSearch
            size={25}
            color="#c1c0c8"
            className="absolute top-2 left-2"
          />
          <Input
            type="text"
            placeholder="Search Blog......"
            className="pl-8 w-[250px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </span>
      </div>
    </form>
  );
}
