import { HTMLProps } from "react"

interface Select extends HTMLProps<HTMLSelectElement> {
  onValueChange?: (value: string) => void
}
export default function Select(props: Select) {
  const { children } = props;
  return (
    <select className="py-1 px-0.5 w-fit bg-transparent border border-white text-white self-center rounded-md outline-none text-xs font-bold cursor-pointer" {...props}>
      {children}
    </select>
  )
}