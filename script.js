const curiosidades = [
    "Sistemas Agroflorestais (SAFs) permitem plantar alimentos no mesmo ambiente onde árvores nativas são cultivadas, regenerando o solo.",
    "A agricultura de precisão utiliza drones e satélites para aplicar água e fertilizantes apenas onde é necessário, evitando desperdícios.",
    "A integração lavoura-pecuária-floresta (ILPF) ajuda a remover carbono da atmosfera, combatendo as mudanças climáticas.",
    "Práticas sustentáveis ajudam a preservar microrganismos vitais no solo, mantendo a terra fértil para as futuras gerações.",
    "A conservação de florestas no entorno de plantações funciona como um abrigo natural para polinizadores, como abelhas e pássaros."
];

document.getElementById('btn-curiosidades').addEventListener('click', function() {
    const areaCuriosidades = document.getElementById('area-curiosidades');
    const listaCuriosidades = document.getElementById('lista-curiosidades');
    
    // Limpa a lista antes de adicionar para evitar duplicatas
    listaCuriosidades.innerHTML = '';
    
    // Adiciona as curiosidades na lista
    curiosidades.forEach(function(curiosidade) {
        const li = document.createElement('li');
        li.textContent = curiosidade;
        listaCuriosidades.appendChild(li);
    });
    
    // Remove a classe 'oculto' para exibir a caixa
    areaCuriosidades.classList.remove('oculto');
    
    // Oculta o botão depois de clicar
    this.style.display = 'none';
});
