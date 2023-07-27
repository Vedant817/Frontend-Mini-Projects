let songs = [
    {songsName:'Laung Da Lashkara',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songsName:'Die For You',filePath:'songs/2.mp3',coverPath:'covers/2.jpg'},
    {songsName:'Gasoline',filePath:'songs/3.mp3',coverPath:'covers/3.jpg'},
    {songsName:'Dil Nu',filePath:'songs/4.mp3',coverPath:'covers/4.jpg'},
    {songsName:'Closer',filePath:'songs/5.mp3',coverPath:'covers/5.jpg'},
    {songsName:'Save your Tears',filePath:'songs/6.mp3',coverPath:'covers/6.jpg'},
    {songsName:'Cheques',filePath:'songs/7.mp3',coverPath:'covers/7.jpg'},
    {songsName:'Dheere-Dheere',filePath:'songs/8.mp3',coverPath:'covers/8.jpg'},
    {songsName:'Long Drive',filePath:'songs/9.mp3',coverPath:'covers/9.jpg'}
];

let songIndex=0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressBar=document.getElementById('progressBar');
let gif=document.getElementsByClassName('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songName=document.getElementsByClassName('songName')

songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('name')[0].innerText=songs[i].songsName;
    // element.getElementsByClassName('duration')[0].innerText=songs.duration
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('playItemSong')).forEach((element,i)=>{
        element.target.classList.remove('fa-circle-pause');
        element.target.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('playItemSong')).forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id)
        e.target.classList.add('fa-circle-pause');
        e.target.classList.remove('fa-circle-play');
        // let playingSong=new Audio(`songs/${i}.mp3`);
        // playingSong.play();
        audioElement.src=`songs/${songIndex+1}.mp3`;
        songName.innerText=songs[songIndex].songsName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    songName.innerText=songs[songIndex].songsName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    songName.innerText=songs[songIndex].songsName
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})