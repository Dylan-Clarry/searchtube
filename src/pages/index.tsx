import { signIn, signOut, useSession } from 'next-auth/react';

const fetchSearch = async () => {
    const res = await fetch("/api/ytSearch");
    const data = await res.json();
    console.log("data:", data);
};

fetchSearch();

const SearchBar = () => {
    return (
        <form
            className="flex"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <input
                className="px-4 py-2 rounded-md border-2 border-zinc-800 bg-neutral-900 focus:outline-none"
                type="text"
                placeholder="Search"
                minLength={2}
                maxLength={100}
            />
            <button
                type="submit"
                className="p-2 rounded-md border-2 border-zinc-800 focus:outline-none"
            >
                Submit
            </button>
        </form>
    );
};

const Home = () => {
    const { data: session, status } = useSession();

    if(status === "loading") {
        return <main className="flex flex-col items-center pt-4">Loading...</main>
    }

    return (
        <main className="flex flex-col items-center">
            <h1 className="text-3xl pt-10">SearchTube</h1>
            <p>A better way to consume content</p>
            <div className="pt-6">
                <SearchBar />
            </div>
            <div className="pt-10">
                {session ? (
                    <>
                        <p>Hi {session.user?.name}</p>
                        <button onClick={() => signOut()}>Logout</button>
                    </>
                ) : (
                    <button onClick={() => signIn("discord")}>
                        Login with Discord
                    </button>
                )}
            </div>
        </main>
    );
};

export default Home;
