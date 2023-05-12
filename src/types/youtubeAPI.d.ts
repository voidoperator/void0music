export type PlayerType = {
  videoId: string;
  playerVars: {
    playlist: string;
    loop: number;
    autoplay: number;
    controls: number;
    autohide: number;
    playsinline: number;
    modestbranding: number;
    rel: number;
    showinfo: number;
  };
  events: {
    onReady: () => void;
    onStateChange: () => void;
  };
};

export declare global {
  interface Window {
    YT: any;
  }
}
