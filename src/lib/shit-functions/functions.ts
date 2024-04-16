// export function isValidYouTubeUrl(url: string): boolean {
//   const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?.*v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
//   return youtubeUrlRegex.test(url);
// }

function getYouTubeVideoId(url: string) {
  const regex = /[?&]v=([^?&]+)/;
  const match = url.match(regex);
  return match && match[1];
}

export async function isValidYouTubeUrl(url: string) {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) {
      return false; // Invalid YouTube URL
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=id&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.items.length > 0;
  } catch (error) {
      console.error('Error checking YouTube video:', error);
      return false;
  }
}

export function extractVideoId(url: string) {
    // Regular expression to match YouTube video ID from various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2]; // Extracted video ID
    } else {
      return null; // Return null if video ID is not found
    }
  }

export function getFileExtension(filename) {
    return filename.split('.').pop().toLowerCase();
}