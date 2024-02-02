import { useState } from "react"
import FeatureItem from "./feature-item";
import Section, { SectionTitle } from "../components/sections";
import useFeatures from "@src/lib/hooks/useFeatures";

import debounce from 'just-debounce-it'
import Loading from "../components/loading";

export default function Features() {

  const [filter, setFilter] = useState("");
  const { loading, features } = useFeatures({ filter })

  const handleFilter = debounce((value: string) => setFilter(value), 300)

  return (
    <Section>
      <SectionTitle>
        Features
      </SectionTitle>

      <div className="flex justify-center">
        <div className="flex flex-col gap-1">
          <label htmlFor="filter-feature">
            Search a feature
          </label>
          <input onInput={(e) => handleFilter(e.currentTarget.value)} className=" w-80 border-2 border-evalart-blue/80 focus:border-evalart-blue outline-none rounded-lg py-2 px-4" placeholder="Put what feature you need" />
          <p className="text-xs">
            We will look on the title, description and keywords.
          </p>
        </div>
      </div>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? <Loading /> :
          features.map(feature => <FeatureItem key={feature.id} {...feature} />)
        }
      </main>
    </Section>
  )
}