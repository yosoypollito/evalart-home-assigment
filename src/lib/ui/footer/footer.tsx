import { Link } from "@src/types";
import FooterLinksGroup from "./footer-links-group";

import logo from '@src/assets/logo.png'
import { useId } from "react";

const FooterLinks: {
  [key: string]: Array<Link>
} = {
  "Support": [
    {
      label: "Evalart User Guide",
      href: "https://evalart.com/en/evalart-user-guide/"
    },
    {
      label: "Evalart User FAQ",
      href: "https://evalart.com/en/preguntas-frecuentes-usuarios-evalart/"
    },
    {
      label: "Contact Support",
      href: "https://evalart.com/en/contact-support/"
    },
    {
      label: "Candidate FAQ",
      href: "https://evalart.com/en/preguntas-frecuentes/"
    }
  ],
  "Legal": [
    {
      label: "Terms Of Service",
      href: "https://evalart.com/en/terms-of-service/"
    },
    {
      label: "Privacy Policy",
      href: "https://evalart.com/en/privacy-policy/"
    }
  ],
  "Company": [
    {
      label: "About Us",
      href: "https://evalart.com/en/about-us/"
    },
    {
      label: "Blog",
      href: "https://evalart.com/en/blog/"
    },
    {
      label: "Reliability And Validity Of Evalart Tests",
      href: "https://evalart.com/en/reliability-and-validity-of-evalart-tests/"
    }
  ],
  "Contact": [
    {
      label: "Contact Us",
      href: "https://evalart.com/en/contact-us/"
    },
    {
      label: "Noosa Labs Inc - Miami, FL, USA",
      href: "#"
    }
  ]
};
export default function Footer() {
  return (
    <footer className="border-t-2 border-evalart-blue/20">
      <div className="max-w-content-width m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 sm:p-6 ">


        <div className="col-span-1 sm:col-span-2 md:col-span-1 md:row-span-2 flex items-center justify-center">
          <img src={logo} className="w-48" alt="evalart logo" />
        </div>

        {Object.entries(FooterLinks).map(([key, value]) => {
          return (
            <FooterLinksGroup key={useId()} title={key} links={value} />
          )
        })}
      </div>
    </footer>
  )
}