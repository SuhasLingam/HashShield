import React from "react";
import bgImage from "../assets/bg.png";

const body = () => {
  return (
    <>
      <main>
        <div>
          {/** LOGO */}
          <span className="absolute font-ocr-a-extended mt-12 ml-24 flex z-10 items-center justify-center bottom-20 font-bold text-white text-9xl">
            Hash <br />
            Shield
          </span>

          {/** BG */}

          <div className="absolute space-y-6 cursor-pointer text-white p-40 font-ocr-a-extended text-xl justify-center bg-[#171717] flex flex-col items-center h-screen w-[65.5%] right-0 ">
            <h3 className="text-4xl capitalize">
              Join over 1,000 satisfied clients who rely on Hacken's team of
              experts and innovative products to keep their crypto projects safe
              and secure.
            </h3>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              qui, eveniet hic iste repellendus molestiae deleniti laborum
              aperiam nisi corporis cupiditate quod quo tenetur, expedita,
              laboriosam accusantium perspiciatis molestias optio? Assumenda non
              quas fuga, officiis odit expedita beatae alias libero distinctio
              quam quod impedit earum, dicta enim hic illo deleniti deserunt
              quos! Nihil ex reprehenderit quae cum et minus provident!
            </p>
            <p>
              Join over 1,000 satisfied clients who rely on Hacken's team of
              experts and innovative products to keep their crypto projects safe
              and secure.
            </p>
            {/** Button */}
            <button className="text-blue-500 font-ocr-a-extended text-2xl border-2 p-8 rounded-3xl  border-blue-500 hover:bg-sky-800 hover:text-white">
              Connect Wallet
            </button>
          </div>
          {/** Img */}
          <img
            className="w-screen h-screen overflow-hidden"
            src={bgImage}
            alt="bg"
          />
        </div>
      </main>
    </>
  );
};

export default body;
