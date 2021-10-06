// event handler
const searchBtn = document.getElementById('search-songs').addEventListener('click',function(){
     const searchText = document.getElementById('search-field').value;
     document.getElementById('search-field').value = "";
     const apiUrl = ` https://api.lyrics.ovh/suggest/:${searchText}`;
    //  console.log(apiUrl);
    fetch(apiUrl)
    .then(res=>res.json())
    .then(data=>displaySong (data.data))
     .catch(error => errorMessage('Something  went wrong!! please try again!!'))

})

const displaySong =Songs=>{
    // console.log(Songs);
 const songsContainer = document.getElementById('songs-container');
 document.getElementById('songs-container').innerHTML = '';
  Songs.forEach(song => {
    const songDiv = document.createElement('div');
    
    songDiv.className =  className = "single-result row align-items-center my-3 p-3";
songDiv.innerHTML = `  
                             <div class="col-md-9">
                       <h3 class="lyrics-name">${song.title}</h3>
                       <img  src  = "${song.album.cover}" </br>
                      <p class="author lead">Album by <span>${song.artist.name}</span></p>
                     
                      <audio controls>
                              <source src="${song.preview}" type="audio/ogg">
                              <source src="${song.preview}" type="audio/mpeg">
                            
                     </audio>
                      </div>
                     <div class="col-md-3 text-md-right text-center">
                    <button onclick="GetLyrics('${song.artist.name}','${song.title}')" class="btn btn-success my-4">Get Lyrics</button>

          `
             songsContainer.appendChild(songDiv);  
      });
  
  }
       
// async used 
// const GetLyrics = async  (artist,title)=>{
//          const url =   `https://api.lyrics.ovh/v1/${artist}/${title}`
    
//     const res = await fetch(url)
//     const data = await res.json()
//       displayLyrics(data.lyrics)
// }
const GetLyrics = (artist,title)=>{
     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    //  console.log(url);
     fetch(url)
     .then(res=>res.json())
     .then(data=>displayLyrics(data.lyrics))
}


const displayLyrics = lyrics=>{
    const lyricsDiv = document.getElementById("songs");
    lyricsDiv.innerText = lyrics;
}
const errorMessage=error=>{
     const displayError = document.getElementById("error-message");
     displayError.innerText = error;
}
   


