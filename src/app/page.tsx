'use client'

import { StandardHeading } from "./utils/headings";
import { SkillBorder } from "./utils/borders";
import { Generator } from "./utils/generator";
import Link from 'next/link';


export default function Home() {
  const heading = StandardHeading("Home Page");

  return (
    <div className="text-white">
      <section className="flex justify-center mt-20">
        <h1 className="font-semibold lg:text-xl md:text-lg sm:text-md text-sm">
          👋, my name is Jeff and I am a professional
        </h1>
      </section>
      <section className="mt-2 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-5 xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl text-4xl font-extrabold">
        <h1 className="flex justify-center">
          Game Developer
          <br />
        </h1>
        <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-5 flex justify-center fill-transparent text-primary-dark text-nowrap">
          & Software Engineer
        </p>
      </section>

      <section className="mt-2 flex justify-center">
        <h1 className="font-semibold lg:text-xl md:text-lg sm:text-md text-sm">
          Orange County, California
        </h1>
      </section>

      <section className="flex justify-center mt-20">
        <button className=" bg-primary-light rounded-md p-2 pl-5 pr-5 font-bold hover:scale-110 active:scale-90 text-xl">
          <a href="mailto:jefflamb9@gmail.com">
            Contact Me
          </a>
        </button>
      </section>
    </div>
  );
}
