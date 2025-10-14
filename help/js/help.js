    /*
    fetch(menuIndex)
      .then(resp => resp.text())
      .then(md => {
        document.getElementById('index-content').innerHTML = marked.parse(md);
      });
    document.getElementById('index-content').addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        document.querySelectorAll('#index-content a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
        const href = e.target.getAttribute('href');
        fetch(href)
          .then(resp => resp.text())
          .then(md => {
            document.getElementById('main-content').innerHTML = marked.parse(md);
          })
          .catch(() => {
            document.getElementById('main-content').innerHTML = "<p><em>No se encontró la descripción.</em></p>";
          });
      }
    });*/
  
  // Función para cargar contenido desde un enlace
  function cargarContenido(href) {
    fetch(href)
      .then(resp => resp.text())
      .then(md => {
        document.getElementById('main-content').innerHTML = marked.parse(md);
      })
      .catch(() => {
        document.getElementById('main-content').innerHTML = "<p><em>No se encontró la descripción.</em></p>";
      });
  }
  function cargaMenu(){
      // Evento para manejar clics en enlaces del contenido
      document.getElementById('index-content').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
          e.preventDefault();
          // Remover clase 'active' de todos los enlaces
          document.querySelectorAll('#index-content a').forEach(a => a.classList.remove('active'));
          // Agregar clase 'active' al clickeado
          e.target.classList.add('active');
          // Cargar contenido del enlace
          const href = e.target.getAttribute('href');
          cargarContenido(href);
        }
      });

      // Cuando carga la página, cargar automáticamente help.md y marcar el primer enlace como activo
      window.addEventListener('load', () => {
        // Cargar inicial de help.md
        fetch(menuIndex)
          .then(resp => resp.text())
          .then(md => {
            document.getElementById('index-content').innerHTML = marked.parse(md);
            // Seleccionar el primer enlace del menú
            const primerEnlace = document.querySelector('#index-content a');
            if (primerEnlace) {
              // Marcar como activo
              primerEnlace.classList.add('active');
              // Cargar su contenido
              cargarContenido(primerEnlace.getAttribute('href'));
            }        
          })
          .catch(() => {
            document.getElementById('index-content').innerHTML = "<p><em>Indice no encontrado.</em></p>";
          });
      });   
    }