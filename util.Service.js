'use strict';

// RUN FUNC ONLY AFTER LONG PRESSING ON SOME BUTTON
function onLongPress(elBtn, func, delayMs = 500) {
    console.log('click');
    let delayId;
    elBtn.onmousedown = () => {
        delayId = setTimeout(func,delayMs)              
    }

    elBtn.onmouseup = () => {
        clearTimeout(delayId)
        console.log('remove');
        
        elBtn.onmousedown = undefined
    }

}


//Get mili seconds, display 00:00:00 time format. to use timeStemp corect, set 'localTimeZone = true' 
function formatedTime({ time, showHour = true, showMinute = true, showSecond = true, localTimeZone = false }) {
    return new Intl.DateTimeFormat('he-IL', {
        hour: showHour ? '2-digit' : undefined,
        minute: showMinute ? '2-digit' : undefined,
        second: showSecond ? '2-digit' : undefined,
        hour12: false,
        timeZone: localTimeZone ? undefined : 'UTC'
    }).format(time)
}

//custome seperator:
// function formatedTime(miliSec = 0, seperator = ':') {

//     function format(num) {
//         return `${num > 10 ? num : num > 0 ? '0' + num : '00'}`
//     }
//     const hours = Math.floor((miliSec % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((miliSec % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((miliSec % (1000 * 60)) / 1000);
//     return format(hours) + seperator + format(minutes) + seperator + format(seconds)
// }



//Arrays:
function createRandMatrix(matxLength = Math.floor(Math.random() * 10)) {
    var mat = [];
    for (var i = 0; i < matxLength; i++) {
        var row = [];
        mat.push(row);
        for (var j = 0; j < matxLength; j++) {
            mat[i].push(Math.floor(Math.random() * 100));
        }
    }

    return mat;
}


// geta css Custom property or variable value by its css name like '--BG-color' or 'max-with'
function getCssVarible(propName, selector = ':root') {
    const el = document.querySelector(selector);
    const elStyle = getComputedStyle(el);
    return elStyle.getPropertyValue(propName)
}


// set a css variable value by its css name, like '--BG-color' or 'max-with'
function setCssVarible(propName, value, unit = '', selector = ':root') {
    // Set the value of variable --blue to another value (in this case "lightblue")
    const el = document.querySelector(selector);
    el.style.setProperty(propName, value += unit);
}


{ // get - set
let val = '#332244'
document.querySelector(':root').style['--color'] = val
}