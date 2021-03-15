export default {
    apiURLBase: 'http://api.openweathermap.org/data/2.5/weather?',
    additionalInfo: [
        {
            id: 1,
            name: 'Ветер',
            measure: 'м/c',
            getData: function (obj) {
                return Math.round(obj.wind.speed);
            }
        },
        {
            id: 2,
            name: 'Влажность',
            measure: '%',
            getData: function (obj) {
                return Math.round(obj.main.humidity);
            }
        },
        {
            id: 3,
            name: 'Давление',
            measure: 'мм рт.ст.',
            getData: function (obj) {
                return Math.round(obj.main.pressure * 0.75);
            }
        },
    ]
};