/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'jomhuria': ['Jomhuria', 'serif'],
      },
      colors: {
        'azul': '#0D3B66',
        'creme': '#FAF0CA',
        'amarelo': '#F4D35E',
        'laranja': '#EE964B',
        'vermelho': '#F95738',
        'verde': '#A5BE00',
        'vermelhosenai': '#FF0000',
        'amarelopan': '#F8C956',
      },
    },
  },
  plugins: [],
}
