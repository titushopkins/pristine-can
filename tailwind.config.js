const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            '3xs': '390px',
            '2xs': '425px',
            xs: '475px',
            ...defaultTheme.screens,
            '3xl': '1750px',
        },
        extend: {
            colors: {
                'pristine-cyan': '#48a7cd',
                'pristine-light-blue': '#266f99',
                'pristine-dark-blue': '#0e3858',
                'pristine-purple': '#020033',
              },
            fontSize: {
                '3xs': '.45rem',
                '2xs': '.6rem',
                '10xl': '10rem'
            },
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
            },
            boxShadow: {
                card: '0 8px 40px 0 rgba(0, 0, 0, 0.1)',
                'card-focus': '0 8px 40px 6px rgba(0, 0, 0, 0.1)'
            },
            maxWidth: {
                '32': '8rem',
                '40': '10rem',
                '48': '12rem',
                '56': '14rem',
                '64': '16rem',
                '8xl': '88rem',
                '9xl': '96rem',
                '10xl': '104rem',
                '11xl': '112rem',
            }
        },

    }
}
