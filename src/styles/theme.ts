import { FiraCodeFontWeights } from './global'

export default {
  grid: {
    container: '110rem',
    gutter: '3.2rem',
    gutterLarge: '5.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    title: {
      family: '"League Gothic", sans-serif',
    },
    text: {
      family: '"Fira Sans", sans-serif',
      weight: {
        thin: FiraCodeFontWeights.Thin,
        regular: FiraCodeFontWeights.Regular,
        bold: FiraCodeFontWeights.Bold,
      },
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
  colors: {
    background: '#282a36',
    backgroundLight: '#44475a',
    foreground: '#f8f8f2',
    comment: '#6272a4',
    cyan: '#8be9fd',
    green: '#50fa7b',
    orange: '#ffb86c',
    pink: '#ff79c6',
    purple: '#bd93f9',
    red: '#ff5555',
    yellow: '#f1fa8c',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  boxShadow: {
    default: '0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
    softer: '0 5px 10px rgba(0, 0, 0, 0.1)',
    stronger: '0 20px 40px rgba(0, 0, 0, 0.4)',
    diagonal: '10px 10px 20px rgba(0, 0, 0, 0.3)',
    smallerBlur: '0 10px 10px rgba(0, 0, 0, 0.2)',
    smallerSpread: '0 10px 20px -10px rgba(0, 0, 0, 0.3)',
  },
} as const
