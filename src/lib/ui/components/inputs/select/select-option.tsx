import { HTMLProps } from "react";

export default function SelectOption(props: HTMLProps<HTMLOptionElement>) {
  const { children } = props;
  return (
    <option className="bg-evalart-blue font-semibold cursor-pointer" {...props}>
      {children}
    </option>
  )
}