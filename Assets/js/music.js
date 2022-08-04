const musics = new Audio('Sakura.mp3');

const songs = [
    {
        id:'1',
        songName:`Sakura <br>
        <div class="subtitle">Sakura</div>`,
        poster:"./Assets/img/avatar.jpg"
    },
    {
        id:'2',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'3',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'4',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'5',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'6',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'7',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'8',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'9',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'10',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'11',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'12',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'13',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    },
    {
        id:'14',
        songName:`YumeTo Hazakura<br>
        <div class="subtitle">Hatsune Miku</div>`,
        poster:"./Assets/img/music/YumeToHazakura.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((Element, i)=>{
    Element.getElementsByTagName('img')[0].src = songs[i].poster;
    Element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=> {
    if (musics.paused || musics.currentTime <=0)
    {
        musics.play();
        masterPlay.classList.remove('bx-play-circle');
        masterPlay.classList.add('bx-pause-circle');
        wave.classList.add('active2');
    }
    else
    {
        musics.pause();
        masterPlay.classList.add('bx-play-circle');
        masterPlay.classList.remove('bx-pause-circle');
        wave.classList.remove('active2');
    }
})