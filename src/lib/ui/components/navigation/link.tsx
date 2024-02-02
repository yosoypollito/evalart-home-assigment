import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

interface Link extends HTMLProps<HTMLAnchorElement> {
  button?: boolean;
  secondary?: boolean;
}

export default function Link(props: Link) {

  const { children, button, secondary, className, ...rest } = props;
  return (
    <a className={twMerge("font-semibold rounded-lg text-evalart-blue",
      secondary && "text-evalart-orange",
      button && "bg-evalart-blue text-white shadow-lg py-2 px-4 ",
      (button && secondary) && "bg-evalart-orange", className)} {...rest}>
      {children}
    </a>
  )
}