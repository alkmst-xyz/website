module.exports = {
  purge: {
    content: [
      './layouts/**/*.html',
      './content/**/*.md',
    ],
    safelist:[]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      mono: ['Fira Code']
    },
  },
  variants: {},
  plugins: []
}
