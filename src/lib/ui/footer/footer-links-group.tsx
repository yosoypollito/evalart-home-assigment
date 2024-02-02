import { Link as LinkType } from "@src/types";
import Link from "../components/navigation/link";
import { useId } from "react";

export default function FooterLinksGroups({ title, links }: { title: string; links: LinkType[] }) {

  return (
    <div className="flex flex-col gap-2" key={title}>
      <h3 className="text-base">
        {title}
      </h3>
      {links.map(link => {
        return (
          <Link href={link.href} target="_blank" className="text-sm" key={useId()}>
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}