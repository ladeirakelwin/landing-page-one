import Image from "next/image";
import React from 'react'
import FooterMenu from "./FooterMenu";
import google from "@images/google.webp";
import twitter from "@images/twitter.webp";
import facebook from "@images/facebook.webp";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full px-12  sm:px-24 lg:px-36">
        <div className="flex flex-col md:flex-row gap-10 items-center sm:justify-between w-full pb-24">
          <p className="text-yellow-500 font-bold text-base">ARShakir</p>
          <ul className="flex gap-6">
            <li>
              <Image src={google} alt="google icon"></Image>
            </li>
            <li>
              <Image src={twitter} alt="twitter icon" />
            </li>
            <li>
              <Image src={facebook} alt="facebook icon" />
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 pb-24 gap-10">
          {["First", "Second", "Third", "Fourth"].map((item, index) => {
            return <FooterMenu title={item} key={index}></FooterMenu>;
          })}
        </div>
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start sm:justify-center text-gray-300 ">
          <p className="text-xs md:text-base">&copy; Copyrights 2021</p>
          <p className="text-xs md:text-base">Privacy policy</p>
          <p className="text-xs md:text-base">Terms of service</p>
        </div>
      </footer>
  )
}
