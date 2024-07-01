import React from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface FormErrorProps {
  message:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

export default function FormError({ message }: FormErrorProps) {
  return (
    <span className="flex space-x-1.5 items-center">
      <span className="text-xs">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3506_21355)">
            <path
              d="M5.24004 1.33301H10.76L14.6667 5.23967V10.7597L10.76 14.6663H5.24004L1.33337 10.7597V5.23967L5.24004 1.33301Z"
              stroke="#E8093F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 5.33301V7.99967"
              stroke="#E8093F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10.667H8.00667"
              stroke="#E8093F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3506_21355">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span className="text-[13px] text-[#E8093f]">{message as string}</span>
    </span>
  );
}
