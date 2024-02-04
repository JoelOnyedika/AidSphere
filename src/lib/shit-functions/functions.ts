export function isValidYouTubeUrl(url: string): boolean {
    const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?.*v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
    return youtubeUrlRegex.test(url);
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