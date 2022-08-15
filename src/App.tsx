import classNames from "classnames"
import Navbar from "sections/Navbar"
import Hero from "sections/Hero"
import Stats from "sections/Stats"
import styles from "./styles"
import Business from "sections/Business"

export default function App() {
  return (
    <div className={classNames(`${styles.gapBox}`, "bg-primary")}>
      <div className={`${styles.flexCenter}`}>
        <Navbar />
      </div>
      <div className={classNames(`${styles.flexCenter}`, "mt-12")}>
        <Hero />
      </div>
      <div
        className={classNames(
          `${styles.flexCenter} ${styles.paddingBox},`,
          "flex-col gap-y-20 pt-11"
        )}
      >
        <Stats />
        <Business />
      </div>
    </div>
  )
}
