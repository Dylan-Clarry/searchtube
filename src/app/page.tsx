"use client";

import { useState } from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function Home() {
    const { data, error } = useSWR("/api/youtubesearch", fetcher);
    console.log("data", data, error);

    const [searchValue, setSearchValue] = useState("");
    return (
        <div className="mt-4">
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
