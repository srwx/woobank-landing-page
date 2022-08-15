import classNames from "classnames"

interface StypesProps {
  paddingBox: string
  heroPaddingBox: string
  flexStart: string
  flexCenter: string
}

const styles: StypesProps = {
  paddingBox: classNames(
    "w-full px-6",
    "sm:px-10 md:px-20 lg:px-36 lg:max-w-[1440px]"
  ),

  heroPaddingBox: classNames(
    "w-full pl-6",
    "sm:pl-10 md:pl-20 lg:px-36 lg:max-w-[1440px]"
  ),

  flexStart: classNames("flex justify-start items-center"),

  flexCenter: classNames("flex justify-center items-center"),
}

export default styles
