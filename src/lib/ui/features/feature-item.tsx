import { Feature } from "@src/types"
import Link from "../components/navigation/link"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function FeatureItem(props: unknown) {

  const { id, icon, description, relationship, title } = props as Feature
  return (
    <div className="flex flex-col gap-6 items-start justify-between border-2 border-evalart-blue/20 p-6 sm:p-8 rounded-md shadow-sm" key={id}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center justify-start">
          <Icon icon={icon} height={24} />
          <h3 className=" text-lg">
            {title}
          </h3>
        </div>
        <p className="text-sm">
          {description}
        </p>
      </div>
      <Link button href={relationship} target="_blank">
        See more
      </Link>
    </div>
  )
}