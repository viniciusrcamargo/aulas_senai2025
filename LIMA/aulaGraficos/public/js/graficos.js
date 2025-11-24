(function () {
    const { line, bar, pie } = window.pageData || { line: {}, bar: {}, pie: {} };

    const paleta = {
        cyano: 'rgba(34, 211, 238, 1)',
        azul: 'rgba(59, 130, 246, 1)',
        violeta: 'rgba(139, 92, 246, 1)',
        pink: 'rgba(236, 72, 153, 1)',
        verde: 'rgba(45, 212, 191, 1)',
        cinza: 'rgb(97, 95, 95)'
    }

    Chart.defaults.color = 'rgba(148, 163, 184, 0.2)';
    Chart.defaults.borderColor = 'rgba(148, 163, 184, 0.2)';
    Chart.defaults.plugins.legend.labels.color = '#f8f8f8';
    Chart.defaults.font.family = 'Arial';

    //grafico de Linha
    const graficoLinha = document.getElementById('lineChart');
    if (graficoLinha) {
        new Chart(graficoLinha, {
            type: 'line',
            data: {
                label: line.labels,
                datasets: [{
                    label: 'Vendas',
                    data: line.values,
                    borderColor: paleta.cyano,
                    backgroundColor: 'rgba(34, 211, 238, 0.15)',
                    fill: true,
                    tension: 0.35,
                    pointRadius: 3,
                    pointHoverRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#6d7072ff' }
                    },
                    tooltip: { mode: 'index', intersect: false }
                },
                interaction: { mode: 'nearest', axis: 'x', intersect: false },
                scales: {
                    x: { grid: { display: false } },
                    y: { beginAtZero: true }
                }
            }
        })
    }
    //grafico de Barras
    const graficoBarra = document.getElementById('barChart');
    if (graficoBarra) {
        new Chart(graficoBarra, {
            type: 'bar',
            data: {
                label: bar.labels,
                datasets: [{
                    label: 'Quantidade',
                    data: bar.values,
                    borderColor: paleta.cyano,
                    backgroundColor: [paleta.azul, paleta.violeta, paleta.pink, paleta.verde],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: { color: '#6d7072ff' }
                    },
                },
                scales: {
                    x: { grid: { display: false } },
                    y: { beginAtZero: true }
                }
            }
        })
    }

    //grafico de Torta
    const graficoTorta = document.getElementById('pieChart');
    if (graficoTorta) {
        new Chart(graficoTorta, {
            type: 'pie',
            data: {
                label: pie.labels,
                datasets: [{
                    label: 'Quantidade',
                    data: pie.values,
                    borderColor: paleta.cyano,
                    backgroundColor: [paleta.cyano, paleta.azul, paleta.cinza],
                    hoverOffset: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                }
            }
        })
    }
})();