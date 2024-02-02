import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface Link extends HTMLProps<HTMLAnchorElement> {
  button: boolean;
  secondary?: boolean;
}

export default function Link(props: Link) {

  const { children, button, secondary } = props;
  return (
    <a className={twMerge("py-2 px-4 font-semibold rounded-lg shadow-lg text-evalart-blue",
      secondary && "text-evalart-orange",
      button && "bg-evalart-blue text-white",
      (button && secondary) && "bg-evalart-orange")} {...props}>
      {children}
    </a>
  )
}