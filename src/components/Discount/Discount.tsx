import classNames from "classnames"

export const Discount = () => {
  return (
    <div
      className={classNames(
        "bg-discount-gradient w-[90%] max-w-[18.5rem] rounded-lg py-0.5",
        "flex justify-center items-center gap-x-2",
        "sm:w-[18.5rem] sm:max-w-none",
        "md:w-[21rem]"
      )}
    >
      <img
        src="images/icons/Discount.svg"
        alt="discount"
        width="40px"
        height="40px"
      />
      <span className={classNames("text-dimWhite text-xs", "md:text-sm")}>
        <span className="text-white">20%</span> DISCOUNT FOR{" "}
        <span className="text-white">1 MONTH</span> ACCOUNT
      </span>
    </div>
  )
}
