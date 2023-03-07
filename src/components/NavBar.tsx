"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <header className="h-12 fixed z-10 w-full top-0 flex items-center border-b border-neutral-800">
      <nav className="px-4 flex w-full justify-between">
        <div className="flex flex-wrap">
          <HamburgerIcon />
          <Link className="ml-2" href="/">Logo</Link>
        </div>
        <ProfileIcon />
      </nav>
    </header>
  );
}

function HamburgerIcon() {
  return (
    <div className="space-y-1 mt-1">
      <div className="w-5 h-0.5 bg-neutral-100"></div>
      <div className="w-5 h-0.5 bg-neutral-100"></div>
      <div className="w-5 h-0.5 bg-neutral-100"></div>
    </div>
  );
}

function ProfileIcon() {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
