// Данные об образовательных центрах
const centers = [
  { 
    name: "Центр знаний", city: "Москва", address: "ул. Ленина, 10", lat: 55.7558, lng: 37.6173, 
    description: "Современные курсы для взрослых.", category: "Программирование", 
    phone: "+7 (495) 123-45-67", website: "https://center-znaniy.ru", 
    hours: "Пн-Пт: 10:00-20:00", courses: "Python, Java, Web-дизайн", format: "Очно"
  },
  { 
    name: "Учебный мир", city: "Санкт-Петербург", address: "Невский пр., 25", lat: 59.9343, lng: 30.3351, 
    description: "Подготовка к международным экзаменам.", category: "Языки", 
    phone: "+7 (812) 987-65-43", hours: "Пн-Сб: 9:00-18:00", 
    courses: "Английский, Немецкий, IELTS", format: "Онлайн"
  },
  { 
    name: "Просвещение", city: "Екатеринбург", address: "ул. Мира, 5", lat: 56.8389, lng: 60.6057, 
    description: "Обучение для детей всех возрастов.", category: "Детские программы", 
    phone: "+7 (343) 555-22-11", website: "https://prosvet-ekb.ru", 
    hours: "Пн-Вс: 8:00-17:00", courses: "Робототехника, Математика", format: "Очно"
  },
  { 
    name: "Знание плюс", city: "Новосибирск", address: "ул. Горская, 15", lat: 55.0302, lng: 82.9204, 
    description: "Курсы для профессионалов.", category: "Программирование", 
    phone: "+7 (383) 444-33-22", website: "https://znanie-plus.ru", 
    hours: "Пн-Пт: 11:00-19:00", courses: "Data Science, C++", format: "Онлайн"
  },
  { 
    name: "Лингва", city: "Казань", address: "ул. Баумана, 20", lat: 55.7887, lng: 49.1221, 
    description: "Изучение языков с носителями.", category: "Языки", 
    phone: "+7 (843) 666-77-88", hours: "Пн-Сб: 10:00-20:00", 
    courses: "Французский, Испанский", format: "Очно"
  },
  { 
    name: "Будущее", city: "Ростов-на-Дону", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Творческие курсы для детей.", category: "Детские программы", 
    phone: "+7 (863) 222-11-99", website: "https://buduschee-rostov.ru", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Рисование, Театр", format: "Очно"
  }
];

// Глобальные переменные
let map;

