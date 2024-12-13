import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import { nextui } from '@nextui-org/react';

export default {
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
