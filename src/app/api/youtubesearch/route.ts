export async function GET(request: Request) {
    const apiKey = process.env.YOUTUBE_API_KEY
    return new Response("Hello, Next.js!");
}
