import React, {useState} from 'react'
import logo from "@images/logo.webp";
import Image from "next/image";
import Button from "./Button";




export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <header className="flex flex-1 flex-wrap  w-full pb-16 spacing-width relative">
        <Image src={logo} layout="fixed" alt="logo do site"></Image>
        <button
          className="inline-block ml-auto lg:hidden w-8 h-8 rounded-lg bg-white text-yellow-500 p-1"
          onClick={() => setShow(!show)}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <ul
          id="nav"
          className={` lg:flex flex-col  my-4 lg:my-0 w-full lg:w-auto lg:flex-row lg:ml-10 lg:mr-auto gap-3 lg:items-center text-white ${
            show ? "flex" : "hidden"
          }`}
        >
          <li>About</li>
          <li>Gallery</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Benefits</li>
        </ul>
        <div
          id="buttons-nav"
          className={`lg:flex w-full lg:w-auto gap-5 flex-col lg:flex-row ${
            show ? "flex" : "hidden"
          }`}
        >
          <Button
            type="secondary"
            className="text-yellow-500 text-sm w-24 h-9 font-medium"
          >
            Sign In
          </Button>
          <Button
            type="primary"
            className="text-white text-sm w-24 h-9 font-medium"
          >
            Sign Up
          </Button>
        </div>
      </header>

  )
}
