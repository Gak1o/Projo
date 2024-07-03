document.getElementById('yieldForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const maize = document.getElementById('maize').value;
    const beans = document.getElementById('beans').value;
    const peas = document.getElementById('peas').value;

    const data = {
        labels: ['Maize', 'Beans', 'Peas'],
        datasets: [{
            label: 'Yield in kg',
            data: [maize, beans, peas],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    };

    const ctx = document.getElementById('yieldChart').getContext('2d');
    if (window.myChart) {
        window.myChart.destroy();
    }
    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
