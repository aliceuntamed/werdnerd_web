import { useEffect, useRef, type ReactNode } from "react";

interface VideoBackgroundProps {
  src?: string;
  poster?: string;
  opacity?: number;
  children?: ReactNode;
}

export default function VideoBackground({
  src = "/ink-hero-1080.mp4",
  poster = "/ink-hero-poster.jpg",
  opacity = 0.25,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  function handleEnded() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <section className="relative bg-black">
      <div className="sticky h-screen overflow-hidden" style={{ top: 0 }} aria-hidden>
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleEnded}
        />

        <div className="absolute inset-0 bg-black" style={{ opacity }} />
      </div>

      <div className="relative z-10" style={{ marginTop: "-100vh" }}>
        {children}
      </div>
    </section>
  );
}
