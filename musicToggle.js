document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const toggleButton = document.getElementById('musicToggleButton');
    const body = document.body; // Referencia al cuerpo de la página

    const songs = [
        { src: "sound/Its-been-long-long-time.mp3", name: "🎵 It's Been a Long, Long Time" },
        { src: "sound/Stand-by-me.mp3", name: "         🎶 Stand By Me        " } 
    ];

    let currentSongIndex = 0; 
    let playbackInitiated = false; // Bandera para saber si ya se permitió la reproducción
    
    // Muestra el nombre de la canción de inicio
    toggleButton.textContent = "CLICK AQUI PARA CAMBIAR LA MÚSICA";
    

    // ------------------------------------------------------------------
    // 🔑 CLAVE: INICIAR LA REPRODUCCIÓN CON CUALQUIER INTERACCIÓN
    // ------------------------------------------------------------------
    function initiatePlayback() {
        if (playbackInitiated) return;

        audioPlayer.play().then(() => {
            console.log("Reproducción iniciada exitosamente con la primera interacción.");
            playbackInitiated = true;
            // Una vez que inicia, ya podemos quitar este detector de clics general
            body.removeEventListener('click', initiatePlayback); 
            body.removeEventListener('touchstart', initiatePlayback);
        }).catch(error => {
            console.log("El navegador permitió la interacción, pero hubo otro error al iniciar la reproducción:", error);
        });
    }
    
    // Agrega listeners a todo el cuerpo de la página para click y toque (táctil)
    body.addEventListener('click', initiatePlayback);
    body.addEventListener('touchstart', initiatePlayback);


    // ------------------------------------------------------------------
    // LÓGICA DEL BOTÓN DE CAMBIO (SOLO PARA CAMBIAR DE CANCIÓN)
    // ------------------------------------------------------------------
    toggleButton.addEventListener('click', (e) => {
        // Detiene la propagación del clic para que no active dos veces el initiatePlayback
        e.stopPropagation(); 
        
        // Si no se ha iniciado la reproducción, el botón no debe hacer nada más que iniciarla
        if (!playbackInitiated) {
            initiatePlayback();
            return;
        }

        // Si ya está sonando, cambiamos de canción
        audioPlayer.pause();
        
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        const nextSong = songs[currentSongIndex];

        audioPlayer.src = nextSong.src;
        toggleButton.textContent = nextSong.name;

        audioPlayer.load();
        audioPlayer.play().catch(error => {
            console.error("Error al reproducir la siguiente canción: ", error);
        });
    });

    // ------------------------------------------------------------------
    // Ajuste de texto para el botón (muestra la canción actual si no está pausado)
    audioPlayer.addEventListener('play', () => {
         toggleButton.textContent = songs[currentSongIndex].name;
    });

    audioPlayer.addEventListener('pause', () => {
        // Opcional: Cuando pausa (o termina), podemos volver al texto de "CLICK..."
        if (!audioPlayer.ended) {
            toggleButton.textContent = "CLICK PARA CAMBIAR LA MÚSICA";
        }
    });
});