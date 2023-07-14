let quotes = [
    ' "Hard work is worthless for those that don’t believe in themselves."- Naruto Uzumaki (Naruto)', 
    ' "Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully." - Koro Sensei (Assasination Classroom)',
    ' "How can you move forward if you keep regretting the past?" - Edward Elric (Fullmetal Alchemist)', 
    ' "OK." - Saitama (OnePunchMan)',
    ' “One Piece Does Exist!” - Edward Newgate (OnePiece)', 
    ' “I will never draw my sword for another man again, or be dangled by another mans dream. From now on, I will fight my own battles. - Guts (Berserk)”' ,
    ' "Bida ang Saya" - Jolibee',
    ' "Para kanino ka bumabangon?" - Nescafe ',
    ' "Bigyan ng jacket!" - Willie Revillame',
    ' "Bakit galit ang beshy ko?" - Unknown',

]

function quoteGen () {
    let randomQuote = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote]
}

window.onload = function() {
      quoteGen ();
    };