// SISTEMA DE PUBLICACIONES DE RECURSOS
// Agregar nuevas publicaciones aquí, marcar featured: true para lo que se quira destacar

const publicacionesRecursos = [
  {
    id: 1,
    title: 'Fonts',
    desc: 'Fentes bonitas.',
    image: 'images/01.jpg',
    downloadUrl: 'https://drive.google.com/drive/folders/1yDj8wsHwSNd8GAUr2_eLHk20usvLCOI9',
    featured: true,  // ← MARCAR AQUÍ CUÁL ESTÁ DESTACADA
    tags: ['🔤 Tipografías']
  }
  // Agrega más publicaciones aquí cuando tengas nuevas:
  // {
  //   id: 2,
  //   title: 'Nuevo recurso',
  //   desc: 'Descripción...',
  //   image: 'images/02.jpg',
  //   downloadUrl: '#',
  //   featured: true,  // ← Cambiar featured a true para esta nueva
  //   tags: [...]
  // }
];

// Renderizar publicaciones
function renderizarRecursos() {
  const container = document.getElementById('recursosContainer');

  // Separar destacada del resto
  const destacada = publicacionesRecursos.find(p => p.featured);
  const otras = publicacionesRecursos.filter(p => !p.featured);

  let html = '';

  // Renderizar destacada
  if (destacada) {
    html += `
      <div style="max-width: 700px; margin: 0 auto 50px;">
        <div class="card" style="cursor: default; transform: none !important;">
          <div class="tape"></div>
          <div class="thumb" style="background: #f5ede6; font-size: 24px; padding: 0; overflow: hidden;">
            <img src="${destacada.image}" alt="${destacada.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
          </div>
          <h3>${destacada.title}</h3>
          <p>${destacada.desc}</p>
          <span class="tag">⋆˚꩜｡ Nuevo</span>

          <div style="margin-top: 24px;">
            <a href="${destacada.downloadUrl}" target="_blank" style="
              display: block;
              width: 100%;
              padding: 12px;
              background: var(--rose-deep);
              color: #fff;
              text-decoration: none;
              text-align: center;
              font-family: 'Playfair Display', serif;
              font-size: 13px;
              letter-spacing: 2px;
              text-transform: uppercase;
              border: none;
              border-radius: 4px;
              transition: background .3s ease;
              box-sizing: border-box;
            " onmouseover="this.style.background='#b97b77'" onmouseout="this.style.background='var(--rose-deep)'">
              → Acceder a Google Drive
            </a>
          </div>
        </div>
      </div>

      <!-- Tags de qué incluye -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 14px; max-width: 900px; margin: 0 auto;">
        ${destacada.tags.map((tag, i) => {
          const emoji = tag.split(' ')[0];
          const text = tag.substring(emoji.length + 1);
          return `
            <div style="text-align: center; padding: 18px 12px; background: rgba(217,169,163,0.08); border: 1px solid var(--line); border-radius: 6px;">
              <div style="font-size: 24px; margin-bottom: 6px;">${emoji}</div>
              <p style="font-family: 'Playfair Display', serif; font-style: italic; font-size: 13px; color: var(--ink); margin: 0;">${text}</p>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Renderizar otras publicaciones (si las hay)
  if (otras.length > 0) {
    html += `
      <div style="margin-top: 60px;">
        <p style="text-align: center; color: var(--ink-soft); font-size: 14px; letter-spacing: 1px; margin-bottom: 30px;">PUBLICACIONES ANTERIORES</p>
        <div class="grid">
          ${otras.map(pub => `
            <div class="card" style="cursor: default; transform: none !important;">
              <div class="tape"></div>
              <div class="thumb" style="background: #f5ede6; font-size: 24px; padding: 0; overflow: hidden;">
                <img src="${pub.image}" alt="${pub.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
              </div>
              <h3>${pub.title}</h3>
              <p>${pub.desc}</p>
              <a href="${pub.downloadUrl}" target="_blank" style="
                display: block;
                width: 100%;
                padding: 8px;
                background: var(--rose-deep);
                color: #fff;
                text-decoration: none;
                text-align: center;
                font-family: 'Playfair Display', serif;
                font-size: 12px;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                border: none;
                border-radius: 4px;
                transition: background .3s ease;
                box-sizing: border-box;
                margin-top: 12px;
              " onmouseover="this.style.background='#b97b77'" onmouseout="this.style.background='var(--rose-deep)'">
                → Acceder
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

// Inicializar cuando carga el DOM
document.addEventListener('DOMContentLoaded', renderizarRecursos);

// Efectos táctiles en móvil para todas las cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.classList.add('active');
    });
    card.addEventListener('touchend', () => {
      setTimeout(() => {
        card.classList.remove('active');
      }, 200);
    });
  });
});
