/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags);

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    });

    WA.room.area.onLeave('clock').subscribe(closePopup);

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

let timer: ReturnType<typeof setInterval> | undefined;
let timeLeft = 25 * 60; // 25 minutes in seconds
WA.onInit().then(() => {
    WA.event.on('ping').subscribe((event) => {
        if (event.data === 'startTimer') {
            console.log('Ping received: starting timer');
            startTimer();
        } else {
            console.log(event.data);
        }
    });
});

function startTimer() {
    if (timer) {
        clearInterval(timer);
    }
    timeLeft = 25 * 60; // reset to 25 minutes
    WA.state['timeLeft'] = timeLeft / 60; // set initial timeLeft in minutes
console.log('Initial time left:', timeLeft);
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft -= 60; // decrement by 60 seconds
            WA.state['timeLeft'] = timeLeft / 60; // update timeLeft in minutes
            console.log('Time left:', timeLeft / 60, 'minutes');
        } else {
            clearInterval(timer);
            timer = undefined;
            console.log('Timer has ended');
        }
    }, 60000); // 60 seconds interval
}
