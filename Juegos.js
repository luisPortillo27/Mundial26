// --- DATOS INICIALES COMPLETOS ---
const partidosIniciales = [
    // --- GRUPO A ---
    { id: 1, fase: "Grupo A", local: "México", visitante: "Sudáfrica", fecha: "Jue. 11 JUN", hora: "13:00", golLocal: 2, golVisitante: 0 },
    { id: 2, fase: "Grupo A", local: "Corea del Sur", visitante: "República Checa", fecha: "Jue. 11 JUN", hora: "20:00", golLocal: "", golVisitante: "" },
    { id: 3, fase: "Grupo A", local: "República Checa", visitante: "Sudáfrica", fecha: "Jue. 18 JUN", hora: "10:00", golLocal: "", golVisitante: "" },
    { id: 4, fase: "Grupo A", local: "México", visitante: "Corea del Sur", fecha: "Jue. 18 JUN", hora: "19:00", golLocal: "", golVisitante: "" },
    { id: 5, fase: "Grupo A", local: "Sudáfrica", visitante: "Corea del Sur", fecha: "Mié. 24 JUN", hora: "19:00", golLocal: "", golVisitante: "" },
    { id: 6, fase: "Grupo A", local: "República Checa", visitante: "México", fecha: "Mié. 24 JUN", hora: "19:00", golLocal: "", golVisitante: "" },
    // --- GRUPO B ---
    { id: 7, fase: "Grupo B", local: "Canadá", visitante: "Bosnia Herzegovina", fecha: "Vie. 12 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    { id: 8, fase: "Grupo B", local: "Qatar", visitante: "Suiza", fecha: "Sáb. 13 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    { id: 9, fase: "Grupo B", local: "Suiza", visitante: "Bosnia Herzegovina", fecha: "Jue. 18 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    { id: 10, fase: "Grupo B", local: "Canadá", visitante: "Qatar", fecha: "Jue. 18 JUN", hora: "16:00", golLocal: "", golVisitante: "" },
    { id: 11, fase: "Grupo B", local: "Suiza", visitante: "Canadá", fecha: "Mié. 24 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    { id: 12, fase: "Grupo B", local: "Bosnia Herzegovina", visitante: "Qatar", fecha: "Mié. 24 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    // --- GRUPO C ---
    { id: 13, fase: "Grupo C", local: "Brasil", visitante: "Marruecos", fecha: "Sáb. 13 JUN", hora: "16:00", golLocal: "", golVisitante: "" },
    { id: 14, fase: "Grupo C", local: "Haití", visitante: "Escocia", fecha: "Sáb. 13 JUN", hora: "19:00", golLocal: "", golVisitante: "" },
    { id: 15, fase: "Grupo C", local: "Escocia", visitante: "Marruecos", fecha: "Vie. 19 JUN", hora: "16:00", golLocal: "", golVisitante: "" },
    { id: 16, fase: "Grupo C", local: "Brasil", visitante: "Haití", fecha: "Vie. 19 JUN", hora: "18:30", golLocal: "", golVisitante: "" },
    { id: 17, fase: "Grupo C", local: "Escocia", visitante: "Brasil", fecha: "Mié. 24 JUN", hora: "16:00", golLocal: "", golVisitante: "" },
    { id: 18, fase: "Grupo C", local: "Marruecos", visitante: "Haití", fecha: "Mié. 24 JUN", hora: "16:00", golLocal: "", golVisitante: "" },
    // --- GRUPO D ---
    { id: 19, fase: "Grupo D", local: "Estados Unidos", visitante: "Paraguay", fecha: "Vie. 12 JUN", hora: "19:00", golLocal: "", golVisitante: "" },
    { id: 20, fase: "Grupo D", local: "Australia", visitante: "Turquía", fecha: "Sáb. 13 JUN", hora: "22:00", golLocal: "", golVisitante: "" },
    { id: 21, fase: "Grupo D", local: "Estados Unidos", visitante: "Australia", fecha: "Vie. 19 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    { id: 22, fase: "Grupo D", local: "Turquía", visitante: "Paraguay", fecha: "Vie. 19 JUN", hora: "21:00", golLocal: "", golVisitante: "" },
    { id: 23, fase: "Grupo D", local: "Turquía", visitante: "Estados Unidos", fecha: "Jue. 25 JUN", hora: "20:00", golLocal: "", golVisitante: "" },
    { id: 24, fase: "Grupo D", local: "Paraguay", visitante: "Australia", fecha: "Jue. 25 JUN", hora: "20:00", golLocal: "", golVisitante: "" },
    // --- GRUPO E ---
    { id: 25, fase: "Grupo E", local: "Alemania", visitante: "Curaçao", fecha: "Dom. 14 JUN", hora: "11:00", golLocal: "", golVisitante: "" },
    { id: 26, fase: "Grupo E", local: "Costa de Marfil", visitante: "Ecuador", fecha: "Dom. 14 JUN", hora: "17:00", golLocal: "", golVisitante: "" },
    { id: 27, fase: "Grupo E", local: "Alemania", visitante: "Costa de Marfil", fecha: "Sáb. 20 JUN", hora: "14:00", golLocal: "", golVisitante: "" },
    { id: 28, fase: "Grupo E", local: "Ecuador", visitante: "Curaçao", fecha: "Sáb. 20 JUN", hora: "18:00", golLocal: "", golVisitante: "" },
    { id: 29, fase: "Grupo E", local: "Ecuador", visitante: "Alemania", fecha: "Jue. 25 JUN", hora: "14:00", golLocal: "", golVisitante: "" },
    { id: 30, fase: "Grupo E", local: "Curaçao", visitante: "Costa de Marfil", fecha: "Jue. 25 JUN", hora: "14:00", golLocal: "", golVisitante: "" },
    // --- GRUPO F ---
    { id: 31, fase: "Grupo F", local: "Países Bajos", visitante: "Japón", fecha: "Dom. 14 JUN", hora: "14:00", golLocal: "", golVisitante: "" },
    { id: 32, fase: "Grupo F", local: "Suecia", visitante: "Túnez", fecha: "Dom. 14 JUN", hora: "20:00", golLocal: "", golVisitante: "" },
    { id: 33, fase: "Grupo F", local: "Países Bajos", visitante: "Suecia", fecha: "Sáb. 20 JUN", hora: "11:00", golLocal: "", golVisitante: "" },
    { id: 34, fase: "Grupo F", local: "Túnez", visitante: "Japón", fecha: "Sáb. 20 JUN", hora: "22:00", golLocal: "", golVisitante: "" },
    { id: 35, fase: "Grupo F", local: "Túnez", visitante: "Países Bajos", fecha: "Jue. 25 JUN", hora: "17:00", golLocal: "", golVisitante: "" },
    { id: 36, fase: "Grupo F", local: "Japón", visitante: "Suecia", fecha: "Jue. 25 JUN", hora: "17:00", golLocal: "", golVisitante: "" },
    // --- GRUPO G ---
    { id: 37, fase: "Grupo G", local: "Bélgica", visitante: "Egipto", fecha: "Lun. 15 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    { id: 38, fase: "Grupo G", local: "Irán", visitante: "Nueva Zelanda", fecha: "Lun. 15 JUN", hora: "19:00", golLocal: "", golVisitante: "" },
    { id: 39, fase: "Grupo G", local: "Bélgica", visitante: "Irán", fecha: "Dom. 21 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    { id: 40, fase: "Grupo G", local: "Nueva Zelanda", visitante: "Egipto", fecha: "Dom. 21 JUN", hora: "19:00", golLocal: "", golVisitante: "" },
    { id: 41, fase: "Grupo G", local: "Nueva Zelanda", visitante: "Bélgica", fecha: "Vie. 26 JUN", hora: "21:00", golLocal: "", golVisitante: "" },
    { id: 42, fase: "Grupo G", local: "Egipto", visitante: "Irán", fecha: "Vie. 26 JUN", hora: "21:00", golLocal: "", golVisitante: "" },
    // --- GRUPO H ---
    { id: 43, fase: "Grupo H", local: "España", visitante: "Cabo Verde", fecha: "Lun. 15 JUN", hora: "10:00", golLocal: "", golVisitante: "" },
    { id: 44, fase: "Grupo H", local: "Arabia Saudí", visitante: "Uruguay", fecha: "Lun. 15 JUN", hora: "16:00", golLocal: "", golVisitante: "" },
    { id: 45, fase: "Grupo H", local: "España", visitante: "Arabia Saudí", fecha: "Dom. 21 JUN", hora: "10:00", golLocal: "", golVisitante: "" },
    { id: 46, fase: "Grupo H", local: "Uruguay", visitante: "Cabo Verde", fecha: "Dom. 21 JUN", hora: "16:00", golLocal: "", golVisitante: "" },
    { id: 47, fase: "Grupo H", local: "Uruguay", visitante: "España", fecha: "Vie. 26 JUN", hora: "18:00", golLocal: "", golVisitante: "" },
    { id: 48, fase: "Grupo H", local: "Cabo Verde", visitante: "Arabia Saudí", fecha: "Vie. 26 JUN", hora: "18:00", golLocal: "", golVisitante: "" },
    // --- GRUPO I ---
    { id: 49, fase: "Grupo I", local: "Francia", visitante: "Senegal", fecha: "Mar. 16 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    { id: 50, fase: "Grupo I", local: "Iraq", visitante: "Noruega", fecha: "Mar. 16 JUN", hora: "16:00", golLocal: "", golVisitante: "" },
    { id: 51, fase: "Grupo I", local: "Francia", visitante: "Iraq", fecha: "Lun. 22 JUN", hora: "15:00", golLocal: "", golVisitante: "" },
    { id: 52, fase: "Grupo I", local: "Noruega", visitante: "Senegal", fecha: "Lun. 22 JUN", hora: "18:00", golLocal: "", golVisitante: "" },
    { id: 53, fase: "Grupo I", local: "Senegal", visitante: "Iraq", fecha: "Vie. 26 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    { id: 54, fase: "Grupo I", local: "Noruega", visitante: "Francia", fecha: "Vie. 26 JUN", hora: "13:00", golLocal: "", golVisitante: "" },
    // --- GRUPO J ---
    { id: 55, fase: "Grupo J", local: "Argentina", visitante: "Argelia", fecha: "Mar. 16 JUN", hora: "19:00", golLocal: "", golVisitante: "" },
    { id: 56, fase: "Grupo J", local: "Austria", visitante: "Jordania", fecha: "Mar. 16 JUN", hora: "22:00", golLocal: "", golVisitante: "" },
    { id: 57, fase: "Grupo J", local: "Argentina", visitante: "Austria", fecha: "Lun. 22 JUN", hora: "11:00", golLocal: "", golVisitante: "" },
    { id: 58, fase: "Grupo J", local: "Jordania", visitante: "Argelia", fecha: "Lun. 22 JUN", hora: "21:00", golLocal: "", golVisitante: "" },
    { id: 59, fase: "Grupo J", local: "Jordania", visitante: "Argentina", fecha: "Sáb. 27 JUN", hora: "20:00", golLocal: "", golVisitante: "" },
    { id: 60, fase: "Grupo J", local: "Argelia", visitante: "Austria", fecha: "Sáb. 27 JUN", hora: "20:00", golLocal: "", golVisitante: "" },
    // --- GRUPO K ---
    { id: 61, fase: "Grupo K", local: "Portugal", visitante: "R.D. del Congo", fecha: "Mié. 17 JUN", hora: "11:00", golLocal: "", golVisitante: "" },
    { id: 62, fase: "Grupo K", local: "Uzbekistán", visitante: "Colombia", fecha: "Mié. 17 JUN", hora: "20:00", golLocal: "", golVisitante: "" },
    { id: 63, fase: "Grupo K", local: "Portugal", visitante: "Uzbekistán", fecha: "Mar. 23 JUN", hora: "11:00", golLocal: "", golVisitante: "" },
    { id: 64, fase: "Grupo K", local: "Colombia", visitante: "R.D. del Congo", fecha: "Mar. 23 JUN", hora: "20:00", golLocal: "", golVisitante: "" },
    { id: 65, fase: "Grupo K", local: "R.D. del Congo", visitante: "Uzbekistán", fecha: "Sáb. 27 JUN", hora: "17:30", golLocal: "", golVisitante: "" },
    { id: 66, fase: "Grupo K", local: "Colombia", visitante: "Portugal", fecha: "Sáb. 27 JUN", hora: "17:30", golLocal: "", golVisitante: "" },
    // --- GRUPO L ---
    { id: 67, fase: "Grupo L", local: "Inglaterra", visitante: "Croacia", fecha: "Mié. 17 JUN", hora: "14:00", golLocal: "", golVisitante: "" },
    { id: 68, fase: "Grupo L", local: "Ghana", visitante: "Panamá", fecha: "Mié. 17 JUN", hora: "17:00", golLocal: "", golVisitante: "" },
    { id: 69, fase: "Grupo L", local: "Inglaterra", visitante: "Ghana", fecha: "Mar. 23 JUN", hora: "14:00", golLocal: "", golVisitante: "" },
    { id: 70, fase: "Grupo L", local: "Panamá", visitante: "Croacia", fecha: "Mar. 23 JUN", hora: "17:00", golLocal: "", golVisitante: "" },
    { id: 71, fase: "Grupo L", local: "Panamá", visitante: "Inglaterra", fecha: "Sáb. 27 JUN", hora: "15:00", golLocal: "", golVisitante: "" },
    { id: 72, fase: "Grupo L", local: "Croacia", visitante: "Ghana", fecha: "Sáb. 27 JUN", hora: "15:00", golLocal: "", golVisitante: "" },
    // --- ELIMINATORIAS (Se omiten para brevedad, asegurar que lleguen hasta el ID 104) ---
    { id: 104, fase: "FINAL", local: "", visitante: "", tagLocal: "G. 1ª semifinal", tagVisitante: "G. 2ª semifinal", fecha: "Dom. 19 JUL", hora: "13:00", golLocal: "", golVisitante: "" }
];

let partidos = JSON.parse(localStorage.getItem('mundial2026_partidos')) || partidosIniciales;
let faseActiva = "Grupo A";

function guardarEnStorage() {
    localStorage.setItem('mundial2026_partidos', JSON.stringify(partidos));
}

function construirMenuFases() {
    const menuGrupos = document.getElementById('menu-grupos');
    const menuEliminatorias = document.getElementById('menu-eliminatorias');
    if (!menuGrupos) return;
    
    menuGrupos.innerHTML = '';
    if (menuEliminatorias) menuEliminatorias.innerHTML = '';
    
    const fases = [...new Set(partidos.map(p => p.fase))];
    fases.forEach(fase => {
        const btn = document.createElement('button');
        btn.className = `btn-fase ${fase === faseActiva ? 'activo' : ''}`;
        btn.innerText = fase;
        btn.onclick = () => {
            faseActiva = fase;
            document.querySelectorAll('.btn-fase').forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            mostrarPartidosDeFase();
        };
        if (fase.startsWith("Grupo")) menuGrupos.appendChild(btn);
        else menuEliminatorias?.appendChild(btn);
    });
}

function mostrarPartidosDeFase() {
    document.getElementById('titulo-fase-activa').innerText = faseActiva;
    const contenedor = document.getElementById('lista-partidos');
    contenedor.innerHTML = '';

    partidos.filter(p => p.fase === faseActiva).forEach(p => {
        const div = document.createElement('div');
        div.className = 'tarjeta-partido';
        const isG = p.fase.startsWith("Grupo");
        
        // Datos protegidos
        const local = p.local || '';
        const visitante = p.visitante || '';
        const tagL = p.tagLocal || '';
        const tagV = p.tagVisitante || '';
        
        div.innerHTML = `
            <div class="info-fecha-hora">
                <span class="txt-fecha">${p.fecha}</span>
                <span class="txt-hora">${p.hora}</span>
            </div>
            <div class="marcador-contenedor">
                ${isG ? 
                    `<span style="flex:1; text-align:right; font-weight:bold">${local}</span>` : 
                    `<span class="tag-llave-fija-centro">${tagL}</span> 
                     <input type="text" class="input-pais-editable" value="${local}" data-id="${p.id}" data-campo="local" placeholder="Escribir país">`
                }
                
                <input type="number" value="${p.golLocal ?? ''}" data-id="${p.id}" data-tipo="golLocal">
                <div class="separador-vs">VS</div>
                <input type="number" value="${p.golVisitante ?? ''}" data-id="${p.id}" data-tipo="golVisitante">
                
                ${isG ? 
                    `<span style="flex:1; text-align:left; font-weight:bold">${visitante}</span>` : 
                    `<input type="text" class="input-pais-editable" value="${visitante}" data-id="${p.id}" data-campo="visitante" placeholder="Escribir país">
                     <span class="tag-llave-fija-centro">${tagV}</span>`
                }
            </div>`;
        contenedor.appendChild(div);
    });
}

document.getElementById('lista-partidos').addEventListener('input', (e) => {
    const id = parseInt(e.target.dataset.id);
    const p = partidos.find(x => x.id === id);
    if (e.target.dataset.tipo) p[e.target.dataset.tipo] = e.target.value;
    else if (e.target.dataset.campo) p[e.target.dataset.campo] = e.target.value;
    guardarEnStorage();
});

document.addEventListener('DOMContentLoaded', () => {
    construirMenuFases();
    mostrarPartidosDeFase();
});