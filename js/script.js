function calcularMedia() {
    const nota1 = document.querySelector('#nota1');
    const nota2 = document.querySelector('#nota2');
    const nota3 = document.querySelector('#nota3');
    const resultado = document.querySelector('#resultado'); 

    const valor1 = parseFloat(nota1.value);
    const valor2 = parseFloat(nota2.value);
    const valor3 = parseFloat(nota3.value); 

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        resultado.textContent = `Insira todas as notas`;
        return;
    }

    const media = (valor1 + valor2 + valor3) / 3;

    resultado.textContent = media.toFixed(1);
}