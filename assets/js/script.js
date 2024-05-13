// Calcula el tiempo restante hasta la fecha de lanzamiento
const launchDate = new Date('2024-07-18').getTime();

const countdown = document.getElementById('countdown');

// Actualiza el contador cada segundo
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  // Calcula los días, horas, minutos y segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Muestra el contador en el elemento con id "countdown"
  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Si la cuenta regresiva termina, detiene el intervalo
  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = '¡Ya estamos en línea!';
  }
}, 1000);
