"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <header className="fixed top-0 left-0 w-full p-4 bg-black bg-opacity-50 z-[20]">
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/githubIcon.png" alt="GitHub Icon" className="w-8 h-8 mr-2" />
            <h1 className="text-white text-2xl font-bold">vdsilveira</h1>
          </div>
          <div>
            <Link href="https://github.com/vdsilveira?tab=repositories" className="text-white mr-4">Projects</Link>
            <Link href="https://www.linkedin.com/in/vdsilveira/" className="text-white">Contact</Link>
          </div>
        </nav>
      </header>

      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Hello! I'm Vinicius,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Blockchain Developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Welcome to my GitHub, where I share my projects and experiences in developing innovative solutions in web3.
          </p>
          <Link href="https://github.com/vdsilveira?tab=repositories">
            <div className="mt-4 px-5 py-3 bg-blue-500 hover:bg-blue-400 text-white text-lg font-semibold rounded-[20px] transition max-w-[200px]">
              Explore My Projects
            </div>
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="Image of a horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="Image of a cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="Image of trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="Image of stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
