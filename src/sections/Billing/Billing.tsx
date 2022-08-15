import classNames from "classnames"

export const Billing = () => {
  return (
    <div
      className={classNames(
        "w-full flex flex-col gap-y-5",
        "sm:flex-row sm:items-center sm:gap-x-10"
      )}
    >
      {/* Left section */}
      <div
        className={classNames("space-y-6 flex-1", "sm:space-y-10 sm:order-2")}
      >
        <article className="space-y-4">
          <h1
            className={classNames(
              "text-white font-semibold text-[2rem] leading-[1.65]"
            )}
          >
            Easily control your billing & invoicing.
          </h1>
          <p
            className={classNames(
              "text-dimWhite font-light text-sm leading-[1.6] w-[90%]"
            )}
          >
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
        </article>
        <div className="flex gap-x-4">
          <img src="images/banner/apple.svg" alt="appStore" />
          <img src="images/banner/google-play.svg" alt="googlePlay" />
        </div>
      </div>

      {/* Right section */}
      <div className="space-y-8 flex-1 sm:order-1">
        <img src="images/banner/bill.png" alt="billing" className="w-full" />
      </div>
    </div>
  )
}
