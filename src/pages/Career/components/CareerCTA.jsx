// src/pages/Career/components/CareerCTA.jsx

import { Link } from "react-router-dom";

function HandshakeIcon() {
  return (
    <svg
      className="w-16 h-16 text-primary-blue"
      fill="none"
      viewBox="0 0 64 64"
      strokeWidth={1.5}
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simple handshake SVG representation */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 28l-6 6 12 12 4-4M42 28l6 6-12 12-4-4M26 24l-4-4-8 8 4 4M38 24l4-4 8 8-4 4M26 24l6 4 6-4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 20l6 4h16l6-4M16 22l-4 4 16 16 4-4M48 22l4 4-16 16-4-4"
      />
    </svg>
  );
}

export function CareerCTA({ text, buttonLabel, buttonHref }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Handshake icon */}
          <div className="text-primary-blue">
            <svg
              viewBox="0 0 80 60"
              className="w-20 h-16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left hand */}
              <path
                d="M8 30 L16 22 L24 28 L30 24 L36 28"
                stroke="#2A8CD5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M8 30 L4 36 L16 46 L24 40"
                stroke="#2A8CD5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Right hand */}
              <path
                d="M72 30 L64 22 L56 28 L50 24 L44 28"
                stroke="#2A8CD5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M72 30 L76 36 L64 46 L56 40"
                stroke="#2A8CD5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Clasped hands center */}
              <path
                d="M36 28 L40 32 L44 28"
                stroke="#2A8CD5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M24 40 L32 46 L40 42 L48 46 L56 40"
                stroke="#2A8CD5"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M30 24 L34 30 L40 32 L46 30 L50 24"
                stroke="#2A8CD5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Text */}
          <p className="text-md md:text-lg text-foreground leading-relaxed font-sans whitespace-pre-line max-w-lg">
            {text}
          </p>

          {/* Button */}
          <Link
            to={buttonHref}
            className="inline-flex items-center justify-center px-8 py-2.5 border border-navy rounded-md text-md md:text-lg font-semibold text-navy hover:bg-navy hover:text-white transition-colors font-display"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
