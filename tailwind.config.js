/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                white: "#fff",
                "dark-primary": {
                    DEFAULT: "#262626",
                    light: "#404040",
                    dark: "#171717",
                    lighter: "#737373",
                },
                "dark-accent": {
                    DEFAULT: "#888888",
                },
                "dark-red": "#dc2626",
                "dark-blue": "#3b82f6",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            height: {
                88: "22rem",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
