import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section className="flex flex-col flex-1 py-10 px-20 w-full ">
      <div className="flex flex-1  items-center justify-between w-full pb-20">
        <p className="flex-1 logo_font text-6xl tracking-widest leading-10 text-center text-white">
          CYBER
        </p>
        <img
          className="flex rounded-lg"
          src="https://via.placeholder.com/248.24896240234375x107"
        />
        <p className="flex-1 logo_font text-6xl tracking-widest leading-10 text-center text-white">
          SECURITY
        </p>
      </div>
      <div className="inline-flex items-center justify-start ">
        <div className="flex flex-1 space-x-2.5 items-start justify-start">
          <div className="w-6 h-0.5 bg-white my-4"> </div>
          <p className="text-xl leading-9 text-white">
            We give our clients the decisive advantage from data, machine
            learning, and artificial intelligence
          </p>
        </div>
        <div className="inline-flex flex-1 flex-col items-end justify-center">
          <Link
            href="#"
            className="inline-flex hover:border-white hover:text-white hover:bg-black transition-all duration-300 border-white items-start justify-start px-20 py-6 bg-white border text-base font-semibold leading-tight text-center uppercase"
          >
            Subscribe to our events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
