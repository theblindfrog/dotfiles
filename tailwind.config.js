module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        colors: {
            transparent: 'transparent',

            black: '#000',
            white: '#fff',

            gray: {
                100: '#f7fafc',
                200: '#edf2f7',
                300: '#D8D7D9', // custom
                400: '#cbd5e0',
                500: '#a0aec0',
                600: '#505454', // custom
                700: '#4a5568',
                800: '#2A2A2A', // custom
                900: '#1a202c',
            },
            red: {
                100: '#FFE9E9',
                200: '#FFBDBD',
                300: '#FF9191',
                400: '#FF6464',
                500: '#EE3233', // custom
                600: '#D51112',
                700: '#A00D0E',
                800: '#6B0909',
                900: '#360404',
            },
            yellow: {
                500: '#FFC111', // custom
            },
            green: {
                100: '#f0fff4',
                200: '#c6f6d5',
                300: '#9ae6b4',
                400: '#68d391',
                500: '#48bb78',
                600: '#38a169',
                700: '#2f855a',
                800: '#276749',
                900: '#22543d',
            },
            primary: {
                100: '#F3FCFF', // custom
                200: '#E6F5FC', // custom
                300: '#77DAFF',
                400: '#40CBFF',
                500: '#00ACED', // custom
                600: '#0097DD', // custom (grad light)
                700: '#0076D0', // custom
                800: '#2c5282',
                900: '#2a4365',
            },
            secondary: {
                100: '#FFF3E8',
                200: '#FFDCBA',
                300: '#FFC58E',
                400: '#FFAD60',
                500: '#F68A24', // custom
                600: '#DC6D06',
                700: '#A55205',
                800: '#6D3703',
                900: '#371C01',
            }
        },
        spacing: {
            px: '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '18': '4.5rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '64': '16rem',
            '72': '20rem',
            '80': '24rem',
            '88': '28rem',
            '96': '32rem',
        },
        screens: {
            sm: '375px',
            md: '480px',
            lg: '768px',
            xl: '1120px',
        },
        fontFamily: {
            sans: [
                'Lato',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            display: ['Proxima Soft', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
            ubuntu: ['Ubuntu', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        },
        fontSize: {
            '3xs': '0.5rem',
            '2xs': '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
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
        lineHeight: {
            none: '1',
            tighter: '1.125',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
            copperplate: '0.2em',
        },
        textColor: theme => theme('colors'),
        backgroundColor: theme => theme('colors'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
            '4': '4px',
            '8': '8px',
        },
        borderColor: theme => ({
            ...theme('colors'),
            default: theme('spacing.gray.300', 'currentColor'),
        }),
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            default: '0.25rem',
            lg: '0.5rem',
            full: '9999px',
        },
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed',
        },
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.33333%',
            '2/3': '66.66667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.66667%',
            '2/6': '33.33333%',
            '3/6': '50%',
            '4/6': '66.66667%',
            '5/6': '83.33333%',
            '1/12': '8.33333%',
            '2/12': '16.66667%',
            '3/12': '25%',
            '4/12': '33.33333%',
            '5/12': '41.66667%',
            '6/12': '50%',
            '7/12': '58.33333%',
            '8/12': '66.66667%',
            '9/12': '75%',
            '10/12': '83.33333%',
            '11/12': '91.66667%',
            '100': '100%',
            full: '100%',
            screen: '100vw',
        }),
        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        minWidth: theme => ({
            '0': '0',
            '8': theme('spacing.8'),
            full: '100%',
        }),
        minHeight: {
            '0': '0',
            full: '100%',
            screen: '100vh',
        },
        maxWidth: theme => ({
            xs: '20rem',
            sm: theme('screens.sm'),
            md: theme('screens.md'),
            lg: theme('screens.lg'),
            xl: theme('screens.xl'),
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            full: '100%',
        }),
        maxHeight: {
            full: '100%',
            screen: '100vh',
        },
        padding: theme => theme('spacing'),
        margin: (theme, {
            negative
        }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        boxShadow: {
            default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            none: 'none',
        },
        zIndex: {
            auto: 'auto',
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50',
        },
        opacity: {
            '0': '0',
            '25': '0.25',
            '50': '0.5',
            '75': '0.75',
            '100': '1',
        },
        fill: {
            current: 'currentColor',
        },
        stroke: {
            current: 'currentColor',
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            full: '0 0 auto',
            none: 'none',
            '1/3': '1 1 33.33333%',
        },
        flexGrow: {
            '0': '0',
            default: '1',
        },
        flexShrink: {
            '0': '0',
            default: '1',
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': '11',
            '12': '12',
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
        inset: {
            '0': '0',
            auto: 'auto',
        },
        container: {},
        // customForms: (theme) => ({
        //     // horizontalPadding: theme.spacing[3],
        //     // verticalPadding: theme.spacing[2],
        //     // lineHeight: theme.lineHeight.normal,
        //     // fontSize: theme.fontSize.base,
        //     // borderColor: theme.borderColor.default,
        //     // borderWidth: theme.borderWidth.default,
        //     // borderRadius: theme.borderRadius.default,
        //     // backgroundColor: theme.colors.white,
        //     focusBorderColor: theme.colors.primary[600],
        //     // focusShadow: theme.boxShadow.outline,
        //     // boxShadow: theme.boxShadow.none,
        //     // checkboxSize: '1em',
        //     // radioSize: '1em',
        //     // checkboxIcon: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M13.293 4.293a1 1 0 0 1 0 1.414L7 12a1 1 0 0 1-1.414 0L3.293 9.707a1 1 0 0 1 1.414-1.414l1.586 1.586 5.586-5.586a1 1 0 0 1 1.414 0z"/></svg>`,
        //     // radioIcon: `<svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"/></svg>`,
        //     // checkedColor: 'currentColor',
        //     // selectIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="\${theme.colors.gray[500]}"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`,
        //     // selectIconOffset: theme.spacing[2],
        //     // selectIconSize: '1.5em',
        // })
    },
    variants: {
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        container: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        flexDirection: ['responsive'],
        flexWrap: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        justifyContent: ['responsive'],
        alignContent: ['responsive'],
        flex: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        order: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        inset: ['responsive'],
        resize: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        fill: ['responsive'],
        stroke: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        fontSize: ['responsive'],
        fontStyle: ['responsive'],
        textTransform: ['responsive'],
        textDecoration: ['responsive', 'hover', 'focus'],
        fontSmoothing: ['responsive'],
        letterSpacing: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        wordBreak: ['responsive'],
        width: ['responsive'],
        zIndex: ['responsive'],
    },
    corePlugins: {},
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
};