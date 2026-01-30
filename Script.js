//Esto es para poder alquilar un coche
function alquilerCoche() {
    let edad = parseInt(prompt("Escribe tu edad:"));

    let tieneCarnet = prompt("¿Tienes carnet de conducir?\n1 = Si\n2 = No") == "1";
    let accidente = prompt("¿Has tenido algun accidente?\n1 = Si\n2 = No") == "1";
    let tarjeta = prompt("¿Tienes tarjeta de crédito?\n1 = Si\n2 = No") == "1";
    let estado;

    if (accidente) {
        estado = "accidente";
    } else if (edad < 25) {
        estado = "menor25";
    } else if (!tieneCarnet) {
        estado = "sinCarnet";
    } else if (!tarjeta) {
        estado = "sinTarjeta";
    } else {
        estado = "aprobado";
    }

    switch (estado) {
        case "accidente":
            alert("No puedes alquilar: tienes antecedentes por accidentes.");
            break;
        case "menor25":
            alert("Solicitud denegada: no tienes edad suficiente (minimo 25 años).");
            break;
        case "sinCarnet":
            alert("Solicitud denegada: no tienes carnet de conducir.");
            break;
        case "sinTarjeta":
            alert("Solicitud denegada: no tienes tarjeta de credito.");
            break;
        case "aprobado":
            alert("Solicitud aceptada: puedes alquilar el coche.");
            break;
    }
}

//Esto es para optener el nombre, los apellidos, el DNI y la fecha de nacimiento del usuario
function mostrarDatos() {
    // Pedimos todos los datos mediante prompts
    let nombre = prompt("Escribe tu nombre de Usuario:");

    // Si el usuario cancela el primer prompt, salimos
    if (nombre === null) {
        document.getElementById("demo").innerHTML = "¡¡¡ Operación cancelada, por Inutil!!!";
        return;
    }

    let apellido = prompt("Escribe tu apellido(Te lo puedes inventar):");
    if (apellido === null) {
        document.getElementById("demo").innerHTML = "¡¡¡ Operación cancelada, por Inutil!!!";
        return;
    }

    let fecha = prompt("Escribe tu fecha de nacimiento(ej: 1990-05-15):");
    if (fecha === null) {
        document.getElementById("demo").innerHTML = "¡¡¡ Operación cancelada, por Inutil!!!";
        return;
    }

    let DNI = prompt("Escribe tu DNI:");
    if (DNI === null) {
        document.getElementById("demo").innerHTML = "¡¡¡ Operación cancelada, por Inutil!!!";
        return;
    }

    // Limpiamos los espacios
    nombre = nombre.trim();
    apellido = apellido.trim();
    fecha = fecha.trim();
    DNI = DNI.trim();

    // Validamos que no haya campos vacíos
    if (nombre === "" || apellido === "" || fecha === "" || DNI === "") {
        document.getElementById("demo").innerHTML = "❌ ¡¡¡ Inútil, tienes que rellenar los 4 campos!!!";
        return;
    }

    // Si el DNI no tiene exactamente 8 números
    if (DNI.length !== 8 || isNaN(DNI)) {
        document.getElementById("demo").innerHTML = "❌ ¡¡¡ Inútil, tienes que poner 8 numeros, no 80!!!";
        return;
    }

    // Para averiguar la letra del DNI
    let modulo = parseInt(DNI) % 23;
    let letra;

    switch (modulo) {
        case 0: letra = "T"; break;
        case 1: letra = "R"; break;
        case 2: letra = "W"; break;
        case 3: letra = "A"; break;
        case 4: letra = "G"; break;
        case 5: letra = "M"; break;
        case 6: letra = "Y"; break;
        case 7: letra = "F"; break;
        case 8: letra = "P"; break;
        case 9: letra = "D"; break;
        case 10: letra = "X"; break;
        case 11: letra = "B"; break;
        case 12: letra = "N"; break;
        case 13: letra = "J"; break;
        case 14: letra = "Z"; break;
        case 15: letra = "S"; break;
        case 16: letra = "Q"; break;
        case 17: letra = "V"; break;
        case 18: letra = "H"; break;
        case 19: letra = "L"; break;
        case 20: letra = "C"; break;
        case 21: letra = "K"; break;
        case 22: letra = "E"; break;
    }

    // Formateamos la fecha: día mes año
    let partes = fecha.split("-");

    // Validamos formato de fecha
    if (partes.length !== 3) {
        document.getElementById("demo").innerHTML = "❌ ¡¡¡ Inútil, tienes que ponerla igual que en el ejemplo!!!";
        return;
    }

    let año = partes[0];
    let mesNumero = parseInt(partes[1]);
    let dia = parseInt(partes[2]);

    // Validamos año, mes y día
    if (año.length !== 4 || isNaN(año)) {
        document.getElementById("demo").innerHTML = "❌ ¡¡¡ Inútil, tienes que poner 4 digitos!!!";
        return;
    }

    if (mesNumero < 1 || mesNumero > 12 || isNaN(mesNumero)) {
        document.getElementById("demo").innerHTML = "❌ ¡¡¡ Inútil, el mes deve ser entre 01 y 12!!!";
        return;
    }

    if (dia < 1 || dia > 31 || isNaN(dia)) {
        document.getElementById("demo").innerHTML = "❌ ¡¡¡ Inútil, el dia deve ser entre 01 y 31!!!";
        return;
    }

    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    let mesNombre = meses[mesNumero - 1];
    let fechaFormateada = `${dia} de ${mesNombre} de ${año}`;

    // Mostramos el resultado con mejor formato
    document.getElementById("demo").innerHTML = `
        <div style="background-color: #f0f8ff; padding: 20px; border-radius: 10px; border-left: 5px solid #4CAF50;">
            <h2 style="color: #2E8B57;">✅ Registro Completado</h2>
            <p><strong>Nombre de Usuario:</strong> ${nombre}</p>
            <p><strong>Tu apellido es:</strong>${apellido}</p>
            <p><strong>Fecha de nacimiento:</strong> ${fechaFormateada}</p>
            <p><strong>DNI completo:</strong> ${DNI}-${letra}</p>
            <hr style="border: 1px dashed #ccc;">
        </div>
    `;
}

