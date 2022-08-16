import classNames from "classnames"
import styles from "src/styles"

export const GetStarted = () => {
  return (
    <div
      className={classNames(
        `${styles.flexCenter}`,
        "rounded-full w-[7rem] h-[7rem] bg-blue-gradient cursor-pointer",
        "sm:w-[5.5rem] sm:h-[5.5rem]",
        "md:w-[7.5rem] md:h-[7.5rem]"
      )}
    >
      <div
        className={classNames(
          `${styles.flexCenter}`,
          "w-[97%] h-[97%] rounded-full bg-primary"
        )}
      >
        {" "}
        <a href="https://github.com/srwx/woobank-landing-page" target="_blank">
          <span
            className={classNames(
              "text-gradient",
              "sm:text-xs",
              "md:text-base"
            )}
          >
            Get
            <img
              src="images/icons/arrow-up.svg"
              alt="arrow"
              className="inline ml-1"
            />
            <br />
            Started
          </span>
        </a>
      </div>
    </div>
  )
}
