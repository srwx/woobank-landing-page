import classNames from "classnames"
import { FooterCardProps, SocialListProps } from "./Footer.type"

const MenuList: FooterCardProps[] = [
  {
    title: "Usefull Links",
    links: ["Content", "How it Works", "Create", "Explore", "Terms & Services"],
  },
  {
    title: "Community",
    links: ["Help Center", "Partners", "Suggestions", "Blog", "Newsletters"],
  },
  { title: "Our Partner", links: ["Our Partner", "Become a Partner"] },
]

const SocialList: SocialListProps[] = [
  {
    image: "images/icons/socials/facebook.svg",
    link: "https://www.facebook.com/",
  },
  {
    image: "images/icons/socials/instagram.svg",
    link: "https://www.instagram.com/",
  },
  {
    image: "images/icons/socials/twitter.svg",
    link: "https://twitter.com/",
  },
  {
    image: "images/icons/socials/linkedin.svg",
    link: "https://th.linkedin.com/",
  },
]

const FooterCard = ({ title, links }: FooterCardProps) => {
  return (
    <div className={classNames("flex flex-col gap-y-2")}>
      <h1 className="text-white font-medium text-xl">{title}</h1>
      <ul className="space-y-1">
        {links.map((link) => (
          <li className="text-dimWhite font-light text-sm cursor-pointer hover:text-secondary">
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Footer = () => {
  return (
    <>
      {" "}
      <div
        className={classNames(
          "w-full flex flex-col gap-y-7",
          "md:flex-row md:items-center"
        )}
      >
        {/* Logo section */}
        <div className="space-y-4 md:flex-[40%]">
          <div className="flex items-center gap-2">
            <img
              src="images/icons/bank-logo.png"
              alt="logo"
              className="w-[3.75rem] h-[3.75rem]"
            />
            <span className="text-white font-semibold text-2xl">
              Woo<span className="text-secondary">Bank</span>
            </span>
          </div>
          <p className="text-dimWhite font-light w-[80%]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Menu section */}
        <div
          className={classNames(
            "flex flex-wrap justify-between gap-x-6 gap-y-10",
            "md:flex-[60%]"
          )}
        >
          {MenuList.map((menu) => (
            <FooterCard {...menu} />
          ))}
        </div>
      </div>
      {/* Copyright section */}
      <div
        className={classNames(
          "w-full pt-6 pb-10 border-t-[1px] border-t-[#3F3E45]",
          "flex flex-col gap-y-4",
          "sm:flex-row justify-between"
        )}
      >
        <p className="text-dimWhite font-light">
          Copyright Ⓒ 2022 WooBank. All Rights Reserved.
        </p>
        <div className="flex gap-x-8">
          {SocialList.map((social) => (
            <a href={social.link} className="cursor-pointer">
              <img
                src={social.image}
                alt="social"
                className="w-[1.2rem] h-[1.2rem]"
              />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
