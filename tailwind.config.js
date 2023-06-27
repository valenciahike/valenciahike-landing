const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Bree Serif', 'serif'],
                title: ['Candal', 'sans-serif'],
                subtitle: ['Permanent Marker', 'cursive']
            },
            colors: {
                primary: {
                    DEFAULT: '#005B2D',
                    light: '#5B9A42',
                    dark: '#003029'
                },
                secondary: {
                    DEFAULT: '#F2682A',
                    light: '#FF8C59',
                },
                tertiary: {
                    DEFAULT: '#EFC429',
                    dark: '#D6AE20',
                },
                cream: {
                    yellow: '#EFEEEA',
                    green: '#E1EAE2',
                }
            },
            // screens: {
            //     'sm': '640px',
            //     'md': '768px',
            //     'lg': '1024px',
            //     'xl': '1280px',
            //     '2xl': '1400px',
            // },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    DEFAULT: '100%',
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1240px',
                    '2xl': '1366px',
                }
            }
        },
    },
    plugins: [],
};
