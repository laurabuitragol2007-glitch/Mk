document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                const canvas = entry.target.querySelector('canvas');
                if (canvas) {
                    const chartId = canvas.id;
                    if (chartId === 'marketChart') initMarketChart();
                    if (chartId === 'productChart') initProductChart();
                    if (chartId === 'seasonChart') initSeasonChart();
                    if (chartId === 'mediaChart') initMediaChart();
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    Chart.defaults.color = '#a0aabf';
    Chart.defaults.font.family = 'Inter';

    let charts = {};

    function initMarketChart() {
        if (charts['market']) return;
        const ctx = document.getElementById('marketChart');
        charts['market'] = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Chevrolet', 'Renault', 'Nissan', 'Ford', 'Kia', 'Volkswagen'],
                datasets: [{
                    label: 'Inversión (M)',
                    data: [119.68, 73.38, 53.02, 23.53, 17.98, 10.63],
                    backgroundColor: [
                        'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(0, 176, 240, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)',
                        'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.3)', 'rgba(0, 176, 240, 1)'
                    ],
                    borderWidth: 1, borderRadius: 5
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false }, title: { display: true, text: 'Share of Voice Nacional', color: '#fff' } },
                scales: { y: { grid: { color: 'rgba(255,255,255,0.05)' } }, x: { grid: { display: false } } }
            }
        });
    }

    function initProductChart() {
        if (charts['product']) return;
        const ctx = document.getElementById('productChart');
        charts['product'] = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['T-Cross (SUV)', 'Polo Track', 'Taos (SUV)', 'Nivus (SUV)'],
                datasets: [{
                    label: 'Inversión ($ Millones)',
                    data: [3.16, 1.79, 1.18, 0.63],
                    backgroundColor: ['#00b0f0', '#ffffff', '#001e50', '#ff4a5a'],
                    borderRadius: 6
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false }, title: { display: true, text: 'Inversión por Modelo Top', color: '#fff' } },
                scales: { x: { grid: { color: 'rgba(255,255,255,0.05)' } }, y: { grid: { display: false } } }
            }
        });
    }

    function initSeasonChart() {
        if (charts['season']) return;
        const ctx = document.getElementById('seasonChart');
        charts['season'] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [
                    {
                        label: 'Inversión Total (Millones)',
                        data: [1.35, 2.16, 1.19, 1.03, 1.35, 1.21, 0.73, 0.36, 0.22, 0.70, 0.32, 0.42],
                        borderColor: '#00b0f0', backgroundColor: 'rgba(0, 176, 240, 0.2)', fill: true, tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Inversión Histórica por Mes', color: '#fff' }
                },
                scales: { y: { grid: { color: 'rgba(255,255,255,0.05)' } }, x: { grid: { color: 'rgba(255,255,255,0.05)' } } }
            }
        });
    }

    function initMediaChart() {
        if (charts['media']) return;
        const ctx = document.getElementById('mediaChart');
        charts['media'] = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: ['Radio', 'TV Nacional', 'Prensa', 'TV Suscripción'],
                datasets: [{
                    data: [6.00, 2.42, 1.38, 0.87],
                    backgroundColor: ['rgba(0,176,240,0.8)', 'rgba(255,255,255,0.3)', 'rgba(255,74,90,0.5)', 'rgba(0,30,80,0.6)'],
                    borderWidth: 1, borderColor: '#050810'
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'right' }, title: { display: true, text: 'Concentración de Inversión en Medios', color: '#fff' } },
                scales: { r: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { display: false } } }
            }
        });
    }



});
