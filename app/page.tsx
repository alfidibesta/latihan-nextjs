import Link from "next/link";

export default function Home() {
  return (
    <div className="main-page">
      <h1 className="font-bold">HALAMAN UTAMA LATIAN :D</h1>
      <ul className="mt-5">
        <li className="main-list">
          <Link
            href="/latians"
            target="_blank"
            className="w-full bg-[tomato] text-white m-5 rounded-md p-2 hover:bg-blue-600"
          >
            - latianssssz next js v1
          </Link>
        </li>
        <li className="main-list">
          <Link
            href="/linktrees"
            target="_blank"
            className="w-full bg-[tomato] text-white m-5 rounded-md p-2 hover:bg-blue-600"
          >
            - mau bikin linktree abal abal :)
          </Link>
        </li>
        <li className="main-list">
          <Link
            href="https://alfidi.vercel.app/"
            target="_blank"
            className="w-full bg-[tomato] text-white m-5 rounded-md p-2 hover:bg-blue-600"
          >
            - CV *build with astro 😁
          </Link>
        </li>
      </ul>
    </div>
  );
}
