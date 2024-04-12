import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '520px',
        md: '744px',
        lg: '966px',
        xl: '1366px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-700': 'rgba(249, 178, 51, 1)',
        'primary-600': '#F39200',
        'primary-500': '#7b79ff',
        'primary-200': '#d9d8ff',
        'primary-100': '#f0f0ff',

        'neutral-1000': '#181826',
        'neutral-900': '#212134',
        'neutral-800': '#32324d',
        'neutral-700': '#4a4a6a',
        'neutral-600': '#666687',
        'neutral-500': '#8e8ea9',
        'neutral-400': '#a5a5ba',
        'neutral-300': '#c0c0cf',
        'neutral-200': '#dcdce4',
        'neutral-150': '#eaeaef',
        'neutral-100': '#f6f6f9',
        'neutral-0': '#ffffff',

        'success-700': '#2f6846',
        'success-600': '#328048',
        'success-500': '#5cb176',
        'success-200': '#c6f0c2',
        'success-100': '#eafbe7',

        'danger-700': '#b72b1a',
        'danger-600': '#d02b20',
        'danger-500': '#ee5e52',
        'danger-200': '#f5c0b8',
        'danger-100': '#fcecea',

        'warning-700': '#be5d01',
        'warning-600': '#d9822f',
        'warning-500': '#f29d41',
        'warning-200': '#fae7b9',
        'warning-100': '#fdf4dc',

        'secondary-700': '#006096',
        'secondary-600': '#0c75af',
        'secondary-500': '#66b7f1',
        'secondary-200': '#b8e1ff',
        'secondary-100': '#eaf5ff',

        'alternative-700': '#8312d1',
        'alternative-600': '#9736e8',
        'alternative-500': '#ac73e6',
        'alternative-200': '#e0c1f4',
        'alternative-100': '#f6ecfc',
      },
    },
  },
  plugins: [],
}
export default config
