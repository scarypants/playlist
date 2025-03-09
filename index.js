// Song Data
const songs = [
    {
        title: "Congratulations",
        artist: "Mac Miller",
        file: "Congratulations.mp3",
        cover: "congratulations.png",
        lyrics: [
            { time: 0.2, text: "Where are you?" },
            { time: 1.7, text: "Oh-oh" },
            { time: 8.5, text: "Oh" },
            { time: 11.9, text: "The Divine Feminine, an album by Mac Miller" },
            { time: 16, text: "(The Divine Feminine)" },
            { time: 21, text: "(The Divine Feminine)" },
            { time: 29.8, text: "Am I supposed to? Okay" },
            { time: 34.5, text: "Love, love, love, love, love, love (sex)" },
            { time: 40.5, text: "Love, love, love, love, love, love, love (sex)" },
            { time: 46.5, text: "This sun don't shine when I'm alone" },
            { time: 50.4, text: "I lose my mind and I lose control" },
            { time: 54, text: "I see your eyes look through my soul" },
            { time: 57.8, text: "Don't be surprised this all I know" },
            { time: 61.4, text: "I felt the highs and they felt like you" },
            { time: 65.4, text: "See, a love like mine is too good to be true" },
            { time: 69, text: "And you too divine to just be mine" },
            { time: 73, text: "You remind me of the color blue" },
            { time: 76.6, text: "Girl, I'm so in love with you, yeah" },
            { time: 81.6, text: "Girl, I'm so in love with you" },
            { time: 85.8, text: "Yeah, yeah" },
            { time: 93.3, text: "Yeah, yeah, baby" },
            { time: 95.9, text: "Yeah, yeah" },
            { time: 101, text: "Um, well" },
            { time: 105, text: "Baby, you were everything I ever wanted" },
            { time: 107.8, text: "Bought a wedding ring it's in my pocket" },
            { time: 109.7, text: "Planned to ask the other day, knew you'd run away" },
            { time: 111.9, text: "So I guess I just forgot it" },
            { time: 113.5, text: "Remember when you went away to college?" },
            { time: 115.3, text: "I was on the phone, we end up talkin'" },
            { time: 117, text: "Past, present, future, all the gossip, goddamn" },
            { time: 120.8, text: "Puppy love ain't what it was, darlin'" },
            { time: 122.9, text: "The feelings that we have were so alarmin'" },
            { time: 124.5, text: "I can make you laugh, I could break the glass" },
            { time: 126.5, text: "If we made it last, it'd be a bargain" },
            { time: 128.3, text: "Mr. Charmin', that is my department" },
            { time: 130.3, text: "You was there before the fancy cars and" },
            { time: 132.3, text: "You was there when I was just a starvin' artist" },
            { time: 134.3, text: "When the car was havin' trouble startin'" },
            { time: 136.7, text: "Now we got our own apartment" },
            { time: 138.5, text: "Same box for the mail" },
            { time: 140.5, text: "Same hamper for the laundry" },
            { time: 142.2, text: "The food in the fridge is stale" },
            { time: 144, text: "And this mornin' you cooked the eggs with the kale" },
            { time: 146.8, text: "I tried to hit it while you was gettin' dressed" },
            { time: 148.8, text: "You said, All you ever think about is sex" },
            { time: 150.6, text: "I'm like, Oh, well, you know me so well" },
            { time: 154.6, text: "And if this what make you late, I swear I won't tell" },
            { time: 158.3, text: "And every time I call your phone, you better pick up your cell" },
            { time: 161.8, text: "I swear to God I'ma freak out if it goes straight to voicemail" },
            { time: 165.8, text: "Well, I'm the jealous type, but I swear that ass is what Heaven's like" },
            { time: 169.3, text: "And when I'm in that pussy, it's a better life" },
            { time: 171.4, text: "That's the only way I'm tryna end the night" },
            { time: 175, text: "That's my only chance, I better get it right" },
            { time: 180.8, text: "Take your time, my baby" },
            { time: 187.8, text: "'Cause I'm waitin' for you, for you" },
            { time: 195.6, text: "I know I make your mind go crazy" },
            { time: 202.8, text: "But it's all waitin' right here for you, for you (ooh, ooh-)" },
            { time: 210.5, text: "You would get close, I would run away" },
            { time: 214.6, text: "All I ever know is the color gray" },
            { time: 219, text: "Your loving ways bring me sunshine" },
            { time: 226.1, text: "I found an angel so divine (so divine)" },
            { time: 230.3, text: "Heaven probably not the same without you (not the same)" },
            { time: 234, text: "But now you're in my world (in my world), in my world" },
            { time: 240.3, text: "♫" }
        ]
    },
    {
        title: "homesick",
        artist: "wave to earth",
        file: "homesick.mp3",
        cover: "homesick.jpg",
        lyrics: [
            { time: 25, text: "In this cold place" },
            { time: 27.5, text: "Where the snow hasn't melted yet" },
            { time: 34.8, text: "Leaves that resemble the cold are growing" },
            { time: 44, text: "My freezing breath frozen memories" },
            { time: 55, text: "Oh, where my house has gone" },
            { time: 57.5, text: "I lost my bearings, oh" },
            { time: 64, text: "Ah, ah" },
            { time: 72, text: "I'm lost in my dreams, oh, ah" },
            { time: 98, text: "I'm lost in my dreams" },
            { time: 105, text: "Erase me from here and set me free" },
            { time: 116, text: "All I wanted was to fly high" },
            { time: 125, text: "I can't believe" },
            { time: 128, text: "My wings are broken" },
            { time: 133, text: "And fell against the sky" },
            { time: 142, text: "Oh, will you please take me home?" },
            { time: 155, text: "A flightless feather" },
            { time: 163, text: "Oh, my freezing breath frozen memories" },
            { time: 176, text: "Fearless behavior" },
            { time: 183, text: "It doesn't exist in me anymore" },
            { time: 194, text: "♫" },
            { time: 236, text: "Erase me from here and set me free" },
            { time: 247, text: "All I wanted was to fly high" },
            { time: 257, text: "I can't believe" },
            { time: 260, text: "My wings are broken" },
            { time: 264, text: "And fell against the sky" },
            { time: 273, text: "Oh, will you please take me home?" },
            { time: 285, text: "oh, oh" },
            { time: 293, text: "♫" }
        ]
    }
]

