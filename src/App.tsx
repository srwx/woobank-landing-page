import classNames from "classnames"
import styles from "./styles"
import Navbar from "sections/Navbar"
import Hero from "sections/Hero"
import Stats from "sections/Stats"
import Business from "sections/Business"
import Billing from "sections/Billing"
import Card from "sections/Card"
import People from "sections/People"
import Sponsor from "sections/Sponsor"
import Footer from "sections/Footer"

export default function App() {
  return (
    <div className={classNames(`${styles.gapBox}`, "bg-primary")}>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.paddingBox}`}>
          <Navbar />
        </div>
      </div>
      <div className={classNames(`${styles.flexCenter}`, "mt-12")}>
        <Hero />
      </div>
      <div className={classNames(`${styles.flexCenter}`, "flex-col pt-10")}>
        <div
          className={classNames(
            `${styles.paddingBox} space-y-14 sm:space-y-10`
          )}
        >
          <Stats />
          <Business />
          <Billing />
          <Card />
          <People />
          <Sponsor />
          <Footer />
        </div>
      </div>
    </div>
  )
}
