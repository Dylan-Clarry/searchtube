export default async function getYTSearchResults() {
    const apiKey = process.env.YOUTUBE_API_KEY;
    console.log("key", apiKey);
    return apiKey;
}
