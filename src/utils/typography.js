import Typography from "typography"
import theme from 'typography-theme-github'

export default new Typography({
  ...theme,
  baseFontSize: "18px",
  headerColor: '#151E25',
  baseLineHeight: 1.75,
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyWeight: 300,
  headerWeight: 400,
  googleFonts: [
    {
      name: 'Lato',
      styles: ['300']
    }
  ],
  overrideThemeStyles:  ({ rhythm }, options) => ({
    'h1': {
      paddingBottom: rhythm(1),
      marginBottom: rhythm(1),
      fontWeight: 300
    }, 
    'h2': {
      paddingBottom: rhythm(1),
      marginTop: rhythm(2),
      marginBottom: rhythm(1),
      fontWeight: 300
    },
    'h3': {
      fontWeight: 400
    }
  })
})