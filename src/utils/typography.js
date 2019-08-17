import Typography from "typography"
import theme from 'typography-theme-github'

export default new Typography({
  ...theme,
  baseFontSize: "16px",
  headerColor: '#151E25',
  baseLineHeight: 1.65,
  bodyFontFamily: ['Roboto', 'sans-serif'],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyWeight: 300,
  headerWeight: 800,
  overrideThemeStyles:  ({ rhythm }) => ({
    'h1': {
      paddingBottom: rhythm(1),
      marginBottom: rhythm(1),
    }, 
    'h2': {
      paddingBottom: rhythm(1),
      marginTop: rhythm(2),
      marginBottom: rhythm(1),
    }
  })
})