import { HTMLProps } from "react";
import HeadNavBarItem from "./head-navbar-item";

export default function HeadNavBarLink(props: HTMLProps<HTMLAnchorElement>) {

  const { children } = props;

  return (
    <a {...props}>
      <HeadNavBarItem>
        {children}
      </HeadNavBarItem>
    </a>
  )
}