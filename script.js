
const emitirNotasButton = document.getElementById('emitir-notas');
const emitirNotasOptions = document.getElementById('emitir-notas-options');

emitirNotasButton.addEventListener('click', () => {
    emitirNotasOptions.style.display = (emitirNotasOptions.style.display === 'flex') ? 'none' : 'flex';
});
