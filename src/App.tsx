import classNames from "classnames"
import Navbar from "sections/Navbar"
import Hero from "./sections/Hero"
import styles from "./styles"

export default function App() {
  return (
    <div className="bg-primary">
      <div className={`${styles.flexCenter}`}>
        <Navbar />
      </div>
      <div className={classNames(`${styles.flexCenter}`, "mt-12")}>
        <Hero />
      </div>
    </div>
  )
}
