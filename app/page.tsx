"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative bg-white">
      <header className="fixed top-0 left-0 w-full p-4 bg-black bg-opacity-50 z-[20]">
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src={require("/public/githubIcon.png")} alt="GitHub Icon" width={32} height={32} className="w-8 h-8 mr-2" />
            <h1 className="text-white text-2xl font-bold">vdsilveira</h1>
          </div>
          <div>
            <Link href="https://github.com/vdsilveira?tab=repositories" className="text-white mr-10 font-semibold">Repositories</Link>
            <Link href="https://www.linkedin.com/in/vdsilveira/" className="text-white font-semibold">LinkedIn</Link>
          </div>
        </nav>
      </header>

      <div className="flex items-center w-full h-full">
        <Image src={require("/public/main-bg.webp")} alt="Main Background" layout="fill" objectFit="cover" quality={100} priority={true} />
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Hello! I&apos;m Vinicius,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Blockchain Developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Welcome to my GitHub, where I share my projects and experiences in developing innovative solutions in web3.
          </p>

          <Link
            href="https://github.com/vdsilveira?tab=repositories"
            className="rounded-[20px] group relative bg-transparent  hover:bg-blue-500 px-5 border border-white py-3 text-lg font-semibold text-white max-w-[250px]"
          >
            <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
            Explore My Projects
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src={require("/public/horse.png")}
          alt="Image of a horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src={require("/public/cliff.webp")} alt="Image of a cliff" width={480} height={480} />

      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src={require("/public/trees.webp")}
          alt="Image of trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src={require("/public/stars.png")}
        alt="Image of stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
