/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    // Add Font to Font Array
    fontFamily: {
      sans: [
        '"Inter"',
        '"SFRounded"',
        "ui-rounded",
        '"SF Pro Rounded"',
        "-apple-system",
        "BlinkMacSystemFont",
        "ui-sans-serif",
        "system-ui",
        "Helvetica Neue",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      altsans: [
        '"Geologica"',
        "-apple-system",
        "BlinkMacSystemFont",
        "ui-sans-serif",
        "system-ui",
        "Helvetica Neue",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        '"Literata"',
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        '"JetBrains Mono"',
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },

    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },

  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        dark: {
          primary: "#c084fc", // violet-400
          "primary-focus": "#d8b4fe",
          secondary: "#facc15", // fusch-400
          "secondary-focus": "#f0abfc",
          accent: "#facc15", // yellow-400
          "accent-focus": "#fde047",

          neutral: "#404040",
          // "neutral-focus": "#475569",
          // "neutral-content": "#f1f5f9",

          "base-300": "#0a0a0a",
          "base-200": "#171717",
          "base-100": "#262626",
          "base-content": "#d1d5db",

          info: "#60a5fa", // blue-400
          success: "#4ade80", // green-400
          warning: "#facc15", // orange-400
          error: "#f87171", // red-400

          "--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--btn-text-case": "normal", // set default text transform for buttons
        },
      },
    ],
  },
};
