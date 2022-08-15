import classNames from "classnames"
import { StatTextProps } from "./StatText.type"

export const StatText = ({ firstText, secondText }: StatTextProps) => {
  return (
    <div className={classNames("flex items-center gap-x-3")}>
      <span
        className={classNames(
          "text-white text-4xl font-semibold",
          "sm:text-2xl",
          "md:text-4xl",
          "lg:text-5xl"
        )}
      >
        {firstText}
      </span>
      <span
        className={classNames(
          "text-gradient text-lg",
          "sm:text-sm",
          "md:text-lg",
          "lg:text-xl"
        )}
      >
        {secondText}
      </span>
    </div>
  )
}
