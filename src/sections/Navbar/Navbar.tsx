import classNames from "classnames"
import styles from "src/styles"

const MenuList = ["Home", "About Us", "Features", "Solution"]
export const Navbar = () => {
  return (
    <div
      className={classNames(
        `w-full py-4`,
        "flex items-center justify-between",
        "md:py-6"
      )}
    >
      {/* Left section */}
      <div className="flex items-center gap-2 cursor-pointer">
        {/* WooBank Logo */}
        <div className={classNames("w-[2.2rem] h-[2.2rem]")}>
          <img
            src="images/icons/bank-logo.png"
            alt="logo"
            width="100%"
            height="100%"
          />
        </div>
        <p
          className={classNames("hidden text-white font-semibold", "sm:inline")}
        >
          Woo<span className="text-secondary">Bank</span>
        </p>
      </div>
      {/* Right section */}
      <div>
        {/* Hamburger menu (Mobile only) */}
        <div className="w-[2rem] h-[1.4rem] flex items-center sm:hidden">
          <img
            src="images/icons/menu.svg"
            alt="logo"
            width="100%"
            height="100%"
          />
        </div>
        {/* Menu list */}
        <ul
          className={classNames(
            "hidden sm:inline",
            "sm:flex sm:gap-x-10",
            "md:gap-x-16"
          )}
        >
          {/* TODO: click to scroll to that section */}
          {MenuList.map((menu) => (
            <li
              key={menu}
              className={classNames("text-dimWhite cursor-pointer", {
                "text-white": menu === "Home",
              })}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
