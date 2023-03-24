"use client";

import { useState } from "react";
import getYTSearchResults from "@/lib/youtubeSearch";

const key = getYTSearchResults();
console.log("key", process.env.YOUTUBE_API_KEY);

export default function Home() {
    return (
        <div className="mt-4">
            <SearchBar />
        </div>
    );
}

function SearchBar() {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div>
            <input
                className="ml-2 p-1 rounded bg-neutral-900 border border-neutral-700"
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
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
