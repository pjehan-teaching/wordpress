import Prism from 'prismjs';
import {Chart, CategoryScale, LinearScale, PieController, ArcElement, Legend, Tooltip} from 'chart.js';
import './css/style.scss';
require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images

document.getElementById('revealexpress').addEventListener('loaded', function(event) {

  Prism.highlightAll();

  document.querySelectorAll('.link-localhost').forEach(function(a) {
    var localhost = navigator.platform.startsWith('Mac') ? 'http://localhost:8888' : 'http://localhost';
    a.href = localhost;
    a.innerHTML = localhost;
  });

  document.querySelectorAll('.link-phpmyadmin').forEach(function(a) {
    var localhost = navigator.platform.startsWith('Mac') ? 'http://localhost:8888/phpmyadmin' : 'http://localhost/phpmyadmin';
    a.href = localhost;
    a.innerHTML = localhost;
  });

  Chart.defaults.font.size = 22;
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(PieController);
  Chart.register(ArcElement);
  Chart.register(Legend);
  Chart.register(Tooltip);

  new Chart(document.getElementById('chart-cms').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['WordPress', 'Joomla!', 'Drupal', 'Wix', 'Autre', 'Aucun'],
      datasets: [{
        data: [29.6, 3.1, 2.2, 0.5, 14, 50.6],
        backgroundColor: ["rgb(0, 135, 190)", "rgb(113, 190, 80)", "rgb(40, 168, 224)", "rgb(255, 189, 120)", "rgb(101, 123, 131)", "rgb(0, 0, 0)"]
      }]
    },
    options: {}
  });

  new Chart(document.getElementById('chart-ecommerce').getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['WooCommerce', 'Shopify', 'Magento', 'MonsterCommerce', 'VirtueMart', 'PrestaShop', 'Autres'],
      datasets: [{
        data: [28.06, 9.67, 7.91, 5.87, 4.36, 4.27, 39.86],
        backgroundColor: ["rgb(149, 89, 139)", "rgb(118, 175, 89)", "rgb(229, 100, 53)", "rgb(84, 16, 100)", "rgb(12, 131, 232)", "rgb(215, 0, 107)", "rgb(101, 123, 131)"]
      }]
    },
    options: {}
  });

});
