interface BenefitsItem {
  title: string
  description: string
}
export default function BenefitsItem(props: BenefitsItem) {

  const { title, description } = props;
  return (
    <div className="col-span-1 text-center flex flex-col gap-4 w-full bg-gray-100 p-8 border border-gray-300/50">
      <h3 className="text-xl font-bold text-evalart-blue">
        {title}
      </h3>
      <p className="text-sm">
        {description}
      </p>
    </div>
  )
}