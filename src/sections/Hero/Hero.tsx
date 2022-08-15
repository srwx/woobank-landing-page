import classNames from "classnames"
import Discount from "src/components/Discount"
import GetStarted from "src/components/GetStarted"
import styles from "src/styles"

export const Hero = () => {
  return (
    <div
      className={classNames(
        `${styles.heroPaddingBox}`,
        "flex flex-col gap-y-10",
        "sm:flex-row sm:items-center"
      )}
    >
      {/* Text section */}
      <div className="space-y-3 flex-1">
        <Discount />
        <article className="pr-6 space-y-2 z-[5] md:space-y-4">
          <div
            className={classNames(
              "sm:relative sm:max-w-[23rem]",
              "md:max-w-[35rem]"
            )}
          >
            <div
              className={classNames(
                "hidden sm:inline sm:absolute sm:right-[2%] sm:top-[5%]"
              )}
            >
              <GetStarted />
            </div>
            <h1
              className={classNames(
                "text-white font-semibold text-5xl leading-[1.35]",
                "sm:text-4xl sm:leading-[1.45]",
                "md:text-5xl md:leading-[1.5]",
                "lg:text-6xl lg:leading-[1.5]"
              )}
            >
              The Next <br />
              <span className="text-gradient">Generation</span>
              <br />
              <span className="sm:whitespace-nowrap">Payment Method.</span>
            </h1>
          </div>

          <p className="text-dimWhite font-light md:text-lg">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </article>
      </div>
      {/* Image section */}
      <div className={classNames("flex relative", "flex-1")}>
        <img
          src="images/banner/robot.png"
          alt="robot"
          className={classNames("w-full z-[5]")}
        />
        <div className="absolute z-[2] top-0 bg-robot-gradient-blue w-[90%] h-[70%]" />
        <div className="absolute z-[1] top-0 bg-robot-gradient-pink w-[90%] h-[60%] sm:h-[90%]" />
      </div>
      {/* GetStarted button (Mobile only) */}
      <div className="flex justify-center sm:hidden">
        <GetStarted />
      </div>
    </div>
  )
}
