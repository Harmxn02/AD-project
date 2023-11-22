import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandCyan: "#62A0AA",
        brandBlack: "#4C4C4C",

        // used for background of entire client
        brandGrey: "#FAFAFA",

        // used for the most expensive plans
        brandBackground: "#3E3E3E",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
