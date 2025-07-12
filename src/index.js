import { youtubedl } from '@distube/ytdl-core';
import scraper from 'get-twitter-media';
import { tiktokdl, facebookdl, instagramdl } from '@bochilteam/scraper';

// Destructure CommonJS module manually
const { twitterdl } = scraper;

export async function downloadMedia(url) {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return await youtubedl(url);
  } else if (url.includes('twitter.com') || url.includes('x.com')) {
    return await twitterdl(url);
  } else if (url.includes('tiktok.com')) {
    return await tiktokdl(url);
  } else if (url.includes('facebook.com')) {
    return await facebookdl(url);
  } else if (url.includes('instagram.com')) {
    return await instagramdl(url);
  } else {
    throw new Error('❌ Unsupported platform');
  }
}
