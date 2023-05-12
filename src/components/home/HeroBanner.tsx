import React, { useEffect } from 'react';

const HeroBanner = () => {
  useEffect(() => {
    const youtubeScript = document.getElementById('youtube-script');
    if (!youtubeScript) {
      // Create script element and set its source
      const scriptTag = document.createElement('script');
      scriptTag.id = 'youtube-script';
      scriptTag.src = 'https://www.youtube.com/iframe_api';
      // Insert script tag into the DOM
      const bodyElement = document.getElementsByTagName('body')[0];
      bodyElement.appendChild(scriptTag);
    }
    // Create YouTube player after API code downloads
    let player;
    const onYouTubeIframeAPIReady = () => {
      player = new YT.Player('player', {
        videoId: 'sRlyruPl64Q',
        playerVars: {
          playlist: 'sRlyruPl64Q',
          loop: 1,
          autoplay: 1,
          controls: 0,
          autohide: 1,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    // Add onYouTubeIframeAPIReady to window object
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    let youTubeTarget;
    const onPlayerReady = ({ target }) => {
      youTubeTarget = target;
      target.setVolume(0);
      target.playVideo();
    };

    let done = false;
    const onPlayerStateChange = (event): void => {
      if (event.data === YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 400000);
        done = true;
      }
    };

    const stopVideo = (): void => {
      player.stopVideo();
    };

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <>
      <div className='absolute top-0 left-0 w-screen h-[200svh] z-10 touch-none select-none bg-gradient-to-b from-transparent via-black/100 to-black/5' />
      <div className='relative w-screen h-[100svh] z-0 touch-none select-none'>
        <div className='absolute top-0 left-0 w-[100svw] h-[100svh] overflow-hidden -z-50'>
          <div className='relative w-[300%] h-[115%] left-[-100%] overflow-hidden -z-50' id='player' />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
