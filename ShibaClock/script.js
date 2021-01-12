const clock = document.getElementById('clock');
const shiba = document.getElementById('shiba');

function displayClock(){
    let time = new Date
    let hoursToString = ""
    let minutesToString = ""
    let secondsToString = ""
    let hours = time.getHours()
    if ( hours < 10){
        hoursToString = '0' + hours.toString()
    }
    else{
        hoursToString = hours.toString()
    }
    minutes = time.getMinutes()
    if ( minutes < 10){
        minutesToString = '0' + minutes.toString()
    }
    else{
        minutesToString = minutes.toString()
    }
    seconds = time.getSeconds()
    if ( seconds < 10){
        secondsToString = '0' + seconds.toString()
    }
    else{
        secondsToString = seconds.toString()
    }
    clock.innerText = hoursToString + " : " + minutesToString + " : " + secondsToString
}

function displayShiba(){
    let time = new Date
    let hours = time.getHours() 
    let img = document.createElement('IMG')
    let p = document.createElement('P')
    if (hours < 8){
        img.setAttribute('src','./assets/sleep.jpg')
        p.innerText = "Zzzzz... sleep time."
    }
    else if (hours >= 8 && hours < 12){
        img.setAttribute('src','./assets/work.jpg')
        p.innerText = "Work time!"
    }
    else if (hours >= 12 && hours < 14){
        img.setAttribute('src','./assets/eat.jpg')
        p.innerText = "Time to eat, miam!"
    }
    else if (hours >= 14 && hours < 16){
        img.setAttribute('src','./assets/walk.jpg')
        p.innerText = "Go for a walk!"
    }
    else if (hours >= 16 && hours < 19){
        img.setAttribute('src','./assets/TV.jpg')
        p.innerText = "ShibFlix and chill"
    }
    else if (hours >= 19 && hours < 21){
        img.setAttribute('src','./assets/eat.jpg')
        p.innerText = "Time to eat, miam!"
    }
    else if (hours >= 21){
        img.setAttribute('src','./assets/sleep.jpg')
        p.innerText = "Zzzzz... sleep time."
    }
    if(!shiba.hasChildNodes('img')){
        shiba.appendChild(img)
        shiba.appendChild(p)
    }  
}

displayShiba()
setInterval(displayShiba,60000)
setInterval(displayClock,1000)