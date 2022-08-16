import classNames from "classnames"

export const Sponsor = () => {
  return (
    <div
      className={classNames(
        "w-full flex flex-wrap justify-center items-center gap-x-20 gap-y-8"
      )}
    >
      <img
        src="images/organizations/airbnb.png"
        alt="airbnb"
        className={classNames(
          "w-[6.5rem]",
          "sm:w-[7rem]",
          "md:w-[9rem]",
          "lg:w-[12rem]"
        )}
      />
      <img
        src="images/organizations/binance.png"
        alt="binance"
        className={classNames(
          "w-[8.5rem]",
          "sm:w-[9rem]",
          "md:w-[11rem]",
          "lg:w-[14rem]"
        )}
      />
      <img
        src="images/organizations/coinbase.png"
        alt="coinbase"
        className={classNames(
          "w-[6.5rem]",
          "sm:w-[7rem]",
          "md:w-[9rem]",
          "lg:w-[12rem]"
        )}
      />
      <img
        src="images/organizations/dropbox.png"
        alt="dropbox"
        className={classNames(
          "w-[6.5rem]",
          "sm:w-[7rem]",
          "md:w-[9rem]",
          "lg:w-[12rem]"
        )}
      />
    </div>
  )
}
