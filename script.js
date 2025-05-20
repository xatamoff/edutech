// Данные об образовательных центрах
const centers = [
  { 
    name: "Бухоро туман политехникуми", city: "Бухоро", address: "Конечка", lat: 39.741394, lng: 64.442528, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+9 (865) 222-75-50", website: "https://t.me/buxoropolitexnikum", 
    hours: "Du-Sh: 10:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Kompyuter grafikasi va dizayn operatori, Sotuvchi, Nazoratchi-kassir, Tikuvchi, Payvandlovchi, Traktorchi-mashinist, Suv xoʻjaligi avtomatlashtirilgan boshqarish tizimi  operatori, Mehmonxona xoʻjaligini tashkil qilish va boshqarish", format: "Kunduzgi, Sirtqi"
  },
  { 
    name: "Бухоро туман экология ва сервис техникуми", city: "Бухоро", address: "Конечка", lat: 39.741394, lng: 64.442528,
    description: "Kasbiy ta'lim", category: "Ekologiya", 
    phone: "+9 (865) 222-75-50", website: "https://t.me/buxoro", 
    hours: "Du-Sh: 10:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Intensiv bogʻlar operatori , Qutqaruvchi", format: "Kunduzgi, Sirtqi"
  },
  { 
    name: "Бухоро туризм ва маданий мерос техникуми", city: "Бухоро", address: "Buxoro shahar, Sanoatchilar ko‘chasi, 26 uy", lat: 39.755866, lng: 64.440930,
    description: "Kasbiy ta'lim", category: "Madaniyat", 
    phone: "+9 (865) 222-75-50", website: "https://www.buxtt.uz/", 
    hours: "Du-Sh: 10:00-16:00", courses: "Mehmonxona xoʻjaligi mutaxassisi, Oshpaz, Sartarosh (modelyer), Novvoy, Kompyuter tizimlarida dasturlash, Mehmonxona xoʻjaligini tashkil qilish va boshqarish, Kompyuter grafikasi va dizayn operatori", format: "Kunduzgi, Sirtqi"
  },
  { 
    name: "Бухоро Абу Али ибн Сино номидаги Жамоат саломатлиги техникуми", city: "Бухоро", address: "ул. Горская, 15", lat: 39.7638, lng: 64.4114,
    description: "Kasbiy ta'lim", category: "Tibbiyot", 
    phone: "+9 (865) 221-02-60", website: "https://t.me/bux_tib_tex", 
    hours: "Du-Sh: 10:00-16:00", courses: "Pardozlovchi, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Kompyuter grafikasi va dizayn operatori, Zargarlik buyumlari bo‘yicha usta, Payvandlovchi, Elektromontyor", format: "Kunduzgi, Sirtqi"
  },
  { 
    name: "Buxoro transport va qurilish texnologiyalari texnikumi", city: "Buxoro", address: "ул. Баумана, 20", lat: 55.7887, lng: 49.1221, 
    description: "Kasbiy ta'lim", category: "Transport, Qurilish", 
    phone: "+7 (843) 666-77-88", website: "https://t.me/bux_tib_tex",
    hours: "Пн-Сб: 10:00-20:00", courses: "Pardozlovchi, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Kompyuter grafikasi va dizayn operatori, Zargarlik buyumlari bo‘yicha usta, Payvandlovchi, Elektromontyor", format: "Очно"
  },
  { 
    name: "Buxoro energetika, neft va gaz sanoati texnikumi", city: "Buxoro", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Energetika", 
    phone: "+7 (863) 222-11-99", website: "https://buduschee-rostov.ru", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Quyosh panellarini oʻrnatish va ularga texnik xizmat koʻrsatish, Elektrik, Avtomatika va nazorat-oʻlchash asboblari sozlovchisi, Gaz jihozlarini taʼmirlash va ularga xizmat koʻrsatish, Payvandlovchi", format: "Очно"
  },
  { 
    name: "Buxoro shahar politexnikumi", city: "Buxoro", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "https://buduschee-rostov.ru", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Kompyuter grafikasi va dizayn operatori, Qutqaruvchi, Elektromontajchi-sozlovchi, Sartarosh (modelyer), Tikuvchi", format: "Kunduzgi, Sirtqi"
  },
  { 
    name: "Buxoro soliq texnikumi", city: "Buxoro", address: "Piridastgir, 20-uy", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Iqtisodiyot", 
    phone: "+7 (863) 222-11-99", website: "https://buxst.uz", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Bank nazoratchisi, Raqamli axborotlarni qayta ishlash ustasi, Axborot vositalari mashinalari va kompyuter tarmoqlari, Agrobiznes va marketing agenti", format: "Kunduzgi, Sirtqi"
  },
{ 
    name: "Buxoro pedagogika texnikumi", city: "Buxoro", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Pedagogika", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Kompyuter grafikasi va dizayn operatori, Tikuvchi, Oshpaz", format: "Kunduzgi, Sirtqi"
  },
{ 
    name: "Vobkent sanoat va transport texnikumi", city: "Vobkent", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Sanoat,Transport", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Payvandlovchi, Traktorchi-mashinist, Quyosh panellarini oʻrnatish va ularga texnik xizmat koʻrsatish, Asalarichi, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Kompyuter grafikasi va dizayn operatori", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Vobkent tuman 1-son politexnikumi", city: "Vobkent", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Tikuvchi, Apparat va dasturiy taʼminot sozlovchisi, Payvandlovchi, Oqava suv va suv taʼminoti tizimlaridan foydalanish va montaj qilish ustasi", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Vobkent tuman 2-son politexnikumi", city: "Vobkent", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Apparat va dasturiy taʼminot sozlovchisi, Tikuvchi, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Asalarichi, Tikuvchilikda andoza tayyorlash", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Gʻijduvon agrotexnologiyalar texnikumi", city: "Gʻijduvon", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Agrotexnologiya", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Chorvador, Traktorchi-mashinist, Kompyuter tizimlarida dasturlash, Elektrik, Tikuvchilik mahsulotlari dizayneri, Suv xoʻjaligi avtomatlashtirilgan boshqarish tizimi operatori", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Gʻijduvon tuman 1-son politexnikumi", city: "Gʻijduvon", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Apparat va dasturiy taʼminot sozlovchisi, Turar-joy kommunal xoʻjaligi ustasi, Suv xoʻjaligi avtomatlashtirilgan boshqarish tizimi operatori, Tikuvchi, Sotuvchi, nazoratchi-kassir", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Gʻijduvon tuman 2-son politexnikumi", city: "Gʻijduvon", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Elektrik, Apparat va dasturiy taʼminot sozlovchisi, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Sotuvchi, nazoratchi-kassir, Tikuvchi, Chilangar, Toʻqish-tikish jihozlari operatori, Quyosh panellarini oʻrnatish va ularga texnik xizmat koʻrsatish, Oshpaz", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Gʻijduvon tuman 3-son politexnikumi", city: "Gʻijduvon", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Axborot vositalari mashinalari va kompyuter tarmoqlari, Elektrik, Payvandlovchi, Tikuvchi", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Jondor tuman politexnikumi", city: "Jondor", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Apparat va dasturiy taʼminot sozlovchisi, Elektrik, Payvandlovchi, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Tikuvchi, Turar-joy kommunal xoʻjaligi ustasi, Gaz va suv isteʼmol nazoratchi operatori", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Jondor agrotexnologiyalar texnikumi", city: "Jondor", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Agrotexnologiya", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Raqamli axborotlarni qayta ishlash ustasi, Elektrik, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Elektromobillarga texnik xizmat ko‘rsatish va ta’mirlash, Tikuvchi, Traktorchi-mashinist, Asalarichi, Sotuvchi, nazoratchi-kassir", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Kogon tuman politexnikumi", city: "Kogon", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Elektrik, Tikuvchi, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Payvandlovchi, Traktorchi-mashinist, Axborot vositalari mashinalari va kompyuter tarmoqlari", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Kogon shahar politexnikumi", city: "Kogon", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Axborot vositalari mashinalari va kompyuter tarmoqlari, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Qutqaruvchi, Payvandlovchi, Tikuvchi, Elektr jihozlariga xizmat koʻrsatish va taʼmirlash, Metallga ishlov berish", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Qorakoʻl pedagogika texnikumi", city: "Qorakoʻl", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Pedagogika", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Tikuvchi, Kompyuter grafikasi va dizayn operatori", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Qorakoʻl tuman 1-son politexnikumi", city: "Qorakoʻl", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Apparat va dasturiy taʼminot sozlovchisi, Traktorchi-mashinist, Qurilish ishlari ishchisi, Payvandlovchi, Sanitariya va konditsioner qurilmalari montaji, Tikuvchi", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Qorakoʻl tuman 2-son politexnikumi", city: "Qorakoʻl", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Apparat va dasturiy taʼminot sozlovchisi, Traktorchi-mashinist, Qurilish ishlari ishchisi, Payvandlovchi, Yoqilgʻi quyish shoxobchasi operatori, Tikuvchi ", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Qorovulbozor tuman politexnikumi", city: "Qorovulbozor", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Axborot vositalari mashinalari va kompyuter tarmoqlari, Kompressor qurilmalari mashinisti, Elektromontyor, Quyosh panellarini oʻrnatish va ularga texnik xizmat koʻrsatish, Payvandlovchi, Tikuvchi, Oshpaz", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Olot tuman politexnikumi", city: "Olot", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Apparat va dasturiy taʼminot sozlovchisi, Traktorchi-mashinist, Elektromontyor, Melioratsiya texnikasi operatori, Chorvador, Quyosh panellarini oʻrnatish va ularga texnik xizmat koʻrsatish, Tikuvchi ", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Peshku tuman 1-son politexnikumi", city: "Peshku", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Raqamli axborotlarni qayta ishlash ustasi, Elektromontyor, Quyosh panellarini oʻrnatish va ularga texnik xizmat koʻrsatish, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Payvandlovchi, Traktorchi-mashinist, Suv xoʻjaligi avtomatlashtirilgan boshqarish tizimi operatori, Maishiy texnika jihozlariga xizmat koʻrsatish va taʼmirlash, Sartarosh (modelyer), Mebel ishlab chiqarish, Tikuvchi ", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Peshku tuman 2-son politexnikumi", city: "Peshku", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Tikuvchi, Yigiruv ishlab chiqarish, Qurilish ishlari ishchisi, Traktorchi-mashinist", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Romitan tuman 1-son politexnikumi", city: "Romitan", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Kompyuter grafikasi va dizayn operatori, Sartarosh (modelyer), Tikuvchi ", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Romitan tuman 2-son politexnikumi", city: "Romitan", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Tikuvchi, Oshpaz, Axborot vositalari mashinalari va kompyuter tarmoqlari ", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Romitan tuman 3-son politexnikumi", city: "Romitan", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Kompyuter grafikasi va dizayn operatori, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Asalarichi, Oʻsimliklar himoyasi laboranti, Elektr stansiyalari uskunalarini taʼmirlash, Chorvador, Traktorchi-mashinist, Tikuvchi ", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Shofirkon raqamli texnologiyalar texnikumi", city: "Shofirkon", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Axborot texnologiyalari", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Axborot vositalari mashinalari va kompyuter tarmoqlari, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Payvandlovchi, Elektromontyor, Tikuvchi", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Shofirkon agrotexnologiyalar texnikumi", city: "Shofirkon", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Agrotexnologiyalar", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Elektromontyor, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Payvandlovchi, Tikuvchi, Kompyuter grafikasi va dizayn operatori, Qurilish ishlari ishchisi, Traktorchi-mashinist, Asalarichi, Oshpaz", format: "Kunduzgi, Sirtqi"
  }, 
{ 
    name: "Shofirkon tuman politexnikumi", city: "Shofirkon", address: "ул. Садовая, 30", lat: 47.2357, lng: 39.7015, 
    description: "Kasbiy ta'lim", category: "Servis va xizmat ko'rsatish", 
    phone: "+7 (863) 222-11-99", website: "1", 
    hours: "Пн-Вс: 9:00-16:00", courses: "Apparat va dasturiy taʼminot sozlovchisi, Avtomobillarni taʼmirlash va ularga xizmat koʻrsatish, Payvandlovchi, Tikuvchi, Traktorchi-mashinist, Elektrik, Asalarichi, Oshpaz", format: "Kunduzgi, Sirtqi"
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
    question: "Qaysi shaharda ta'lim olmoqchisiz?",
    options: [...new Set(centers.map(c => c.city)), "barchasi"],
    key: "city"
  },
  {
    question: "Mutaxassislik",
    options: [...new Set(centers.map(c => c.category)), "barchasi"],
    key: "category"
  },
  {
    question: "Ta'lim shakli",
    options: ["Kunduzgi", "Sirtqi", "barchasi"],
    key: "format"
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
    nextBtn.textContent = assistantStep === assistantQuestions.length - 1 ? 'Tanlov natijalari' : 'Keyingi';
    console.log(`Показан вопрос ${assistantStep + 1}: ${question}`);
  } else {
    const filteredCenters = filterCenters();
    content.innerHTML = '<h3 class="text-lg font-semibold mb-4">Sizga tavsiya etiladigan ta'lim muassasalari</h3><div id="assistantResults" class="max-h-96 overflow-y-auto"></div>';
    displayResults(filteredCenters, 'assistantResults');
    prevBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    console.log('Показаны рекомендации в #assistantResults, центров:', filteredCenters.length);
  }
}

function filterCenters() {
  const filtered = centers.filter(center => {
    let match = true;
    if (assistantAnswers.city && assistantAnswers.city !== 'barchasi') {
      match = match && center.city === assistantAnswers.city;
    }
    if (assistantAnswers.category && assistantAnswers.category !== 'barchasi') {
      match = match && center.category === assistantAnswers.category;
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
        console.log('Ассистент: Keyingi, шаг:', assistantStep, 'ответы:', assistantAnswers);
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
