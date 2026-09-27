// Inicializa o mapa desligando os botões de zoom padrão (para mudarmos de posição depois)
const mapa = L.map('mapa', {
    zoomControl: false 
}).setView([-23.5558, -46.6433], 15);

// Adiciona os botões de zoom no canto superior direito
L.control.zoom({
    position: 'topright'
}).addTo(mapa);

// Volta para o OpenStreetMap padrão, que é livre e sem necessidade de chaves (o filtro CSS cuida da cor)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(mapa);

// Dados dos pontos
const pontosDeParada = [
    {
        nome: "Sede Histórica da Vai-Vai",
        coordenadas: [-23.5574, -46.6441],
        descricao: "Marco fundamental da presença e resistência negra no Bixiga, nascida dos cordões carnavalescos.",
        categoria: "Memória Negra",
        corCategoria: "bg-bx-laranja text-white"
    },
    {
        nome: "Teatro Oficina",
        coordenadas: [-23.5539, -46.6429],
        descricao: "Espaço de resistência teatral, arquitetura tombada e ponto de luta contra a especulação imobiliária.",
        categoria: "Cultura Independente",
        corCategoria: "bg-bx-azul text-white"
    },
    {
        nome: "Escadaria do Bixiga",
        coordenadas: [-23.5562, -46.6425],
        descricao: "Tradicional espaço de apropriação cultural, shows de jazz independentes e encontro comunitário.",
        categoria: "Espaço Público",
        corCategoria: "bg-bx-amarelo text-black"
    }
];

// Adiciona os marcadores ao mapa
pontosDeParada.forEach(ponto => {
    const marcador = L.marker(ponto.coordenadas).addTo(mapa);
    
    const conteudoPopup = `
        <div class="font-sans min-w-[200px]">
            <span class="inline-block ${ponto.corCategoria} text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full mb-2">
                ${ponto.categoria}
            </span>
            <h3 class="text-base font-bold text-zinc-900 mb-1 leading-tight">${ponto.nome}</h3>
            <p class="text-sm text-stone-700 leading-snug m-0">${ponto.descricao}</p>
        </div>
    `;
    
    marcador.bindPopup(conteudoPopup);
});