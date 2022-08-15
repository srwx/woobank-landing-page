import classNames from "classnames"
import BusinessFeatureCard from "src/components/BusinessFeature"
import { BusinessFeatureProps } from "src/components/BusinessFeature/BusinessFeature.type"
import GetStartedSquare from "src/components/GetStartedSquare"

const BusinessFeatureList: BusinessFeatureProps[] = [
  {
    image: "images/icons/Star.svg",
    title: "Rewards",
    description:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    image: "images/icons/Shield.svg",
    title: "100% Secured",
    description:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    image: "images/icons/Send.svg",
    title: "Balance Transfer",
    description:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
]

export const Business = () => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-y-5",
        "sm:flex-row sm:items-center"
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
            You do the business,
            <br />
            we’ll handle the money.
          </h1>
          <p
            className={classNames(
              "text-dimWhite font-light text-sm leading-[1.6] w-[90%]"
            )}
          >
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
        </article>
        <GetStartedSquare />
      </div>

      {/* Right section */}
      <div className="space-y-8 flex-1">
        {BusinessFeatureList.map((business) => (
          <BusinessFeatureCard
            key={business.title}
            image={business.image}
            title={business.title}
            description={business.description}
          />
        ))}
      </div>
    </div>
  )
}
