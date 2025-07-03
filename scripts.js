// Dark Mode Toggle
document.getElementById('toggleMode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Sales Chart
const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Sales ($)',
      data: [300, 500, 700, 400, 600],
      backgroundColor: '#0d6efd'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});
