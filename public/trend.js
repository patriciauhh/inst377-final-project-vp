function trendapi(){
    fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=04082a95d3d42a143f5505cb89aebba0&format=json')
    .then((result)=> result.json())
    .then((resultjson) => {
        console.log(resultjson)
        const table = document.getElementById("trending-container")
        table.innerHTML=""

        const songhead = document.createElement("th")
        const artisthead = document.createElement("th") 
        const listenerhead = document.createElement("th") 
        const rankname = document.createElement("th") 

        rankname.textContent = "Rank"
        listenerhead.textContent = "Number of Listener"
        artisthead.textContent = "Artist"
        songhead.textContent = "Song"

        table.appendChild(rankname)
        table.appendChild(songhead)
        table.appendChild(artisthead)
        table.appendChild(listenerhead)
        document.getElementById("trending-container2").style.display = 'none'
        for(let i=0; i<10; i++){
            
            musicObject = resultjson.tracks.track[i]
            const rowtable = document.createElement('tr')
            const rank = document.createElement('td')
            rank.className="rank"
            const song = document.createElement('td')
            song.className="song"
            const artist = document.createElement('td')
            artist.className="artist"
            const listener = document.createElement('td')
            listener.className="listener"
    
            //////////////////////////
            rank.innerHTML= i+1
            
            song.innerHTML= ""
            artist.innerHTML= ""
            listener.innerHTML= ""
            //console.log(musicObject)
            ////////////////////////

            song.textContent = musicObject.name
            artist.textContent = musicObject.artist.name
            listener.textContent = musicObject.listeners

    
            rowtable.appendChild(rank)
            rowtable.appendChild(song)
            rowtable.appendChild(artist)
            rowtable.appendChild(listener)

            table.appendChild(rowtable)

            table.style.display = "block"
        }

    })
}

// cursor animation
const cursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (e) => {
  anime({
    targets: cursor,
    left: e.clientX - 10, // center cursor
    top: e.clientY - 10,
    duration: 300,
    easing: "easeOutExpo"
  });
});

document.addEventListener("click", () => {
    anime({
      targets: cursor,
      scale: [1, 2, 1],
      duration: 400,
      easing: "easeOutCubic"
    });
  });
  

function trendartist(){
    fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=04082a95d3d42a143f5505cb89aebba0&format=json')
    .then((result)=>result.json())
    .then((resultjson)=>{
        console.log(resultjson)


        const tables = document.getElementById("trending-container2")
        tables.innerHTML=""

        const songhead = document.createElement("th")
        const artisthead = document.createElement("th") 


        artisthead.textContent = "Artist"
        songhead.textContent = "Song"

        tables.appendChild(songhead)
        tables.appendChild(artisthead)
        document.getElementById("trending-container").style.display='none'
        for(let i =0; i<20;i++){
            artistObject = resultjson.artists.artist[i]

            const rowtable = document.createElement('tr')
            const rank = document.createElement('td')
            const artist = document.createElement('td')
            rank.className = "artrank"
            artist.className = "artist-name"
            //////////////////
            rank.innerHTML = i+1

            artist.innerHTML=""
            //console.log(albumObject)

            artist.textContent = artistObject.name

            //console.log(albumObject)
            //console.log(artistObject.name)

            rowtable.appendChild(rank)
            rowtable.appendChild(artist)

            tables.appendChild(rowtable)

         
            tables.style.display = "block"  

        }


    })
}