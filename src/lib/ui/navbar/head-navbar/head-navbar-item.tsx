import { HTMLProps } from "react";

export default function HeadNavBarItem(props: HTMLProps<HTMLSpanElement>) {

  const { children } = props;
  return (
    <span className="flex flex-row gap-1 items-center text-[10px] sm:text-xs font-semibold" {...props}>
      {children}
    </span>
  )
}