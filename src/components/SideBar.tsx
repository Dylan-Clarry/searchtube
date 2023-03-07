"use client";

import Link from "next/link";

export default function SideBar() {
    return (
        <aside className="col-span-1 h-full border-r border-neutral-800">
            <nav className="ml-4 mt-4">
                <ul>
                    <li>Home</li>
                    <li>Subscriptions</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </aside> 
    );
}

// <nav className="border-r border-neutral-800 pr-4 pt-4 h-full">
