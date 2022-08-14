/** @type {import('tailwindcss').Config} */
module.exports = {
  // TODO: tailwind jit mode (improve performance)
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      // ถ้าไว้ข้างนอก extend พวก bg-red-500 (theme เดิมของ tailwind) จะใช้ไม่ได้ เราต้องกำหนด bg-red ขึ้นมาเอง
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1440px",
    },
  },
  plugins: [],
}
