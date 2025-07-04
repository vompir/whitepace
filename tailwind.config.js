/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Важно: путь к твоим файлам, где используются классы Tailwind
    ],
    theme: {
        extend: {}, // сюда ты можешь добавлять свои стили (цвета, шрифты и т.д.)
    },
    plugins: [],
}
