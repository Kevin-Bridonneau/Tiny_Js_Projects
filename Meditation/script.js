const sea = document.getElementById('sea');
const rain = document.getElementById('rain');
const forest = document.getElementById('forest');
const thunder = document.getElementById('thunder');
const space = document.getElementById('space');
const diving = document.getElementById('diving');
const play = document.getElementById('play');
const playIcon = document.getElementById('playIcon');
const tempo2 = document.getElementById('tempo2');
const tempo5 = document.getElementById('tempo5');
const tempo10 = document.getElementById('tempo10');

let TYPE = 'sea'
let audio = new Audio('./sounds/' + TYPE + '.mp3');
let TEMPO = 2
let intervalId = null;

tempo2.addEventListener('click',()=>{
    if(!audio.paused){
        stopAudio()
        audio.currentTime = 0
    }
    TEMPO = 2
})

tempo5.addEventListener('click',()=>{
    if(!audio.paused){
        stopAudio()
        audio.currentTime = 0
    }
    TEMPO = 5
})

tempo10.addEventListener('click',()=>{
    if(!audio.paused){
        stopAudio()
        audio.currentTime = 0
    }
    TEMPO = 10
})

play.addEventListener('click', () =>{
    if(!audio.paused){
        stopAudio()
        
    }
    else{
        playIcon.src = "./assets/pause.png"
        audio.play()
        intervalId = setInterval("playAudio()",1000)
    }
})

function stopAudio(){
    audio.pause()
    playIcon.src = "./assets/play.png"
    clearInterval(intervalId)
}

function playAudio(){
    let currentTime = audio.currentTime
    console.log(TEMPO * 60,currentTime)
    if(TEMPO * 60 < currentTime){
        console.log("end")
        audio.pause()
        audio.currentTime = 0
        playIcon.src = "./assets/play.png"
        clearInterval(intervalId)
    }
}

sea.addEventListener('click', ()=>{
    TYPE = 'sea'
    changeBg('sea')
    if(!audio.paused){
        audio.pause()
        playIcon.src = "./assets/play.png"
    }
    audio.src = './sounds/' + TYPE + '.mp3'
})

rain.addEventListener('click', ()=>{
    TYPE = 'rain'
    changeBg('rain')
    if(!audio.paused){
        audio.pause()
        playIcon.src = "./assets/play.png"
    }
    audio.src = './sounds/' + TYPE + '.mp3'
})

forest.addEventListener('click', ()=>{
    TYPE = 'forest'
    changeBg('forest')
    if(!audio.paused){
        audio.pause()
        playIcon.src = "./assets/play.png"
    }
    audio.src = './sounds/' + TYPE + '.mp3'
})

space.addEventListener('click', ()=>{
    TYPE = 'space'
    changeBg('space')
    if(!audio.paused){
        audio.pause()
        playIcon.src = "./assets/play.png"
    }
    audio.src = './sounds/' + TYPE + '.mp3'
})

thunder.addEventListener('click', ()=>{
    TYPE = 'thunder'
    changeBg('thunder')
    if(!audio.paused){
        audio.pause()
        playIcon.src = "./assets/play.png"
    }
    audio.src = './sounds/' + TYPE + '.mp3'
})

diving.addEventListener('click', ()=>{
    TYPE = 'diving'
    changeBg('diving')
    if(!audio.paused){
        audio.pause()
        playIcon.src = "./assets/play.png"
    }
    audio.src = './sounds/' + TYPE + '.mp3'
})

function changeBg(type){
    document.body.style.backgroundImage = 'url(assets/'+ type +'.gif)'
}
