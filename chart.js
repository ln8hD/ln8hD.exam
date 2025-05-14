// Получаем элементы canvas для графиков
const cht = document.getElementById('chartBar');
const cht2 = document.getElementById('chartBar2');

// Конфигурация графика №1 — Скачивания игр
const config = {
  type: 'bar', // Тип графика: столбчатый
  data: {
    labels: [ // Метки по оси X — названия игр
      "Resident Evil", "Silent Hill", "Amnesia", "Outlast", "The Evil Within",
      "Dead Space", "Darkwood", "Soma", "Pathologic 2", "Detention",
      "Call of Cthulhu", "Yomawari", "Corpse Party", "Rule of Rose", "Ib",
      "Fear and Hunger", "The Forest", "Signalis", "Lone Survivor", "Omori"
    ],
    datasets: [{
      label: 'Количество скачиваний за 2025 год (в млн)',
      data: [
        95, 88, 90, 72, 86, 79, 63, 83, 70, 74,
        76, 68, 58, 73, 65, 80, 60, 85, 78, 66
      ],
      backgroundColor: [ // Цвета столбцов (разные оттенки красного)
        'rgba(255, 99, 132, 0.7)', 'rgba(214, 59, 59, 0.7)', 'rgba(255, 102, 102, 0.7)', 'rgba(220, 60, 60, 0.7)',
        'rgba(255, 75, 75, 0.7)', 'rgba(178, 34, 34, 0.7)', 'rgba(255, 85, 85, 0.7)', 'rgba(222, 40, 40, 0.7)',
        'rgba(215, 50, 50, 0.7)', 'rgba(255, 60, 60, 0.7)', 'rgba(187, 42, 42, 0.7)', 'rgba(255, 120, 120, 0.7)',
        'rgba(245, 54, 54, 0.7)', 'rgba(255, 95, 95, 0.7)', 'rgba(240, 55, 55, 0.7)', 'rgba(250, 100, 100, 0.7)',
        'rgba(255, 80, 80, 0.7)', 'rgba(235, 48, 48, 0.7)', 'rgba(242, 73, 73, 0.7)', 'rgba(255, 115, 115, 0.7)'
      ]
    }]
  },
  options: {
    responsive: true, // Поддержка адаптивности
    plugins: {
      legend: {
        position: 'top' // Легенда сверху
      },
      title: {
        display: false // Заголовок отключён
      }
    },
    scales: {
      y: {
        ticks: {
          // Подписи на оси Y — с припиской "млн"
          callback: function(value) {
            return value + ' млн';
          }
        }
      }
    }
  }
};

// Конфигурация графика №2 — Активность по месяцам
const config2 = {
  type: 'bar',
  data: {
    labels: [ // Названия месяцев
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    datasets: [{
      label: 'Количество постов на форуме (2025)',
      data: [120, 135, 150, 165, 200, 185, 220, 210, 230, 250, 270, 300],
      backgroundColor: [ // Цвета столбцов (аналогично первому графику)
        'rgba(255, 99, 132, 0.7)', 'rgba(214, 59, 59, 0.7)', 'rgba(255, 102, 102, 0.7)', 'rgba(220, 60, 60, 0.7)',
        'rgba(255, 75, 75, 0.7)', 'rgba(178, 34, 34, 0.7)', 'rgba(255, 85, 85, 0.7)', 'rgba(222, 40, 40, 0.7)',
        'rgba(215, 50, 50, 0.7)', 'rgba(255, 60, 60, 0.7)', 'rgba(187, 42, 42, 0.7)', 'rgba(255, 120, 120, 0.7)'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true, // Ось Y начинается с 0
        ticks: {
          callback: function(value) {
            return value + ' постов';
          }
        }
      }
    }
  }
};

// Инициализация обоих графиков
new Chart(cht, config);
new Chart(cht2, config2);