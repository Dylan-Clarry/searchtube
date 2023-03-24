"use client";

import { useState } from "react";
import getYTSearchResults from "@/lib/youtubeSearch";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const key = getYTSearchResults();
console.log("key", process.env.YOUTUBE_API_KEY);

export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div className="mt-4">
            <NavBar />
            <div className="h-full grid grid-cols-6">
                <SideBar />
                <main className="col-span-5 px-6">{children}</main>
            </div>
            <SearchBar />
        </div>
    );
}

function SearchBar() {
    return (
        <div>
            <input
                className="ml-2 p-1 rounded bg-neutral-900 border border-neutral-700"
                type="text"
            />
            <button className="ml-2 p-1 rounded border border-neutral-700">
                Search
            </button>
        </div>
    );
}

function VideoGrid() {
    return <div className="mt-2"></div>;
}