// Array of selected song's lyrics
let currentLyrics = []

// Using color thief to update lyrics container background
function updateLyricsContainerColor(coverUrl) {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = coverUrl

    img.addEventListener('load', function () {
        const colorThief = new ColorThief()
        const dominantColor = colorThief.getColor(img) // [r, g, b]
        const lyricsContainer = document.getElementById("lyricsContainer")
        lyricsContainer.style.backgroundColor = `rgba(${dominantColor.join(',')}, 0.2)`
    })
}


// Load lyrics by time
function loadLyrics(lyrics) {
    const lyricsContainer = document.getElementById("lyricsContainer")
    lyricsContainer.innerHTML = ""
    lyrics.forEach((line, index) => {
        const lineSec = document.createElement("section")
        lineSec.classList.add("lyricLine")
        lineSec.id = "line-" + index
        lineSec.textContent = line.text
        // Click lyrics to move selected time
        lineSec.addEventListener("click", () => {
            const audio = document.getElementById("audio")
            audio.currentTime = line.time
        })
        lyricsContainer.appendChild(lineSec)
    })
}

// Update lyrics by time
function updateLyrics() {
    const audio = document.getElementById("audio")
    const currentTime = audio.currentTime

    for (let i = 0; i < currentLyrics.length; i++) {
        const currentLine = currentLyrics[i]
        const nextLine = currentLyrics[i + 1] || { time: Infinity }
        const lineElement = document.getElementById("line-" + i)

        if (currentTime >= currentLine.time && currentTime < nextLine.time) {
            lineElement.classList.add("active")
            lineElement.scrollIntoView({ behavior: "smooth", block: "center" })
        } else {
            lineElement.classList.remove("active")
        }
    }
}

