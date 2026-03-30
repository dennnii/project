let weatherData = {
    'Москва': {
        today: {
            temp: '-2°', desc: 'облачно', humidity: '78%', wind: '4 м/с', asset: '☁️'
        },
        week: [
            { day: 'ПН', temp: '-2°', desc: 'облачно', asset: '☁️' },
            { day: 'ВТ', temp: '0°', desc: 'пасмурно', asset: '🌨️' },
            { day: 'СР', temp: '+2°', desc: 'солнечно', asset: '☀️' },
            { day: 'ЧТ', temp: '-1°', desc: 'облачно', asset: '☁️' },
            { day: 'ПТ', temp: '0°', desc: 'снег', asset: '❄️' },
            { day: 'СБ', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '+4°', desc: 'солнечно', asset: '☀️' },
        ]
    },
    'Санкт-Петербург': {
        today: {
            temp: '-4°', desc: 'снег', humidity: '79%', wind: '8 м/с', asset: '❄️'
        },
        week: [
            { day: 'ПН', temp: '-6°', desc: 'снег', asset: '❄️' },
            { day: 'ВТ', temp: '-4°', desc: 'облачно', asset: '☁️' },
            { day: 'СР', temp: '0°', desc: 'солнечно', asset: '☀️' },
            { day: 'ЧТ', temp: '-8°', desc: 'пасмурно', asset: '🌨️' },
            { day: 'ПТ', temp: '+1°', desc: 'облачно', asset: '☁️' },
            { day: 'СБ', temp: '-4°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '-1°', desc: 'снег', asset: '❄️' },
        ]
    },
    'Петрозаводск': {
        today: {
            temp: '-6°', desc: 'снегопад', humidity: '85%', wind: '6 м/с', asset: '🌨️'
        },
        week: [
            { day: 'ПН', temp: '-6°', desc: 'сильный снег', asset: '🌨️' },
            { day: 'ВТ', temp: '-5°', desc: 'снег', asset: '❄️' },
            { day: 'СР', temp: '-4°', desc: 'облачно', asset: '☁️' },
            { day: 'ЧТ', temp: '-6°', desc: 'снег', asset: '❄️' },
            { day: 'ПТ', temp: '-7°', desc: 'снегопад', asset: '🌨️' },
            { day: 'СБ', temp: '-5°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '-4°', desc: 'солнечно', asset: '☀️' },
        ]
    },
    'Нижний Новгород': {
        today: {
            temp: '-3°', desc: 'облачно', humidity: '76%', wind: '4 м/с', asset: '☁️'
        },
        week: [
            { day: 'ПН', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВТ', temp: '-2°', desc: 'солнечно', asset: '☀️' },
            { day: 'СР', temp: '-1°', desc: 'солнечно', asset: '☀️' },
            { day: 'ЧТ', temp: '-2°', desc: 'облачно', asset: '☁️' },
            { day: 'ПТ', temp: '-4°', desc: 'небольшой снег', asset: '🌨️' },
            { day: 'СБ', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '-1°', desc: 'солнечно', asset: '☀️' },
        ]
    },
    'Казань': {
        today: {
            temp: '-4°', desc: 'пасмурно', humidity: '79%', wind: '5 м/с', asset: '☁️'
        },
        week: [
            { day: 'ПН', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВТ', temp: '-2°', desc: 'солнечно', asset: '☀️' },
            { day: 'СР', temp: '-1°', desc: 'солнечно', asset: '☀️' },
            { day: 'ЧТ', temp: '-2°', desc: 'облачно', asset: '☁️' },
            { day: 'ПТ', temp: '-4°', desc: 'небольшой снег', asset: '🌨️' },
            { day: 'СБ', temp: '-3°', desc: 'облачно', asset: '☁️' },
            { day: 'ВС', temp: '-1°', desc: 'солнечно', asset: '☀️' },
        ]
    },
    'Екатеринбург': {
        today: {
            temp: '-7°', desc: 'морозно', humidity: '72%', wind: '3 м/с', asset: '❄️'
        },
        week: [
            { day: 'ПН', temp: '-7°', desc: 'ясно', asset: '☀️' },
            { day: 'ВТ', temp: '-6°', desc: 'солнечно', asset: '☀️' },
            { day: 'СР', temp: '-5°', desc: 'облачно', asset: '☁️' },
            { day: 'ЧТ', temp: '-6°', desc: 'снег', asset: '❄️' },
            { day: 'ПТ', temp: '-8°', desc: 'морозно', asset: '❄️' },
            { day: 'СБ', temp: '-7°', desc: 'ясно', asset: '☀️' },
            { day: 'ВС', temp: '-5°', desc: 'солнечно', asset: '☀️' },
        ]
    },
};

function updateTodayWeather(city) {
    let data = weatherData[city];
    document.getElementById('city-display').textContent = city;
    document.getElementById('current-temp').textContent = data.today.temp;
    document.getElementById('current-desc').textContent = data.today.desc;
    document.getElementById('humidity').textContent = data.today.humidity;
    document.getElementById('wind').textContent = data.today.wind;
    document.getElementById('weather-icon').textContent = data.today.asset;
}

function setCity(city) {
    localStorage.setItem('selected-city', city);
    alert(`Город изменен на ${city}`);
}

function showWeek(city) {
    let data = weatherData[city];
    let Forecast = document.getElementById('week-forecast');
    let html = ''
    data.week.forEach(day => {
        html += `
            <div class="forecast-item">
                <span class="forecast-day">${day.day}</span>
                <span class="forecast-icon">${day.icon}</span>
                <span class="forecast-desc">${day.desc}</span>
                <span class="forecast-temp">${day.temp}</span>
            </div>
        `;
    });
    Forecast.innerHTML = html
}
