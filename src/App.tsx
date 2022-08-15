import classNames from "classnames"
import Navbar from "sections/Navbar"
import Hero from "sections/Hero"
import Stats from "sections/Stats"
import styles from "./styles"
import Business from "sections/Business"
import Billing from "./sections/Billing"
import Card from "./sections/Card"

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
        <div className={classNames(`${styles.paddingBox} space-y-28`)}>
          <Stats />
          <Business />
          <Billing />
          <Card />
        </div>
      </div>
    </div>
  )
}
