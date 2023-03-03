/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "#73BDE9",
                lightblue: "#F7FCFF",
                orange: "#E9A573",
                textblack: "#264354",
                textbrown: "#543F26",
                error: "#FF0000",

                base: "#73BDE9",
                accent: "#E9A573",
                basetext: "#264354",
                accenttext: "#543F26",
            },
            screens: {
                sm: "1024px",
                md: "1366px",
                lg: "1440px",
                xl: "1920px",
            },

            // fontSize: {
            //     sm: ["14px", "16px"],
            //     base: ["16px", "18px"],
            //     lg: ["22px", "26px"],
            // },
        },
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
