// Оптимизированный скрипт: карта, поиск и ассистент

// Глобальные переменные
let map;

// Данные об образовательных центрах
const centers = [
  {
    name: "Buxoro texnikumi",
    city: "Buxoro",
    address: "Ko‘cha 1",
    lat: 39.7740,
    lng: 64.4270,
    description: "Kasbiy ta'lim",
    category: "Texnika",
    phone: "+998 90 123 45 67",
    website: "https://example.com",
    hours: "Du-Sh: 9:00–17:00",
    courses: "Kompyuter grafikasi, Elektrik",
    format: "Kunduzgi, Sirtqi"
  },
  {
    name: "Kogon kasb-hunar markazi",
    city: "Kogon",
    address: "Ko‘cha 2",
    lat: 39.7150,
    lng: 64.5510,
    description: "Kasbiy ta'lim",
    category: "Xizmat ko'rsatish",
    phone: "+998 91 987 65 43",
    website: "https://kogon-edu.uz",
    hours: "Du-Ju: 8:00–16:00",
    courses: "Tikuvchilik, Oshpazlik",
    format: "Kunduzgi"
  }
];

// Инициализация карты
function initMap() {
  const mapDiv = document.getElementById('map');
  if (!mapDiv) return console.error('Элемент #map не найден');

  map = L.map('map').setView([39.774, 64.427], 8); // центр Узбекистана
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  centers.forEach(center => {
    L.marker([center.lat, center.lng])
      .addTo(map)
      .bindPopup(`<b>${center.name}</b><br>${center.address}`);
  });
}

// Центрирование карты на объект
function focusOnCenter(lat, lng) {
  if (!map) return;
  map.setView([lat, lng], 15);
  const center = centers.find(c => c.lat === lat && c.lng === lng);
  if (!center) return;

  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(`<b>${center.name}</b><br>${center.address}`).openPopup();
}

