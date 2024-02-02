import { twMerge } from "tailwind-merge";
import { HTMLProps } from "react";

interface NavBarItem extends HTMLProps<HTMLAnchorElement> {
  active?: boolean;
}

export default function NavBarItem(props: NavBarItem) {

  const { children, active } = props;

  return (
    <a className={twMerge("font-semibold py-0.5 px-2 hover:bg-evalart-blue hover:text-white rounded-md transition-all capitalize",
      active && "bg-evalart-blue text-white")} {...props}>
      {children}
    </a>
  )
}