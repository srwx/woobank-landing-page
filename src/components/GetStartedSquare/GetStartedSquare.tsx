import classNames from "classnames"
import styles from "src/styles"

export const GetStartedSquare = () => {
  return (
    <div
      className={classNames(
        `${styles.flexCenter}`,
        "bg-blue-gradient w-[16rem] h-[3rem] rounded-xl text-lg cursor-pointer",
        "sm:w-[14rem]",
        "lg:w-[16rem]"
      )}
    >
      {" "}
      <a href="https://github.com/srwx/woobank-landing-page" target="_blank">
        Get Started
      </a>
    </div>
  )
}
