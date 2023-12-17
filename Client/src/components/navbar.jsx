import React, { useState } from "react";

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Product",
    link: "/",
  },
  {
    name: "Audit",
    link: "/",
  },
  {
    name: "More",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];

function navbar() {
  return (
    <>
      <nav className=" sticky top-0 z-50">
        <div className="bg-blue-500 shadow-xl flex flex-row  items-center p-6">
          {/** Logo */}
          <span className="font-ocr-a-extended text-3xl font-bold drop-shadow-xl ml-20 ">
            Hash Shield
          </span>
          {/** Nav Items */}
          <ul className="flex text-xl ml-auto font-semibold rounded-2xl space-x-16 bg-gradient-to-l from-blue-500 to-blue-400">
            {Links.map((link) => (
              <li
                href="/"
                className="rounded-2xl items-center p-2 hover:shadow-md hover:shadow-gray-700"
              >
                {link.name}
              </li>
            ))}
          </ul>
          <button className="p-3 mr-4 ml-auto border-black border-2 font-ocr-a-extended rounded-lg shadow-3xl inline-flex hover:bg-blue-300 ">
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  );
}

export default navbar;
