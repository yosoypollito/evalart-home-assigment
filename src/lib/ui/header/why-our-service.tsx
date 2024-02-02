import Link from "../components/navigation/link";

export default function WhyOurService() {

  return (
    <header className='max-w-content-width m-auto flex'>
      <div className='flex flex-col gap-8 py-8 px-4 m-auto items-center lg:items-stretch lg:min-w-[80%]'>
        <h1 className='text-4xl font-bold text-evalart-blue'>
          Why our service?
        </h1>
        <p className='text-base max-w-lg text-center lg:text-left text-balance'>
          Experience the benefits of using Evalart for technical skills assessments. Access a wide range of customizable tests, receive real-time coding support, and gain valuable insights through detailed reports and interactive visualizations. Ensure integrity with online proctoring and fraud detection. Simplify talent selection and skill development with Evalart.
        </p>
        <div className='flex gap-2'>
          <Link button href="https://evalart.com/en/request-quote/" target='_blank' rel="noreferrer">
            Request a quote
          </Link>

          <Link button secondary href="https://evalart.com/en/free-trial/" target='_blank' rel="noreferrer">
            Free Trial
          </Link>
        </div>
      </div>
    </header>
  )
}