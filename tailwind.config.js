/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        logogame: "url('/bg.png')",
        game: "url('/game.png')",
        hello: "url('/hello.png')",
        gif: "url('/221837.gif')",
      },
      backgroundSize: {
        cover: 'cover', // Allowing cover size for backgrounds
      },
      fontFamily: {
        pixelify: ['"Pixelify Sans"', 'sans-serif'],
      },
      animation: {
        sparkle: 'sparkle 5s infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '100% 100%' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-triangle-left': {
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        },
        '.clip-triangle-right': {
          clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
        },
      })
    },
  ],
};
