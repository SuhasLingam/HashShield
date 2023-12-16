import React from "react";

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
      <nav>
        <div className="bg-blue-500 shadow-xl flex flex-row items-center p-6">
          {/** Logo */}
          <span className="font-ocr-a-extended text-3xl font-bold drop-shadow-xl ml-20">
            Hash Shield
          </span>
          {/** Nav Items */}
          <ul className="flex text-2xl ml-auto font-serif rounded-full  space-x-20 bg-gradient-to-l from-blue-500 to-blue-400">
            {Links.map((link) => (
              <li
                href="/"
                className="rounded-full items-center p-2 hover:shadow-md hover:shadow-gray-700"
              >
                {link.name}
              </li>
            ))}
          </ul>
          <button className="p-3.5 ml-auto border-black border-3 rounded-xl shadow-lg inline-flex hover:bg-blue-300 shadow-slate-600">
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  );
}

export default navbar;
