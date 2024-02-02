import logo from '@src/assets/logo.png'
import NavBarItem from './navbar-item'
import { useCallback, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { twMerge } from 'tailwind-merge'
import HeadNavBar from './head-navbar/head-navbar'

export default function NavBar() {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = useCallback(() => setShowMenu(!showMenu), [showMenu])

  return (
    <nav className="flex flex-col">

      <HeadNavBar />

      <footer className="bg-white shadow">
        <section className="relative grid grid-cols-[1fr_min-content] md:flex gap-2 justify-center md:justify-between items-center w-full p-2 md:p-4 max-w-content-width m-auto">

          <div>
            <img src={logo} className="w-48 max-w-full max-h-full" />
          </div>

          <button type='button' className="p-1 bg-evalart-blue self-center rounded-md md:hidden" onClick={toggleMenu}>
            <Icon icon="charm:menu-hamburger" height={20} strokeWidth={2} className='text-white' />
          </button>

          <div className={twMerge("text-sm absolute top-full right-full transition-all duration-500 p-1 flex flex-col gap-1 w-full bg-white border-b-2 border-evalart-blue/10 md:border-0 md:flex-row md:relative md:justify-end md:items-center md:transition-none md:gap-2", showMenu ? "right-0" : "md:right-0")}>

            <NavBarItem href="https://evalart.com/en/">
              Home
            </NavBarItem>

            <NavBarItem href="https://evalart.com/en/how-it-works/">
              How it works
            </NavBarItem>

            <NavBarItem active href="/">
              Features
            </NavBarItem>

            <NavBarItem href="https://evalart.com/en/questionnaires/">
              Test Library
            </NavBarItem>

            <NavBarItem href="https://evalart.com/en/request-quote/">
              Pricing
            </NavBarItem>

            <NavBarItem href="https://evalart.com/en/free-trial/">
              Free Trial
            </NavBarItem>

            <NavBarItem href="http://questionnaire.evalart.com/admin">
              Login
            </NavBarItem>
          </div>
        </section>
      </footer>
    </nav>
  )
}