// 선택된 음원의 제목과 아티스트 업데이트
function updateSongInfo(song) {
    const songInfoContainer = document.getElementById("songInfo")
    songInfoContainer.innerHTML = `<strong>${song.title} - ${song.artist}</strong>`
}

// 음원 선택 시 실행되는 함수
function onSongSelected(song) {
    const audio = document.getElementById("audio")
    const audioSource = document.getElementById("audioSource")

    audio.pause()
    audio.currentTime = 0
    audioSource.src = "./song/" + song.file // 파일 경로에 맞게 수정
    audio.load()

    currentLyrics = song.lyrics
    loadLyrics(currentLyrics)
    updateSongInfo(song)
    updateLyricsContainerColor("./img/" + song.cover) // 이미지 경로에 맞게 수정

    audio.play()
}

document.addEventListener("DOMContentLoaded", function () {
    loadPlaylist()
    const audio = document.getElementById("audio")
    audio.addEventListener("timeupdate", updateLyrics)
})

// 플레이리스트 로드 함수: 각 음원 항목에 클릭 이벤트 연결
function loadPlaylist() {
    const playlistContainer = document.getElementById("playlist")
    playlistContainer.innerHTML = ""

    songs.forEach((song) => {
        const songItem = document.createElement("div")
        songItem.classList.add("songItem")

        // 앨범 표지 이미지 생성 및 추가
        const img = document.createElement("img")
        img.src = "img/" + song.cover // 경로가 올바른지 확인 (예: "img/congratulations.png")
        img.alt = song.title + " album cover"
        
        // 노래 제목과 아티스트 정보를 담은 div 생성
        const infoDiv = document.createElement("div")
        infoDiv.innerHTML = `<strong>${song.title}</strong><br>${song.artist}`
        infoDiv.style.lineHeight = "1.2"

        // songItem에 이미지와 정보 추가
        songItem.appendChild(img);
        songItem.appendChild(infoDiv)

        // 클릭 이벤트: 음원 선택 및 재생, 가사 로드, 가사 컨테이너 색상 업데이트
        songItem.addEventListener("click", function () {
            onSongSelected(song)
        })

        playlistContainer.appendChild(songItem)
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn")
    const progressContainer = document.getElementById("progressContainer")
    const progressBar = document.getElementById("progressBar")
    const currentTimeEl = document.getElementById("currentTime")
    const durationEl = document.getElementById("duration")

    // 재생/일시정지 버튼 이벤트
    playPauseBtn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play()
            playPauseBtn.textContent = "❚❚" // 일시정지 아이콘
        } else {
            audio.pause()
            playPauseBtn.textContent = "▶" // 재생 아이콘
        }
    })

    // 메타데이터 로드 시 (총 재생 시간)
    audio.addEventListener("loadedmetadata", function () {
        durationEl.textContent = formatTime(audio.duration)
    })

    // 재생 시간 업데이트 시 (진행바 및 현재 시간 업데이트)
    audio.addEventListener("timeupdate", function () {
        const progressPercent = (audio.currentTime / audio.duration) * 100
        progressBar.style.width = progressPercent + "%"
        currentTimeEl.textContent = formatTime(audio.currentTime)
    })

    // 진행바 클릭 시 해당 위치로 이동
    progressContainer.addEventListener("click", function (e) {
        const width = progressContainer.clientWidth
        const clickX = e.offsetX
        const duration = audio.duration
        audio.currentTime = (clickX / width) * duration
    })

    // 시간 포맷 변환 함수 (초 -> m:ss)
    function formatTime(time) {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    }
})
