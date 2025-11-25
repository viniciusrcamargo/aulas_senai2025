// ====== JavaScript: lógica do carrossel ======
    // 1) Lista de imagens (pode trocar pelas suas URLs)
    const imagens = [
      { url: 'https://cdn.pixabay.com/photo/2017/09/01/05/50/xmas-2703168_1280.jpg', alt: 'Imagem 1' },
      { url: 'https://cdn.pixabay.com/photo/2017/12/26/03/31/tables-3039635_1280.jpg', alt: 'Imagem 2' },
      { url: 'https://cdn.pixabay.com/photo/2021/12/28/13/06/candles-6899193_1280.jpg', alt: 'Imagem 3' },
      { url: 'https://cdn.pixabay.com/photo/2023/12/05/15/07/window-8431865_1280.jpg', alt: 'Imagem 4' }
    ];

    // 2) Elementos importantes
    const img = document.getElementById('slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const pontos = document.querySelector('.pontos');

    // 3) Estado atual (índice da imagem)
    let indiceAtual = 0;

    // 4) Função para atualizar a imagem exibida (troca instantânea)
    function mostrarImagem(indice) {
      const item = imagens[indice];
      img.src = item.url;
      img.alt = item.alt;
      atualizarPontos();
    }

    // 5) Navegar para a próxima/anteriores (com looping)
    function proxima() {
      indiceAtual = (indiceAtual + 1) % imagens.length;
      mostrarImagem(indiceAtual);
    }
    function anterior() {
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
      mostrarImagem(indiceAtual);
    }

    // 6) Criar indicadores (dots) de forma opcional
    function criarPontos() {
      pontos.innerHTML = '';
      imagens.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'ponto';
        d.setAttribute('aria-label', `Ir para imagem ${i + 1}`);
        d.addEventListener('click', () => {
          indiceAtual = i;
          mostrarImagem(indiceAtual);
        });
        pontos.appendChild(d);
      });
    }

    function atualizarPontos() {
      const ds = pontos.querySelectorAll('.ponto');
      ds.forEach((ponto, i) => {
        ponto.classList.toggle('active', i === indiceAtual);
      });
    }

    // 7) Eventos de clique dos botões
    prevBtn.addEventListener('click', anterior);
    nextBtn.addEventListener('click', proxima);

    // 8) Suporte a teclado (acessibilidade): setas esquerda/direita
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') anterior();
      if (e.key === 'ArrowRight') proxima();
    });

    // 9) Inicialização
    criarPontos();
    mostrarImagem(indiceAtual);
    setInterval(proxima, 3000)