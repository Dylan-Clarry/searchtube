import { type NextApiRequest, type NextApiResponse } from "next";
import { default as youtubeSearch } from "youtube-search";
import { YouTubeSearchOptions } from "youtube-search";

const rubber = {
    duck: console.log,
};

const apiKey = process.env.YOUTUBE_API_KEY;

export async function GET(req: NextApiRequest, res: NextApiResponse<YTSearchResult>) {
    const searchTerm = "mainecoons (adorable)";
    const opts: YouTubeSearchOptions = {
        maxResults: 10,
        key: apiKey,
    };
    youtubeSearch(
        searchTerm,
        opts,
        (err: Error, result?: youtubeSearch.YouTubeSearchOptions[]) => {
            if (err) return console.error(err);
            console.dir(result);
            res.status(200).json(result);
        }
    );
    rubber.duck("key", apiKey);
    return res.status(200).json({ err: "no" });
}
