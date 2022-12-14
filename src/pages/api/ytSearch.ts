import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db/client";
import { env } from "../../env/server.mjs";
import { default as youtubeSearch } from 'youtube-search';

const ytSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const opts: youtubeSearch.YouTubeSearchOptions = {
        maxResults: 10,
        key: env.YOUTUBE_API_KEY,
    };

    youtubeSearch("mainecoon", opts, (err: Error, result?: youtubeSearch.YouTubeSearchOptions[]) => {
        if(err) return console.error(err);
        console.dir(result);
        res.status(200).json(result);
    });
};

export default ytSearch;
