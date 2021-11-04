module.exports = {
  mode: 'jit',
  purge: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/layouts/**/*.{js,ts,jsx,tsx}',
    'src/icons/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
    'src/parts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
      // 'xxxl': '1600px',
      // 'xxxxl': '1920px',
    },
    extend: {
      backgroundPosition: {
        full: '100% 100%'
      },
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
      colors: {
        main: {
          DEFAULT: '#E26127',
          '50': '#FDF5F1',
          '100': '#FAE5DB',
          '200': '#F4C4AE',
          '300': '#EEA381',
          '400': '#E88254',
          '500': '#E26127',
          '600': '#BD4C19',
          '700': '#903A13',
          '800': '#63280D',
          '900': '#361607'
        },
        secondary: {
          DEFAULT: '#1A96D4',
          '50': '#D9EFFA',
          '100': '#C2E6F8',
          '200': '#95D3F2',
          '300': '#68C0EC',
          '400': '#3AADE7',
          '500': '#1A96D4',
          '600': '#1476A7',
          '700': '#0F5679',
          '800': '#09364C',
          '900': '#04151E'
        },
        success: '#64a168',
        warning: '#e6bc7c',
        error: '#d25b5b',
        description: '#68c4e9',
      }
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
    // outline: false,
    animation: false,
  },
}
