/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'color-mix(in srgb, var(--primary-base) 10%, white)',
          100: 'color-mix(in srgb, var(--primary-base) 20%, white)',
          200: 'color-mix(in srgb, var(--primary-base) 30%, white)',
          300: 'color-mix(in srgb, var(--primary-base) 40%, white)',
          400: 'color-mix(in srgb, var(--primary-base) 60%, white)',
          500: 'var(--primary-base)',
          600: 'color-mix(in srgb, var(--primary-base) 80%, black)',
          700: 'color-mix(in srgb, var(--primary-base) 60%, black)',
          800: 'color-mix(in srgb, var(--primary-base) 40%, black)',
          900: 'color-mix(in srgb, var(--primary-base) 20%, black)',
        }
      }
    },
  },
  plugins: [],
}
