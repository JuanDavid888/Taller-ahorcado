let start = document.getElementById('title__div')
let words = ['amigos', 'felicidad', 'comida', 'señores', 'numeros', 'celular', 'profesor', 'aguacate', 'medellin', 'afganistan']
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
let hiddenWord = selectedWord.split('').map(l => (l === ' ' ? ' ' : '_'));
console.log(`Palabra seleccionada: ${selectedWord}`);

start.innerHTML = `
<h1 class="welcome">Bienvenido, prueba tu suerte</h1>
<h2 id="word">${hiddenWord.join(' ')}</h2>
<ul class= "list-abc">
<button>a</button>
<button>b</button>
<button>c</button>
<button>d</button>
<button>e</button>
<button>f</button>
<button>g</button>
<button>h</button>
<button>i</button>
<button>j</button>
<button>k</button>
<button>l</button>
<button>m</button>
<button>n</button>
<button>ñ</button>
<button>o</button>
<button>p</button>
<button>q</button>
<button>r</button>
<button>s</button>
<button>t</button>
<button>u</button>
<button>v</button>
<button>w</button>
<button>x</button>
<button>y</button>
<button>z</button>
</ul>
`
document.querySelectorAll('.list-abc button').forEach(button => {
    button.addEventListener('click', () => {
    let letra = button.textContent;
    button.disabled = true;
    button.style.opacity = '0.5';
    button.style.background = 'beige'
    console.log(`Letra presionada: '${letra}'`);

    if(selectedWord.includes(letra)) {
        alert('¡Sigue así!');
    }
    else {
        alert('¡Ups, no era!');
    }

    });
});