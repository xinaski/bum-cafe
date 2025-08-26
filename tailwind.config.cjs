// tailwind.config.cjs
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bum-base':  '#252425',
        'bum-cream': '#F6E3BE',
        'bum-red': '#EA2D1C',
        'bum-accent':'#F59E0B',
        'bum-coffee':'#6B4F3A',
        'collonut':  '#252425',
        'espavilat': '#F3B31F',
        'delaiaia':  '#2E4072',
      },
      boxShadow: { soft: '0 8px 30px rgba(0,0,0,.08)' },
      borderRadius: { '2xl': '1.25rem' },
    },
  },
  plugins: [],
}
