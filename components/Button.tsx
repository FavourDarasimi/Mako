"use client";

type ButtonProps = {
  onClick?: () => void;
  children: string;
  type: string;
  className?: string;
};

const Button = ({ onClick, children, type, className }: ButtonProps) => {
  if (type == "primary") {
    return (
      <button
        className={`bg-[#e05d44] hover:scale-105 duration-300 cursor-pointer py-3 px-6 rounded-lg text-white ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else if (type == "outline") {
    return (
      <button
        className={`border border-[#868686] hover:scale-105 duration-300 cursor-pointer py-3 px-6 rounded-lg  ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
