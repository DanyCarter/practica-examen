document.addEventListener("DOMContentLoaded", () => {
    const resultArea = document.getElementById("resultArea");
    const resultPeri = document.getElementById("resultPeri");
    const calculateButton = document.getElementById("calculate");

    calculateButton.addEventListener("click", () => {
        const longitud = parseFloat(document.getElementById("longitud").value);
        const ancho = parseFloat(document.getElementById("ancho").value);

        if (!isNaN(longitud) && !isNaN(ancho)) {
            const area = longitud * ancho;
            const perimetro = 2 * (longitud + ancho);

            resultArea.innerHTML = `El resultado del Área: ${area}`;
            resultPeri.innerHTML = `El resultado del Perímetro es: ${perimetro}`;
        } else {
            resultArea.innerHTML = `Por favor, ingrese valores válidos`;
            resultPeri.innerHTML = ""; 
        }
    });
});