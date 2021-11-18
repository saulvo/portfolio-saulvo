import axios from 'axios';
const { stringify } = require('query-string');

const baseURL = 'https://www.googleapis.com/youtube/v3';

export const getPlaylistById = async (playlistId: string) => {
  const params = {
    playlistId: playlistId,
    maxResults: 10,
    part: 'snippet',
    key: process.env.NEXT_PUBLIC_API_KEY,
  };
  const { data } = await axios.get(`${baseURL}/playlistItems?${stringify(params)}`);
  const { items = [], pageInfo } = data;
  return {
    rows: items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      photo: item.snippet.thumbnails.high.url,
    })),
    count: pageInfo?.totalResults || 0,
  };
};
