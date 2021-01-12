const sea = document.getElementById('sea');
const rain = document.getElementById('rain');
const play = document.getElementById('play');
const playIcon = document.getElementById('playIcon');

let TYPE = 'sea'
let audio = new Audio('./sounds/' + TYPE + '.mp3');

play.addEventListener('click', () =>{
    if(!audio.paused){
        audio.pause()
        playIcon.src = "./assets/play.png"
    }
    else{
        audio.play();
        playIcon.src = "./assets/pause.png"
    }
})

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

function changeBg(type){
    document.body.style.backgroundImage = 'url(assets/'+ type +'.gif)'
}
