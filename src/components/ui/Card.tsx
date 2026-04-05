import React from "react";

interface CardProps {
  children?: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#333e1d]"
      data-uniq-id="ceb9e168-ed6b-4a01-bde1-7ed25a7b37fe"
    >
      <div
        className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#141414]"
        data-uniq-id="48fcbf4f-e2e2-4d51-880f-d76fc511710a"
      />
      <div
        className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"
        data-uniq-id="2c4b19ba-7ad3-4b91-b0ed-351900218e9a"
      />
      {children}
    </div>
  );
};

export default Card;
