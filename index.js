
let name, age;
name = prompt("ESCRIBA SU NOMBRE VV...");
age = prompt("PON TU EDAD(LA QUE ESTAS CUMPLIENDIO PENDEJO🖕)...");
age = parseInt(age);
if (age <= 13) {
    document.write(" PRESIONA EL 13!!! " , name);
}else{
    if (age > 13) {
        document.write(name, " PINCHE VIEJOOOO... ")
    }
    
}

document.getElementById('boton').addEventListener('click', function() {
    var mensaje = document.getElementById('mensaje');
    mensaje.classList.toggle('oculto');
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("fireworks-container");
    const colors = ["red", "yellow", "blue", "green", "pink", "purple", "orange"];

    function createFirework() {
        const firework = document.createElement("div");
        firework.classList.add("firework");

        // Posiciona el fuego artificial en un lugar aleatorio a lo largo del contenedor
        firework.style.left = Math.random() * 100 + "%";

        // Selecciona un color aleatorio para el fuego artificial
        const color = colors[Math.floor(Math.random() * colors.length)];
        firework.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}`;

        // Añade el fuego artificial al contenedor
        container.appendChild(firework);

        // Elimina el fuego artificial después de que la animación termine
        firework.addEventListener("animationend", () => {
            firework.remove();
        });
    }

    // Genera fuegos artificiales continuamente
    setInterval(createFirework, 500); // Puedes ajustar el intervalo para más o menos fuegos artificiales
});
