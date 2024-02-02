import { Icon } from "@iconify/react/dist/iconify.js";
import Select, { SelectOption } from "../../components/inputs/select";
import HeadNavBarItem from "./head-navbar-item";
import HeadNavBarLink from "./head-navbar-link";

export default function HeadNavBar() {
  return (
    <header className='bg-evalart-blue p-2 md:px-4 w-full text-white'>
      <section className="max-w-content-width m-auto flex gap-4 sm:gap-2 justify-center md:justify-between flex-wrap">
        <div className="flex items-center gap-4">
          <Select title='language'>
            <SelectOption>English</SelectOption>
            <SelectOption>Español</SelectOption>
            <SelectOption>Português do Brasil</SelectOption>
          </Select>

          <div className="flex items-center gap-2">
            <HeadNavBarLink href="https://www.facebook.com/Evalart-135140320535260">
              <Icon icon="ri:facebook-box-fill" height={16} />
            </HeadNavBarLink>

            <HeadNavBarLink href="https://twitter.com/Evalart_com">
              <Icon icon="ri:twitter-x-fill" height={16} />
            </HeadNavBarLink>

            <HeadNavBarLink href="https://www.linkedin.com/company/evalart">
              <Icon icon="ri:linkedin-box-fill" height={16} />
            </HeadNavBarLink>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <HeadNavBarItem>
            <Icon icon="material-symbols:location-on" />
            Global Presence
          </HeadNavBarItem>

          <HeadNavBarItem>
            <Icon icon="mdi:clock-time-nine" />
            Platform Available 24/7
          </HeadNavBarItem>

          <HeadNavBarLink href="mailto:evalart@evalart.com">
            <Icon icon="mdi:email" />
            evalart@evalart.com
          </HeadNavBarLink>
        </div>
      </section>
    </header>
  )
}