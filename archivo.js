const pokemones = ["Sprigatito", "Fennekin", "Piplup"];
const ventajas = {
    Sprigatito: "Piplup", 
    Fennekin: "Sprigatito", 
    Piplup: "Fennekin", 
    Oculto: "Todos" 
};

const rivalOculto = "Arceus lv 100"; 

function elegirRival(usuario) {
    
    const esRivalOculto = Math.random() < 0.2; 
    if (esRivalOculto) {
        return rivalOculto;
    }

    
    let rival;
    do {
        rival = pokemones[Math.floor(Math.random() * pokemones.length)];
    } while (rival === usuario);
    return rival;
}

function determinarResultado(usuario, rival) {
    if (rival === rivalOculto) {
        return `¡Perdiste contra dios ${rival}! Es el fin de tu viaje`;
    } else if (ventajas[usuario] === rival) {
        return "¡Ganaste! 🎉";
    } else if (ventajas[rival] === usuario) {
        return "Perdiste... 😢";
    } else {
        return "Es un empate. 🤝";
    }
}

function simuladorBatallaPokemon() {
    while (true) {
        
        let eleccion = parseInt(prompt(`Elige tu Pokémon inicial:\n1. Sprigatito\n2. Fennekin\n3. Piplup\n\nIngresa 0 para salir del juego.`));

        
        if (eleccion === 0) {
            alert("Gracias por jugar. ¡Buen viaje Entrenador!");
            break; 
        }

        
        if (eleccion < 1 || eleccion > 3 || isNaN(eleccion)) {
            alert("Opción no válida. Intenta nuevamente.");
            continue; 
        }

        const usuario = pokemones[eleccion - 1]; 
        const rival = elegirRival(usuario); 

        alert(`Elegiste a ${usuario}. Tu rival es ${rival}.`);

        const resultado = determinarResultado(usuario, rival); 
        alert(resultado);
    }
}


simuladorBatallaPokemon();