//Esto es para que aparezca la foto del coche elegido de diesel
const grid = document.getElementById("catalogo-grid-diesel");
const resultado = document.getElementById("resultado");

// Mapeo de los coches (usando tus rutas e imágenes locales)
const coches = {
    "citroen": {
        modelo: "Citroen C5 Aircross",
        imagen: "coches/Diesel/Imagenes/Coche d1/Coche d1.jpg",
        enlace: "Coches/Diesel/Coche d1.html",
        claseImg: "d1-cambio"
    },
    "Peugeot": {
        modelo: "Peugeot 2008",
        imagen: "coches/Diesel/Imagenes/Coche d2/coche d2.jpg",
        enlace: "Coches/Diesel/Coche d2.html",
        claseImg: "d2-cambio"
    },
    "bmw": {
        modelo: "BMW Serie 1",
        imagen: "coches/Diesel/Imagenes/Coche d3/coche d3.jpg",
        enlace: "Coches/Diesel/Coche d3.html",
        claseImg: "d3-cambio"
    },
    "volkswagen": {
        modelo: "Volkswagen Passat",
        imagen: "coches/Diesel/Imagenes/Coche d4/Coche d4.jpg",
        enlace: "Coches/Diesel/Coche d4.html",
        claseImg: "d4-cambio"
    },
    "renault": {
        modelo: "Renault Mégane",
        imagen: "coches/Diesel/Imagenes/Coche d5/Coche d5.jpg",
        enlace: "Coches/Diesel/Coche d5.html",
        claseImg: "d5-cambio"
    },
    "audi": {
        modelo: "Audi Q3",
        imagen: "coches/Diesel/Imagenes/Coche d6/coche d6.jpg",
        enlace: "Coches/Diesel/Coche d6.html",
        claseImg: "d6-cambio"
    }
};

