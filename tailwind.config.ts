import { colors } from "@mui/material"
import type { Config } from "tailwindcss"

const config = {
  content: [
    "./src/components/**/*.{ts,tsx}",
    "./src/assets/**/*.{ts,tsx}",
    "./src/stories/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/types/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)'],
        pixelify: ['var(--font-pixelify_sans']
      },
      colors: {
        number:
        "font-bold font-outline-2 text-amber-500"
      },
      dropShadow: {
        white: [
          "0 0px 20px rgba(255,255, 255, 0.45)",
          "0 0px 65px rgba(255, 255,255, 0.4)"
        ],
        orange: [
          "0 0px 20px rgba(255, 153, 0, 0.45)",
          "0 0px 65px rgba(255, 153, 0, 0.4)"
        ]
      },
      caretColor: theme => ({
        transparent: 'transparent',
      })
    },
  },
  plugins: [
    
  ],
} satisfies Config

export default config