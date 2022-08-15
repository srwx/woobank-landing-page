import classNames from "classnames"
import GetStartedSquare from "src/components/GetStartedSquare"

export const Card = () => {
  return (
    <div
      className={classNames(
        "w-full flex flex-col gap-y-5",
        "sm:flex-row sm:items-center sm:gap-x-10"
      )}
    >
      {/* Left section */}
      <div className={classNames("space-y-6 flex-1", "sm:space-y-10")}>
        <article className="space-y-4">
          <h1
            className={classNames(
              "text-white font-semibold text-[2rem] leading-[1.65]"
            )}
          >
            Find a better card deal in few easy steps.
          </h1>
          <p
            className={classNames(
              "text-dimWhite font-light text-sm leading-[1.6] w-[90%]"
            )}
          >
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
        </article>
        <GetStartedSquare />
      </div>

      {/* Right section */}
      <div className="space-y-8 flex-1">
        <img src="images/banner/card.png" alt="card" className="w-full" />
      </div>
    </div>
  )
}
