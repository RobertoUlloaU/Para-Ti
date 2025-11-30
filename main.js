// Función para obtener parámetros de la URL (usado para pasar el texto)
function getURLParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// Función principal para el efecto de máquina de escribir (DEDICATORIA)
function showDedicationText() {
  let text = getURLParam('text');
  
  if (!text) {
    // TEXTO DE DEDICATORIA PREDETERMINADO
    text = 'FELIZZZZ CUMPLEAÑOS, mi moco, mi preciosa, mi Carolay, mi encebollado, mi chica, mi guagua de pan, mi ojitos de capulí.\n\nEstas flores son para ti te las hice con mucho cariño y las proximas te las voy a dar en persona.\n\nQuiero que sepas que eres una de las personas más importantes para mí, y te quiero recordar que TE QUIERO MUCHO, no quiero que nunca lo olvides.\n\nEs tu cumpleaños, ya tienes 21 años (ya estás vieja JAJAJAJA), quiero que disfrutes mucho tu cumpleaños. Sé que ha sido un año muy pesado para ti, pero todo eso te llevó a este momento en el que tú y yo por fin volvimos a hablar y a saber lo que queremos, o bueno, yo sé lo que quiero y lo que quiero es a ti. Si pudiera teletransportarme a donde tú estás, lo hiciera y pasaríamos este día juntos, haciendo muchas cosas y sobre todo, disfrutando de la compañía del uno del otro.\n\nNo te imaginas las ganas que me dan de estar ahí contigo y no en llamada, pero muy pronto nos vamos a ver y voy a aprovecharte todo el tiempo que estés acá para abrazarte, darte muchos besitos.\n\nMe gustan tus ojos, tus labios, tus gestos que haces con la cara, me parecen muuuy bonitos y muuuy tiernos. Ver tu sonrisa hace que cambie mi estado de ánimo, y solo con hablar contigo me olvido de todo el estrés, eres mi calma, me das mucha pero mucha paz.\n\nEl haber coincidido nuevamente en tu vida me pone muy muy feliz, que a pesar de tantos años volvamos a sentir lo mismo e incluso hasta más, y eso significa que estamos destinados a estar juntos para el resto de nuestras vidas.\n\nY sí, te lo he dicho, pero cada día que va pasando, yo me enamoro mucho más de ti, porque cada día te conozco más y quiero conocerte más de lo que te conozco, conocerte más de lo que te he llegado a conocer. Quiero conocer cada una de tus facetas, descubrir y enamorarme perdidamente de tu esencia, y ya estoy empezando a conocerla y te aseguro que me encantaaa. Quiero conocer tus sueños, los grandes y los pequeños, y me pregunto si acaso podría caber en alguno de ellos.\n\nQuiero que confíes en mí sin miedo a que te lastime, quiero besarte, pero también quiero saber por qué lo haces, quiero entenderte, quiero abrazarte hasta lo profundo de mi ser, aprender a quererte sin que tengas temor a perderte, porque lo único que quiero es amarte con cuidado, y le sé pedir a Dios que me ayude con este sentimiento, que me ayude a saber cómo hacerlo porque yo no sé qué haría si te pierdo.\n\nMe importas demasiado, yo sé que te lo he dicho muchas veces, pero es en serio. Quiero que siempre te cuides no solo por ti sino también por mí, te juro que no soportaría si te pasa algo malo, así que cruza la calle muy bien JAJAJAJAJAJSJJ (en serio te digo). Cuentas conmigo para lo que sea, para todo. Yo siempre te apoyaré y siempre te voy a escuchar, te puedo ayudar en lo que necesites o todo lo que quieras, yo te voy a ayudar (menos tener dos, o sea no seas bobita JAJAJAJ).\n\nMe gusta todo de ti, has lo loca, esquizofrénica, mamona, insoportable, risueña, calenturienta, pero sobre todo tu amor, y el que me lo hayas dado a mí me encanta demasiado, me haces sentir el hombre más afortunado del mundo, y siempre pero SIEMPRE lo voy a cuidar y respetar mucho mucho, porque mi amor, yo te lo entregué, y que millones de besos quiero darte, quiero hasta lo más profundo de tu ser amarte, no quiero que tengas miedo a todo esto que está pasando.\n\nMe faltan muchas cosas por aprender sobre el amor, pero me gustaría aprenderlas contigo. Aunque tenemos muchos errores por mejorar, me encantaría mejorarlos juntos, porque yo quiero crecer contigo y aprender muchas cosas el uno del otro. Si bien dicen por ahí que hay que disfrutar la juventud conociendo a mil chicas, pero yo lo que quiero y deseo con todo mi corazón es disfrutarlo haciendo mil cosas solo con una, y esa eres tu porque yo te escogí a ti, para dedicarte mi tiempo.\n\nQuiero quererte muy bonitoooo.\n\nQuiero que sepas que yo te entregué mi confianza, que es lo más valioso que tengo para dar a una persona, y a ti te la entregué. Quiero que sepas que te pieso todo el día, pero tooooodooo el diaaaaa, y que cada segundo que transcurre más te quiero.\n\nTe quiero mucho y no sé si estás leyendo esto en llamada, aunque no creo JAJAJAJ, pero solo quiero que sepas lo cuanto TE QUIERO y sé lo que quiero, y yo te quiero a ti, en mi vida, en mi corazón y junto a mi. \n\nPD: estas dos canciones te las dedico \n\n PD 2: Haz click en el corazon las veces que quieras.';
  } else {
    text = decodeURIComponent(text).replace(/\n/g, '\n');
  }

  const container = document.getElementById('dedication-text');
  if (!container) return; 

  container.textContent = ''; 
  
  let i = 0;

  function type() {
    if (i <= text.length) {
      container.textContent = text.slice(0, i);
      i++;
      
      let delay = 45; 
      
      if (text[i - 2] === '\n') {
          delay = 350;
      }

      setTimeout(type, delay);
    } else {
      setTimeout(() => {
        container.style.borderRight = 'none';
      }, 1000);
    }
  }

  type();
}

// Función que se ejecuta cuando la página está completamente cargada
onload = () => {
    document.body.classList.remove("container"); 
    showDedicationText();
};