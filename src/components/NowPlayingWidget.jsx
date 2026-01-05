import { useEffect, useState } from "react";
import NowPlayingVinyl from "./NowPlayingVinyl";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function NowPlayingWidget() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!API_BASE_URL) {
      console.error("VITE_API_BASE_URL is not defined");
      return;
    }

    fetch(`${API_BASE_URL}/api/spotify/now-playing`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <div className="relative w-[360px] h-[360px] flex items-center justify-center">
      
      {/* Soft background focus */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[200, 260, 320].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-slate-700/20 blur-2xl"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* Vinyl disc */}
      <div className="absolute z-10">
        <NowPlayingVinyl
          isPlaying={data.playing}
          size={280}
        />
      </div>

      {/* Stepped / pixel album art */}
      <div className="absolute z-20 flex items-center justify-center">
        {[0, 8, 16].map((offset, i) => (
          <div
            key={i}
            className="absolute bg-slate-600/40"
            style={{
              width: 96 + offset,
              height: 96 + offset,
            }}
          />
        ))}

        <img
          src={data.image}
          alt={data.track}
          className="relative w-24 h-24 object-cover"
        />
      </div>

      {/* Track info */}
      <div className="absolute bottom-6 z-30 text-center pointer-events-none">
        <div className="text-sm font-semibold tracking-wide max-w-[240px] truncate text-white/90">
          {data.track}
        </div>
        <div className="text-xs text-slate-400 max-w-[240px] truncate">
          {data.artist}
        </div>
      </div>
    </div>
  );
}
