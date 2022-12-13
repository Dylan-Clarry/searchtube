import { signIn, signOut, useSession } from 'next-auth/react';

const LoginPanel = () => {
    const { data: session, status } = useSession();

    if(status === "loading") {
        return <main className="flex flex-col items-center pt-4">Loading...</main>
    }

    return (
        <>
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
        </>
    );
};

const Home = () => {
    return (
        <main className="flex flex-col items-center">
            <h1 className="text-3xl pt-4">SearchTube</h1>
            <p>A better way to consume content</p>
            <LoginPanel />
        </main>
    );
};

export default Home;
