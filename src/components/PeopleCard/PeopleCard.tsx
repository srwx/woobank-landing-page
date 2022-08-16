import classNames from "classnames"
import { PeopleCardProps } from "./PeopleCard.type"

export const PeopleCard = ({ comment, name, job, image }: PeopleCardProps) => {
  return (
    <div
      className={classNames(
        "rounded-xl w-[85%] h-[14rem] p-6",
        "flex flex-col justify-center gap-y-6",
        "hover:bg-gradient-to-r from-white/20 to-[#14101d] cursor-pointer",
        "sm:w-[18rem] sm:h-[17rem] sm:justify-between",
        "md:w-[19rem] md:p-9",
        "lg:w-[21rem]"
      )}
    >
      <img
        src="images/icons/quotes.svg"
        alt="quote"
        className="self-start w-[2.2rem] h-[1.5rem]"
      />
      <p className={classNames("text-white font-light text-sm leading-[1.6]")}>
        {comment}
      </p>
      <div className="self-start flex items-center gap-x-4">
        <img
          src={image}
          alt="people"
          className={classNames("w-[2.7rem] h-[2.7rem]")}
        />
        <article>
          <h1 className={classNames("text-white text-sm")}>{name}</h1>
          <span className="text-dimWhite font-light text-xs">{job}</span>
        </article>
      </div>
    </div>
  )
}
