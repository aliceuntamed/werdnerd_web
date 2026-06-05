import "./WerdNerdMark.css";

type WerdNerdMarkProps = {
  className?: string;
};

export function WerdNerdMark({ className }: WerdNerdMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="werdnerd-mark__seal" cx="32" cy="32" r="25" />
      <circle className="werdnerd-mark__inner-ring" cx="32" cy="32" r="18.5" />
      <path
        className="werdnerd-mark__page werdnerd-mark__page--left"
        d="M15.5 37.5c5.3-2.6 10.8-2.1 16.5 1.4v11.2c-5.5-3.2-11-3.7-16.5-1.4V37.5Z"
      />
      <path
        className="werdnerd-mark__page werdnerd-mark__page--right"
        d="M48.5 37.5c-5.3-2.6-10.8-2.1-16.5 1.4v11.2c5.5-3.2 11-3.7 16.5-1.4V37.5Z"
      />
      <path className="werdnerd-mark__spine" d="M32 38.8v11.3" />
      <path
        className="werdnerd-mark__glyph"
        d="M19.5 18.5 24 32l4.5-10.2L32 32l3.5-10.2L40 32l4.5-13.5"
      />
      <path
        className="werdnerd-mark__glyph"
        d="M23.7 32.2h5.2M35.1 32.2h5.2"
      />
      <path className="werdnerd-mark__spark" d="M32 9.5v4.2M32 50.3v4.2M9.5 32h4.2M50.3 32h4.2" />
      <path className="werdnerd-mark__accent" d="M45.3 14.8 46.4 18l3.2 1.1-3.2 1.1-1.1 3.2-1.1-3.2-3.2-1.1 3.2-1.1 1.1-3.2Z" />
    </svg>
  );
}
