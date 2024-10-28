// components/Navbar.jsx
'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./Theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



const Navbar = () => {


  const [progress  , setProgress] = useState(0)

  const pathname = usePathname()

  useEffect(()=>{

    setProgress(30)

    setTimeout(() => {
      setProgress(70)
    }, 100);


    setTimeout(() => {
      setProgress(100)
    }, 400);
  },[pathname])


  useEffect(()=>{
    setTimeout(()=>{
      setProgress(0)
    },500)
  },[])


  return (
    <nav className="shadow-md bg-background/50 sticky top-0 backdrop-blur border-b z-10">

      <LoadingBar
      color="#A020F0"
      progress={progress}
      onLoaderFinished={()=>setProgress(0)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          <div className="flex items-center">
            <Link href={"/"}>
              <span className="text-xl font-bold">Albie's Blog</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 mt-2">
            <div className="space-x-4 mt-2">
              {/* Adding hover styles for the links */}
              <Link href={"/"} className=" hover:font-bold  transition-all duration-300">Home</Link>
              <Link href={"/about"} className=" hover:font-bold transition-all duration-300">About</Link>
              <Link href={"/contact"} className=" hover:font-bold transition-all duration-300">Contact</Link>
              <Link href={"/blog"} className=" hover:font-bold transition-all duration-300">Blog</Link>
            </div>

            <div>
              <Button className="mx-1" variant="outline">
                Login
              </Button>
              <Button className="mx-1" variant="outline">
                Signup
              </Button>
            </div>
              <ModeToggle />
          </div>

          <div className="-mr-2 flex md:hidden">
          <span className="mx-2 mt-3">
              <ModeToggle />
              </span>
              
            <Sheet>
              <SheetTrigger>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </SheetTrigger>
             
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold">Albie's Blog</SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col  mt-2">
                      <Link href={"/"} className="pb-2">
                        Home
                      </Link>
                      <Link href={"/"} className="pb-2">
                        About
                      </Link>
                      <Link href={"/"} className="pb-2">
                        Contact
                      </Link>
                      <Link href={"/"} className="pb-2">
                        Blog
                      </Link>
                    </div>

                    <div className="mt-2 space-x-1 ">
                      <Button className="mx-1 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="mx-1 text-xs" variant="outline">
                        Signup
                      </Button>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
