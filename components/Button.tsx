"use client";

import { useBooking } from "./BookingProvider";

type ButtonProps = {
  onClick?: () => void;
  children: string;
  type: string;
  className?: string;
  openBooking?: boolean;
};

const Button = ({
  onClick,
  children,
  type,
  className,
  openBooking,
}: ButtonProps) => {
  const { openBooking: openBookingModal } = useBooking();

  const handleClick = () => {
    if (openBooking) {
      openBookingModal();
    } else if (onClick) {
      onClick();
    }
  };

  if (type === "primary") {
    return (
      <button
        className={`bg-[#e05d44] hover:scale-105 duration-300 cursor-pointer py-3 px-6 rounded-lg text-white ${className}`}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  } else if (type === "outline") {
    return (
      <button
        className={`border border-[#868686] hover:scale-105 duration-300 cursor-pointer py-3 px-6 rounded-lg ${className}`}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
