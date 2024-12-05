/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import {  stopwatchIcon } from "./icons"; //startIcon, refreshIcon, pauseIcon


console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
WA.onInit().then(() => {
    WA.event.on("pong").subscribe((event) => {
        if (event.data === "timerStarted") {
            console.log("Timer has started");
        } else {
            console.log(event.data);
        }
    });
});




WA.onInit().then(() => {
function addTimerButton() {
    WA.ui.actionBar.addButton(
    {
        toolTip: "start timer",
        type: 'action',
        imageSrc: stopwatchIcon,
        id: "startTimer-btn",
        callback: () => {
            WA.event.broadcast("ping", "timerStart");
            console.log('Button clicked');
            WA.ui.actionBar.removeButton('startTimer-btn');
          //  addRestartButton();
          //  addPauseButton();
        }},
    );
}
/*
function addPauseButton() {
    WA.ui.actionBar.addButton(
    {
        toolTip: "pause timer",
        id: "pauseTimer-btn",
        type: 'action',
        imageSrc: pauseIcon,
        callback: () => {
          //  WA.event.broadcast("ping", "timerReset");
         //   console.log('Button clicked');
           WA.ui.actionBar.removeButton('pauseTimer-btn');
          //  addPlayButton();
        }},
    );
}

function addPlayButton() {
    WA.ui.actionBar.addButton(
    {
        toolTip: "play timer",
        type: 'action',
        imageSrc: startIcon,
        id: "playTimer-btn",
        callback: () => {
          //  WA.event.broadcast("ping", "timerContinue");
         //   console.log('Button clicked');
          WA.ui.actionBar.removeButton('playTimer-btn');
          //  addPauseButton();
        }},
    );
}

function addRestartButton() {
    WA.ui.actionBar.addButton(
    {
        toolTip: "refresh timer",
        type: 'action',
        imageSrc: refreshIcon,
        id: "refreshTimer-btn",
        callback: () => {
          //  WA.event.broadcast("ping", "timerRefresh");
            console.log('Button clicked');
            WA.ui.actionBar.removeButton('refreshTimer-btn');
            WA.ui.actionBar.removeButton('pauseTimer-btn');
         //   addTimerButton();
        }},
    );
}
*/

addTimerButton();
WA.state.onVariableChange('timeLeft').subscribe(() => {
    if (timeLeft === 0) { addTimerButton(); } 
});})

WA.onInit().then(() => {
    const timeLeft = WA.state.timeLeft;
    console.log('Initial time left:', timeLeft);

    WA.state.onVariableChange('timeLeft').subscribe((TimeLeft) => {
        console.log('Time left changed:', TimeLeft);
    });
});

WA.onInit().then(() => {WA.event.on('pong').subscribe((event) => {console.log(event.data);});});
WA.state.onVariableChange('timeLeft').subscribe(async (newTimeLeft) => {
    const timeLeft = newTimeLeft as number;
    console.log('Time left changed:', timeLeft);
    const newTitle = `https://iw6tkif7th7yp5ax2ufzkl3kce0bcuys.lambda-url.us-east-1.on.aws/?text=${encodeURIComponent(timeLeft.toString())}&imageType=caption&width=120&height=60&color=yellow`;
    console.log('New img-url of title is ' + newTitle);
    const website = await WA.room.website.get('timeLeftDisplay');
    website.url = newTitle;
    website.visible = true;
    console.log(`Title for timeLeft has been changed to ${website.url}`);
});

WA.onInit().then(() => {
  

});


/////////////
let timer: ReturnType<typeof setInterval> | undefined;
let timeLeft = 25 * 60; // 25 minutes in seconds
WA.onInit().then(() => {
    WA.event.on('ping').subscribe((event) => {
        if (event.data === 'timerStart') {
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
    WA.state['timeLeft'] = "25"
    timeLeft = 25 * 60; // reset to 25 minutes
    WA.state['timeLeft'] = timeLeft / 60; // set initial timeLeft in minutes
    WA.event.broadcast('pong', 'timerStarted');
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

export {};
