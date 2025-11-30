document.addEventListener("DOMContentLoaded", () => {
  const heart = document.getElementById("dynamicHeart");
  const NUM_MESSAGES = 10;
  const DURATION = 2000;

  // 🔑 LISTA DE MENSAJES PERSONALIZADOS
  const messages = [
    "ME ENCANTAS",
    "MI MOCO",
    "TE QUIERO",
    "TE QUIERO MUCHOOO",
    "MI CHEF",
    "Feliz Cumpleaños 🧡",
    "MI MOCO",
    "TE QUERO MUCHOOO",
    "TE QUIERO",
    "MI AMOR",
    "Feliz Cumpleaños 🧡",
    "Feliz Cumpleaños 🧡",
    "TE QUIERO MUCHOO",
    "   ERES MI CHICA ",
    "   Feliz Cumpleaños 🧡",
    "   GRACIAS POR EXISTIR   ",
    "MI OJITOS DE CAUPLI    ",
    "MI MOCO",
    "MI CHEF",
    "TE QUIERO MUCHOO    ",
    "MI PRECIOSA",
    "MI ENCEBOLLADO",
    "MI OJITOS DE CAUPLI    ",
    "Feliz Cumpleaños 🧡",
    "MI OJITOS DE CAUPLI",
    "MI MUJER 🧡",
    "TE QUIERO"
  ];

  heart.addEventListener("click", (e) => {
    const rect = heart.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    for (let i = 0; i < NUM_MESSAGES; i++) {
      // Pasamos la lista de mensajes a la función createParticle
      createParticle(startX, startY, messages);
    }
  });

  function createParticle(x, y, messages) {
    const particle = document.createElement("div");
    particle.classList.add("message-particle");

    // Selecciona y asigna el mensaje aleatorio
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    particle.textContent = randomMessage;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    document.body.appendChild(particle);

    const angle = Math.random() * 2 * Math.PI;
    const distance = 80 + Math.random() * 50;

    const endX = x + distance * Math.cos(angle);
    const endY = y + distance * Math.sin(angle);

    // La animación de los mensajes
    const finalTranslateX = endX - x - particle.offsetWidth / 2;
    const finalTranslateY = endY - y - particle.offsetHeight / 2;

    particle.animate(
      [
        // Centrado en el origen (gracias al CSS) y con inicio pequeño
        { transform: "translate(-50%, -50%) scale(0.5)", opacity: 1 },
        // Fin de la animación, movido y transparente
        {
          transform: `translate(${finalTranslateX}px, ${finalTranslateY}px) scale(1)`,
          opacity: 0,
        },
      ],
      {
        duration: DURATION,
        easing: "ease-out",
        fill: "forwards",
      }
    );

    // Elimina el elemento del DOM después de que la animación termine
    setTimeout(() => {
      particle.remove();
    }, DURATION + 50);
  }
});
