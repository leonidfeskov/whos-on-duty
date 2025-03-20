const teams = ['🚁 mobi-dick', '✈️ WebServices'];️

const weekNode = document.querySelector('#number-of-week');
const teamNode = document.querySelector('#team');

function getWeekNumber(date) {
    // Копируем дату, чтобы не изменять оригинальную
    const d = new Date(date);

    // Устанавливаем дату на начало года
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));

    // Получаем первый день года
    const yearStart = new Date(d.getFullYear(), 0, 1);

    // Вычисляем номер недели
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

const today = new Date();
const numberOfWeek = getWeekNumber(today);

weekNode.innerHTML = `${numberOfWeek}`;
teamNode.innerHTML = teams[numberOfWeek % 2];