// Инициализация карты с Leaflet
document.addEventListener('DOMContentLoaded', () => {
  try {
    const mapDiv = document.getElementById('map');
    if (!mapDiv) {
      console.error('Элемент #map не найден');
      return;
    }
    map = L.map('map').setView([55.7558, 37.6173], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    centers.forEach(center => {
      L.marker([center.lat, center.lng])
        .addTo(map)
        .bindPopup(`<b>${center.name}</b><br>${center.address}`);
    });
    console.log('Карта инициализирована, маркеров:', centers.length);
  } catch (error) {
    console.error('Ошибка инициализации карты:', error);
  }
});

// Центрирование карты
function focusOnCenter(lat, lng) {
  if (!map) {
    console.error('Карта не инициализирована');
    return;
  }
  map.setView([lat, lng], 15);
  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(`<b>${centers.find(c => c.lat === lat && c.lng === lng).name}</b><br>${centers.find(c => c.lat === lat && c.lng === lng).address}`).openPopup();
  console.log(`Фокус на координатах: ${lat}, ${lng}`);
}

// Поиск
function searchCenters() {
  const input = document.getElementById('searchInput');
  const resultsDiv = document.getElementById('results');
  if (!input || !resultsDiv) {
    console.error('Элементы #searchInput или #results не найдены');
    return;
  }
  const query = input.value.trim().toLowerCase();
  console.log('Поиск, запрос:', query);
  
  const results = query === ''
    ? centers
    : centers.filter(center => 
        center.name.toLowerCase().includes(query) ||
        center.city.toLowerCase().includes(query) ||
        center.address.toLowerCase().includes(query) ||
        (center.category && center.category.toLowerCase().includes(query)) ||
        (center.courses && center.courses.toLowerCase().includes(query))
      );
  console.log('Найдено центров:', results.length);
  displayResults(results);
}

// Отображение результатов
function displayResults(results, containerId = 'results') {
  const resultsDiv = document.getElementById(containerId);
  if (!resultsDiv) {
    console.error(`Элемент #${containerId} не найден`);
    return;
  }
  resultsDiv.innerHTML = '';
  if (results.length === 0) {
    resultsDiv.innerHTML = '<p class="text-gray-500">Ничего не найдено.</p>';
    console.log('Нет результатов для:', containerId);
    return;
  }
  results.forEach(center => {
    const div = document.createElement('div');
    div.className = 'p-4 bg-gray-50 rounded-lg';
    div.innerHTML = `
      <h3 class="text-lg font-semibold">${sanitize(center.name)}</h3>
      <p class="text-gray-600">Город: ${sanitize(center.city)}</p>
      <p class="text-gray-600">Адрес: ${sanitize(center.address)}</p>
      <p class="text-gray-600">Координаты: <a href="#" class="text-blue-500 hover:underline coord-link" data-lat="${center.lat}" data-lng="${center.lng}">${sanitize(center.lat.toString())}, ${sanitize(center.lng.toString())}</a></p>
      <p class="text-gray-600">Категория: ${sanitize(center.category || 'Нет данных')}</p>
      <p class="text-gray-600">Телефон: ${sanitize(center.phone || 'Нет данных')}</p>
      ${center.website ? `<p class="text-gray-600">Сайт: <a href="${sanitize(center.website)}" target="_blank" class="text-blue-500 hover:underline">${sanitize(center.website)}</a></p>` : '<p class="text-gray-600">Сайт: Нет данных</p>'}
      <p class="text-gray-600">Часы работы: ${sanitize(center.hours || 'Нет данных')}</p>
      <p class="text-gray-600">Курсы: ${sanitize(center.courses || 'Нет данных')}</p>
      <p class="text-gray-600">Формат: ${sanitize(center.format || 'Нет данных')}</p>
      <p class="text-gray-600">${sanitize(center.description)}</p>
    `;
    resultsDiv.appendChild(div);
  });
  console.log(`Результаты отображены в #${containerId}:`, results.length);
}

// Защита от XSS
function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Логика ассистента
const assistantQuestions = [
  {
    question: "В каком городе вы хотите учиться?",
    options: [...new Set(centers.map(c => c.city)), "Любой"],
    key: "city"
  },
  {
    question: "Какую категорию курсов предпочитаете?",
    options: [...new Set(centers.map(c => c.category)), "Любая"],
    key: "category"
  },
  {
    question: "Какой формат обучения вам подходит?",
    options: ["Очно", "Онлайн", "Любой"],
    key: "format"
  },
  {
    question: "Есть ли предпочтения по времени работы центра?",
    options: ["Утро (до 12:00)", "День (12:00-18:00)", "Вечер (после 18:00)", "Любое"],
    key: "hours"
  }
];

let assistantStep = 0;
let assistantAnswers = {};

function startAssistant() {
  const modal = document.getElementById('assistantModal');
  if (!modal) {
    console.error('Элемент #assistantModal не найден');
    return;
  }
  assistantStep = 0;
  assistantAnswers = {};
  modal.classList.remove('hidden');
  console.log('Ассистент запущен, шаги и ответы сброшены');
  showAssistantQuestion();
}

function showAssistantQuestion() {
  const content = document.getElementById('assistantContent');
  const prevBtn = document.getElementById('assistantPrev');
  const nextBtn = document.getElementById('assistantNext');
  if (!content || !prevBtn || !nextBtn) {
    console.error('Элементы ассистента (#assistantContent, #assistantPrev, #assistantNext) не найдены');
    return;
  }

  if (assistantStep < assistantQuestions.length) {
    const { question, options } = assistantQuestions[assistantStep];
    content.innerHTML = `
      <p class="text-gray-700 mb-4">${question}</p>
      <select id="assistantSelect" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
        ${options.map(option => `<option value="${option}">${option}</option>`).join('')}
      </select>
    `;
    prevBtn.classList.toggle('hidden', assistantStep === 0);
    nextBtn.classList.remove('hidden');
    nextBtn.textContent = assistantStep === assistantQuestions.length - 1 ? 'Показать рекомендации' : 'Далее';
    console.log(`Показан вопрос ${assistantStep + 1}: ${question}`);
  } else {
    const filteredCenters = filterCenters();
    content.innerHTML = '<h3 class="text-lg font-semibold mb-4">Рекомендованные центры</h3><div id="assistantResults" class="max-h-96 overflow-y-auto"></div>';
    displayResults(filteredCenters, 'assistantResults');
    prevBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    console.log('Показаны рекомендации в #assistantResults, центров:', filteredCenters.length);
  }
}

function filterCenters() {
  const filtered = centers.filter(center => {
    let match = true;
    if (assistantAnswers.city && assistantAnswers.city !== 'Любой') {
      match = match && center.city === assistantAnswers.city;
    }
    if (assistantAnswers.category && assistantAnswers.category !== 'Любая') {
      match = match && center.category === assistantAnswers.category;
    }
    if (assistantAnswers.format && assistantAnswers.format !== 'Любой') {
      match = match && center.format === assistantAnswers.format;
    }
    if (assistantAnswers.hours && assistantAnswers.hours !== 'Любое') {
      const hoursMatch = {
        'Утро (до 12:00)': /08:00|09:00|10:00/,
        'День (12:00-18:00)': /12:00|13:00|14:00|15:00|16:00|17:00/,
        'Вечер (после 18:00)': /18:00|19:00|20:00/
      };
      match = match && center.hours && hoursMatch[assistantAnswers.hours].test(center.hours);
    }
    return match;
  });
  console.log('Отфильтровано центров:', filtered.length, 'на основе:', assistantAnswers);
  return filtered;
}

// Обработка событий
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM загружен, инициализация...');
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');
  const resultsDiv = document.getElementById('results');
  const assistantButton = document.getElementById('assistantButton');
  const assistantModal = document.getElementById('assistantModal');
  const assistantPrev = document.getElementById('assistantPrev');
  const assistantNext = document.getElementById('assistantNext');
  const assistantClose = document.getElementById('assistantClose');

  if (searchButton) {
    searchButton.addEventListener('click', searchCenters);
    console.log('Обработчик для #searchButton добавлен');
  } else {
    console.error('Кнопка #searchButton не найдена');
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchCenters();
      }
    });
    console.log('Обработчик для #searchInput добавлен');
  } else {
    console.error('Поле ввода #searchInput не найдено');
  }

  if (resultsDiv) {
    resultsDiv.addEventListener('click', (e) => {
      const link = e.target.closest('.coord-link');
      if (link) {
        e.preventDefault();
        const lat = parseFloat(link.getAttribute('data-lat'));
        const lng = parseFloat(link.getAttribute('data-lng'));
        focusOnCenter(lat, lng);
      }
    });
    console.log('Обработчик для #results добавлен');
  } else {
    console.error('Элемент #results не найден');
  }

  if (assistantButton) {
    assistantButton.addEventListener('click', startAssistant);
    console.log('Обработчик для #assistantButton добавлен');
  } else {
    console.error('Кнопка #assistantButton не найдена');
  }

  if (assistantPrev) {
    assistantPrev.addEventListener('click', () => {
      if (assistantStep > 0) {
        assistantStep--;
        showAssistantQuestion();
        console.log('Ассистент: Назад, шаг:', assistantStep);
      }
    });
    console.log('Обработчик для #assistantPrev добавлен');
  } else {
    console.error('Кнопка #assistantPrev не найдена');
  }

  if (assistantNext) {
    assistantNext.addEventListener('click', () => {
      if (assistantStep < assistantQuestions.length) {
        const select = document.getElementById('assistantSelect');
        if (!select) {
          console.error('Элемент #assistantSelect не найден');
          return;
        }
        assistantAnswers[assistantQuestions[assistantStep].key] = select.value;
        assistantStep++;
        showAssistantQuestion();
        console.log('Ассистент: Далее, шаг:', assistantStep, 'ответы:', assistantAnswers);
      }
    });
    console.log('Обработчик для #assistantNext добавлен');
  } else {
    console.error('Кнопка #assistantNext не найдена');
  }

  if (assistantClose) {
    assistantClose.addEventListener('click', () => {
      if (assistantModal) {
        assistantModal.classList.add('hidden');
        assistantStep = 0;
        assistantAnswers = {};
        console.log('Ассистент закрыт');
      }
    });
    console.log('Обработчик для #assistantClose добавлен');
  } else {
    console.error('Кнопка #assistantClose не найдена');
  }

  if (assistantModal) {
    assistantModal.addEventListener('click', (e) => {
      const link = e.target.closest('.coord-link');
      if (link) {
        e.preventDefault();
        const lat = parseFloat(link.getAttribute('data-lat'));
        const lng = parseFloat(link.getAttribute('data-lng'));
        focusOnCenter(lat, lng);
      }
    });
    console.log('Обработчик для #assistantModal добавлен');
  } else {
    console.error('Элемент #assistantModal не найден');
  }

  // Показать все центры при загрузке
  searchCenters();
});