// Безопасный вывод текста
function sanitize(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Отображение результатов поиска или ассистента
function displayResults(results, containerId = 'results') {
  const resultsDiv = document.getElementById(containerId);
  if (!resultsDiv) return;

  resultsDiv.innerHTML = results.length === 0
    ? '<p class="text-gray-500">Ничего не найдено.</p>'
    : results.map(center => `
      <div class="p-4 bg-gray-50 rounded-lg">
        <h3 class="text-lg font-semibold">${sanitize(center.name)}</h3>
        <p class="text-gray-600">Город: ${sanitize(center.city)}</p>
        <p class="text-gray-600">Адрес: ${sanitize(center.address)}</p>
        <p class="text-gray-600">Координаты: <a href="#" class="text-blue-500 hover:underline coord-link" data-lat="${center.lat}" data-lng="${center.lng}">${sanitize(center.lat.toString())}, ${sanitize(center.lng.toString())}</a></p>
        <p class="text-gray-600">Категория: ${sanitize(center.category || 'Нет данных')}</p>
        <p class="text-gray-600">Телефон: ${sanitize(center.phone || 'Нет данных')}</p>
        ${center.website && center.website.startsWith('http')
          ? `<p class="text-gray-600">Сайт: <a href="${encodeURI(center.website)}" target="_blank" class="text-blue-500 hover:underline">${sanitize(center.website)}</a></p>`
          : '<p class="text-gray-600">Сайт: Нет данных</p>'}
        <p class="text-gray-600">Часы работы: ${sanitize(center.hours || 'Нет данных')}</p>
        <p class="text-gray-600">Курсы: ${sanitize(center.courses || 'Нет данных')}</p>
        <p class="text-gray-600">Формат: ${sanitize(center.format || 'Нет данных')}</p>
        <p class="text-gray-600">${sanitize(center.description)}</p>
      </div>
    `).join('');
}

// Поиск по строке
function searchCenters() {
  const input = document.getElementById('searchInput');
  const query = input?.value.trim().toLowerCase();
  if (!query) return displayResults(centers);

  const results = centers.filter(center => [
    center.name,
    center.city,
    center.address,
    center.category,
    center.courses
  ].some(field => field?.toLowerCase().includes(query)));

  displayResults(results);
}

// Ассистент: вопросы
const assistantQuestions = [
  {
    question: "Qaysi shaharda ta'lim olmoqchisiz?",
    options: [...new Set(centers.map(c => c.city)), 'barchasi'],
    key: 'city'
  },
  {
    question: 'Mutaxassislik',
    options: [...new Set(centers.map(c => c.category)), 'barchasi'],
    key: 'category'
  },
  {
    question: 'Ta\'lim shakli',
    options: ['Kunduzgi', 'Sirtqi', 'barchasi'],
    key: 'format'
  }
];

let assistantStep = 0;
let assistantAnswers = {};

function startAssistant() {
  assistantStep = 0;
  assistantAnswers = {};
  document.getElementById('assistantModal')?.classList.remove('hidden');
  showAssistantQuestion();
}

function showAssistantQuestion() {
  const content = document.getElementById('assistantContent');
  const prevBtn = document.getElementById('assistantPrev');
  const nextBtn = document.getElementById('assistantNext');

  if (assistantStep < assistantQuestions.length) {
    const { question, options, key } = assistantQuestions[assistantStep];
    content.innerHTML = `
      <p class="text-gray-700 mb-4">${question}</p>
      <select id="assistantSelect" class="w-full p-2 border rounded">
        ${options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
      </select>
    `;
    prevBtn.classList.toggle('hidden', assistantStep === 0);
    nextBtn.textContent = assistantStep === assistantQuestions.length - 1 ? 'Tanlov natijalari' : 'Keyingi';
    nextBtn.classList.remove('hidden');
  } else {
    const filtered = filterCenters();
    content.innerHTML = `
      <h3 class="text-lg font-semibold mb-4">Sizga tavsiya etiladigan ta'lim muassasalari</h3>
      <div id="assistantResults" class="max-h-96 overflow-y-auto"></div>
    `;
    displayResults(filtered, 'assistantResults');
    prevBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
  }
}

function filterCenters() {
  return centers.filter(center => {
    let match = true;
    if (assistantAnswers.city && assistantAnswers.city !== 'barchasi') {
      match = match && center.city === assistantAnswers.city;
    }
    if (assistantAnswers.category && assistantAnswers.category !== 'barchasi') {
      match = match && center.category === assistantAnswers.category;
    }
    if (assistantAnswers.format && assistantAnswers.format !== 'barchasi') {
      const centerFormats = center.format?.split(',').map(f => f.trim().toLowerCase()) || [];
      match = match && centerFormats.includes(assistantAnswers.format.toLowerCase());
    }
    return match;
  });
}

// Инициализация
function setupEventListeners() {
  document.getElementById('searchButton')?.addEventListener('click', searchCenters);
  document.getElementById('searchInput')?.addEventListener('keypress', e => {
    if (e.key === 'Enter') searchCenters();
  });

  ['results', 'assistantModal'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', e => {
      const link = e.target.closest('.coord-link');
      if (link) {
        e.preventDefault();
        const lat = parseFloat(link.dataset.lat);
        const lng = parseFloat(link.dataset.lng);
        focusOnCenter(lat, lng);
      }
    });
  });

  document.getElementById('assistantButton')?.addEventListener('click', startAssistant);

  document.getElementById('assistantPrev')?.addEventListener('click', () => {
    if (assistantStep > 0) {
      assistantStep--;
      showAssistantQuestion();
    }
  });

  document.getElementById('assistantNext')?.addEventListener('click', () => {
    const select = document.getElementById('assistantSelect');
    if (!select) return;
    assistantAnswers[assistantQuestions[assistantStep].key] = select.value;
    assistantStep++;
    showAssistantQuestion();
  });

  document.getElementById('assistantClose')?.addEventListener('click', () => {
    document.getElementById('assistantModal')?.classList.add('hidden');
    assistantStep = 0;
    assistantAnswers = {};
  });

  searchCenters();
}

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  setupEventListeners();
});
