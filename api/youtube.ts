import axios from 'axios';
const { stringify } = require('query-string');

const baseURL = 'https://www.googleapis.com/youtube/v3';

export const getPlaylistById = async (playlistId: string) => {
  console.log('key', process.env.NEXT_PUBLIC_API_KEY);
  const params = {
    playlistId: playlistId,
    maxResults: 50,
    part: 'snippet',
    key: process.env.NEXT_PUBLIC_API_KEY,
  };
  const { data } = await axios.get(`${baseURL}/playlistItems?${stringify(params)}`);
  const { items = [], pageInfo } = data;
  return {
    rows: items,
    count: pageInfo?.totalResults || 0,
  };
};
