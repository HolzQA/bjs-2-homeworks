"use strict"

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;    // асинхронное выполнение
    }

    // доюавляет новый звонок в коллекцию
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.find(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({callback, time, canCall: true}); 
    }

    // удаляет звонки по определенному времени
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    // возвращает текущее время в строковом формате
    getCurrentFormattedTime() {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const min = String(date.getMinutes()).padStart(2, "0");
        return hours + ":" + min;
        // return `${hours} : ${min}`
        /* return new Date().toLocaleTimeString("ru-Ru",{
            hour: "2-digit",
            minute: "2-digit",
        }) */
    }

    // запускает будильник
    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            const now = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === now && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();                     // здесь запускаем callback, а не просто обращаемся к ней 
                }
            });
        }, 1000);
    }

    // останавливает выполнение интервала будильника
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;  // чтобы заново запустить будильник (см. начало в start())
    }

    // включает все будильники
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    // удаляет все будильники
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}