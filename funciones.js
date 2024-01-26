function validarEntrada(event) {
    const inputValue = event.target.value;
    console.log(typeof inputValue);
    // Reemplazar cualquier carácter que no sea un número con una cadena vacía
    event.target.value = inputValue.replace(/\D/g, '');
}

function validarNivel(nivel) {
    // Si valor es mayor que 10 no está permitido
    if (nivel > 10) {
        alert("El límite máximo es de 10 niveles.");
        return 10; // Devolver el valor máximo permitido
    }

    // Si valor es menor que 2 no está permitido
    if (nivel < 2) {
        alert("El límite mínimo es de 2 niveles.");
        return 2; // Devolver el valor mínimo permitido
    }

    return nivel; // Devolver el valor original si está dentro de los límites
}

function checkEnter(event) {
    if (event.key === "Enter") {
        const nivelInput = document.getElementById("nivelInput");
        const nivel = parseInt(nivelInput.value);
        nivelInput.value = validarNivel(nivel);

        imprimirTriangulo(); // Llamar a la función para generar el triángulo
    }
}

// Función para calcular el coeficiente binomial C(n, k)
function calcularCoeficienteBinomial(n, k) {
    if (k === 0 || k === n) {
        return 1;
    } else {
        return calcularCoeficienteBinomial(n - 1, k - 1) + calcularCoeficienteBinomial(n - 1, k);
    }
}

// Función para imprimir el Triángulo de Pascal hasta el nivel dado
function imprimirTriangulo() {
    const nivelInput = document.getElementById("nivelInput");
    const nivel = parseInt(nivelInput.value);

    const trianguloOutput = document.getElementById("trianguloOutput");

    // Validar el nivel antes de imprimir el triángulo
    const nivelValidado = validarNivel(nivel);

    let output = "";
    for (let i = 0; i < nivelValidado; i++) {
        for (let j = 0; j <= i; j++) {
            output += calcularCoeficienteBinomial(i, j) + " ";
        }
        output += "<br>";
    }

    trianguloOutput.innerHTML = output;
}
