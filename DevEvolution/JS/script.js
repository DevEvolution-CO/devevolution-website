// Función mejorada para mostrar páginas con scroll correcto
function showPage(pageId) {
  // Primero hacer scroll al top inmediatamente
  window.scrollTo(0, 0);
  
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('visible');
  });
  
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('visible');
  }
  
  // Cerrar el menú móvil si está abierto
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');
  if (menu && hamburger) {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  }
  
  // Asegurar que el scroll esté en el top después de un pequeño delay
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 50);
}