"use client";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-colors duration-300">
      <div className="loader"></div>

      {/* Loader CSS */}
      <style jsx>{`
        .loader {
          display: inline-flex;
          gap: 10px;
        }
        .loader:before,
        .loader:after {
          content: "";
          height: 35px;
          aspect-ratio: 1;
          border-radius: 50%;
          /* White part of the eye in dark mode, light gray in light mode */
          background: 
            radial-gradient(farthest-side, #f97316 95%, #0000) 50%/10px 10px no-repeat,
            var(--eye-bg, #fff);
          background-repeat: no-repeat;
          animation: l10 1.5s infinite alternate;
          border: 2px solid rgba(249, 115, 22, 0.2);
        }
        .loader:after {
          --s: -1;
        }

        :global(.dark) .loader:before,
        :global(.dark) .loader:after {
          --eye-bg: #fff;
        }

        :global(.light) .loader:before,
        :global(.light) .loader:after {
          --eye-bg: #e5e7eb;
        }

        @keyframes l10 {
          0%,
          20% {
            transform: scaleX(var(--s, 1)) rotate(0deg);
            clip-path: inset(0);
          }
          60%,
          100% {
            transform: scaleX(var(--s, 1)) rotate(30deg);
            clip-path: inset(40% 0 0);
          }
        }
      `}</style>
    </div>
  );
}

