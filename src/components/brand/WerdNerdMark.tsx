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
      <path
        className="werdnerd-mark__lens"
        d="M7.9 37.2c.7-4.8 4.6-7.9 10-7.9h8.2c4.7 0 8 3.8 7.2 8.7l-.8 4.4c-1 6.2-6.5 10-13.3 9.5C11.9 51.4 7 46.4 7.2 39.6c0-.8.3-1.6.7-2.4Z"
      />
      <path
        className="werdnerd-mark__lens"
        d="M56.1 37.2c-.7-4.8-4.6-7.9-10-7.9h-8.2c-4.7 0-8 3.8-7.2 8.7l.8 4.4c1 6.2 6.5 10 13.3 9.5 7.3-.5 12.2-5.5 12-12.3 0-.8-.3-1.6-.7-2.4Z"
      />
      <path
        className="werdnerd-mark__frame"
        d="M8.1 36.9c.8-4.6 4.6-7.6 9.8-7.6h8.2c4.7 0 8 3.8 7.2 8.7l-.8 4.4c-1 6.2-6.5 10-13.3 9.5C11.9 51.4 7 46.4 7.2 39.6c0-.9.3-1.8.9-2.7Zm47.8 0c-.8-4.6-4.6-7.6-9.8-7.6h-8.2c-4.7 0-8 3.8-7.2 8.7l.8 4.4c1 6.2 6.5 10 13.3 9.5 7.3-.5 12.2-5.5 12-12.3 0-.9-.3-1.8-.9-2.7ZM29.8 36.3c1.5-1.4 2.9-1.4 4.4 0"
      />
      <path
        className="werdnerd-mark__brim-shadow"
        d="M13.5 31.8c8.1-5 28.9-5 37 0 1.7 1 1.4 3.7-.5 4.4-9.9 3.5-26.1 3.5-36 0-1.9-.7-2.2-3.4-.5-4.4Z"
      />
      <path
        className="werdnerd-mark__crown"
        d="M21.1 13.6c.2-1.4 1.2-2.5 2.6-2.9 5.5-1.5 11.1-1.5 16.6 0 1.4.4 2.4 1.5 2.6 2.9l2.6 15.5c-7.2 2.9-19.8 2.9-27 0l2.6-15.5Z"
      />
      <path
        className="werdnerd-mark__band"
        d="M19.7 24.3c6.8 2.5 17.8 2.5 24.6 0l.9 5.4c-7.2 2.8-19.2 2.8-26.4 0l.9-5.4Z"
      />
      <path
        className="werdnerd-mark__brim"
        d="M13.5 30.6c8.1-5 28.9-5 37 0 1.7 1 1.4 3.7-.5 4.4-9.9 3.5-26.1 3.5-36 0-1.9-.7-2.2-3.4-.5-4.4Z"
      />
      <path
        className="werdnerd-mark__spark"
        d="M49.7 12.6 51 16l3.4 1.3L51 18.6 49.7 22l-1.3-3.4-3.4-1.3 3.4-1.3 1.3-3.4Z"
      />
    </svg>
  );
}