function mostrarCoched() {
    const select = document.getElementById("cars");
    const marca = select.value;

    // Siempre limpiamos el resultado
    resultado.innerHTML = "";

    if (marca && coches[marca]) {
        // Hay selección → ocultar la grid completa
        grid.style.display = "none";

        const info = coches[marca];

        resultado.innerHTML = `
                    <div class="container imagen-coche" style="display: flex; justify-content: center; align-items: center;">
                        <a href="${info.enlace}">
                            <img src="${info.imagen}" class="${info.claseImg}" alt="${info.modelo}">
                        </a>
                        <div class="center">${info.modelo}</div>
                    </div>
                `;
    } else {
        // Sin selección → mostrar la grid de nuevo y ocultar resultado
        grid.style.display = "";  // o "grid" si lo tienes definido en CSS
        resultado.innerHTML = "";
    }
}

//Esto es para que aparezca la foto del coche elegido de diesel
function mostrarGasolina() {
    console.log("¡La función se ejecutó!");  // ← Esto DEBE aparecer en consola

    const select = document.getElementById("select-gasolina");
    const resultado = document.getElementById("zona-resultado-gasolina");
    const grid = document.getElementById("grid-gasolina");

    if (!select || !resultado || !grid) {
        console.error("ERROR: Algún elemento no se encuentra");
        if (!select) console.error("→ select-gasolina no existe");
        if (!resultado) console.error("→ zona-resultado-gasolina no existe");
        if (!grid) console.error("→ grid-gasolina no existe");
        return;
    }

    const marca = select.value;
    console.log("Marca seleccionada:", marca);  // ← mira esto en consola

    resultado.innerHTML = "";  // limpiamos

    if (marca === "") {
        console.log("Volviendo a mostrar catálogo");
        grid.style.display = "grid";  // o "" si tu CSS lo maneja
        return;
    }

    // Datos de coches (usa tus rutas exactas)
    const coches = {
        citroen: { modelo: "Citroen C3", imagen: "coches/Gasolina/Imagenes/Coche g1/coche g1.jpg", enlace: "Coches/Gasolina/Coche g1.html", clase: "g1-cambio" },
        mercedes: { modelo: "Mercedes Clase CLA", imagen: "coches/Gasolina/Imagenes/Coche g2/coche g2.jpg", enlace: "Coches/Gasolina/Coche g2.html", clase: "g2-cambio" },
        renault: { modelo: "Renault Twingo", imagen: "coches/Gasolina/Imagenes/Coche g3/coche g3.jpg", enlace: "Coches/Gasolina/Coche g3.html", clase: "g3-cambio" },
        volkswagen: { modelo: "Volkswagen Polo", imagen: "coches/Gasolina/Imagenes/Coche g4/coche g4.jpg", enlace: "Coches/Gasolina/Coche g4.html", clase: "g4-cambio" },
        smart: { modelo: "Smart Forfour", imagen: "coches/Gasolina/Imagenes/Coche g5/coche g5.jpg", enlace: "Coches/Gasolina/Coche g5.html", clase: "g5-cambio" },
        bmw: { modelo: "BMW Serie 4", imagen: "coches/Gasolina/Imagenes/Coche g6/coche g6.jpg", enlace: "Coches/Gasolina/Coche g6.html", clase: "g6-cambio" }
    };

    const info = coches[marca];
    if (!info) {
        console.warn("No hay datos para:", marca);
        return;
    }

    console.log("Mostrando coche:", info.modelo);

    grid.style.display = "none";

    resultado.innerHTML = `
        <div class="container imagen-coche" style="display: flex; justify-content: center; align-items: center; margin: 0 auto;">
            <a href="${info.enlace}">
                <img src="${info.imagen}" class="${info.clase}" alt="${info.modelo}" style="max-width:100%; height:auto;">
            </a>
            <div class="center">${info.modelo}</div>
        </div>
    `;
}

//Esto sirve para bolver a arriba de la pagina
const toTopBtn = document.querySelector('.to-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        toTopBtn.classList.add('visible');
    } else {
        toTopBtn.classList.remove('visible');
    }
});

toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
