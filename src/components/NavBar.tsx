"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-10 top-0 left-0 border-b border-neutral-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/">Logo</Link>
        <span>Profile</span>
      </div>
    </nav>
  );
}
