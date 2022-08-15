import classNames from "classnames"

interface StypesProps {
  paddingBox: string
  flexCenter: string
}

const styles: StypesProps = {
  paddingBox: classNames(
    "w-full px-6",
    "sm:px-10 md:px-20 lg:px-36 lg:max-w-[1440px]"
  ),

  flexCenter: classNames("flex justify-center items-center"),
}

export default styles
