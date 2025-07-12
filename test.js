import { downloadMedia } from './src/index.js';

// YouTube Test
downloadMedia('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .then(result => console.log('✅ YouTube:', result))
  .catch(err => console.error('❌ YouTube Error:', err));

// Facebook Test
downloadMedia('https://www.facebook.com/watch/?v=1234567890')
  .then(result => console.log('✅ Facebook:', result))
  .catch(err => console.error('❌ Facebook Error:', err));

// TikTok Test
downloadMedia('https://www.tiktok.com/@username/video/1234567890')
  .then(result => console.log('✅ TikTok:', result))
  .catch(err => console.error('❌ TikTok Error:', err));

// Instagram Test
downloadMedia('https://www.instagram.com/p/XXXXXXXXX/')
  .then(result => console.log('✅ Instagram:', result))
  .catch(err => console.error('❌ Instagram Error:', err));

// Twitter Test
downloadMedia('https://twitter.com/username/status/1234567890')
  .then(result => console.log('✅ Twitter:', result))
  .catch(err => console.error('❌ Twitter Error:', err));
