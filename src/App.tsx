import classNames from "classnames"
import Navbar from "sections/Navbar"
import styles from "./styles"

export default function App() {
  return (
    <div className="bg-primary">
      <div className={`${styles.flexCenter}`}>
        <Navbar />
      </div>
    </div>
  )
}
