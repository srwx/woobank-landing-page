import classNames from "classnames"
import StatText from "src/components/StatText"
import { StatTextProps } from "src/components/StatText/StatText.type"
import styles from "src/styles"

const StatList: StatTextProps[] = [
  { firstText: "3800+", secondText: "USER ACTIVE" },
  { firstText: "230+", secondText: "TRUSTED BY COMPANY" },
  { firstText: "$230M+", secondText: "TRANSACTION" },
]

export const Stats = () => {
  return (
    <div
      className={classNames(
        "w-full flex justify-center flex-wrap gap-x-12 gap-y-8",
        "md:gap-x-24",
        "lg:gap-x-20"
      )}
    >
      {StatList.map((stat) => (
        <StatText firstText={stat.firstText} secondText={stat.secondText} />
      ))}
    </div>
  )
}
