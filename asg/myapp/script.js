const kurals = [

{
kural:"அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு",
meaning:"Just as 'A' is the first letter of all letters, God is the first in the world."
},

{
kural:"கற்றதனால் ஆய பயனென்கொல் வாலறிவன் நற்றாள் தொழாஅர் எனின்",
meaning:"What use is learning if one does not worship the feet of the wise?"
},

{
kural:"ஒழுக்கம் விழுப்பந் தரலான் ஒழுக்கம் உயிரினும் ஓம்பப் படும்",
meaning:"Good conduct gives greatness, so it must be preserved more than life."
},

{
kural:"அறத்தொடு நடுவுவேண்டும் ஆயினும் பிறத்தொடு பேணிப் பழகு",
meaning:"One should act with virtue and fairness while respecting others."
},

{
kural:"இனிய உளவாக இன்னாத கூறல் கனிஇருப்பக் காய்கவர்ந் தற்று",
meaning:"Speaking harsh words when sweet ones are possible is like eating raw fruit instead of ripe."
}

];

function generateKural(){

let random = Math.floor(Math.random() * kurals.length);

document.getElementById("kural").innerText = kurals[random].kural;

document.getElementById("meaning").innerText = kurals[random].meaning;

}