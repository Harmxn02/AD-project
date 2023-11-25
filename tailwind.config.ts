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
        brandTeal: "#54696c",
        brandBlack: "#4C4C4C",
        brandGrey: "#B3B3B3",

        // used for background of entire client
        brandBackground: "#FAFAFA",

        // used for Recent Finds
        brandRed: "#E74C3C",
        brandGreen: "#2ECC71",
        brandYellow: "#F1C40F",

        // used for Homescreen
        brandDarkPurple: "#00002e",
        brandPink: "#D292FF",
        brandBlue: "#3C46FF",
        brandLightGrey: "#8E8EA0",
        
        // used for specific areas
        lastPlan: "#3E3E3E",
        alternatingTransaction: "#DFE5EB",
        planButtons: "#2C2C2C",
        
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
