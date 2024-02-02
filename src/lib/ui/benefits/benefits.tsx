import BenefitsItem from "./benefits-item";

export default function Benefits() {
  return (
    <section className="flex flex-col gap-10">
      <header>
        <h2 className='text-2xl font-bold text-evalart-blue text-center'>
          Benefits
        </h2>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0">
        <BenefitsItem title="Find The Best" description="Evalart's on-line evaluations can pre-filter candidates, identify the best candidates, and significantly reduce the number of candidates who require an interview (online assessments allow you to filter out up to 80% of applicants, so you can focus on the best 20%)." />
        <BenefitsItem title="Save Time"
          description="With Evalart, you can optimize your selection process and save the interviewer's valuable time. You can discard up to 80% of applicants and focus only on the most promising ones. In addition, the process of sending, scoring, and recording the evaluations is completely automatic, which also saves a lot of time." />
        <BenefitsItem title="Assess What You Want"
          description="Evaluate the characteristics required for the position using the questionnaire libraries or by creating your own assessments: Intelligence, verbal aptitude, knowledge, programming skills ... whatever you need to measure, you can do it with Evalart." />
        <BenefitsItem
          title="Follow-Up And Records"
          description="At any time you can view the status of all your evaluation processes. How many people have responded, who has the best score... all the information you need is only a click away. The information is automatically stored in Evalart, so you can search for candidates from previous processes for your new processes even years later." />
      </main>
    </section>
  )
}