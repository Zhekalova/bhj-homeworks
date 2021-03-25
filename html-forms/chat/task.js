'use strict'

const chatWidget = document.getElementsByClassName('chat-widget')[0];
const messages = document.getElementById('chat-widget__messages');
const chatInput = document.getElementById('chat-widget__input');
const chatContainer = document.querySelector('.chat-widget__messages-container');
const botAnswers = [
    'Где ваша совесть?',
    'Кто тут?',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
    'Добрый день! До свидания!',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Мы ничего не будем вам продавать!'
];

function showChat() {
    chatWidget.classList.add('chat-widget_active');
}

chatWidget.addEventListener('click', showChat);

function getBotAnswer() {
    let max = botAnswers.length;
    let rand = Math.floor(1 + Math.random() * (max + 1 - 1));
    return `${botAnswers[rand]}`;
}

function currentTime() {
    const addLeadingZero = (time) => (time < 10 ? `0${time}` : `${time}`);
    const hours = addLeadingZero(new Date().getHours());
    const minutes = addLeadingZero(new Date().getMinutes());
    return `${hours}:${minutes}`;
}

chatInput.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        if (chatInput.value) {
            messages.innerHTML += `<div class="message message_client">
            <div class="message__time">${currentTime()}</div>
            <div class="message__text">${chatInput.value}</div>
            </div>`;
            chatInput.value = "";
            messages.innerHTML += `<div class="message">
            <div class="message__time">${currentTime()}</div>
            <div class="message__text">${getBotAnswer()}</div>
            </div>`;
            document.querySelector('.chat-widget__messages-container').scrollTop = document.querySelector('.chat-widget__messages-container').scrollHeight;
        }
    }
});