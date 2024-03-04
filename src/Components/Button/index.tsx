import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
    children: any;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
    onClick: (...args: any) => void;
}

export default function Button({
    children,
    className = '',
    startIcon = null,
    endIcon = null,
    disabled,
    type = 'button',
    onClick,
  }: PropsWithChildren<ButtonProps>): JSX.Element {
    return (
      <button
        onClick={onClick}
        type={type}
        className={twMerge(
          'flex flex-row items-center justify-center gap-x-2 text-[15px] h-fit leading-[24px] md:leading-[26px] py-2 px-4 md:py-[8px] md:px-[22px] rounded-[4px] font-medium',
          className,
          disabled ? 'opacity-50' : 'opacity-100'
        )}
      >
        {startIcon}
        {children}
        {endIcon}
      </button>
    );
  }