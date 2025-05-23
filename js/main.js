let start = document.getElementById('title__div')
let words = ['amigos', 'felicidad', 'comida', 'señores', 'numeros', 'celular', 'profesor', 'aguacate', 'medellin', 'afganistan', 'hipopotamo', 'revolucionario', 'gritar', 'ventana', 'windows', 'linux', 'apple', 'android', 'venezuela', 'zapato', 'deportivo', 'futbol', 'manzana', 'uva', 'solitario', 'iva', 'puerta', 'locomotora', 'automovil', 'ambulancia', 'venecia', 'silencio', 'javascript', 'python', 'github', 'html', 'css', 'scrum', 'hambre', 'ñoño', 'niños', 'niña', 'niñera', 'vivienda', 'apartamentos', 'cancion', 'microfono']
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
let hiddenWord = selectedWord.split('').map(l => (l === ' ' ? ' ' : '_'));
console.log(`Palabra seleccionada: ${selectedWord}`);

start.innerHTML = `
<h1 id="welcome">Bienvenido, prueba tu suerte</h1>
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
let count = 0

document.querySelectorAll('.list-abc button').forEach(button => {
    button.addEventListener('click', (event) => {
    event.preventDefault()
    let letra = button.textContent;
    button.disabled = true;
    button.style.opacity = '0.5';
    button.style.background = 'beige'
    console.log(`Letra presionada: '${letra}'`);

    let correct = false

    for(let i=0; i < selectedWord.length; i++) {
        if (selectedWord[i] == letra) {
            hiddenWord[i] = letra
            correct = true
        }
    }
    let fullWord = document.getElementById('word');
    fullWord.innerHTML = hiddenWord.join(' ');

    if (!correct) {
        alert('¡Ups, no era!')
        count++
        console.log(count);
        
    }
    if (!hiddenWord.includes('_')) {
        alert('Ganaste!!')
        let title = document.getElementById('welcome')
        title.textContent = 'Reiniciando...';
        title.style.color = 'white'

        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    if (count === 8) {
        alert(`¡Perdiste! La palabra era: ${selectedWord}`);
        let title = document.getElementById('welcome')
        title.textContent = 'Reiniciando...';
        title.style.color = 'white'

        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    });
});