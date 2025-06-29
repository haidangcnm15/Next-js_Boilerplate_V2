// Nếu dùng TS, đổi thành tailwind.config.ts và dùng ESM
import { colors } from './src/constants/colors';

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        dang: {
          DEFAULT: '#ef4444',
          dark: "#ef4444"
        },
        'darkkkk': '#ef4444',
      },
      fontFamily: {
        roboto: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
      },
       boxShadow: {
        card: '0px 0px 6px rgba(226, 43, 30, 0.1)',
        cardHover: '0px 0px 8px rgba(79, 95, 120, 0.18)',
       },
    },
  },
}