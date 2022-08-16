import classNames from "classnames"
import PeopleCard from "src/components/PeopleCard"
import { PeopleCardProps } from "src/components/PeopleCard/PeopleCard.type"

const PeopleList: PeopleCardProps[] = [
  {
    comment:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    job: "Founder & Leader",
    image: "images/banner/people01.png",
  },
  {
    comment:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    job: "Founder & Leader",
    image: "images/banner/people02.png",
  },
  {
    comment:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    job: "Founder & Leader",
    image: "images/banner/people03.png",
  },
]

export const People = () => {
  return (
    <div className={classNames("w-full flex flex-col gap-y-6")}>
      <article
        className={classNames(
          "flex flex-col gap-y-2",
          "sm:flex-row sm:justify-between sm:items-center sm:gap-x-5",
          "md:gap-x-12"
        )}
      >
        <h1
          className={classNames(
            "text-white font-semibold text-[2rem] leading-[1.65]",
            "md:w-[46%]",
            "lg:w-[42%]"
          )}
        >
          What people are saying about us
        </h1>
        <p
          className={classNames(
            "text-dimWhite font-light text-sm leading-[1.6]",
            "md:w-[48%]",
            "lg:w-[42%]"
          )}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </article>
      <div
        className={classNames(
          "flex flex-col items-center",
          "sm:flex-row sm:justify-between"
        )}
      >
        {PeopleList.map((people) => (
          <PeopleCard {...people} />
        ))}
      </div>
    </div>
  )
}
