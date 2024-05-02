import Link from "next/link";

export default function Home() {
  return (
    <div className="main-page">
      <h1>Halaman utama belajar next js v1</h1>

      <br />
      <Link
        href="/latians"
        target="_blank"
        className="w-full bg-[tomato] text-white m-5 rounded-md p-2"
      >
        - latianssssz
      </Link>
      <Link
        href="/linktrees"
        target="_blank"
        className="w-full bg-[tomato] text-white m-5 rounded-md p-2"
      >
        - mau bikin linktree abal abal :)
      </Link>
      <Link
        href="https://alfidi.vercel.app/"
        target="_blank"
        className="w-full bg-[tomato] text-white m-5 rounded-md p-2"
      >
        - web vercel gw 😁
      </Link>
    </div>
  );
}
