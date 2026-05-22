module.exports = {
  content: ["./*.html", "./src/**/*.html", "./templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#964F4C",
        secondary: "#CCAA6E",
        background: "#F2EFE9",
        "background-dark": "#1C1B1A",
        text: "#2A2622",
        "text-light": "#EBE6DF",
        accent: "#B35A46",
        meron: "#76323F",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Instrument Serif"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
      },
      letterSpacing: {
        'tighter-custom': '-0.04em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
