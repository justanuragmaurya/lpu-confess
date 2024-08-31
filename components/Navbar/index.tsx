"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-8 py-2 backdrop-blur-sm border-[#2f2f2f] border-b-[0.5px] sticky top-0 z-10">
      <div className="">
        <h2 className="text-xl font-bold text-[#FAFAFA]">LPU Confess ❤️</h2>
      </div>
      <div className="flex lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#FAFAFA] focus:outline-none"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center text-center gap-5 text-[#FAFAFA] px-10 py-2 rounded-full`}
      >
        <h2 className="hover:text-[#dddddd] hover:scale-105 transition-all">
          <Link href="/">Home</Link>
        </h2>
        <span className="opacity-20">|</span>
        <h2 className="hover:text-[#dddddd] hover:scale-105 transition-all">
          <Link href="/confessions">See Confessions</Link>
        </h2>
        <Link href="/auth">
          <Button className="bg-red-500 px-2 hover:bg-red-800">
            Login / Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;