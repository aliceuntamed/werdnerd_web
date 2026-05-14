import { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  src?: string;
  opacity?: number;
}

export default function VideoBackground({
  src = "/homepage-vidbg.mp4",
  opacity = 0.55,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: 0, pointerEvents: "none" }}
      aria-hidden
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[#080808]/50" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,100,200,0.08)_0%,transparent_60%)]" />
    </div>
  );
}
