import classNames from "classnames"
import { BusinessFeatureProps } from "./BusinessFeature.type"
import styles from "src/styles"

export const BusinessFeatureCard = ({
  image,
  title,
  description,
}: BusinessFeatureProps) => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center gap-x-5 px-4 py-6",
        "rounded-xl hover:bg-gradient-to-r from-white/20 to-[#14101d] cursor-pointer"
      )}
    >
      {/* Left section */}
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={image} alt="icon" className="object-contain" />
      </div>
      {/* Right section */}
      <article className="flex-1 space-y-[0.2rem]">
        <h1 className="text-white font-semibold text-lg">{title}</h1>
        <p className="text-dimWhite font-light text-sm">{description}</p>
      </article>
    </div>
  )
}
