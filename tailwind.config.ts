import { type Config } from 'tailwindcss'

export default {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        base: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      },
    },
  },
  plugins: [],
} satisfies Config
